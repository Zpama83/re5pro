import { Link } from "react-router-dom";

const LAST_UPDATED = "1 July 2025";

export default function TermsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#031427", color: "#d3e4fe", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <nav style={{ background: "#031427", borderBottom: "1px solid #1e3a5f", position: "sticky", top: 0, zIndex: 50, padding: "0 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #e9c176, #dab36a)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#412d00", fontSize: 16 }}>R</div>
            <span style={{ fontWeight: 700, color: "#e9c176", fontSize: 18 }}>RE5 Certify Pro</span>
          </Link>
          <Link to="/" style={{ color: "#9fb4d6", textDecoration: "none", fontSize: 14 }}>← Back to Home</Link>
        </div>
      </nav>

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ marginBottom: 40 }}>
          <p style={{ color: "#e9c176", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Legal</p>
          <h1 style={{ fontSize: 34, fontWeight: 700, color: "#d3e4fe", margin: "0 0 12px" }}>Terms of Service</h1>
          <p style={{ color: "#4a6080", fontSize: 14, margin: 0 }}>Last updated: {LAST_UPDATED}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {[
            {
              title: "1. Acceptance of Terms",
              body: `By accessing or using RE5 Certify Pro ("the Platform", "we", "us", "our") at www.re5-prep.co.za, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use the Platform.

We reserve the right to update these Terms at any time. Continued use of the Platform after changes are posted constitutes your acceptance of the updated Terms. The "Last updated" date above reflects the most recent revision.`
            },
            {
              title: "2. Description of Service",
              body: `RE5 Certify Pro is a free, independent educational platform providing exam preparation materials for the Financial Sector Conduct Authority (FSCA) Representatives Regulatory Examination (RE5) and Key Individuals Regulatory Examination (RE1).

The Platform includes, but is not limited to:
• Practice examination questions and answers
• Study guides and reference articles
• A CPD (Continuous Professional Development) calculator
• A resource library of external links and study materials
• A blog with educational articles on South African financial regulation
• Community discussion forums

The Platform is provided free of charge. We reserve the right to introduce premium features, modify existing features, or discontinue any part of the service at any time without notice.`
            },
            {
              title: "3. Educational Purpose Only — Not Professional Advice",
              body: `The content on this Platform is provided for educational and exam preparation purposes only. Nothing on this Platform constitutes financial advice, legal advice, tax advice, investment advice, or regulatory compliance advice.

We make every effort to ensure accuracy, but:
• Financial regulation in South Africa changes frequently. Thresholds, pass marks, CPD requirements, and legislative provisions may change after publication.
• You should always verify current requirements with the Financial Sector Conduct Authority (FSCA) or a qualified compliance professional before relying on any information for professional or regulatory purposes.
• Passing a practice examination on this Platform does not guarantee passing the official FSCA examination.
• This Platform does not issue any certificates, qualifications, or official recognition of competence.

RE5 Certify Pro is not affiliated with, endorsed by, or in any way connected to the FSCA, the Financial Intelligence Centre (FIC), the South African Reserve Bank (SARB), or any other government body or examination body.`
            },
            {
              title: "4. User Conduct",
              body: `When using this Platform, you agree not to:
• Use the Platform for any unlawful purpose or in violation of any applicable law
• Reproduce, distribute, or commercially exploit any content from the Platform without written permission
• Attempt to reverse engineer, scrape, or extract the question bank or content in bulk
• Use automated tools, bots, or scripts to access or interact with the Platform
• Interfere with or disrupt the Platform's infrastructure, servers, or networks
• Impersonate any person or entity, or falsely represent your affiliation with any person or entity
• Upload, post, or transmit any content that is harmful, offensive, defamatory, or violates any third-party rights
• Attempt to gain unauthorised access to any part of the Platform`
            },
            {
              title: "5. Intellectual Property",
              body: `All content on the Platform — including but not limited to question text, explanations, study guide content, blog articles, and visual design — is the intellectual property of RE5 Certify Pro unless otherwise attributed.

You may:
• Use the Platform personally for exam preparation
• Print or save individual pages for personal study use

You may not:
• Reproduce, copy, or republish Platform content for commercial purposes
• Use Platform content to create competing educational products
• Remove or obscure any copyright or attribution notices

Third-party legislation (FAIS Act, FICA, etc.) is public domain. Our specific explanations, question formulations, and pedagogical structures are our own work and are protected.`
            },
            {
              title: "6. Third-Party Content and Links",
              body: `The Platform contains links to third-party websites including the FSCA website, BANKSETA, Moonstone Information Refinery, and other resources. These links are provided for convenience only.

We do not endorse, control, or take responsibility for:
• The accuracy or content of third-party websites
• Products or services offered on third-party websites
• The privacy practices of third-party websites

You access third-party links at your own risk.`
            },
            {
              title: "7. Advertising",
              body: `The Platform may display advertisements served by Google AdSense and other third-party advertising networks. These advertisements are not endorsements by RE5 Certify Pro. We are not responsible for the content of advertisements displayed on the Platform.

Third-party advertisers may use cookies and similar technologies to serve targeted advertisements. You can opt out of personalised advertising via your Google Ad Settings or through your browser's cookie settings. See our Cookie Policy for more details.`
            },
            {
              title: "8. Disclaimer of Warranties",
              body: `The Platform is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to:
• Warranties of merchantability or fitness for a particular purpose
• Warranties that the Platform will be uninterrupted, error-free, or free of viruses
• Warranties that content is complete, accurate, or current

We make no guarantee that using this Platform will result in passing the RE5 or RE1 examinations or any other regulatory examination.`
            },
            {
              title: "9. Limitation of Liability",
              body: `To the fullest extent permitted by applicable South African law, RE5 Certify Pro, its owners, contributors, and operators shall not be liable for:
• Any direct, indirect, incidental, special, or consequential damages arising from your use of or inability to use the Platform
• Any errors or omissions in the content
• Any loss of profit, data, or business opportunity arising from reliance on Platform content
• Any examination failure attributable to preparation using this Platform

Your sole remedy for dissatisfaction with the Platform is to stop using it.`
            },
            {
              title: "10. Privacy and Cookies",
              body: `Your use of the Platform is also governed by our Privacy Policy and Cookie Policy, which are incorporated into these Terms by reference. Please read both documents carefully.

By using the Platform, you consent to our collection and use of information as described in those documents.`
            },
            {
              title: "11. Governing Law",
              body: `These Terms are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising under these Terms shall be subject to the jurisdiction of the South African courts.`
            },
            {
              title: "12. Contact",
              body: `If you have any questions about these Terms of Service, please contact us at:\n\nEmail: lungi09@gmail.com\nWebsite: www.re5-prep.co.za\n\nYou may also use the Contact page on this Platform.`
            },
          ].map(({ title, body }) => (
            <section key={title} style={{ background: "rgba(16,32,52,0.6)", border: "1px solid #1e3a5f", borderRadius: 10, padding: "24px 28px" }}>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: "#e9c176", margin: "0 0 14px" }}>{title}</h2>
              <div style={{ color: "#9fb4d6", fontSize: 15, lineHeight: 1.75, whiteSpace: "pre-line" }}>{body}</div>
            </section>
          ))}
        </div>

        <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link to="/privacy" style={{ color: "#e9c176", textDecoration: "none", fontSize: 14, border: "1px solid rgba(233,193,118,0.3)", padding: "10px 20px", borderRadius: 8 }}>Privacy Policy</Link>
          <Link to="/cookie-policy" style={{ color: "#e9c176", textDecoration: "none", fontSize: 14, border: "1px solid rgba(233,193,118,0.3)", padding: "10px 20px", borderRadius: 8 }}>Cookie Policy</Link>
          <Link to="/contact" style={{ color: "#e9c176", textDecoration: "none", fontSize: 14, border: "1px solid rgba(233,193,118,0.3)", padding: "10px 20px", borderRadius: 8 }}>Contact Us</Link>
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
        <div><div style={{ fontWeight: 700, color: "#e9c176", fontSize: 16, marginBottom: 8 }}>RE5 Certify Pro</div><p style={{ color: "#4a6080", fontSize: 13, maxWidth: 280, lineHeight: 1.6, margin: 0 }}>South Africa's free RE5 and RE1 exam prep platform.</p></div>
        <div style={{ display: "flex", gap: 40 }}>
          {[["Terms of Service", "/terms"], ["Privacy Policy", "/privacy"], ["Cookie Policy", "/cookie-policy"], ["Contact", "/contact"], ["About", "/about"]].map(([label, to]) => (
            <Link key={to} to={to} style={{ color: "#4a6080", textDecoration: "none", fontSize: 13 }}>{label}</Link>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 900, margin: "24px auto 0", borderTop: "1px solid #1e3a5f", paddingTop: 20, color: "#4a6080", fontSize: 12 }}>
        © {new Date().getFullYear()} RE5 Certify Pro. Educational purposes only. Not affiliated with the FSCA.
      </div>
    </footer>
  );
}
