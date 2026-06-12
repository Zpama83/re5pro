# Deploying RE5CertPro to Vercel

This is a Vite + React SPA with a Supabase backend. Deployment to Vercel
is the standard one-time GitHub import — no CLI required.

## First-time setup (60 seconds, browser-only)

1. Sign into https://vercel.com with the GitHub account that owns this
   repo (i.e. the **Manginza** account that owns
   `Manginza/RE5CertPro`).
2. Open https://vercel.com/new and click **Import** next to
   `Manginza/RE5CertPro`.
3. Vercel auto-detects this as a **Vite** project. Don't override the
   defaults — Build Command, Output Directory, and Install Command are
   all correct as-is. The repo already contains `vercel.json` with the
   SPA rewrite rule so client-side routes (`/admin`, `/re1/course`,
   `/cpd-calculator`, etc.) don't 404 on direct visit.
4. Under **Environment Variables**, add the three Supabase variables
   listed in `.env.example`:

   | Name | Value | Environment |
   |---|---|---|
   | `VITE_SUPABASE_PROJECT_ID` | `qdkkilaejttswlnzepzg` | Production, Preview, Development |
   | `VITE_SUPABASE_URL` | `https://qdkkilaejttswlnzepzg.supabase.co` | Production, Preview, Development |
   | `VITE_SUPABASE_PUBLISHABLE_KEY` | (anon key from your local `.env`) | Production, Preview, Development |

   The anon key is **safe** in client bundles. Never paste the
   service-role key here.

5. Click **Deploy**. First build takes ~1–2 minutes.

## After the first deploy

- **Auto-deploys are on by default.** Every push to `main` triggers a
  production build. Every push to a feature branch triggers a preview
  deployment with its own URL.
- **Note: `origin` mirrors to two GitHub remotes.** Configured locally so
  `git push origin HEAD:main` lands at both `Manginza/RE5CertPro` AND
  `Zpama83/re5pro` in one command (see `git remote -v`). Vercel only
  watches whichever single remote you imported — the mirror is for
  redundancy, not for parallel deploys.
- You'll get a `*.vercel.app` URL immediately. To use a custom domain
  (e.g. `re5certpro.co.za`), go to Project Settings → Domains → Add.
  Vercel will give you the DNS records to point at your registrar.

## Supabase auth redirect URLs

Once you have a public URL (either the `*.vercel.app` one or your
custom domain), add it to Supabase's allowed redirect list:

1. Open https://app.supabase.com/project/qdkkilaejttswlnzepzg/auth/url-configuration
2. **Site URL**: set to your production URL.
3. **Redirect URLs**: add your production URL and any preview-deployment
   pattern you want to permit. For Vercel previews you'll need
   `https://*-manginza.vercel.app` or similar — check the exact
   shape Vercel gives your preview deployments.

Without this step the email-magic-link "Invite user" flow from
`/admin` and any password-reset flows will redirect to the wrong host.

## Common gotchas

- **SPA route 404s in preview deployments only.** Usually means
  `vercel.json` wasn't deployed with that revision. Confirm the rewrite
  rule is present and re-deploy.
- **Auth works locally but not in production.** Almost always a Supabase
  Site URL / Redirect URLs config issue. Re-check step 2 above.
- **Vercel build fails on a fresh import.** Usually a missing env var
  — Vercel won't infer them from `.env` (gitignored, as it should be).
  Re-check the env vars in Project Settings.

## If you want to use the Vercel CLI later

```bash
npm install -g vercel
vercel login
cd "C:\Users\Administrator\Desktop\RE5 code folder"
vercel link        # link this folder to the Vercel project
vercel --prod      # deploy
```

This gives you `vercel deploy` from the terminal but isn't required —
the GitHub auto-deploy covers every normal workflow.
