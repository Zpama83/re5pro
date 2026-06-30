import React, { createContext, useContext, useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/* -------------------------------------------------------------------------- */
/*  Feature flags                                                              */
/* -------------------------------------------------------------------------- */

/** Public sign-up is open. Flip to `false` to lock the door. */
const ALLOW_SIGNUP = true;

export type ExamTrack = "RE1" | "RE5";

export interface UserProfile {
  user_id: string;
  email: string;
  exam_track: ExamTrack | null;
  is_revoked: boolean;
  created_at: string;
  updated_at: string;
}

/* -------------------------------------------------------------------------- */
/*  Context                                                                    */
/* -------------------------------------------------------------------------- */

interface ClaudeAuthContextValue {
  session: Session | null;
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const ClaudeAuthContext = createContext<ClaudeAuthContextValue | undefined>(
  undefined,
);

export const useClaudeAuth = (): ClaudeAuthContextValue => {
  const ctx = useContext(ClaudeAuthContext);
  if (!ctx) {
    throw new Error("useClaudeAuth must be used within a <ClaudeAuthProvider>");
  }
  return ctx;
};

/* -------------------------------------------------------------------------- */
/*  Provider                                                                   */
/* -------------------------------------------------------------------------- */

export const ClaudeAuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  // Distinguishes "haven't fetched the profile row yet" from "fetched, no
  // exam_track set" — needed so the track-chooser gate (below) doesn't flash
  // before the profile has actually loaded.
  const [profileLoading, setProfileLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Subscribe first so we never miss an event fired during init.
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    // Then hydrate the current session from storage. With persistSession +
    // storageKey set on the client, this restores a previously logged-in
    // user from localStorage — "remember me" is the default behaviour,
    // there is no separate opt-in checkbox needed.
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Whenever the session changes, fetch the user_profiles row.
  // If the user has been revoked, force a sign-out.
  useEffect(() => {
    if (!session?.user) {
      setProfile(null);
      setProfileLoading(false);
      return;
    }

    let cancelled = false;
    setProfileLoading(true);
    (async () => {
      const { data, error } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("user_id", session.user.id)
        .maybeSingle<UserProfile>();

      if (cancelled) return;

      if (error) {
        // Don't lock the user out for a transient fetch error.
        console.warn("[ClaudeAuth] failed to load user_profiles:", error.message);
        setProfile(null);
        setProfileLoading(false);
        return;
      }

      if (data?.is_revoked) {
        await supabase.auth.signOut();
        toast.error("Your account has been revoked. Contact the administrator.");
        setProfile(null);
        setProfileLoading(false);
        return;
      }

      setProfile(data ?? null);
      setProfileLoading(false);
    })();

    return () => {
      cancelled = true;
    };
  }, [session?.user?.id]);

  const signOut = async () => {
    // Reset the per-session track-redirect flag so the next user gets the
    // appropriate landing page on their first visit to "/".
    try {
      sessionStorage.removeItem("re1-track-redirected");
    } catch {
      // SSR / privacy-mode safety; nothing to do.
    }
    const { error } = await supabase.auth.signOut();
    if (error) toast.error(error.message);
  };

  return (
    <ClaudeAuthContext.Provider
      value={{
        session,
        user: session?.user ?? null,
        profile,
        loading: loading || profileLoading,
        signOut,
      }}
    >
      {children}
    </ClaudeAuthContext.Provider>
  );
};

/* -------------------------------------------------------------------------- */
/*  Gate                                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Renders `children` only when a user is authenticated AND has an exam
 * track on their profile. Otherwise it shows the sign-in/sign-up form, or
 * (for Google sign-ins that skip the track radio buttons) a one-time
 * "choose your track" prompt.
 */
export const ClaudeAuthGate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { session, profile, loading } = useClaudeAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-muted-foreground">
        Loading…
      </div>
    );
  }

  if (!session) {
    return <AuthForm />;
  }

  if (!profile?.exam_track) {
    return <TrackChooser userId={session.user.id} email={session.user.email ?? ""} />;
  }

  return <>{children}</>;
};

/* -------------------------------------------------------------------------- */
/*  Track chooser (post Google sign-in, or any account missing a track)       */
/* -------------------------------------------------------------------------- */

