import { Link } from "react-router-dom";

const STUDY_GROUPS = [
  { region: "Cape Town", link: "https://chat.whatsapp.com/KkQM0djRuAb8ZY9K2EkluT?mode=gi_t" },
  { region: "Johannesburg", link: "https://chat.whatsapp.com/KjDYdXm1hPI12j4jQwSEZT?mode=gi_t" },
  { region: "Soweto", link: "https://chat.whatsapp.com/HGOSGSG1l4E1rnirgbJsTj?mode=gi_t" },
  { region: "Tembisa", link: "https://chat.whatsapp.com/GbjegQHKYfrLl9YzeQrw5L?mode=gi_t" },
  { region: "Vaal Triangle", link: "https://chat.whatsapp.com/LkvtveCICh12vQK700U954?mode=gi_t" },
  { region: "KZN", link: "https://chat.whatsapp.com/Ih9e5rgUAs1HN7zCK8I4Gw?mode=gi_t" },
  { region: "North West", link: "https://chat.whatsapp.com/KBtCS16New92DQBkTFEEEI?mode=gi_t" },
  { region: "Free State", link: "https://chat.whatsapp.com/CDp52PNTtckB8xPLwyT5Ak?mode=gi_t" },
  { region: "Pretoria", link: "https://chat.whatsapp.com/Kk7pH2fCU7Z2vkVwCvZalQ?mode=gi_t" },
  { region: "Northern Cape", link: "https://chat.whatsapp.com/BYMGQ1uVf6GFf0UsBN96mm?mode=gi_t" },
];

const CommunityPage = () => (
  <div style={{ minHeight: "100vh", background: "#031427", color: "#d3e4fe" }}>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 96px" }}>
      <Link to="/" style={{ color: "#e9c176", fontSize: 13, textDecoration: "none", fontWeight: 600, letterSpacing: 1 }}>
        ← Back to Home
      </Link>

      <h1 style={{ fontSize: 32, fontWeight: 700, color: "#f5f7ff", margin: "24px 0 12px" }}>
        RE5 &amp; RE1 Study Groups
      </h1>
      <p style={{ fontSize: 16, color: "#9fb4d6", lineHeight: 1.7, maxWidth: 640, margin: "0 0 12px" }}>
        Join a WhatsApp study group in your region. Connect with other candidates preparing for the FSCA RE5 and RE1 regulatory exams, share tips, and keep each other accountable.
      </p>
      <p style={{ fontSize: 14, color: "#e9c176", lineHeight: 1.6, margin: "0 0 40px" }}>
        Welcome to our community! If you'd like to help lead your regional group, please introduce yourself in the chat — we're looking for motivated group leaders to keep discussions focused and supportive.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {STUDY_GROUPS.map((g) => (
          <a
            key={g.region}
            href={g.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: "20px 24px",
              textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(37,211,102,0.5)";
              e.currentTarget.style.background = "rgba(37,211,102,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            }}
          >
            <span style={{ fontSize: 28, flexShrink: 0 }}>💬</span>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600, color: "#f5f7ff" }}>{g.region}</div>
              <div style={{ fontSize: 12, color: "#25d366", fontWeight: 500, marginTop: 4 }}>Join on WhatsApp →</div>
            </div>
          </a>
        ))}
      </div>

      <div style={{ marginTop: 48, background: "rgba(233,193,118,0.06)", border: "1px solid rgba(233,193,118,0.2)", borderRadius: 16, padding: "24px 28px" }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: "#e9c176", margin: "0 0 8px" }}>Don't see your area?</h2>
        <p style={{ fontSize: 14, color: "#9fb4d6", lineHeight: 1.7, margin: 0 }}>
          We're growing! If you'd like a study group for your region, reach out on our{" "}
          <Link to="/contact" style={{ color: "#e9c176", textDecoration: "underline" }}>contact page</Link>{" "}
          and we'll set one up.
        </p>
      </div>
    </div>
  </div>
);

export default CommunityPage;
