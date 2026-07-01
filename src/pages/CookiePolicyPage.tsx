import { Link } from "react-router-dom";

const LAST_UPDATED = "1 July 2025";

export default function CookiePolicyPage() {
  function clearCookieConsent() {
    localStorage.removeItem("re5pro-cookie-consent");
    window.location.reload();
  }

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
          <h1 style={{ fontSize: 34, fontWeight: 700, color: "#d3e4fe", margin: "0 0 12px" }}>Cookie Policy</h1>
          <p style={{ color: "#4a6080", fontSize: 14, margin: 0 }}>Last updated: {LAST_UPDATED}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <section style={{ background: "rgba(16,32,52,0.6)", border: "1px solid #1e3a5f", borderRadius: 10, padding: "24px 28px" }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: "#e9c176", margin: "0 0 14px" }}>1. What Are Cookies?</h2>
            <p style={{ color: "#9fb4d6", fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work efficiently, to remember your preferences, and to provide information to the website owner.
              {"\n\n"}
              Similar technologies include web beacons, pixel tags, local storage (HTML5), and session storage. This policy covers all such technologies and refers to them collectively as "cookies".
            </p>
          </section>

          <section style={{ background: "rgba(16,32,52,0.6)", border: "1px solid #1e3a5f", borderRadius: 10, padding: "24px 28px" }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: "#e9c176", margin: "0 0 14px" }}>2. Cookies We Use</h2>
            <p style={{ color: "#9fb4d6", fontSize: 15, lineHeight: 1.75, margin: "0 0 20px" }}>We use the following categories of cookies on this Platform:</p>

            {[
              {
                category: "Strictly Necessary Cookies",
                badge: "Always Active",
                badgeColor: "#4edea3",
                description: "These cookies are essential for the Platform to function and cannot be switched off. They do not store any personally identifiable information.",
                examples: [
                  { name: "re5pro-cookie-consent", purpose: "Stores your cookie consent choice so we do not ask you repeatedly", duration: "1 year", provider: "RE5 Certify Pro" },
                  { name: "re5pro-auth", purpose: "Maintains your login session if you have created an account", duration: "Session / persistent based on login choice", provider: "RE5 Certify Pro (Supabase)" },
                ]
              },
              {
                category: "Functional Cookies",
                badge: "Can be declined",
                badgeColor: "#e9c176",
                description: "These cookies enable enhanced functionality such as remembering your exam progress, selected topic filters, and practice session history.",
                examples: [
                  { name: "localStorage (exam progress)", purpose: "Saves your exam session progress and score history locally in your browser", duration: "Until cleared", provider: "RE5 Certify Pro" },
                ]
              },
              {
                category: "Analytics Cookies",
                badge: "Can be declined",
                badgeColor: "#e9c176",
                description: "These cookies help us understand how visitors interact with the Platform so we can improve the content and user experience. Data is aggregated and anonymised.",
                examples: [
                  { name: "_ga, _gid, _ga_*", purpose: "Google Analytics — counts visits, tracks pages viewed, and measures how long users spend on pages", duration: "_ga: 2 years; _gid: 24 hours", provider: "Google LLC" },
                ]
              },
              {
                category: "Advertising Cookies",
                badge: "Can be declined",
                badgeColor: "#fb923c",
                description: "These cookies are set by Google AdSense and its partners to display relevant advertisements. They may track your browsing across other websites to build a profile of your interests.",
                examples: [
                  { name: "IDE", purpose: "Used by Google DoubleClick to register and report user actions after seeing or clicking an advertisement", duration: "1 year", provider: "Google LLC (doubleclick.net)" },
                  { name: "test_cookie", purpose: "Used to check whether the browser supports cookies", duration: "15 minutes", provider: "Google LLC (doubleclick.net)" },
                  { name: "DSID, FLC, AID, TAID", purpose: "Used to link your activity across devices if signed into Google", duration: "2 weeks to 2 years", provider: "Google LLC" },
                  { name: "NID", purpose: "Registers a unique ID used by Google to remember your preferences and other information", duration: "6 months", provider: "Google LLC" },
                ]
              },
            ].map(({ category, badge, badgeColor, description, examples }) => (
              <div key={category} style={{ marginBottom: 24, background: "rgba(255,255,255,0.02)", border: "1px solid #1e3a5f", borderRadius: 8, overflow: "hidden" }}>
                <div style={{ padding: "14px 18px", borderBottom: "1px solid #1e3a5f", display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontWeight: 600, color: "#d3e4fe", fontSize: 15 }}>{category}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: badgeColor, background: `${badgeColor}15`, border: `1px solid ${badgeColor}30`, borderRadius: 4, padding: "2px 8px" }}>{badge}</span>
                </div>
                <div style={{ padding: "14px 18px" }}>
                  <p style={{ color: "#9fb4d6", fontSize: 14, lineHeight: 1.7, margin: "0 0 14px" }}>{description}</p>
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                      <thead>
                        <tr>{["Cookie Name", "Purpose", "Duration", "Provider"].map(h => <th key={h} style={{ textAlign: "left", padding: "8px 12px", borderBottom: "1px solid #1e3a5f", color: "#e9c176", fontWeight: 600 }}>{h}</th>)}</tr>
                      </thead>
                      <tbody>
                        {examples.map((row, i) => (
                          <tr key={i}>
                            <td style={{ padding: "8px 12px", borderBottom: "1px solid #0d2040", color: "#d3e4fe", fontFamily: "monospace", fontSize: 12 }}>{row.name}</td>
                            <td style={{ padding: "8px 12px", borderBottom: "1px solid #0d2040", color: "#9fb4d6" }}>{row.purpose}</td>
                            <td style={{ padding: "8px 12px", borderBottom: "1px solid #0d2040", color: "#9fb4d6", whiteSpace: "nowrap" }}>{row.duration}</td>
                            <td style={{ padding: "8px 12px", borderBottom: "1px solid #0d2040", color: "#9fb4d6" }}>{row.provider}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section style={{ background: "rgba(16,32,52,0.6)", border: "1px solid #1e3a5f", borderRadius: 10, padding: "24px 28px" }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: "#e9c176", margin: "0 0 14px" }}>3. Google AdSense and Advertising</h2>
            <p style={{ color: "#9fb4d6", fontSize: 15, lineHeight: 1.75, margin: "0 0 14px" }}>
              This Platform uses Google AdSense, an advertising service provided by Google LLC. Google AdSense may use cookies, web beacons, and similar technologies to serve advertisements based on your prior visits to this website and other websites on the internet.
            </p>
            <p style={{ color: "#9fb4d6", fontSize: 15, lineHeight: 1.75, margin: "0 0 14px" }}>
              Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the internet. You may opt out of personalised advertising by:
            </p>
            <ul style={{ color: "#9fb4d6", fontSize: 15, lineHeight: 1.75, paddingLeft: 20, margin: "0 0 14px" }}>
              <li>Visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: "#e9c176" }}>Google Ad Settings</a></li>
              <li>Visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" style={{ color: "#e9c176" }}>aboutads.info</a> (Digital Advertising Alliance)</li>
              <li>Using your browser's private/incognito mode</li>
              <li>Installing a browser extension such as the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "#e9c176" }}>Google Analytics Opt-out Browser Add-on</a></li>
            </ul>
            <p style={{ color: "#9fb4d6", fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Note that opting out of personalised ads does not prevent you from seeing ads — it means ads will be less tailored to your interests.
            </p>
          </section>

          <section style={{ background: "rgba(16,32,52,0.6)", border: "1px solid #1e3a5f", borderRadius: 10, padding: "24px 28px" }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: "#e9c176", margin: "0 0 14px" }}>4. How to Manage Cookies</h2>
            <p style={{ color: "#9fb4d6", fontSize: 15, lineHeight: 1.75, margin: "0 0 14px" }}>
              You can control and/or delete cookies at any time. Here's how:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Google Chrome", "Settings → Privacy and security → Cookies and other site data"],
                ["Mozilla Firefox", "Settings → Privacy & Security → Cookies and Site Data"],
                ["Microsoft Edge", "Settings → Cookies and site permissions → Cookies and site data"],
                ["Safari (Mac)", "Preferences → Privacy → Manage Website Data"],
                ["Safari (iOS)", "Settings → Safari → Privacy & Security"],
              ].map(([browser, path]) => (
                <div key={browser} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 14px", background: "rgba(255,255,255,0.02)", borderRadius: 6 }}>
                  <span style={{ color: "#e9c176", fontWeight: 600, fontSize: 14, minWidth: 140 }}>{browser}</span>
                  <span style={{ color: "#9fb4d6", fontSize: 14 }}>{path}</span>
                </div>
              ))}
            </div>
            <p style={{ color: "#4a6080", fontSize: 13, lineHeight: 1.7, margin: "16px 0 0" }}>
              Please note that disabling certain cookies may affect the functionality of this Platform. Strictly necessary cookies cannot be disabled without impacting core features.
            </p>
          </section>

          <section style={{ background: "rgba(16,32,52,0.6)", border: "1px solid #1e3a5f", borderRadius: 10, padding: "24px 28px" }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: "#e9c176", margin: "0 0 14px" }}>5. Withdraw Your Consent</h2>
            <p style={{ color: "#9fb4d6", fontSize: 15, lineHeight: 1.75, margin: "0 0 20px" }}>
              You can withdraw your cookie consent at any time by clicking the button below. This will clear your saved preference and show the cookie consent banner again on your next page visit.
            </p>
            <button
              onClick={clearCookieConsent}
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #1e3a5f", color: "#9fb4d6", padding: "12px 24px", borderRadius: 8, fontSize: 14, cursor: "pointer", fontFamily: "inherit" }}
            >
              Reset Cookie Preferences
            </button>
          </section>

          <section style={{ background: "rgba(16,32,52,0.6)", border: "1px solid #1e3a5f", borderRadius: 10, padding: "24px 28px" }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: "#e9c176", margin: "0 0 14px" }}>6. Legal Basis (POPIA)</h2>
            <p style={{ color: "#9fb4d6", fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Under the Protection of Personal Information Act 4 of 2013 (POPIA), we process personal information only where we have a lawful basis. For strictly necessary cookies, our lawful basis is legitimate interest (the Platform cannot function without them). For all other cookies, our lawful basis is your consent, which you provide through the cookie consent banner. You have the right to withdraw consent at any time as described in Section 5 above.
            </p>
          </section>

          <section style={{ background: "rgba(16,32,52,0.6)", border: "1px solid #1e3a5f", borderRadius: 10, padding: "24px 28px" }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: "#e9c176", margin: "0 0 14px" }}>7. Changes to This Policy</h2>
            <p style={{ color: "#9fb4d6", fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for legal, regulatory, or operational reasons. Please check this page periodically for updates. The "Last updated" date at the top of this page shows when the most recent changes were made.
            </p>
          </section>

          <section style={{ background: "rgba(16,32,52,0.6)", border: "1px solid #1e3a5f", borderRadius: 10, padding: "24px 28px" }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, color: "#e9c176", margin: "0 0 14px" }}>8. Contact</h2>
            <p style={{ color: "#9fb4d6", fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              If you have any questions about our use of cookies, please contact us:{"\n\n"}
              Email: lungi09@gmail.com{"\n"}
              Website: <Link to="/contact" style={{ color: "#e9c176" }}>Contact page</Link>
            </p>
          </section>
        </div>

        <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link to="/privacy" style={{ color: "#e9c176", textDecoration: "none", fontSize: 14, border: "1px solid rgba(233,193,118,0.3)", padding: "10px 20px", borderRadius: 8 }}>Privacy Policy</Link>
          <Link to="/terms" style={{ color: "#e9c176", textDecoration: "none", fontSize: 14, border: "1px solid rgba(233,193,118,0.3)", padding: "10px 20px", borderRadius: 8 }}>Terms of Service</Link>
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
}
