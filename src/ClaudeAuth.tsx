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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Subscribe first so we never miss an event fired during init.
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    // Then hydrate the current session from storage.
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
      return;
    }

    let cancelled = false;
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
        return;
      }

      if (data?.is_revoked) {
        await supabase.auth.signOut();
        toast.error("Your account has been revoked. Contact the administrator.");
        setProfile(null);
        return;
      }

      setProfile(data ?? null);
    })();

    return () => {
      cancelled = true;
    };
  }, [session?.user?.id]);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) toast.error(error.message);
  };

  return (
    <ClaudeAuthContext.Provider
      value={{
        session,
        user: session?.user ?? null,
        profile,
        loading,
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
 * Renders `children` only when a user is authenticated.
 * Otherwise it shows an email/password sign-in & sign-up form.
 */
export const ClaudeAuthGate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { session, loading } = useClaudeAuth();

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

  return <>{children}</>;
};

/* -------------------------------------------------------------------------- */
/*  Sign-in / Sign-up form                                                     */
/* -------------------------------------------------------------------------- */

const AuthForm: React.FC = () => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [examTrack, setExamTrack] = useState<ExamTrack | "">("");
  const [submitting, setSubmitting] = useState(false);

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
        toast.success(
          "Account created. If email confirmation is enabled in Supabase, check your inbox.",
        );
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setSubmitting(false);
    }
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
