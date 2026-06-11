import { useEffect, useMemo, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  Loader2,
  ShieldOff,
  ShieldCheck,
  Users,
  UserPlus,
  Mail,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useClaudeAuth, type ExamTrack, type UserProfile } from "@/ClaudeAuth";
import { isAdminEmail, useIsAdmin } from "@/lib/admin";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

/* -------------------------------------------------------------------------- */
/*  AdminPage                                                                  */
/* -------------------------------------------------------------------------- */

const AdminPage = () => {
  const isAdmin = useIsAdmin();
  const { user, loading: authLoading } = useClaudeAuth();

  const [users, setUsers] = useState<UserProfile[] | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isAdmin) return;
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase
        .from("user_profiles")
        .select("*")
        .order("created_at", { ascending: false });

      if (cancelled) return;
      if (error) {
        setError(error.message);
        return;
      }
      setUsers((data ?? []) as UserProfile[]);
      setError(null);
    })();
    return () => {
      cancelled = true;
    };
  }, [isAdmin, refreshKey]);

  // Auth still resolving → don't bounce a logged-in admin to the gate.
  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-muted-foreground">
        Loading…
      </div>
    );
  }

  if (!isAdmin) {
    // Not an admin — either logged in as someone else or not logged in.
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <section className="mb-8 space-y-2">
          <Badge variant="secondary" className="text-xs">
            Admin · {user?.email}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Admin dashboard
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Manage registered users for RE5 Pro. Revoke an account to immediately
            lock it out; restore it to give access back.
          </p>
        </section>

        {error && (
          <div className="mb-6 rounded-xl border border-rose-500/40 bg-rose-500/5 p-4 text-sm text-rose-100">
            <strong>Couldn't load users:</strong> {error}
            <p className="mt-2 text-xs text-rose-200/80">
              Most likely cause: the <code>user_profiles</code> table doesn't
              exist yet, or the admin email check in its RLS policy doesn't
              match this account. Re-apply{" "}
              <code>supabase/migrations/user_profiles.sql</code>.
            </p>
          </div>
        )}

        <StatsRow users={users} />

        <InviteUserCard onInvited={() => setRefreshKey((k) => k + 1)} />

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Users className="h-4 w-4" /> Registered users
            </CardTitle>
          </CardHeader>
          <CardContent>
            {users === null ? (
              <div className="flex items-center gap-2 py-8 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" /> Loading users…
              </div>
            ) : users.length === 0 ? (
              <p className="py-8 text-sm text-muted-foreground">
                No registered users yet.
              </p>
            ) : (
              <UserTable
                users={users}
                currentUserEmail={user?.email ?? null}
                onChange={() => setRefreshKey((k) => k + 1)}
              />
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminPage;

/* -------------------------------------------------------------------------- */
/*  StatsRow                                                                   */
/* -------------------------------------------------------------------------- */

const StatsRow: React.FC<{ users: UserProfile[] | null }> = ({ users }) => {
  const stats = useMemo(() => {
    if (!users) return null;
    const total = users.length;
    const re1 = users.filter((u) => u.exam_track === "RE1").length;
    const re5 = users.filter((u) => u.exam_track === "RE5").length;
    const revoked = users.filter((u) => u.is_revoked).length;
    const recent = users.filter((u) => {
      const ts = Date.parse(u.created_at);
      return Number.isFinite(ts) && Date.now() - ts < 7 * 24 * 60 * 60 * 1000;
    }).length;
    return { total, re1, re5, revoked, recent };
  }, [users]);

  if (!stats) return null;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
      <StatCard label="Total users" value={stats.total} />
      <StatCard label="RE1 track" value={stats.re1} />
      <StatCard label="RE5 track" value={stats.re5} />
      <StatCard
        label="Last 7 days"
        value={stats.recent}
        emphasis={stats.recent > 0}
      />
      <StatCard
        label="Revoked"
        value={stats.revoked}
        emphasis={stats.revoked > 0}
        tone={stats.revoked > 0 ? "warn" : "neutral"}
      />
    </div>
  );
};

const StatCard: React.FC<{
  label: string;
  value: number;
  emphasis?: boolean;
  tone?: "neutral" | "warn";
}> = ({ label, value, emphasis, tone = "neutral" }) => (
  <div
    className={`rounded-xl border bg-card p-4 ${
      emphasis && tone === "warn"
        ? "border-amber-500/40"
        : emphasis
          ? "border-primary/40"
          : "border-border"
    }`}
  >
    <p className="text-xs text-muted-foreground">{label}</p>
    <p className="mt-1 text-2xl font-semibold tabular-nums">{value}</p>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  InviteUserCard                                                             */
/* -------------------------------------------------------------------------- */

const InviteUserCard: React.FC<{ onInvited: () => void }> = ({ onInvited }) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [examTrack, setExamTrack] = useState<ExamTrack>("RE5");
  const [submitting, setSubmitting] = useState(false);

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const redirectTo = `${window.location.origin}/`;
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirectTo,
          shouldCreateUser: true,
          data: { exam_track: examTrack },
        },
      });
      if (error) throw error;
      toast.success(`Magic-link invitation sent to ${email}.`);
      setEmail("");
      setOpen(false);
      onInvited();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Invite failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card className="mt-6">
      <CardHeader className="flex flex-row items-center justify-between gap-4">
        <CardTitle className="flex items-center gap-2 text-base">
          <UserPlus className="h-4 w-4" /> Invite a user
        </CardTitle>
        <Button
          variant={open ? "ghost" : "outline"}
          size="sm"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Cancel" : "Send invite"}
        </Button>
      </CardHeader>
      {open && (
        <CardContent>
          <form
            onSubmit={handleInvite}
            className="grid gap-4 sm:grid-cols-[1fr_auto]"
          >
            <div className="space-y-2">
              <Label htmlFor="invite-email">Email</Label>
              <Input
                id="invite-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="learner@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label>Exam track</Label>
              <RadioGroup
                value={examTrack}
                onValueChange={(v) => setExamTrack(v as ExamTrack)}
                className="flex gap-2"
              >
                <Label
                  htmlFor="invite-re1"
                  className="cursor-pointer rounded border px-3 py-1.5 text-sm"
                >
                  <RadioGroupItem
                    id="invite-re1"
                    value="RE1"
                    className="mr-2 inline-block align-middle"
                  />
                  RE1
                </Label>
                <Label
                  htmlFor="invite-re5"
                  className="cursor-pointer rounded border px-3 py-1.5 text-sm"
                >
                  <RadioGroupItem
                    id="invite-re5"
                    value="RE5"
                    className="mr-2 inline-block align-middle"
                  />
                  RE5
                </Label>
              </RadioGroup>
            </div>
            <Button
              type="submit"
              className="sm:col-span-2"
              disabled={submitting}
            >
              <Mail className="mr-2 h-4 w-4" />
              {submitting ? "Sending…" : "Send magic-link invitation"}
            </Button>
            <p className="sm:col-span-2 text-xs text-muted-foreground">
              The recipient gets a magic link by email. Clicking it signs them
              in and creates their account with the selected exam track. They
              can set a password from the account page afterwards.
            </p>
          </form>
        </CardContent>
      )}
    </Card>
  );
};

