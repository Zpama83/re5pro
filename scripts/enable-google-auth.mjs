/**
 * enable-google-auth.mjs
 * ─────────────────────
 * Enables the Google OAuth provider on the RE5 Certify Pro Supabase project
 * via the Supabase Management API — no dashboard click required.
 *
 * PREREQUISITES — set these in your environment (PowerShell or bash) before
 * running:
 *
 *   PowerShell:
 *     $env:SUPABASE_ACCESS_TOKEN = "sbp_xxxxxxxxxxxx"
 *     $env:GOOGLE_CLIENT_ID      = "123456789-xxxx.apps.googleusercontent.com"
 *     $env:GOOGLE_CLIENT_SECRET  = "GOCSPX-xxxxxxxxxxxx"
 *
 *   Bash / Git Bash:
 *     export SUPABASE_ACCESS_TOKEN="sbp_xxxxxxxxxxxx"
 *     export GOOGLE_CLIENT_ID="123456789-xxxx.apps.googleusercontent.com"
 *     export GOOGLE_CLIENT_SECRET="GOCSPX-xxxxxxxxxxxx"
 *
 * GET YOUR TOKENS:
 *   Personal Access Token (SUPABASE_ACCESS_TOKEN):
 *     Supabase Dashboard → Account Settings (bottom-left avatar) → Access Tokens
 *     → Generate new token
 *
 *   Google OAuth credentials (GOOGLE_CLIENT_ID + GOOGLE_CLIENT_SECRET):
 *     Google Cloud Console → APIs & Services → Credentials
 *     → Create OAuth 2.0 Client ID → Web application
 *     Under "Authorised redirect URIs" add:
 *       https://qdkkilaejttswlnzepzg.supabase.co/auth/v1/callback
 *
 * THEN ALSO (in Vercel — so the live site sends users to Google):
 *   No new env vars needed; the redirect is handled by Supabase's own servers,
 *   not by the Vite build.
 *
 * RUN:
 *   node scripts/enable-google-auth.mjs
 */

const PROJECT_REF   = 'qdkkilaejttswlnzepzg';
const MGMT_API_BASE = 'https://api.supabase.com';

/* ── Validate env ──────────────────────────────────────────────────────── */
const ACCESS_TOKEN    = process.env.SUPABASE_ACCESS_TOKEN;
const GOOGLE_ID       = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_SECRET   = process.env.GOOGLE_CLIENT_SECRET;

const missing = [];
if (!ACCESS_TOKEN)  missing.push('SUPABASE_ACCESS_TOKEN');
if (!GOOGLE_ID)     missing.push('GOOGLE_CLIENT_ID');
if (!GOOGLE_SECRET) missing.push('GOOGLE_CLIENT_SECRET');

if (missing.length) {
  console.error('\n❌  Missing required environment variables:\n');
  missing.forEach(v => console.error(`    ${v}`));
  console.error('\nSet them and re-run.  See the file header for instructions.\n');
  process.exit(1);
}

/* ── Current config (read-before-write to confirm we can reach the API) ─ */
console.log(`\nFetching current auth config for project: ${PROJECT_REF} …`);

const getRes = await fetch(
  `${MGMT_API_BASE}/v1/projects/${PROJECT_REF}/config/auth`,
  { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }
);

if (!getRes.ok) {
  const body = await getRes.text();
  console.error(`\n❌  GET config failed (${getRes.status}):\n${body}`);
  process.exit(1);
}

const current = await getRes.json();
console.log(`Current Google provider state: ${current.external_google_enabled ? '✅ already enabled' : '⬜ disabled'}`);

if (current.external_google_enabled) {
  console.log('\nGoogle is already enabled — no changes made.\n');
  process.exit(0);
}

/* ── Enable Google provider ─────────────────────────────────────────────── */
console.log('\nEnabling Google OAuth provider …');

const patchRes = await fetch(
  `${MGMT_API_BASE}/v1/projects/${PROJECT_REF}/config/auth`,
  {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      external_google_enabled:   true,
      external_google_client_id: GOOGLE_ID,
      external_google_secret:    GOOGLE_SECRET,
    }),
  }
);

if (!patchRes.ok) {
  const body = await patchRes.text();
  console.error(`\n❌  PATCH config failed (${patchRes.status}):\n${body}`);
  process.exit(1);
}

const updated = await patchRes.json();

if (updated.external_google_enabled) {
  console.log('\n✅  Google provider is now ENABLED on the Supabase project.');
  console.log(`    Client ID : ${updated.external_google_client_id}`);
  console.log('    Secret    : <stored — not echoed>\n');
  console.log('Next: visit https://re-5-cert-pro.vercel.app and click');
  console.log('"Continue with Google" to verify the flow works end-to-end.\n');
} else {
  console.warn('\n⚠️   PATCH returned 200 but external_google_enabled is still false.');
  console.warn('     Check the response below and try again:\n');
  console.warn(JSON.stringify(updated, null, 2));
  process.exit(1);
}
