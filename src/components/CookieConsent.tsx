import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CONSENT_KEY = "re5pro-cookie-consent";

type ConsentState = "accepted" | "declined" | null;

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentState;
    if (!stored) {
      // Slight delay so the banner doesn't flash immediately on load
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop on mobile when detail is open */}
      {showDetail && (
        <div
          onClick={() => setShowDetail(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 9998 }}
        />
      )}

      {/* Main banner */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "#0a1f35",
        borderTop: "1px solid #1e3a5f",
        padding: "20px 24px",
        boxShadow: "0 -8px 32px rgba(0,0,0,0.5)",
        fontFamily: "'Inter', system-ui, sans-serif",
        animation: "slideUp 0.3s ease",
      }}>
        <style>{`
          @keyframes slideUp {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}</style>

        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Collapsed view */}
          {!showDetail && (
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, justifyContent: "space-between" }}>
              <div style={{ flex: 1, minWidth: 260 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 18 }}>🍪</span>
                  <span style={{ fontWeight: 700, color: "#d3e4fe", fontSize: 15 }}>We use cookies</span>
                </div>
                <p style={{ color: "#9fb4d6", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                  We use cookies to serve ads (Google AdSense), analyse traffic, and improve your experience. You can accept all, decline non-essential cookies, or{" "}
                  <button onClick={() => setShowDetail(true)} style={{ background: "none", border: "none", color: "#e9c176", cursor: "pointer", fontSize: 13, padding: 0, textDecoration: "underline" }}>
                    customise your preferences
                  </button>. See our{" "}
                  <Link to="/cookie-policy" style={{ color: "#e9c176", fontSize: 13 }}>Cookie Policy</Link>{" "}
                  and{" "}
                  <Link to="/privacy" style={{ color: "#e9c176", fontSize: 13 }}>Privacy Policy</Link>.
                </p>
              </div>

              <div style={{ display: "flex", gap: 10, flexShrink: 0, flexWrap: "wrap" }}>
                <button
                  onClick={decline}
                  style={{ background: "transparent", border: "1px solid #1e3a5f", color: "#9fb4d6", padding: "10px 20px", borderRadius: 8, cursor: "pointer", fontSize: 14, fontFamily: "inherit" }}
                >
                  Decline non-essential
                </button>
                <button
                  onClick={accept}
                  style={{ background: "linear-gradient(135deg, #e9c176, #dab36a)", color: "#412d00", padding: "10px 24px", borderRadius: 8, cursor: "pointer", fontSize: 14, fontWeight: 700, border: "none", fontFamily: "inherit" }}
                >
                  Accept all cookies
                </button>
              </div>
            </div>
          )}

          {/* Detailed view */}
          {showDetail && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <span style={{ fontWeight: 700, color: "#d3e4fe", fontSize: 16 }}>Cookie Preferences</span>
                <button onClick={() => setShowDetail(false)} style={{ background: "none", border: "none", color: "#9fb4d6", cursor: "pointer", fontSize: 20, lineHeight: 1 }}>×</button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                {[
                  {
                    title: "Strictly Necessary",
                    desc: "Required for the site to work. Cannot be disabled.",
                    locked: true,
                  },
                  {
                    title: "Analytics (Google Analytics)",
                    desc: "Helps us understand how visitors use the site. All data is anonymised.",
                    locked: false,
                  },
                  {
                    title: "Advertising (Google AdSense)",
                    desc: "Used to display relevant ads. May track your browsing across other sites.",
                    locked: false,
                  },
                ].map(({ title, desc, locked }) => (
                  <div key={title} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, background: "rgba(255,255,255,0.03)", border: "1px solid #1e3a5f", borderRadius: 8, padding: "12px 16px" }}>
                    <div>
                      <div style={{ fontWeight: 600, color: "#d3e4fe", fontSize: 14, marginBottom: 3 }}>{title}</div>
                      <div style={{ color: "#4a6080", fontSize: 12 }}>{desc}</div>
                    </div>
                    {locked ? (
                      <span style={{ fontSize: 12, color: "#4edea3", fontWeight: 600, background: "rgba(78,222,163,0.1)", border: "1px solid rgba(78,222,163,0.2)", borderRadius: 4, padding: "4px 10px", whiteSpace: "nowrap" }}>
                        Always on
                      </span>
                    ) : (
                      <span style={{ fontSize: 12, color: "#4a6080", fontStyle: "italic", whiteSpace: "nowrap" }}>
                        Set below
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <p style={{ color: "#4a6080", fontSize: 12, margin: "0 0 16px" }}>
                Choosing "Accept all" enables analytics and advertising cookies. "Decline non-essential" disables analytics and advertising — only strictly necessary cookies will be set.
              </p>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button
                  onClick={decline}
                  style={{ background: "transparent", border: "1px solid #1e3a5f", color: "#9fb4d6", padding: "10px 20px", borderRadius: 8, cursor: "pointer", fontSize: 14, fontFamily: "inherit" }}
                >
                  Decline non-essential
                </button>
                <button
                  onClick={accept}
                  style={{ background: "linear-gradient(135deg, #e9c176, #dab36a)", color: "#412d00", padding: "10px 24px", borderRadius: 8, cursor: "pointer", fontSize: 14, fontWeight: 700, border: "none", fontFamily: "inherit" }}
                >
                  Accept all cookies
                </button>
                <Link to="/cookie-policy" style={{ color: "#e9c176", textDecoration: "none", fontSize: 13, display: "flex", alignItems: "center", marginLeft: 8 }}>
                  Full Cookie Policy →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
