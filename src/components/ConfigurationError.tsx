/**
 * Shown instead of the app when required environment variables are missing.
 *
 * Without this the site fails as a blank white page: the Supabase client
 * throws while its module is being evaluated, which happens before React
 * renders, so no error boundary can catch it. One mistyped variable in the
 * Vercel dashboard took the whole platform down with no visible cause.
 */
interface Props {
  missing: string[];
}

export function ConfigurationError({ missing }: Props) {
  return (
    <div
      role="alert"
      style={{
        background: "#031427",
        color: "#d3e4fe",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 560,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(212,175,55,0.25)",
          borderRadius: 16,
          padding: 32,
        }}
      >
        <h1 style={{ fontSize: 22, margin: "0 0 12px", color: "#f5f7ff" }}>
          RE5 Certify Pro is temporarily unavailable
        </h1>
        <p style={{ color: "#bfc9e1", lineHeight: 1.7, margin: "0 0 20px", fontSize: 15 }}>
          The site is misconfigured and cannot start. Nothing you did caused this, and
          no study progress has been lost — it is stored in your own browser. Please
          try again shortly.
        </p>
        <p style={{ color: "#8a94ad", lineHeight: 1.7, margin: "0 0 10px", fontSize: 13 }}>
          For whoever maintains this deployment: the following environment
          {missing.length === 1 ? " variable is" : " variables are"} missing or empty.
          Set {missing.length === 1 ? "it" : "them"} in the hosting project&apos;s
          settings and redeploy. See <code>.env.example</code> and{" "}
          <code>docs/DEPLOY-VERCEL.md</code>.
        </p>
        <ul
          style={{
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 8,
            padding: "12px 12px 12px 32px",
            margin: 0,
            fontSize: 13,
            color: "#ffb4ab",
          }}
        >
          {missing.map((name) => (
            <li key={name} style={{ marginBottom: 4 }}>
              <code>{name}</code>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