const TrackChooser: React.FC<{ userId: string; email: string }> = ({
  userId,
  email,
}) => {
  const [track, setTrack] = useState<ExamTrack | "">("");
  const [submitting, setSubmitting] = useState(false);
  const { signOut } = useClaudeAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!track) return;
    setSubmitting(true);
    try {
      // The user_profiles row already exists (created by the on-auth-user-
      // created trigger), so this is always an UPDATE, which the RLS policy
      // "Users can update their own profile" permits.
      const { error } = await supabase
        .from("user_profiles")
        .update({ exam_track: track, email })
        .eq("user_id", userId);
      if (error) throw error;
      // No local state update needed — ClaudeAuthProvider's profile fetch
      // re-runs on next session-dependent render; force it by re-fetching.
      window.location.reload();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not save your choice");
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>One last step</CardTitle>
          <CardDescription>Which exam are you preparing for?</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <RadioGroup value={track} onValueChange={(v) => setTrack(v as ExamTrack)} className="gap-2">
              <Label
                htmlFor="chooser-re1"
                className="flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 text-sm hover:bg-accent/40"
              >
                <RadioGroupItem id="chooser-re1" value="RE1" className="mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-semibold">RE1</span> — Key Individual
                  <span className="block text-xs text-muted-foreground">
                    Regulatory Examination for FSP managers / Key Individuals.
                  </span>
                </span>
              </Label>
              <Label
                htmlFor="chooser-re5"
                className="flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 text-sm hover:bg-accent/40"
              >
                <RadioGroupItem id="chooser-re5" value="RE5" className="mt-0.5" />
                <span className="leading-relaxed">
                  <span className="font-semibold">RE5</span> — Representative
                  <span className="block text-xs text-muted-foreground">
                    Regulatory Examination for client-facing representatives.
                  </span>
                </span>
              </Label>
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button type="submit" className="w-full" disabled={submitting || !track}>
              {submitting ? "Saving…" : "Continue"}
            </Button>
            <button
              type="button"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  Sign-in / Sign-up form                                                     */
/* -------------------------------------------------------------------------- */

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z" />
    <path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29A11.95 11.95 0 0 0 0 12c0 1.93.46 3.76 1.29 5.38l3.98-3.09z" />
    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
  </svg>
);

const AuthForm: React.FC = () => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [examTrack, setExamTrack] = useState<ExamTrack | "">("");
  const [submitting, setSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (mode === "signin" || !ALLOW_SIGNUP) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      } else {
        if (!examTrack) {
          throw new Error("Please choose which exam you are preparing for.");
        }
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { exam_track: examTrack } },
        });
        if (error) throw error;

        // Auto sign-in immediately after signup.
        // Works when email confirmation is disabled in Supabase
        // (Auth → Providers → Email → "Confirm email" OFF).
        // If confirmation is still on, signInWithPassword returns
        // "Email not confirmed" and we fall through to the inbox prompt.
        const { error: signInErr } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInErr) {
          toast.success(
            "Account created! Check your inbox to confirm your email, then sign in.",
          );
        }
        // If signInErr is null the onAuthStateChange listener fires
        // automatically and the gate lets them through — no extra toast needed.
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogle = async () => {
    setGoogleLoading(true);
    try {
      // Full-page redirect to Google, then back to this same URL.
      // detectSessionInUrl (set on the client) picks up the returned
      // session automatically — no callback route needed.
      // Requires the Google provider to be enabled in Supabase:
      // Authentication → Providers → Google (Client ID + Secret from
      // Google Cloud Console, with this Supabase project's callback URL
      // added as an authorised redirect URI).
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: window.location.origin },
      });
      if (error) throw error;
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Google sign-in failed");
      setGoogleLoading(false);
    }
    // On success the browser navigates away to Google, so no need to reset
    // googleLoading in the happy path.
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>
            {mode === "signin" ? "Sign in" : "Create an account"}
          </CardTitle>
          <CardDescription>
            {mode === "signin"
              ? "Welcome back to RE5 Pro."
              : "Sign up to access RE5 Pro."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pb-0">
          <Button
            type="button"
            variant="outline"
            className="w-full gap-2"
            disabled={googleLoading}
            onClick={handleGoogle}
          >
            <GoogleIcon />
            {googleLoading ? "Redirecting…" : "Continue with Google"}
          </Button>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            or use email
            <span className="h-px flex-1 bg-border" />
          </div>
        </CardContent>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete={
                  mode === "signin" ? "current-password" : "new-password"
                }
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {mode === "signup" && (
              <div className="space-y-2">
                <Label>Which exam are you preparing for?</Label>
                <RadioGroup
                  value={examTrack}
                  onValueChange={(v) => setExamTrack(v as ExamTrack)}
                  className="gap-2"
                >
                  <Label
                    htmlFor="track-re1"
                    className="flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 text-sm hover:bg-accent/40"
                  >
                    <RadioGroupItem id="track-re1" value="RE1" className="mt-0.5" />
                    <span className="leading-relaxed">
                      <span className="font-semibold">RE1</span> — Key Individual
                      <span className="block text-xs text-muted-foreground">
                        Regulatory Examination for FSP managers / Key Individuals.
                      </span>
                    </span>
                  </Label>
                  <Label
                    htmlFor="track-re5"
                    className="flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 text-sm hover:bg-accent/40"
                  >
                    <RadioGroupItem id="track-re5" value="RE5" className="mt-0.5" />
                    <span className="leading-relaxed">
                      <span className="font-semibold">RE5</span> — Representative
                      <span className="block text-xs text-muted-foreground">
                        Regulatory Examination for client-facing representatives.
                      </span>
                    </span>
                  </Label>
                </RadioGroup>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting
                ? "Please wait…"
                : mode === "signin"
                  ? "Sign in"
                  : "Sign up"}
            </Button>
            {ALLOW_SIGNUP && (
              <button
                type="button"
                className="text-sm text-muted-foreground hover:text-foreground"
                onClick={() =>
                  setMode((m) => (m === "signin" ? "signup" : "signin"))
                }
              >
                {mode === "signin"
                  ? "Need an account? Sign up"
                  : "Already have an account? Sign in"}
              </button>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
