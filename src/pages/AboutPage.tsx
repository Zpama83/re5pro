import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#031427", color: "#d3e4fe", fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Nav */}
      <nav style={{ background: "#031427", borderBottom: "1px solid #1e3a5f", position: "sticky", top: 0, zIndex: 50, padding: "0 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #e9c176, #dab36a)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#412d00", fontSize: 16 }}>R</div>
            <span style={{ fontWeight: 700, color: "#e9c176", fontSize: 18 }}>RE5 Certify Pro</span>
          </Link>
          <div style={{ display: "flex", gap: 20 }}>
            <Link to="/" style={{ color: "#9fb4d6", textDecoration: "none", fontSize: 14 }}>Practice Exam</Link>
            <Link to="/blog" style={{ color: "#9fb4d6", textDecoration: "none", fontSize: 14 }}>Blog</Link>
            <Link to="/contact" style={{ color: "#9fb4d6", textDecoration: "none", fontSize: 14 }}>Contact</Link>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "56px 24px 80px" }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ color: "#e9c176", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>About Us</p>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: "#d3e4fe", margin: "0 0 20px", lineHeight: 1.2 }}>Built by South African financial professionals, for South African financial professionals</h1>
          <p style={{ color: "#9fb4d6", fontSize: 18, lineHeight: 1.7, margin: 0 }}>
            RE5 Certify Pro is a free exam preparation platform for the FSCA's Representatives Regulatory Examination (RE5) and the Key Individuals Regulatory Examination (RE1).
          </p>
        </div>

        {/* Mission */}
        <section style={{ background: "rgba(16,32,52,0.7)", border: "1px solid #1e3a5f", borderRadius: 12, padding: "32px", marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e9c176", margin: "0 0 16px" }}>Our Mission</h2>
          <p style={{ color: "#9fb4d6", fontSize: 16, lineHeight: 1.8, margin: "0 0 16px" }}>
            Passing the RE5 and RE1 exams should not require expensive prep courses. Quality study material, realistic practice questions, and clear explanations of South African financial regulation should be accessible to every adviser — whether they work for a major bank or a small independent FSP.
          </p>
          <p style={{ color: "#9fb4d6", fontSize: 16, lineHeight: 1.8, margin: 0 }}>
            RE5 Certify Pro was built to close that gap. Everything on the platform — the 325-question RE5 bank, the 160-question RE1 bank, the study guides, the CPD calculator, and the regulatory articles — is completely free.
          </p>
        </section>

        {/* What we offer */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e9c176", margin: "0 0 20px" }}>What the Platform Offers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {[
              { icon: "❓", title: "325 RE5 Practice Questions", body: "All 8 FAIS tasks. Four Bloom taxonomy levels. Smart mock exam calibrated to the FSCA's published difficulty distribution." },
              { icon: "📘", title: "160 RE1 Practice Questions", body: "All 16 RE1 topic areas. Covers FSP governance, oversight obligations, compliance, and the full regulatory framework." },
              { icon: "📖", title: "Study Guide", body: "12 structured sections covering FAIS, FICA, TCF, products, retirement, tax, POPIA, and exam strategy — with a searchable glossary." },
              { icon: "🎓", title: "RE5 Task 4 Video Course", body: "Detailed lessons on financial products and investment principles — the most technically demanding topic in the RE5." },
              { icon: "🧮", title: "CPD Pro-Rata Calculator", body: "Calculate your exact CPD obligation for the current cycle, including pro-rata calculations for mid-cycle appointments." },
              { icon: "📚", title: "Resource Library", body: "Curated links to official FSCA exam guides, BANKSETA study materials, and key legislation — free and paid." },
            ].map(({ icon, title, body }) => (
              <div key={title} style={{ background: "rgba(16,32,52,0.7)", border: "1px solid #1e3a5f", borderRadius: 10, padding: "20px 22px" }}>
                <div style={{ fontSize: 24, marginBottom: 10 }}>{icon}</div>
                <div style={{ fontWeight: 600, color: "#d3e4fe", fontSize: 15, marginBottom: 8 }}>{title}</div>
                <div style={{ color: "#9fb4d6", fontSize: 14, lineHeight: 1.6 }}>{body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Content quality */}
        <section style={{ background: "rgba(16,32,52,0.7)", border: "1px solid #1e3a5f", borderRadius: 12, padding: "32px", marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e9c176", margin: "0 0 16px" }}>Content Quality</h2>
          <p style={{ color: "#9fb4d6", fontSize: 16, lineHeight: 1.8, margin: "0 0 16px" }}>
            Every question on the platform has been written to reflect the FSCA's four-level cognitive framework — from straightforward recall questions (Level 1) to multi-step scenario analysis (Level 4). Questions reference actual South African legislation: the FAIS Act 37 of 2002, FICA 38 of 2001, the General Code of Conduct (Board Notice 80 of 2003), the Fit and Proper Determination (Board Notice 194 of 2017), the FSR Act 9 of 2017, and POPIA 4 of 2013.
          </p>
          <p style={{ color: "#9fb4d6", fontSize: 16, lineHeight: 1.8, margin: "0 0 16px" }}>
            Key figures and thresholds are kept current — including the FICA cash threshold (R49,999.99), the FAIS Ombud maximum award (R800,000), the correct RE5 pass mark (66%), and the CPD cycle dates (1 June to 31 May).
          </p>
          <p style={{ color: "#9fb4d6", fontSize: 16, lineHeight: 1.8, margin: 0 }}>
            The platform carries a disclaimer that content is educational and not a substitute for legal or compliance advice. Candidates should always verify current FSCA requirements directly.
          </p>
        </section>

        {/* Disclaimer */}
        <section style={{ background: "rgba(255,255,255,0.02)", border: "1px solid #1e3a5f", borderRadius: 10, padding: "24px", marginBottom: 40 }}>
          <h2 style={{ fontSize: 17, fontWeight: 600, color: "#9fb4d6", margin: "0 0 12px" }}>Important Disclaimer</h2>
          <p style={{ color: "#4a6080", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
            RE5 Certify Pro is an independent educational platform. We are not affiliated with, endorsed by, or in any way connected to the Financial Sector Conduct Authority (FSCA), the Financial Intelligence Centre (FIC), the South African Reserve Bank (SARB), or any other government body. Content on this platform is for educational preparation purposes only and does not constitute financial, legal, or regulatory advice.
          </p>
        </section>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <Link to="/" style={{ background: "linear-gradient(135deg, #e9c176, #dab36a)", color: "#412d00", padding: "14px 32px", borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-block", marginRight: 12 }}>Start Practising — Free</Link>
          <Link to="/contact" style={{ background: "transparent", color: "#e9c176", border: "1px solid rgba(233,193,118,0.4)", padding: "14px 32px", borderRadius: 8, fontWeight: 600, fontSize: 16, textDecoration: "none", display: "inline-block" }}>Get in Touch</Link>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: "#020d1c", borderTop: "1px solid #1e3a5f", padding: "40px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "space-between" }}>
          <div>
            <div style={{ fontWeight: 700, color: "#e9c176", fontSize: 16, marginBottom: 8 }}>RE5 Certify Pro</div>
            <p style={{ color: "#4a6080", fontSize: 13, maxWidth: 280, lineHeight: 1.6, margin: 0 }}>South Africa's free RE5 and RE1 exam prep platform.</p>
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
