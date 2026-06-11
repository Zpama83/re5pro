import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LessonBlock } from "@/components/course/LessonBlock";
import { re5Task4Lessons } from "@/data/re5Task4";
import { re5SupplementaryLessons } from "@/data/re5Supplementary";
import { re5OtherTaskLessons } from "@/data/re5OtherTasks";

/**
 * RE5 Course page — Task 4 lesson series.
 *
 * Each of the 14 lessons combines an embedded YouTube video (scalable to full-screen
 * via the player's built-in control) with an interactive 5-question quiz beneath.
 */
const CoursePage = () => {
  const totalLessons =
    re5Task4Lessons.length +
    re5OtherTaskLessons.length +
    re5SupplementaryLessons.length;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        {/* ── Page intro ────────────────────────────────────────────────── */}
        <section className="mb-10 space-y-4">
          <Badge variant="secondary" className="text-xs">
            RE5 · Task 4 · Specific Codes of Conduct
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Adhere to the Specific Codes of Conduct
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Three layers of preparation: a deep dive on Task 4 (Specific Codes
            of Conduct) across all 14 Qualifying Criteria, syllabus-coverage
            lessons for the other seven RE5 tasks (Tasks 1, 2, 3, 5, 6, 7, 8),
            and four supplementary videos covering FAIS Code refreshers, CPD
            calculations, high-frequency exam concepts, and exam tactics. Every
            lesson is followed by a five-question knowledge check distributed
            across Knowledge, Comprehension, Application and Analysis levels —
            modelled on the structure of the live RE5 examination.
          </p>
          <div className="rounded-xl border border-amber-500/40 bg-amber-500/5 p-4 text-xs leading-relaxed text-amber-100">
            <strong className="font-semibold">Study material — not a substitute for the live exam.</strong>{" "}
            Quiz content is drafted from the General Code of Conduct and Board
            Notices and is pending compliance-officer review. Use it as practice,
            not as a definitive answer key.
          </div>
        </section>

        {/* ── Lesson nav ────────────────────────────────────────────────── */}
        <nav
          aria-label="Lesson index"
          className="mb-12 rounded-2xl border border-border bg-card/50 p-4 sm:p-6"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Jump to a lesson
          </p>
          <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {[
              ...re5Task4Lessons,
              ...re5OtherTaskLessons,
              ...re5SupplementaryLessons,
            ].map((l, idx) => (
              <li key={l.id}>
                <a
                  href={`#lesson-${l.order}`}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-xs transition hover:border-primary hover:bg-accent/40"
                >
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[10px] font-semibold text-primary">
                    {idx + 1}
                  </span>
                  <span className="truncate">
                    {l.title.replace(
                      /^(QC\d+|Supp[-\w]*|Task\s+\d+)\s*[—-]\s*/,
                      "",
                    )}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── Core Task 4 lessons ───────────────────────────────────────── */}
        <div className="space-y-12">
          {re5Task4Lessons.map((l, idx) => (
            <LessonBlock
              key={l.id}
              lesson={l}
              number={idx + 1}
              total={totalLessons}
            />
          ))}
        </div>

        {/* ── Other RE5 Tasks (coverage overview) section ──────────────── */}
        <section
          id="other-tasks"
          className="mt-20 mb-10 scroll-mt-24 space-y-4 border-t border-border pt-12"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <Badge variant="secondary" className="text-xs">
              All RE5 Tasks · Coverage overview
            </Badge>
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            The other seven RE5 tasks at a glance
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            One syllabus-anchored lesson per task for Tasks 1, 2, 3, 5, 6, 7
            and 8 — covering the rest of the RE5 examination outside the Task 4
            deep dive above. Each lesson uses the same exam-grade five-question
            format: one Knowledge, one Comprehension, two Application, one
            Analysis. Statutory references are mapped directly from the
            Moonstone Preparation Guide Appendix A.
          </p>
        </section>

        <div className="space-y-12">
          {re5OtherTaskLessons.map((l, idx) => (
            <LessonBlock
              key={l.id}
              lesson={l}
              number={re5Task4Lessons.length + idx + 1}
              total={totalLessons}
            />
          ))}
        </div>

        {/* ── Supplementary deep-dive section ──────────────────────────── */}
        <section
          id="supplementary"
          className="mt-20 mb-10 scroll-mt-24 space-y-4 border-t border-border pt-12"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <Badge variant="secondary" className="text-xs">
              Supplementary deep-dive · Cross-cutting topics
            </Badge>
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Beyond Task 4 — refresh, calculate, and prepare for the exam
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Four additional videos that cut across the RE5 syllabus: a rapid
            FAIS Code refresher, CPD calculations, high-frequency exam concepts,
            and exam-day tactics. Each is followed by the same five-question
            exam-grade quiz format as the core 14 lessons.
          </p>
        </section>

        <div className="space-y-12">
          {re5SupplementaryLessons.map((l, idx) => (
            <LessonBlock
              key={l.id}
              lesson={l}
              number={
                re5Task4Lessons.length +
                re5OtherTaskLessons.length +
                idx +
                1
              }
              total={totalLessons}
            />
          ))}
        </div>

        {/* ── Footer CTA ────────────────────────────────────────────────── */}
        <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-border bg-card/50 p-8 text-center">
          <GraduationCap className="h-10 w-10 text-primary" />
          <h2 className="text-xl font-semibold">Ready to test under exam conditions?</h2>
          <p className="max-w-md text-sm text-muted-foreground">
            Head back to the home page to sit a full timed mock examination across all
            eight RE5 tasks.
          </p>
          <Button asChild>
            <Link to="/">Go to mock exams</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

const SiteHeader = () => (
  <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
    <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>
      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        RE5 Pro · Task 4 Course
      </span>
    </div>
  </header>
);

export default CoursePage;
