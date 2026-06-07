import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a1a", color: "#e0e0f0", padding: "40px 20px" }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <Link
          to="/"
          style={{
            color: "#d4af37",
            textDecoration: "none",
            fontSize: 14,
            display: "inline-block",
            marginBottom: 24,
          }}
        >
          ← Back to Practice Exam
        </Link>

        <h1 style={{ color: "#d4af37", fontSize: 36, marginBottom: 8, letterSpacing: 1 }}>
          Privacy Policy
        </h1>
        <p style={{ color: "#9090b0", fontSize: 14, marginBottom: 32 }}>
          Last updated: {new Date().toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: 16, padding: 32, lineHeight: 1.7 }}>
          <section style={{ marginBottom: 28 }}>
            <h2 style={{ color: "#d4af37", fontSize: 22, marginTop: 0 }}>1. Introduction</h2>
            <p>
              This Privacy Policy explains how RE5 Certify Pro ("we", "us", "our") collects, uses, and protects
              information when you use our website (the "Service"). We are committed to protecting your privacy in
              accordance with the Protection of Personal Information Act 4 of 2013 (POPIA).
            </p>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h2 style={{ color: "#d4af37", fontSize: 22 }}>2. Information We Collect</h2>
            <p>
              We do not require you to register an account to use the Practice Exam or Study Guide. We may
              automatically collect limited technical information such as:
            </p>
            <ul>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent on the Service</li>
              <li>Anonymised usage analytics</li>
            </ul>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h2 style={{ color: "#d4af37", fontSize: 22 }}>3. Cookies and Advertising</h2>
            <p>
              We use cookies and similar technologies to operate the Service and to serve advertisements via Google
              AdSense. Google and its partners may use cookies to serve ads based on your prior visits to this website
              or other websites. You can opt out of personalised advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#d4af37" }}
              >
                Google Ads Settings
              </a>
              .
            </p>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h2 style={{ color: "#d4af37", fontSize: 22 }}>4. How We Use Information</h2>
            <ul>
              <li>To operate, maintain, and improve the Service</li>
              <li>To analyse usage trends and performance</li>
              <li>To display relevant advertising</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h2 style={{ color: "#d4af37", fontSize: 22 }}>5. Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share limited technical data with third-party service
              providers (e.g. analytics and advertising platforms) strictly to operate the Service.
            </p>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h2 style={{ color: "#d4af37", fontSize: 22 }}>6. Data Retention</h2>
            <p>
              We retain technical and analytics data only for as long as necessary to fulfil the purposes outlined in
              this policy.
            </p>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h2 style={{ color: "#d4af37", fontSize: 22 }}>7. Your Rights Under POPIA</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction or deletion of your personal information</li>
              <li>Object to the processing of your personal information</li>
              <li>Lodge a complaint with the Information Regulator of South Africa</li>
            </ul>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h2 style={{ color: "#d4af37", fontSize: 22 }}>8. Third-Party Links</h2>
            <p>
              The Service may contain links to third-party websites (such as the RE5 Full Course). We are not
              responsible for the privacy practices of those websites.
            </p>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h2 style={{ color: "#d4af37", fontSize: 22 }}>9. Children's Privacy</h2>
            <p>
              The Service is not intended for children under the age of 18. We do not knowingly collect personal
              information from children.
            </p>
          </section>

          <section style={{ marginBottom: 28 }}>
            <h2 style={{ color: "#d4af37", fontSize: 22 }}>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised
              "Last updated" date.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#d4af37", fontSize: 22 }}>11. Contact</h2>
            <p>
              For any questions about this Privacy Policy or your personal information, please contact us via the
              website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
