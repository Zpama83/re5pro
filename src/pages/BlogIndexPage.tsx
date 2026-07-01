import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

const categoryColours: Record<string, string> = {
  "Exam Prep": "#4edea3",
  "Regulatory Guidance": "#e9c176",
  "Legislation": "#9fb4d6",
  "Conduct": "#c084fc",
  "Compliance": "#fb923c",
};

export default function BlogIndexPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#031427", color: "#d3e4fe", fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Nav */}
      <nav style={{ background: "#031427", borderBottom: "1px solid #1e3a5f", position: "sticky", top: 0, zIndex: 50, padding: "0 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #e9c176, #dab36a)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#412d00", fontSize: 16 }}>R</div>
            <span style={{ fontWeight: 700, color: "#e9c176", fontSize: 18 }}>RE5 Certify Pro</span>
          </Link>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <Link to="/" style={{ color: "#9fb4d6", textDecoration: "none", fontSize: 14 }}>Practice Exam</Link>
            <Link to="/study-guide" style={{ color: "#9fb4d6", textDecoration: "none", fontSize: 14 }}>Study Guide</Link>
            <Link to="/resources" style={{ color: "#9fb4d6", textDecoration: "none", fontSize: 14 }}>Resources</Link>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ color: "#e9c176", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>RE5 & RE1 Knowledge Hub</p>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: "#d3e4fe", margin: "0 0 16px", lineHeight: 1.2 }}>Study Articles & Guides</h1>
          <p style={{ color: "#9fb4d6", fontSize: 17, maxWidth: 600, lineHeight: 1.6, margin: 0 }}>
            In-depth articles on FAIS, FICA, TCF, RE5 exam strategy, and South African financial regulation — written by practitioners, for exam candidates.
          </p>
        </div>

        {/* Article grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {blogPosts.map(post => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article style={{
                background: "rgba(16,32,52,0.7)",
                border: "1px solid #1e3a5f",
                borderRadius: 12,
                padding: "28px 32px",
                transition: "border-color 0.2s, background 0.2s",
                cursor: "pointer",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#e9c176";
                  (e.currentTarget as HTMLElement).style.background = "rgba(16,32,52,0.95)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1e3a5f";
                  (e.currentTarget as HTMLElement).style.background = "rgba(16,32,52,0.7)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase",
                    color: categoryColours[post.category] ?? "#9fb4d6",
                    background: `${categoryColours[post.category] ?? "#9fb4d6"}15`,
                    border: `1px solid ${categoryColours[post.category] ?? "#9fb4d6"}30`,
                    borderRadius: 4, padding: "3px 8px"
                  }}>{post.category}</span>
                  <span style={{ color: "#4a6080", fontSize: 13 }}>{post.readTime}</span>
                  <span style={{ color: "#4a6080", fontSize: 13 }}>·</span>
                  <span style={{ color: "#4a6080", fontSize: 13 }}>{new Date(post.date).toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}</span>
                </div>
                <h2 style={{ fontSize: 20, fontWeight: 600, color: "#d3e4fe", margin: "0 0 10px", lineHeight: 1.35 }}>{post.title}</h2>
                <p style={{ color: "#9fb4d6", fontSize: 15, lineHeight: 1.6, margin: 0 }}>{post.description}</p>
                <div style={{ marginTop: 16, color: "#e9c176", fontSize: 14, fontWeight: 600 }}>Read article →</div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 64, background: "rgba(233,193,118,0.06)", border: "1px solid rgba(233,193,118,0.2)", borderRadius: 12, padding: "32px", textAlign: "center" }}>
          <h3 style={{ fontSize: 22, fontWeight: 600, color: "#e9c176", margin: "0 0 12px" }}>Ready to practise?</h3>
          <p style={{ color: "#9fb4d6", fontSize: 15, margin: "0 0 24px" }}>325 exam-grade questions across all 8 FAIS tasks, with full explanations. Free to use.</p>
          <Link to="/" style={{ background: "linear-gradient(135deg, #e9c176, #dab36a)", color: "#412d00", padding: "14px 32px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block" }}>Start Practice Exam</Link>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer style={{ background: "#020d1c", borderTop: "1px solid #1e3a5f", padding: "40px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "space-between" }}>
        <div>
          <div style={{ fontWeight: 700, color: "#e9c176", fontSize: 16, marginBottom: 8 }}>RE5 Certify Pro</div>
          <p style={{ color: "#4a6080", fontSize: 13, maxWidth: 280, lineHeight: 1.6, margin: 0 }}>South Africa's free RE5 and RE1 exam preparation platform for FAIS-regulated financial advisers.</p>
        </div>
        <div style={{ display: "flex", gap: 48 }}>
          <div>
            <div style={{ color: "#9fb4d6", fontWeight: 600, fontSize: 13, marginBottom: 12 }}>Platform</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[["Practice Exam", "/"], ["RE1 Practice", "/re1"], ["Study Guide", "/study-guide"], ["Resources", "/resources"], ["CPD Calculator", "/cpd-calculator"]].map(([label, to]) => (
                <Link key={to} to={to} style={{ color: "#4a6080", textDecoration: "none", fontSize: 13 }}>{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ color: "#9fb4d6", fontWeight: 600, fontSize: 13, marginBottom: 12 }}>Info</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[["Blog", "/blog"], ["About", "/about"], ["Contact", "/contact"], ["Privacy Policy", "/privacy"]].map(([label, to]) => (
                <Link key={to} to={to} style={{ color: "#4a6080", textDecoration: "none", fontSize: 13 }}>{label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 900, margin: "24px auto 0", borderTop: "1px solid #1e3a5f", paddingTop: 20, color: "#4a6080", fontSize: 12 }}>
        © {new Date().getFullYear()} RE5 Certify Pro. Content is for educational purposes only and does not constitute financial advice. Not affiliated with the FSCA.
      </div>
    </footer>
  );
}
