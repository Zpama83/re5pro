import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { DKTopic, DKSimulator, DKQuizQuestion } from "@/types/deeperKnowledge";
import { useDKProgress } from "@/hooks/useDKProgress";
import { deeperKnowledgeTopics } from "@/data/deeperKnowledgeTopics";

/* ------- design tokens (inline to match RE5Exam visual language) ------- */
const C = {
  bg: "#0a0a1a",
  panel: "rgba(255,255,255,0.04)",
  panel2: "rgba(0,0,0,0.3)",
  border: "rgba(212,175,55,0.25)",
  borderSoft: "rgba(255,255,255,0.08)",
  gold: "#d4af37",
  goldDim: "#b8860b",
  text: "#e8e8f0",
  textDim: "#9090b0",
  good: "#4ade80",
  bad: "#f87171",
  warn: "#fbbf24",
};

/* ===================================================================== */
/* Listing page                                                          */
/* ===================================================================== */
export default function DeeperKnowledge() {
  const { slug } = useParams();
  return slug ? <TopicView slug={slug} /> : <TopicList />;
}

function TopicList() {
  const topics = deeperKnowledgeTopics;
  const { bookmarks, mastered, isMastered } = useDKProgress();
  const [filter, setFilter] = useState<"all" | "bookmarked" | "mastered">("all");

  const visible = useMemo(() => {
    if (filter === "bookmarked") return topics.filter((t) => bookmarks.includes(t.id));
    if (filter === "mastered") return topics.filter((t) => mastered.includes(t.id));
    return topics;
  }, [topics, filter, bookmarks, mastered]);

  return (
    <Shell>
      <Header
        title="Deeper Knowledge"
        subtitle="Move from rule-recall to real-world application. Each topic dives into the why, the law, the scenarios, the connections, and the exam relevance."
      />

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
        {[
          ["all", `All (${topics.length})`],
          ["bookmarked", `★ Bookmarked (${bookmarks.length})`],
          ["mastered", `✓ Mastered (${mastered.length})`],
        ].map(([k, label]) => (
          <button
            key={k}
            onClick={() => setFilter(k as typeof filter)}
            style={{
              background: filter === k ? "rgba(212,175,55,0.15)" : "transparent",
              border: `1px solid ${filter === k ? C.gold : C.borderSoft}`,
              color: filter === k ? C.gold : C.textDim,
              padding: "8px 14px",
              borderRadius: 999,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {(
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 16,
          }}
        >
          {visible.map((t, i) => (
            <Link
              key={t.id}
              to={`/deeper-knowledge/${t.slug}`}
              style={{
                textDecoration: "none",
                background: C.panel,
                border: `1px solid ${C.border}`,
                borderRadius: 14,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                transition: "transform 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = C.gold;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = C.border;
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: C.gold, fontSize: 12, letterSpacing: 1, fontWeight: 600 }}>
                  TOPIC {String(i + 1).padStart(2, "0")}
                </span>
                {isMastered(t.id) && (
                  <span style={{ color: C.good, fontSize: 12 }}>✓ Mastered</span>
                )}
              </div>
              <h3 style={{ color: C.text, margin: 0, fontSize: 19, lineHeight: 1.3 }}>{t.title}</h3>
              <p style={{ color: C.textDim, margin: 0, fontSize: 14, lineHeight: 1.55 }}>{t.summary}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6 }}>
                {Object.entries(t.regulatory_refs ?? {})
                  .filter(([, v]) => v && v !== "—")
                  .map(([k, v]) => (
                    <span
                      key={k}
                      style={{
                        fontSize: 11,
                        background: "rgba(212,175,55,0.12)",
                        color: C.gold,
                        padding: "3px 8px",
                        borderRadius: 6,
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                      }}
                    >
                      {k}: {v}
                    </span>
                  ))}
              </div>
            </Link>
          ))}
          {visible.length === 0 && (
            <div style={{ color: C.textDim, padding: 40, textAlign: "center" }}>
              Nothing here yet. Bookmark topics to build your study list.
            </div>
          )}
        </div>
      )}
    </Shell>
  );
}

/* ===================================================================== */
/* Topic view                                                            */
/* ===================================================================== */
function TopicView({ slug }: { slug: string }) {
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark, isMastered, toggleMastered } = useDKProgress();

  const allTopics = deeperKnowledgeTopics;
  const topic = allTopics.find((t) => t.slug === slug) ?? null;

  if (!topic) return <Shell><ErrorBox message="Topic not found." /></Shell>;

  const related = topic.related_concepts
    .map((id) => allTopics.find((t) => t.id === id))
    .filter(Boolean) as DKTopic[];

  return (
    <Shell>
      <Link
        to="/deeper-knowledge"
        style={{ color: C.gold, fontSize: 13, textDecoration: "none", display: "inline-block", marginBottom: 16 }}
      >
        ← All topics
      </Link>

      <div
        style={{
          background: C.panel,
          border: `1px solid ${C.border}`,
          borderRadius: 14,
          padding: 24,
          marginBottom: 24,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <h1 style={{ color: C.gold, margin: 0, fontSize: 28, lineHeight: 1.2 }}>{topic.title}</h1>
          <div style={{ display: "flex", gap: 8 }}>
            <PillButton
              active={isBookmarked(topic.id)}
              onClick={() => toggleBookmark(topic.id)}
              activeLabel="★ Bookmarked"
              label="☆ Bookmark"
            />
            <PillButton
              active={isMastered(topic.id)}
              onClick={() => toggleMastered(topic.id)}
              activeLabel="✓ Mastered"
              label="Mark mastered"
              activeColor={C.good}
            />
          </div>
        </div>
        <p style={{ color: C.textDim, marginTop: 12, marginBottom: 16, lineHeight: 1.6 }}>{topic.summary}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {Object.entries(topic.regulatory_refs ?? {})
            .filter(([, v]) => v && v !== "—")
            .map(([k, v]) => (
              <span
                key={k}
                style={{
                  fontSize: 12,
                  background: "rgba(212,175,55,0.12)",
                  color: C.gold,
                  padding: "4px 10px",
                  borderRadius: 6,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                {k}: {v}
              </span>
            ))}
        </div>
      </div>

      <Section title="Principle Foundation — the 'Why'" defaultOpen>
        <Field label="Statement" value={topic.principle.statement} />
        <Field label="Mischief the rule prevents" value={topic.principle.mischief} />
        <Field label="Consumer harm scenario" value={topic.principle.consumerHarm} />
      </Section>

      <Section title="Regulatory Architecture — the 'What'">
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {topic.legislation.map((l, i) => (
            <div
              key={i}
              style={{
                background: C.panel2,
                border: `1px solid ${C.borderSoft}`,
                borderRadius: 10,
                padding: 16,
              }}
            >
              <div style={{ color: C.gold, fontSize: 12, fontWeight: 600, marginBottom: 6, letterSpacing: 0.5 }}>
                {l.source}
              </div>
              <div
                style={{
                  color: C.text,
                  fontStyle: "italic",
                  fontSize: 14,
                  lineHeight: 1.6,
                  borderLeft: `3px solid ${C.gold}`,
                  paddingLeft: 12,
                  marginBottom: 10,
                }}
              >
                "{l.text}"
              </div>
              <div style={{ color: C.textDim, fontSize: 13, lineHeight: 1.6 }}>
                <strong style={{ color: C.text }}>Interpretation: </strong>
                {l.interpretation}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Scenarios — the 'How'">
        <ScenarioTabs scenarios={topic.scenarios} />
      </Section>

      {topic.simulator && (
        <Section title="Scenario Simulator">
          <Simulator data={topic.simulator} />
        </Section>
      )}

      <Section title="Related Concepts">
        {related.length === 0 ? (
          <div style={{ color: C.textDim, fontSize: 14 }}>No linked topics.</div>
        ) : (
          <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
            {related.map((r) => (
              <button
                key={r.id}
                onClick={() => navigate(`/deeper-knowledge/${r.slug}`)}
                style={{
                  textAlign: "left",
                  background: C.panel2,
                  border: `1px solid ${C.borderSoft}`,
                  borderRadius: 10,
                  padding: 14,
                  cursor: "pointer",
                  color: C.text,
                }}
              >
                <div style={{ color: C.gold, fontSize: 11, marginBottom: 4, letterSpacing: 0.5 }}>RELATED</div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>{r.title}</div>
                <div style={{ color: C.textDim, fontSize: 12, lineHeight: 1.5 }}>{r.summary}</div>
              </button>
            ))}
          </div>
        )}
      </Section>

      <Section title="Exam Relevance — the 'Test'">
        <Field label="Frequency" value={topic.exam_relevance.frequencyInExams} />
        <div style={{ marginTop: 16 }}>
          <div style={{ color: C.gold, fontSize: 12, fontWeight: 600, marginBottom: 8, letterSpacing: 0.5 }}>
            SAMPLE QUESTIONS
          </div>
          <ol style={{ color: C.text, paddingLeft: 20, margin: 0, fontSize: 14, lineHeight: 1.7 }}>
            {topic.exam_relevance.sampleQuestions.map((q, i) => (
              <li key={i} style={{ marginBottom: 6 }}>{q}</li>
            ))}
          </ol>
        </div>
        <div style={{ marginTop: 16 }}>
          <div style={{ color: C.gold, fontSize: 12, fontWeight: 600, marginBottom: 8, letterSpacing: 0.5 }}>
            KEY PHRASES TO RECOGNISE
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {topic.exam_relevance.keyPhrases.map((p) => (
              <span
                key={p}
                style={{
                  background: "rgba(212,175,55,0.10)",
                  color: C.gold,
                  fontSize: 12,
                  padding: "4px 10px",
                  borderRadius: 999,
                  border: `1px solid ${C.border}`,
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {topic.quiz && topic.quiz.length > 0 && (
        <Section title={`Exam-Grade Quiz — ${topic.quiz.length} Questions`}>
          <Quiz questions={topic.quiz} />
        </Section>
      )}
    </Shell>
  );
}

/* ===================================================================== */
/* Reusable bits                                                         */
/* ===================================================================== */
function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px 80px" }}>
        <nav style={{ marginBottom: 24, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link to="/" style={{ color: C.gold, textDecoration: "none", fontSize: 13 }}>← RE5 Practice</Link>
          <Link to="/study-guide" style={{ color: C.textDim, textDecoration: "none", fontSize: 13 }}>Study Guide</Link>
          <Link to="/deeper-knowledge" style={{ color: C.textDim, textDecoration: "none", fontSize: 13 }}>Deeper Knowledge</Link>
        </nav>
        {children}
      </div>
    </div>
  );
}

function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header style={{ marginBottom: 28 }}>
      <h1 style={{ color: C.gold, margin: 0, fontSize: 34, letterSpacing: -0.5 }}>{title}</h1>
      <p style={{ color: C.textDim, marginTop: 10, fontSize: 15, lineHeight: 1.65, maxWidth: 720 }}>{subtitle}</p>
    </header>
  );
}

function Section({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section
      style={{
        background: C.panel,
        border: `1px solid ${C.border}`,
        borderRadius: 14,
        marginBottom: 16,
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          color: C.gold,
          fontSize: 16,
          fontWeight: 600,
          padding: "16px 20px",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          letterSpacing: 0.3,
        }}
      >
        <span>{title}</span>
        <span style={{ fontSize: 14, color: C.textDim }}>{open ? "−" : "+"}</span>
      </button>
      {open && <div style={{ padding: "0 20px 20px" }}>{children}</div>}
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ color: C.gold, fontSize: 11, fontWeight: 600, marginBottom: 4, letterSpacing: 0.5 }}>
        {label.toUpperCase()}
      </div>
      <div style={{ color: C.text, fontSize: 14, lineHeight: 1.65 }}>{value}</div>
    </div>
  );
}

function PillButton({
  active,
  onClick,
  label,
  activeLabel,
  activeColor = C.gold,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  activeLabel: string;
  activeColor?: string;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? `${activeColor}22` : "transparent",
        border: `1px solid ${active ? activeColor : C.borderSoft}`,
        color: active ? activeColor : C.textDim,
        padding: "6px 12px",
        borderRadius: 999,
        fontSize: 12,
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {active ? activeLabel : label}
    </button>
  );
}

function ScenarioTabs({ scenarios }: { scenarios: DKTopic["scenarios"] }) {
  const [active, setActive] = useState(0);
  if (!scenarios || scenarios.length === 0)
    return <div style={{ color: C.textDim }}>No scenarios.</div>;

  const colorFor = (t: string) =>
    t === "compliant" ? C.good : t === "breach" ? C.bad : C.warn;
  const labelFor = (t: string) =>
    t === "compliant" ? "Compliant" : t === "breach" ? "Breach" : "Gray Area";

  const s = scenarios[active];
  return (
    <div>
      <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
        {scenarios.map((sc, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              background: active === i ? `${colorFor(sc.type)}22` : "transparent",
              border: `1px solid ${active === i ? colorFor(sc.type) : C.borderSoft}`,
              color: active === i ? colorFor(sc.type) : C.textDim,
              padding: "6px 12px",
              borderRadius: 8,
              fontSize: 12,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            {labelFor(sc.type)}
          </button>
        ))}
      </div>
      <div
        style={{
          background: C.panel2,
          border: `1px solid ${colorFor(s.type)}55`,
          borderLeft: `3px solid ${colorFor(s.type)}`,
          borderRadius: 10,
          padding: 16,
        }}
      >
        <div style={{ color: colorFor(s.type), fontSize: 13, fontWeight: 700, marginBottom: 8 }}>
          {s.title}
        </div>
        <div style={{ color: C.text, fontSize: 14, lineHeight: 1.65, marginBottom: 12 }}>{s.narrative}</div>
        {s.key_learning && (
          <div style={{ color: C.textDim, fontSize: 13, lineHeight: 1.6 }}>
            <strong style={{ color: C.gold }}>Key learning: </strong>
            {s.key_learning}
          </div>
        )}
        {s.consequences && (
          <div style={{ color: C.textDim, fontSize: 13, lineHeight: 1.6 }}>
            <strong style={{ color: C.bad }}>Consequences: </strong>
            {s.consequences}
          </div>
        )}
      </div>
    </div>
  );
}

function Simulator({ data }: { data: DKSimulator }) {
  const [nodeKey, setNodeKey] = useState(data.start);
  const node = data.nodes[nodeKey];
  if (!node) return <div style={{ color: C.bad }}>Simulator step missing: {nodeKey}</div>;

  const reset = () => setNodeKey(data.start);

  return (
    <div
      style={{
        background: C.panel2,
        border: `1px solid ${C.borderSoft}`,
        borderRadius: 10,
        padding: 18,
      }}
    >
      <div style={{ color: C.text, fontSize: 14, lineHeight: 1.7, marginBottom: 14 }}>{node.text}</div>
      {node.choices && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {node.choices.map((c, i) => (
            <button
              key={i}
              onClick={() => setNodeKey(c.next)}
              style={{
                textAlign: "left",
                background: "transparent",
                border: `1px solid ${C.borderSoft}`,
                color: C.text,
                padding: "12px 14px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 14,
                lineHeight: 1.5,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.borderSoft)}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}
      {node.outcome && (
        <div style={{ marginTop: 12 }}>
          <div
            style={{
              display: "inline-block",
              background: node.outcome === "compliant" ? `${C.good}22` : `${C.bad}22`,
              color: node.outcome === "compliant" ? C.good : C.bad,
              padding: "6px 12px",
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 0.5,
              marginBottom: 12,
            }}
          >
            {node.outcome === "compliant" ? "✓ Compliant outcome" : "✕ Breach outcome"}
          </div>
          <div>
            <button
              onClick={reset}
              style={{
                background: "transparent",
                border: `1px solid ${C.gold}`,
                color: C.gold,
                padding: "8px 14px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              ↻ Try again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Quiz({ questions }: { questions: DKQuizQuestion[] }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState<boolean[]>(Array(questions.length).fill(false));
  const [correct, setCorrect] = useState<boolean[]>(Array(questions.length).fill(false));
  const [showExplanation, setShowExplanation] = useState(false);

  const q = questions[current];
  const isCorrect = selected === q.correctIndex;
  const total = questions.length;
  const answeredCount = answered.filter(Boolean).length;
  const correctCount = correct.filter(Boolean).length;
  const allDone = answeredCount === total;
  const pct = allDone ? Math.round((correctCount / total) * 100) : 0;

  const handleSelect = (idx: number) => {
    if (answered[current]) return;
    setSelected(idx);
    setShowExplanation(true);
    const newAnswered = [...answered];
    newAnswered[current] = true;
    setAnswered(newAnswered);
    const newCorrect = [...correct];
    newCorrect[current] = idx === q.correctIndex;
    setCorrect(newCorrect);
  };

  const goTo = (idx: number) => {
    setCurrent(idx);
    setSelected(null);
    setShowExplanation(false);
  };

  const reset = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(Array(questions.length).fill(false));
    setCorrect(Array(questions.length).fill(false));
    setShowExplanation(false);
  };

  return (
    <div>
      {/* Progress bar */}
      <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
        {questions.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              flex: 1,
              height: 6,
              borderRadius: 3,
              border: "none",
              cursor: "pointer",
              background: !answered[i]
                ? current === i
                  ? C.gold
                  : C.borderSoft
                : correct[i]
                  ? C.good
                  : C.bad,
              opacity: current === i ? 1 : 0.7,
            }}
            title={`Question ${i + 1}`}
          />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 14,
        }}
      >
        <span style={{ color: C.textDim, fontSize: 13 }}>
          Question {current + 1} of {total} — {answeredCount} answered, {correctCount} correct
        </span>
        {allDone && (
          <span
            style={{
              color: pct >= 66 ? C.good : C.bad,
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            {pct}% {pct >= 66 ? "PASSED" : "FAILED"} (66% required)
          </span>
        )}
      </div>

      {/* Question */}
      <div
        style={{
          background: C.panel2,
          border: `1px solid ${C.borderSoft}`,
          borderRadius: 10,
          padding: 18,
          marginBottom: 14,
        }}
      >
        <div style={{ color: C.text, fontSize: 15, lineHeight: 1.65, fontWeight: 600, marginBottom: 16 }}>
          {q.question}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {q.options.map((opt, i) => {
            const isThis = answered[current] && i === selected;
            const isAnswer = answered[current] && i === q.correctIndex;
            let bg = "transparent";
            let borderColor = C.borderSoft;
            let textColor = C.text;

            if (answered[current]) {
              if (isAnswer) {
                bg = `${C.good}18`;
                borderColor = C.good;
                textColor = C.good;
              } else if (isThis && !isCorrect) {
                bg = `${C.bad}18`;
                borderColor = C.bad;
                textColor = C.bad;
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                style={{
                  textAlign: "left",
                  background: bg,
                  border: `1px solid ${borderColor}`,
                  color: textColor,
                  padding: "12px 14px",
                  borderRadius: 8,
                  cursor: answered[current] ? "default" : "pointer",
                  fontSize: 14,
                  lineHeight: 1.5,
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                }}
                onMouseEnter={(e) => {
                  if (!answered[current]) e.currentTarget.style.borderColor = C.gold;
                }}
                onMouseLeave={(e) => {
                  if (!answered[current]) e.currentTarget.style.borderColor = C.borderSoft;
                }}
              >
                <span
                  style={{
                    minWidth: 24,
                    height: 24,
                    borderRadius: 12,
                    border: `2px solid ${answered[current] && isAnswer ? C.good : answered[current] && isThis ? C.bad : C.borderSoft}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    flexShrink: 0,
                    background: answered[current] && isAnswer ? `${C.good}22` : "transparent",
                    color: answered[current] && isAnswer ? C.good : C.textDim,
                  }}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && answered[current] && (
          <div
            style={{
              marginTop: 14,
              padding: 14,
              background: isCorrect ? `${C.good}10` : `${C.bad}10`,
              border: `1px solid ${isCorrect ? C.good : C.bad}44`,
              borderRadius: 8,
            }}
          >
            <div
              style={{
                color: correct[current] ? C.good : C.bad,
                fontSize: 13,
                fontWeight: 700,
                marginBottom: 6,
              }}
            >
              {correct[current] ? "Correct!" : "Incorrect"}
            </div>
            <div style={{ color: C.text, fontSize: 13, lineHeight: 1.6 }}>{q.explanation}</div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button
          onClick={() => current > 0 && goTo(current - 1)}
          disabled={current === 0}
          style={{
            background: "transparent",
            border: `1px solid ${current === 0 ? C.borderSoft : C.gold}`,
            color: current === 0 ? C.textDim : C.gold,
            padding: "8px 16px",
            borderRadius: 8,
            cursor: current === 0 ? "default" : "pointer",
            fontSize: 13,
          }}
        >
          Previous
        </button>

        <div style={{ display: "flex", gap: 8 }}>
          {allDone && (
            <button
              onClick={reset}
              style={{
                background: "transparent",
                border: `1px solid ${C.gold}`,
                color: C.gold,
                padding: "8px 16px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              Retry Quiz
            </button>
          )}
          <button
            onClick={() => current < total - 1 && goTo(current + 1)}
            disabled={current === total - 1}
            style={{
              background: current === total - 1 ? "transparent" : `${C.gold}22`,
              border: `1px solid ${current === total - 1 ? C.borderSoft : C.gold}`,
              color: current === total - 1 ? C.textDim : C.gold,
              padding: "8px 16px",
              borderRadius: 8,
              cursor: current === total - 1 ? "default" : "pointer",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Next
          </button>
        </div>
      </div>

      {/* Results summary when complete */}
      {allDone && (
        <div
          style={{
            marginTop: 16,
            padding: 18,
            background: pct >= 66 ? `${C.good}10` : `${C.bad}10`,
            border: `1px solid ${pct >= 66 ? C.good : C.bad}44`,
            borderRadius: 10,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 36, marginBottom: 8 }}>{pct >= 66 ? "🎉" : "📚"}</div>
          <div
            style={{
              color: pct >= 66 ? C.good : C.bad,
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 6,
            }}
          >
            {pct}% — {correctCount}/{total} Correct
          </div>
          <div style={{ color: C.textDim, fontSize: 14, lineHeight: 1.6 }}>
            {pct >= 66
              ? "You passed! You've demonstrated solid understanding of this topic. Keep it up!"
              : `You need 66% to pass the RE5 exam. Review the sections above and try again.`}
          </div>
        </div>
      )}
    </div>
  );
}

function SkeletonGrid() {
  return (
    <div
      style={{
        display: "grid",
        gap: 16,
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      }}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          style={{
            height: 140,
            background: C.panel,
            border: `1px solid ${C.borderSoft}`,
            borderRadius: 14,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}

function ErrorBox({ message }: { message: string }) {
  return (
    <div
      style={{
        background: "rgba(248,113,113,0.08)",
        border: `1px solid ${C.bad}66`,
        color: C.bad,
        padding: 16,
        borderRadius: 10,
        fontSize: 14,
      }}
    >
      {message}
    </div>
  );
}
