import { useClaudeAuth } from "@/ClaudeAuth";

/**
 * Hardcoded admin allowlist. To add/remove an admin:
 *   1. Update this list.
 *   2. Update the matching email check in
 *      `supabase/migrations/user_profiles.sql` (admin RLS policies).
 *   3. Re-apply the migration so the new admin can read/write user_profiles.
 */
export const ADMIN_EMAILS = ["lungi09@gmail.com"] as const;

export const isAdminEmail = (email: string | null | undefined): boolean =>
  !!email && ADMIN_EMAILS.includes(email.toLowerCase() as (typeof ADMIN_EMAILS)[number]);

export const useIsAdmin = (): boolean => {
  const { user } = useClaudeAuth();
  return isAdminEmail(user?.email ?? null);
};
