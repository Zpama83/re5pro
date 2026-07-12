import { Navigate, Link } from "react-router-dom";
import RE5Exam from "@/components/RE5Exam";
import { AdSenseSlot } from "@/components/AdSenseSlot";
import { useClaudeAuth } from "@/ClaudeAuth";

/**
 * Home page — track-aware.
 *
 * - RE5-tracked users (or users with no track set): see the RE5 home (RE5Exam).
 * - RE1-tracked users: on their FIRST visit to "/" in a browser session, get
 *   redirected to /re1 so they land on RE1 content by default. After that
 *   redirect has fired once, subsequent visits to "/" render the RE5 home
 *   normally — so an RE1 user can still cross over to RE5 content
 *   intentionally without being bounced back.
 *
 * The "once per session" guard lives in sessionStorage; it resets when the
 * tab closes or when the user signs out (we clear it then too).
 */

const REDIRECT_FLAG = "re1-track-redirected";

const Index = () => {
  const { profile } = useClaudeAuth();

  if (profile?.exam_track === "RE1") {
    const alreadyRedirected =
      typeof window !== "undefined" &&
      sessionStorage.getItem(REDIRECT_FLAG) === "1";
    if (!alreadyRedirected) {
      sessionStorage.setItem(REDIRECT_FLAG, "1");
      return <Navigate to="/re1" replace />;
    }
  }

  return (
    <div style={{ background: "#031427", color: "#d3e4fe", minHeight: "100vh" }}>
      <section style={{ maxWidth: "min(1100px, 100%)", margin: "0 auto", padding: "36px 20px 24px" }}>
        <div style={{ display: "grid", gap: 28 }}>
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,175,55,0.18)", borderRadius: 20, padding: "32px 28px 28px", boxShadow: "0 18px 50px rgba(0,0,0,0.25)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <p style={{ color: "#e9c176", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", margin: 0, fontWeight: 700 }}>RE5 & RE1 Exam Prep</p>
                <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.25rem)", lineHeight: 1.05, margin: "16px 0 16px", color: "#f5f7ff" }}>
                  Free, exam-focused training for the FSCA RE5 and RE1 exams.
                </h1>
                <p style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "#bfc9e1", lineHeight: 1.75, maxWidth: 760 }}>
                  Build real regulatory confidence with an interactive question bank, detailed explanations, and structured study guidance. This platform is designed to help South African financial services professionals learn the law, understand exam-style scenarios, and prepare with current FSCA terminology.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
                {[
                  { title: "Full FSCA coverage", description: "All 8 RE5 tasks and the RE1 Key Individual domain are represented with scenario-based questions and competency review." },
                  { title: "Free explanations", description: "Every question includes a correct rationale plus analysis of the wrong answer choices to deepen understanding." },
                  { title: "Study support", description: "Access guided study notes, deeper knowledge topics, a CPD calculator, and resource links curated for exam success." },
                ].map((item) => (
                  <div key={item.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 20 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10, color: "#f5f7ff" }}>{item.title}</div>
                    <div style={{ fontSize: 14, color: "#a8b4d2", lineHeight: 1.7 }}>{item.description}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <Link to="/study-guide" style={{ textDecoration: "none", background: "linear-gradient(135deg, #e9c176, #d4af37)", color: "#412d00", padding: "14px 26px", borderRadius: 12, fontWeight: 700 }}>Open the Study Guide</Link>
                <Link to="/deeper-knowledge" style={{ textDecoration: "none", border: "1px solid rgba(233,193,118,0.35)", color: "#e9c176", padding: "14px 26px", borderRadius: 12, fontWeight: 600 }}>Explore Deeper Knowledge</Link>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gap: 18 }}>
            <section style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.18)", borderRadius: 18, padding: 28 }}>
              <h2 style={{ fontSize: 24, margin: "0 0 14px", color: "#f5f7ff" }}>How this platform helps you prepare</h2>
              <p style={{ color: "#c0cad8", fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
                The content is built around the FSCA's regulatory framework and the practical exam design used for RE5 and RE1. Each question is written to mimic official exam style, with answer explanations that reinforce both the correct outcome and the reasons why other answers are not valid.
              </p>
              <p style={{ color: "#c0cad8", fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                Use the practice exam to track your score, identify weak FSCA tasks, and focus your revision with curated study resources. The platform is intentionally free, independent, and meant purely for educational preparation.
              </p>
            </section>
            <section style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.18)", borderRadius: 18, padding: 28 }}>
              <h2 style={{ fontSize: 24, margin: "0 0 14px", color: "#f5f7ff" }}>Why this site is different</h2>
              <ul style={{ paddingLeft: 20, margin: 0, color: "#c0cad8", fontSize: 15, lineHeight: 1.8 }}>
                <li style={{ marginBottom: 10 }}>No paid subscription barrier — all practice questions, explanations, and study tools are available free of charge.</li>
                <li style={{ marginBottom: 10 }}>Content is presented in clear, plain language and includes references to South African law and current FSCA exam requirements.</li>
                <li>We publish site policy pages, privacy details, and a contact channel so learners can understand how their data is treated.</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <AdSenseSlot />
      <RE5Exam />
    </div>
  );
};

export default Index;