/* -------------------------------------------------------------------------- */
/*  UserTable                                                                  */
/* -------------------------------------------------------------------------- */

const UserTable: React.FC<{
  users: UserProfile[];
  currentUserEmail: string | null;
  onChange: () => void;
}> = ({ users, currentUserEmail, onChange }) => {
  const [pendingId, setPendingId] = useState<string | null>(null);

  const toggleRevoked = async (u: UserProfile) => {
    if (isAdminEmail(u.email) && !u.is_revoked) {
      toast.error("Cannot revoke an admin account.");
      return;
    }
    if (u.email === currentUserEmail) {
      toast.error("Cannot revoke yourself while you're signed in.");
      return;
    }
    setPendingId(u.user_id);
    try {
      const { error } = await supabase
        .from("user_profiles")
        .update({
          is_revoked: !u.is_revoked,
          updated_at: new Date().toISOString(),
        })
        .eq("user_id", u.user_id);
      if (error) throw error;
      toast.success(
        u.is_revoked
          ? `${u.email} has been restored.`
          : `${u.email} has been revoked.`,
      );
      onChange();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Update failed");
    } finally {
      setPendingId(null);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-sm">
        <thead>
          <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
            <th className="py-2 pr-4 font-medium">Email</th>
            <th className="py-2 pr-4 font-medium">Track</th>
            <th className="py-2 pr-4 font-medium">Joined</th>
            <th className="py-2 pr-4 font-medium">Status</th>
            <th className="py-2 pr-0 text-right font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => {
            const isSelf = u.email === currentUserEmail;
            const isAdmin = isAdminEmail(u.email);
            const joined = u.created_at
              ? new Date(u.created_at).toLocaleDateString()
              : "—";
            return (
              <tr
                key={u.user_id}
                className="border-b border-border/60 align-middle last:border-b-0"
              >
                <td className="py-3 pr-4">
                  <span className="font-medium">{u.email}</span>
                  {isAdmin && (
                    <Badge variant="secondary" className="ml-2 text-[10px]">
                      ADMIN
                    </Badge>
                  )}
                  {isSelf && !isAdmin && (
                    <Badge variant="outline" className="ml-2 text-[10px]">
                      you
                    </Badge>
                  )}
                </td>
                <td className="py-3 pr-4">
                  {u.exam_track ? (
                    <Badge variant="outline">{u.exam_track}</Badge>
                  ) : (
                    <span className="text-xs text-muted-foreground">—</span>
                  )}
                </td>
                <td className="py-3 pr-4 text-xs text-muted-foreground">
                  {joined}
                </td>
                <td className="py-3 pr-4">
                  {u.is_revoked ? (
                    <Badge className="bg-rose-600 hover:bg-rose-600">
                      Revoked
                    </Badge>
                  ) : (
                    <Badge className="bg-emerald-600 hover:bg-emerald-600">
                      Active
                    </Badge>
                  )}
                </td>
                <td className="py-3 pr-0 text-right">
                  <Button
                    variant={u.is_revoked ? "default" : "outline"}
                    size="sm"
                    disabled={
                      pendingId === u.user_id ||
                      isSelf ||
                      (isAdmin && !u.is_revoked)
                    }
                    onClick={() => toggleRevoked(u)}
                  >
                    {pendingId === u.user_id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : u.is_revoked ? (
                      <>
                        <ShieldCheck className="mr-1.5 h-4 w-4" /> Restore
                      </>
                    ) : (
                      <>
                        <ShieldOff className="mr-1.5 h-4 w-4" /> Revoke
                      </>
                    )}
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  Header                                                                     */
/* -------------------------------------------------------------------------- */

const SiteHeader = () => (
  <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
    <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>
      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        RE5 Pro · Admin
      </span>
    </div>
  </header>
);
