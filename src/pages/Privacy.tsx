import { Link } from "react-router-dom";

const LAST_UPDATED = "1 July 2025";

const Privacy = () => (
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
        <h1 style={{ fontSize: 34, fontWeight: 700, color: "#d3e4fe", margin: "0 0 12px" }}>Privacy Policy</h1>
        <p style={{ color: "#4a6080", fontSize: 14, margin: 0 }}>Last updated: {LAST_UPDATED}</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {[
          {
            title: "1. Who We Are",
            body: `RE5 Certify Pro ("we", "us", "our") operates the website www.re5-prep.co.za (the "Platform"). We are an independent educational platform based in South Africa providing exam preparation materials for the FSCA Representatives Regulatory Examination (RE5) and Key Individuals Regulatory Examination (RE1).

For privacy enquiries, contact us at: lungi09@gmail.com`
          },
          {
            title: "2. Information We Collect",
            body: `We collect the following categories of personal information:

Account Information (if you register): Email address, password (stored encrypted), and your selected exam track (RE5 or RE1). Registration is optional — the practice exam and study guide can be used without an account.

Usage Data: Pages visited, time spent on the Platform, exam scores (stored locally in your browser), browser type and version, operating system, device type, approximate location (country/city level from IP address), and referring URL.

Communications: If you contact us via email or the contact form, we retain your name, email address, and the content of your message in order to respond.

Cookies and Tracking: As described in our Cookie Policy, we and our third-party partners (Google Analytics, Google AdSense) collect data through cookies and similar technologies.`
          },
          {
            title: "3. How We Use Your Information",
            body: `We use personal information for the following purposes:

To operate the Platform: Providing the practice exam, study guide, and other features; maintaining your account if you choose to register; saving your exam progress.

Analytics and improvement: Understanding how users interact with the Platform so we can improve content and user experience. Analytics data is aggregated and anonymised where possible.

Advertising: Serving relevant advertisements via Google AdSense. Google and its advertising partners may use your data to show personalised ads based on your interests.

Communication: Responding to enquiries you send us.

Legal compliance: Complying with applicable South African law, including POPIA, and responding to lawful requests from authorities.`
          },
          {
            title: "4. Lawful Basis for Processing (POPIA)",
            body: `Under the Protection of Personal Information Act 4 of 2013 (POPIA), we process personal information only where we have a lawful basis:

Consent: For non-essential cookies (analytics and advertising) and for optional account registration.

Legitimate interest: For strictly necessary cookies, basic site security, fraud prevention, and responding to user enquiries.

Legal obligation: Where processing is required to comply with applicable South African law.`
          },
          {
            title: "5. Google AdSense and Third-Party Advertising",
            body: `We participate in the Google AdSense advertising programme. Google AdSense uses cookies and similar technologies to serve advertisements on our Platform based on your interests and browsing history.

Google's advertising privacy policy: https://policies.google.com/privacy
Google Ad Settings (opt-out of personalised ads): https://www.google.com/settings/ads

By using this Platform and accepting advertising cookies, you consent to Google and its partners processing your data for advertising purposes. You may withdraw this consent at any time via your Cookie Preferences (accessible from any page footer) or by visiting Google Ad Settings.

We also use Google Analytics to understand Platform usage. Google Analytics data is processed by Google LLC in the United States. Google LLC is certified under the EU-US Data Privacy Framework. See Google's Privacy Policy for details.`
          },
          {
            title: "6. Data Sharing",
            body: `We do not sell your personal information to third parties. We share personal information only in the following circumstances:

Service providers: We use Supabase (for account management and database hosting) and Vercel (for web hosting). These providers process data on our behalf under their own privacy policies and security standards.

Google (Analytics and AdSense): As described in Section 5.

Legal requirements: We may disclose information if required by South African law, court order, or lawful request by a government authority.

Business transfers: If RE5 Certify Pro is acquired, merged, or transferred, user data may be transferred to the new owner subject to the same privacy protections.`
          },
          {
            title: "7. International Data Transfers",
            body: `Some of our service providers (including Google and Vercel) process data outside South Africa, including in the United States and European Union. Where personal information is transferred internationally, we ensure that appropriate safeguards are in place, including reliance on providers that participate in recognised international data transfer frameworks.`
          },
          {
            title: "8. Data Retention",
            body: `Account data: Retained for as long as your account remains active. You may delete your account at any time by contacting us.

Usage and analytics data: Retained for up to 26 months in aggregated form.

Cookie consent records: Retained in your browser's local storage for 1 year.

Contact messages: Retained for up to 3 years to allow us to refer to correspondence history.

We regularly review retained data and delete information that is no longer necessary.`
          },
          {
            title: "9. Data Security",
            body: `We implement appropriate technical and organisational measures to protect personal information against unauthorised access, loss, or disclosure. These include:

• Encrypted data transmission (HTTPS/TLS on all pages)
• Encrypted password storage (handled by Supabase Auth)
• Access controls limiting who can access personal data
• Regular security reviews

No method of transmission over the internet is completely secure. While we take reasonable precautions, we cannot guarantee absolute security.`
          },
          {
            title: "10. Your Rights Under POPIA",
            body: `As a data subject under POPIA, you have the following rights:

Right of access: Request a copy of the personal information we hold about you.

Right to correction: Request that we correct inaccurate or incomplete information.

Right to deletion: Request that we delete your personal information (subject to legal retention obligations).

Right to object: Object to the processing of your personal information for direct marketing or where processing is based on legitimate interest.

Right to withdraw consent: Where processing is based on consent (including advertising cookies), withdraw that consent at any time.

Right to lodge a complaint: Lodge a complaint with the Information Regulator of South Africa at inforeg.org.za or complaints.IR@justice.gov.za.

To exercise any of these rights, contact us at lungi09@gmail.com. We will respond within a reasonable period (typically 30 days).`
          },
          {
            title: "11. Children's Privacy",
            body: `The Platform is not directed at children under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately and we will delete it.`
          },
          {
            title: "12. Cookies",
            body: `We use cookies and similar tracking technologies. For detailed information about the specific cookies we use, their purpose, duration, and how to manage them, please read our Cookie Policy at www.re5-prep.co.za/cookie-policy.`
          },
          {
            title: "13. Third-Party Links",
            body: `The Platform contains links to third-party websites (FSCA, BANKSETA, Moonstone, etc.). We are not responsible for the privacy practices of those websites. We recommend reading their privacy policies before providing any personal information.`
          },
          {
            title: "14. Changes to This Policy",
            body: `We may update this Privacy Policy periodically. When we do, we will update the "Last updated" date at the top of this page. For significant changes, we will display a notice on the Platform. Continued use of the Platform after changes are posted constitutes acceptance of the updated Policy.`
          },
          {
            title: "15. Contact and Complaints",
            body: `For any privacy-related questions, requests, or complaints:

Email: lungi09@gmail.com
Website: www.re5-prep.co.za/contact

Information Regulator of South Africa (for formal complaints):
JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001
Email: complaints.IR@justice.gov.za
Website: www.inforeg.org.za`
          },
        ].map(({ title, body }) => (
          <section key={title} style={{ background: "rgba(16,32,52,0.6)", border: "1px solid #1e3a5f", borderRadius: 10, padding: "24px 28px" }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: "#e9c176", margin: "0 0 14px" }}>{title}</h2>
            <div style={{ color: "#9fb4d6", fontSize: 15, lineHeight: 1.75, whiteSpace: "pre-line" }}>{body}</div>
          </section>
        ))}
      </div>

      <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link to="/cookie-policy" style={{ color: "#e9c176", textDecoration: "none", fontSize: 14, border: "1px solid rgba(233,193,118,0.3)", padding: "10px 20px", borderRadius: 8 }}>Cookie Policy</Link>
        <Link to="/terms" style={{ color: "#e9c176", textDecoration: "none", fontSize: 14, border: "1px solid rgba(233,193,118,0.3)", padding: "10px 20px", borderRadius: 8 }}>Terms of Service</Link>
        <Link to="/contact" style={{ color: "#e9c176", textDecoration: "none", fontSize: 14, border: "1px solid rgba(233,193,118,0.3)", padding: "10px 20px", borderRadius: 8 }}>Contact Us</Link>
      </div>
    </div>

    <footer style={{ background: "#020d1c", borderTop: "1px solid #1e3a5f", padding: "32px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 700, color: "#e9c176", fontSize: 15 }}>RE5 Certify Pro</span>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {[["Terms of Service", "/terms"], ["Privacy Policy", "/privacy"], ["Cookie Policy", "/cookie-policy"], ["Contact", "/contact"]].map(([label, to]) => (
            <Link key={to} to={to} style={{ color: "#4a6080", textDecoration: "none", fontSize: 13 }}>{label}</Link>
          ))}
        </div>
      </div>
    </footer>
  </div>
);

export default Privacy;
