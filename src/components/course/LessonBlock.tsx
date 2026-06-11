import { useState } from "react";
import { ChevronDown, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { QuizBlock } from "./QuizBlock";
import type { Lesson } from "@/data/re5Task4";

interface Props {
  lesson: Lesson;
  /** 1-based index used for the lesson number badge */
  number: number;
  /** Total lesson count, for "Lesson N of M" badge */
  total?: number;
}

/**
 * One full lesson: an embedded YouTube player that can go full-page,
 * a concept summary, and the interactive quiz beneath it.
 */
export const LessonBlock: React.FC<Props> = ({ lesson, number, total = 14 }) => {
  const [playerReady, setPlayerReady] = useState(false);

  // YouTube embed URL. Add list/index params for playlist videos so
  // viewers stay in context. `rel=0` keeps suggestions to the same channel.
  const params = new URLSearchParams({ rel: "0", modestbranding: "1" });
  if (lesson.playlist) {
    params.set("list", lesson.playlist.listId);
    params.set("index", String(lesson.playlist.index));
  }
  const embedSrc = `https://www.youtube.com/embed/${lesson.youtubeId}?${params.toString()}`;
  const watchOnYouTubeHref = `https://www.youtube.com/watch?v=${lesson.youtubeId}${
    lesson.playlist
      ? `&list=${lesson.playlist.listId}&index=${lesson.playlist.index}`
      : ""
  }`;

  return (
    <section
      id={`lesson-${lesson.order}`}
      className="scroll-mt-24 space-y-6 rounded-3xl border border-border bg-card/50 p-4 sm:p-8"
    >
      {/* ── Lesson header ───────────────────────────────────────────────── */}
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            Lesson {number} of {total}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {lesson.id}
          </Badge>
        </div>
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {lesson.title}
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {lesson.qcDescription}
        </p>
      </header>

      {/* ── Video player (only when a video is assigned) ───────────────── */}
      {lesson.youtubeId ? (
        <div className="space-y-2">
          <div className="relative w-full overflow-hidden rounded-2xl bg-black shadow-lg aspect-video">
            {!playerReady && (
              <button
                type="button"
                onClick={() => setPlayerReady(true)}
                className="group absolute inset-0 z-10 flex items-center justify-center bg-black/60 transition hover:bg-black/40"
                aria-label={`Play lesson ${number}: ${lesson.title}`}
              >
                <img
                  src={`https://i.ytimg.com/vi/${lesson.youtubeId}/hqdefault.jpg`}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-60"
                  loading="lazy"
                />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black shadow-xl transition group-hover:scale-105">
                  <Play className="h-7 w-7 fill-current" />
                </div>
              </button>
            )}
            {playerReady && (
              <iframe
                src={`${embedSrc}&autoplay=1`}
                title={lesson.title}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            )}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>Click the video, then use the full-screen control to expand.</span>
            <a
              href={watchOnYouTubeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:text-foreground hover:underline"
            >
              Open on YouTube ↗
            </a>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-muted/20 p-4 text-xs text-muted-foreground sm:p-6">
          <span className="font-semibold text-foreground">Reference lesson —</span>{" "}
          no embedded video for this task yet. Review the core concepts and
          statutory references below, then attempt the knowledge check.
        </div>
      )}

      {/* ── Concept + statutory references ──────────────────────────────── */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="group flex w-full items-center justify-between rounded-xl border border-border bg-muted/30 px-4 py-3 text-left text-sm font-medium hover:bg-muted/50"
          >
            Core concepts & statutory references
            <ChevronDown className="h-4 w-4 transition group-data-[state=open]:rotate-180" />
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 grid gap-4 sm:grid-cols-5">
          <div className="sm:col-span-3 space-y-2 rounded-xl border border-border bg-card p-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              What this lesson covers
            </p>
            <ul className="list-disc space-y-1.5 pl-5 leading-relaxed">
              {lesson.coreConcepts.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-2 space-y-2 rounded-xl border border-border bg-card p-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Primary statutory references
            </p>
            <ul className="space-y-1.5 leading-relaxed">
              {lesson.statutoryRefs.map((r) => (
                <li key={r} className="font-mono text-xs">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* ── Quiz ────────────────────────────────────────────────────────── */}
      <QuizBlock quiz={lesson.quiz} scopeId={lesson.id} />
    </section>
  );
};
