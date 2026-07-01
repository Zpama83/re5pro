import { useParams, Link, Navigate } from "react-router-dom";
import { getBlogPost, blogPosts } from "../data/blogPosts";

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(<h2 key={i} style={{ fontSize: 22, fontWeight: 700, color: "#e9c176", margin: "36px 0 14px", lineHeight: 1.3 }}>{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={i} style={{ fontSize: 18, fontWeight: 600, color: "#d3e4fe", margin: "24px 0 10px" }}>{line.slice(4)}</h3>);
    } else if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
      elements.push(<p key={i} style={{ fontWeight: 600, color: "#d3e4fe", margin: "16px 0 6px", fontSize: 16 }}>{line.slice(2, -2)}</p>);
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      const items: string[] = [line.slice(2)];
      while (i + 1 < lines.length && (lines[i + 1].startsWith("- ") || lines[i + 1].startsWith("* "))) {
        i++;
        items.push(lines[i].slice(2));
      }
      elements.push(
        <ul key={i} style={{ margin: "12px 0", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
          {items.map((item, j) => <li key={j} style={{ color: "#9fb4d6", fontSize: 16, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: boldify(item) }} />)}
        </ul>
      );
    } else if (/^\d+\. /.test(line)) {
      const items: string[] = [line.replace(/^\d+\. /, "")];
      while (i + 1 < lines.length && /^\d+\. /.test(lines[i + 1])) {
        i++;
        items.push(lines[i].replace(/^\d+\. /, ""));
      }
      elements.push(
        <ol key={i} style={{ margin: "12px 0", paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
          {items.map((item, j) => <li key={j} style={{ color: "#9fb4d6", fontSize: 16, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: boldify(item) }} />)}
        </ol>
      );
    } else if (line.startsWith("|")) {
      // Table
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        if (!lines[i].replace(/[|\-\s]/g, "")) { i++; continue; }
        rows.push(lines[i].split("|").filter((_, idx, arr) => idx > 0 && idx < arr.length - 1).map(c => c.trim()));
        i++;
      }
      if (rows.length > 0) {
        elements.push(
          <div key={i} style={{ overflowX: "auto", margin: "20px 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
              <thead>
                <tr>{rows[0].map((cell, j) => <th key={j} style={{ textAlign: "left", padding: "10px 16px", borderBottom: "2px solid rgba(233,193,118,0.3)", color: "#e9c176", fontWeight: 600 }}>{cell}</th>)}</tr>
              </thead>
              <tbody>
                {rows.slice(1).map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => <td key={ci} style={{ padding: "10px 16px", borderBottom: "1px solid #1e3a5f", color: "#9fb4d6", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: boldify(cell) }} />)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    } else if (line.trim() === "") {
      // skip blank
    } else {
      elements.push(<p key={i} style={{ color: "#9fb4d6", fontSize: 16, lineHeight: 1.8, margin: "12px 0" }} dangerouslySetInnerHTML={{ __html: boldify(line) }} />);
    }
    i++;
  }

  return elements;
}

function boldify(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#d3e4fe;font-weight:600">$1</strong>');
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug ?? "");

  if (!post) return <Navigate to="/blog" replace />;

  const others = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

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
            <Link to="/blog" style={{ color: "#9fb4d6", textDecoration: "none", fontSize: 14 }}>← All Articles</Link>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 32, fontSize: 13, color: "#4a6080" }}>
          <Link to="/" style={{ color: "#4a6080", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <Link to="/blog" style={{ color: "#4a6080", textDecoration: "none" }}>Blog</Link>
          <span>›</span>
          <span style={{ color: "#9fb4d6" }}>{post.title}</span>
        </div>

        {/* Article header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#e9c176", background: "rgba(233,193,118,0.1)", border: "1px solid rgba(233,193,118,0.25)", borderRadius: 4, padding: "3px 8px" }}>{post.category}</span>
            <span style={{ color: "#4a6080", fontSize: 13 }}>{post.readTime}</span>
            <span style={{ color: "#4a6080", fontSize: 13 }}>·</span>
            <span style={{ color: "#4a6080", fontSize: 13 }}>{new Date(post.date).toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#d3e4fe", margin: "0 0 16px", lineHeight: 1.25 }}>{post.title}</h1>
          <p style={{ fontSize: 18, color: "#9fb4d6", lineHeight: 1.6, margin: 0 }}>{post.description}</p>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #1e3a5f", margin: "0 0 40px" }} />

        {/* Article body */}
        <article>
          {renderMarkdown(post.content)}
        </article>

        {/* Disclaimer */}
        <div style={{ margin: "48px 0 0", background: "rgba(255,255,255,0.03)", border: "1px solid #1e3a5f", borderRadius: 10, padding: "20px 24px" }}>
          <p style={{ color: "#4a6080", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "#9fb4d6" }}>Disclaimer:</strong> This article is for educational purposes only and does not constitute financial, legal, or regulatory advice. While we strive for accuracy, financial regulation changes frequently. Always verify information with the FSCA or a qualified compliance professional before relying on it.
          </p>
        </div>

        {/* Practice CTA */}
        <div style={{ margin: "40px 0", background: "rgba(233,193,118,0.06)", border: "1px solid rgba(233,193,118,0.2)", borderRadius: 12, padding: "28px 32px", textAlign: "center" }}>
          <h3 style={{ fontSize: 20, fontWeight: 600, color: "#e9c176", margin: "0 0 10px" }}>Test your knowledge</h3>
          <p style={{ color: "#9fb4d6", fontSize: 15, margin: "0 0 20px" }}>325 exam-grade RE5 questions with full explanations — free.</p>
          <Link to="/" style={{ background: "linear-gradient(135deg, #e9c176, #dab36a)", color: "#412d00", padding: "12px 28px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block" }}>Start Practice Exam</Link>
        </div>

        {/* Related articles */}
        {others.length > 0 && (
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#d3e4fe", margin: "0 0 20px" }}>More articles</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {others.map(p => (
                <Link key={p.slug} to={`/blog/${p.slug}`} style={{ textDecoration: "none", background: "rgba(16,32,52,0.7)", border: "1px solid #1e3a5f", borderRadius: 10, padding: "16px 20px", display: "block" }}>
                  <div style={{ fontSize: 13, color: "#4a6080", marginBottom: 6 }}>{p.category} · {p.readTime}</div>
                  <div style={{ color: "#d3e4fe", fontWeight: 600, fontSize: 16 }}>{p.title}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{ background: "#020d1c", borderTop: "1px solid #1e3a5f", padding: "40px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "space-between" }}>
          <div>
            <div style={{ fontWeight: 700, color: "#e9c176", fontSize: 16, marginBottom: 8 }}>RE5 Certify Pro</div>
            <p style={{ color: "#4a6080", fontSize: 13, maxWidth: 280, lineHeight: 1.6, margin: 0 }}>South Africa's free RE5 and RE1 exam preparation platform.</p>
          </div>
          <div style={{ display: "flex", gap: 48 }}>
            <div>
              <div style={{ color: "#9fb4d6", fontWeight: 600, fontSize: 13, marginBottom: 12 }}>Platform</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[["Practice Exam", "/"], ["RE1 Practice", "/re1"], ["Study Guide", "/study-guide"], ["Resources", "/resources"]].map(([label, to]) => (
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
          © {new Date().getFullYear()} RE5 Certify Pro. Educational purposes only. Not affiliated with the FSCA.
        </div>
      </footer>
    </div>
  );
}
