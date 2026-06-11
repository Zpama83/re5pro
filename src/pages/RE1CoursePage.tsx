import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RE1LessonBlock } from "@/components/re1/RE1LessonBlock";
import { re1Lessons } from "@/data/re1Course";

/**
 * RE1 course — task-level teaching layer with live quizzes pulled from the
 * Supabase question bank.
 *
 * Mirrors the structure of /course (RE5) but uses a dynamic quiz: each
 * lesson's quiz is sampled from `public.re1_questions` filtered by the
 * lesson's topicTags[]. Reload buttons let learners drill the same lesson
 * with a fresh random sample.
 */
const RE1CoursePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <section className="mb-10 space-y-4">
          <Badge variant="secondary" className="text-xs">
            RE1 · 16-Task Coverage · Key Individual
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            RE1 — full syllabus coverage in 16 lessons
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            One syllabus-anchored lesson per task. Each lesson summarises the
            core concepts and primary statutory references, then samples a
            five-question quiz from the live question bank — distributed across
            Knowledge, Comprehension, Application and Analysis levels just
            like the live RE1 examination. Use the "Shuffle a fresh quiz"
            button to drill the same lesson with a new sample.
          </p>
          <div className="rounded-xl border border-amber-500/40 bg-amber-500/5 p-4 text-xs leading-relaxed text-amber-100">
            <strong className="font-semibold">Study material — not a substitute for the live exam.</strong>{" "}
            Content drafted from the FAIS framework and the Moonstone
            preparation guide; pending compliance-officer review. Use as
            practice, not as a definitive answer key.
          </div>
        </section>

        {/* Lesson nav */}
        <nav
          aria-label="Lesson index"
          className="mb-12 rounded-2xl border border-border bg-card/50 p-4 sm:p-6"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Jump to a task
          </p>
          <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {re1Lessons.map((l, idx) => (
              <li key={l.id}>
                <a
                  href={`#re1-lesson-${l.taskNumber}`}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-xs transition hover:border-primary hover:bg-accent/40"
                >
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[10px] font-semibold text-primary">
                    {idx + 1}
                  </span>
                  <span className="truncate">
                    {l.title.replace(/^Task\s+\d+\s*[—-]\s*/, "")}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Lessons */}
        <div className="space-y-12">
          {re1Lessons.map((l, idx) => (
            <RE1LessonBlock
              key={l.id}
              lesson={l}
              number={idx + 1}
              total={re1Lessons.length}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-border bg-card/50 p-8 text-center">
          <GraduationCap className="h-10 w-10 text-primary" />
          <h2 className="text-xl font-semibold">
            Ready to sit a full RE1 mock exam?
          </h2>
          <p className="max-w-md text-sm text-muted-foreground">
            The mock exam draws an 80-question timed paper from the same bank
            these lessons sample — the closest experience to the live
            examination.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <Link to="/re1/mock-exam">Go to RE1 Mock Exam</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/re1/practice">
                <BookOpen className="mr-2 h-4 w-4" /> Free-form practice
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

const SiteHeader = () => (
  <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
    <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
      <Link
        to="/re1"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to RE1
      </Link>
      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        RE5 Pro · RE1 Course
      </span>
    </div>
  </header>
);

export default RE1CoursePage;
