import { Link } from "react-router-dom";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Open default mail client with pre-filled content
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    const subject = encodeURIComponent(form.subject || "RE5 Certify Pro Enquiry");
    window.location.href = `mailto:lungi09@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

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
            <Link to="/about" style={{ color: "#9fb4d6", textDecoration: "none", fontSize: 14 }}>About</Link>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "56px 24px 80px" }}>
        <div style={{ marginBottom: 40 }}>
          <p style={{ color: "#e9c176", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Get in Touch</p>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: "#d3e4fe", margin: "0 0 16px" }}>Contact Us</h1>
          <p style={{ color: "#9fb4d6", fontSize: 17, lineHeight: 1.7, margin: 0 }}>
            Have a question about the platform, found an error in our content, or want to suggest an improvement? We would love to hear from you.
          </p>
        </div>

        {/* Contact info cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 40 }}>
          {[
            { icon: "✉️", label: "Email", value: "lungi09@gmail.com", link: "mailto:lungi09@gmail.com" },
            { icon: "🌐", label: "Website", value: "www.re5-prep.co.za", link: "https://www.re5-prep.co.za" },
            { icon: "📍", label: "Location", value: "South Africa", link: null },
          ].map(({ icon, label, value, link }) => (
            <div key={label} style={{ background: "rgba(16,32,52,0.7)", border: "1px solid #1e3a5f", borderRadius: 10, padding: "20px 22px" }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>
              <div style={{ color: "#4a6080", fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
              {link ? (
                <a href={link} style={{ color: "#e9c176", fontSize: 14, textDecoration: "none" }}>{value}</a>
              ) : (
                <div style={{ color: "#9fb4d6", fontSize: 14 }}>{value}</div>
              )}
            </div>
          ))}
        </div>

        {/* Contact form */}
        {!sent ? (
          <form onSubmit={handleSubmit} style={{ background: "rgba(16,32,52,0.7)", border: "1px solid #1e3a5f", borderRadius: 12, padding: "32px" }}>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: "#d3e4fe", margin: "0 0 24px" }}>Send a Message</h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, color: "#9fb4d6", fontWeight: 600, marginBottom: 6 }}>Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Full name"
                  style={{ width: "100%", background: "#020d1c", border: "1px solid #1e3a5f", color: "#d3e4fe", padding: "12px 14px", borderRadius: 8, fontSize: 15, boxSizing: "border-box", outline: "none" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, color: "#9fb4d6", fontWeight: 600, marginBottom: 6 }}>Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  style={{ width: "100%", background: "#020d1c", border: "1px solid #1e3a5f", color: "#d3e4fe", padding: "12px 14px", borderRadius: 8, fontSize: 15, boxSizing: "border-box", outline: "none" }}
                />
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, color: "#9fb4d6", fontWeight: 600, marginBottom: 6 }}>Subject</label>
              <select
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
                style={{ width: "100%", background: "#020d1c", border: "1px solid #1e3a5f", color: form.subject ? "#d3e4fe" : "#4a6080", padding: "12px 14px", borderRadius: 8, fontSize: 15, outline: "none" }}
              >
                <option value="">Select a subject</option>
                <option value="Content error or correction">Content error or correction</option>
                <option value="Question about RE5 exam content">Question about RE5 exam content</option>
                <option value="Question about RE1 exam content">Question about RE1 exam content</option>
                <option value="Platform feedback or suggestion">Platform feedback or suggestion</option>
                <option value="Partnership or business enquiry">Partnership or business enquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 13, color: "#9fb4d6", fontWeight: 600, marginBottom: 6 }}>Message</label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us how we can help..."
                style={{ width: "100%", background: "#020d1c", border: "1px solid #1e3a5f", color: "#d3e4fe", padding: "12px 14px", borderRadius: 8, fontSize: 15, boxSizing: "border-box", outline: "none", resize: "vertical", lineHeight: 1.6 }}
              />
            </div>

            <button
              type="submit"
              style={{ background: "linear-gradient(135deg, #e9c176, #dab36a)", color: "#412d00", padding: "14px 32px", borderRadius: 8, fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", width: "100%" }}
            >
              Send Message
            </button>
          </form>
        ) : (
          <div style={{ background: "rgba(78,222,163,0.08)", border: "1px solid rgba(78,222,163,0.3)", borderRadius: 12, padding: "40px", textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>✅</div>
            <h2 style={{ color: "#4edea3", fontSize: 22, margin: "0 0 12px" }}>Message sent!</h2>
            <p style={{ color: "#9fb4d6", fontSize: 16, margin: "0 0 24px" }}>Your email client should have opened. We'll get back to you as soon as possible.</p>
            <Link to="/" style={{ background: "linear-gradient(135deg, #e9c176, #dab36a)", color: "#412d00", padding: "12px 28px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block" }}>Back to Practice Exam</Link>
          </div>
        )}

        {/* FAQ */}
        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: "#d3e4fe", margin: "0 0 20px" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { q: "Is RE5 Certify Pro free?", a: "Yes, completely. The practice exams, study guides, RE1 content, and all articles are free with no registration required." },
              { q: "Are you affiliated with the FSCA?", a: "No. We are an independent educational platform. We are not affiliated with, endorsed by, or connected to the FSCA, FSCA-approved exam bodies, or any government institution." },
              { q: "I found an error in a question or answer. How do I report it?", a: "Please use the contact form above and select 'Content error or correction'. Include the question number or topic so we can investigate quickly." },
              { q: "Do you offer certificates?", a: "No. We are a study preparation tool only. Regulatory certificates of competence (the official RE5 and RE1 passes) are issued by FSCA-approved examination bodies after you sit the actual exam." },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: "rgba(16,32,52,0.7)", border: "1px solid #1e3a5f", borderRadius: 10, padding: "20px 22px" }}>
                <div style={{ fontWeight: 600, color: "#d3e4fe", fontSize: 15, marginBottom: 8 }}>{q}</div>
                <div style={{ color: "#9fb4d6", fontSize: 14, lineHeight: 1.7 }}>{a}</div>
              </div>
            ))}
          </div>
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
