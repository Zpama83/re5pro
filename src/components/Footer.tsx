import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export const Footer: React.FC = () => (
  <footer style={{ background: "#020d1c", borderTop: "1px solid #1e3a5f", padding: "48px 24px 28px", fontFamily: "'Inter', system-ui, sans-serif", marginTop: 40 }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "space-between", marginBottom: 40 }}>
        {/* Brand */}
        <div style={{ minWidth: 220, maxWidth: 300 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #e9c176, #dab36a)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#412d00", fontSize: 16 }}>R</div>
            <span style={{ fontWeight: 700, color: "#e9c176", fontSize: 17 }}>RE5 Certify Pro</span>
          </div>
          <p style={{ color: "#4a6080", fontSize: 13, lineHeight: 1.65, margin: "0 0 16px" }}>
            Free exam preparation for the FSCA RE5 Representatives Examination and RE1 Key Individuals Examination. Covering all 8 FAIS tasks.
          </p>
          <p style={{ color: "#4a6080", fontSize: 12, margin: 0 }}>Not affiliated with the FSCA.</p>
        </div>

        {/* Links */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 40 }}>
          <div>
            <div style={{ color: "#9fb4d6", fontWeight: 600, fontSize: 13, marginBottom: 14, letterSpacing: 0.5 }}>Practice</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["RE5 Practice Exam", "/"],
                ["RE1 Practice Exam", "/re1"],
                ["RE5 Study Guide", "/study-guide"],
                ["RE5 Task 4 Course", "/course"],
                ["CPD Calculator", "/cpd-calculator"],
              ].map(([label, to]) => (
                <Link key={to} to={to} style={{ color: "#4a6080", textDecoration: "none", fontSize: 13, transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#9fb4d6")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#4a6080")}
                >{label}</Link>
              ))}
            </div>
          </div>

          <div>
            <div style={{ color: "#9fb4d6", fontWeight: 600, fontSize: 13, marginBottom: 14, letterSpacing: 0.5 }}>Resources</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Resource Library", "/resources"],
                ["Community Forum", "/community"],
                ["Blog & Articles", "/blog"],
              ].map(([label, to]) => (
                <Link key={to} to={to} style={{ color: "#4a6080", textDecoration: "none", fontSize: 13 }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#9fb4d6")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#4a6080")}
                >{label}</Link>
              ))}
            </div>
          </div>

          <div>
            <div style={{ color: "#9fb4d6", fontWeight: 600, fontSize: 13, marginBottom: 14, letterSpacing: 0.5 }}>Company</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["About", "/about"],
                ["Contact", "/contact"],
                ["Privacy Policy", "/privacy"],
              ].map(([label, to]) => (
                <Link key={to} to={to} style={{ color: "#4a6080", textDecoration: "none", fontSize: 13 }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#9fb4d6")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#4a6080")}
                >{label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #1e3a5f", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <p style={{ color: "#4a6080", fontSize: 12, margin: 0 }}>
          © {new Date().getFullYear()} RE5 Certify Pro. Content is for educational purposes only and does not constitute financial advice. RE5 and RE1 are examinations of the Financial Sector Conduct Authority (FSCA) of South Africa.
        </p>
        {/* Hidden admin link */}
        <Link
          to="/admin"
          aria-label="Admin"
          title="Admin"
          style={{ opacity: 0.08, color: "#9fb4d6", display: "inline-flex", alignItems: "center" }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.5")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "0.08")}
        >
          <Shield size={14} strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  </footer>
);
