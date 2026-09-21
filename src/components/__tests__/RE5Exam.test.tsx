/**
 * End-to-end behaviour of the RE5 practice exam.
 *
 * The data-quality suite (src/data/__tests__) validates the question bank but
 * never mounts the component, which is how a ReferenceError in the
 * results-saving effect ("examType is not defined") shipped: every completed
 * exam threw during commit, unmounted the whole tree, and left the candidate
 * on a blank page with no score and no saved history. These tests drive a real
 * session from the home screen to the results screen so that regression cannot
 * come back silently, and cover the navigation a candidate needs — skipping,
 * going back, and submitting with blanks.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RE5Exam from "@/components/RE5Exam";

const HISTORY_KEY = "re5pro-history";
const MISSED_KEY = "re5pro-missed";

const buttons = () => Array.from(document.querySelectorAll("button"));
const byText = (pattern: RegExp) =>
  buttons().find((b) => pattern.test((b.textContent || "").trim()));

/** The four answer buttons render as "A" + the option text. */
const optionButtons = () =>
  buttons().filter((b) => /^[ABCD]\S/.test((b.textContent || "").trim()));

/** The question-navigator strip: one small button per question, numbered. */
const navigatorButtons = () =>
  buttons().filter((b) => b.getAttribute("aria-label")?.startsWith("Question "));

function startExam(questionCount: number) {
  const slider = document.querySelector('input[type="range"]') as HTMLInputElement;
  fireEvent.change(slider, { target: { value: String(questionCount) } });
  fireEvent.click(screen.getByText(/Start Practice Exam/i));
  // The slider's minimum is 10, so a smaller request would be clamped and the
  // test would quietly assert against the wrong session length.
  expect(screen.getByText(new RegExp(`Question 1 of ${questionCount}`))).toBeTruthy();
}

/** Answer every question, always taking the first option, then submit. */
function completeExam(questionCount: number) {
  startExam(questionCount);
  for (let i = 0; i < questionCount; i++) {
    const options = optionButtons();
    expect(options.length, `question ${i + 1} should render 4 options`).toBe(4);
    fireEvent.click(options[0]);

    const advance = byText(/Next Question|Finish & View Results/);
    expect(advance, `question ${i + 1} should offer a way forward`).toBeTruthy();
    fireEvent.click(advance!);
  }
}

describe("RE5 practice exam", () => {
  let consoleError: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    localStorage.clear();
    // A React commit-phase error is reported through console.error even when
    // the tree unmounts, so we capture it rather than let it pass unnoticed.
    consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleError.mockRestore();
  });

  const expectNoRuntimeErrors = () => {
    const uncaught = consoleError.mock.calls
      .map((c) => String(c[0]))
      .filter((m) => /is not defined|Uncaught/.test(m));
    expect(uncaught, `unexpected runtime error: ${uncaught[0]}`).toEqual([]);
  };

  it("reaches the results screen without throwing", () => {
    render(
      <MemoryRouter>
        <RE5Exam />
      </MemoryRouter>,
    );

    expect(() => completeExam(10)).not.toThrow();
    expectNoRuntimeErrors();

    // The tree must still be mounted, with a real score on screen.
    expect(document.body.textContent).not.toBe("");
    expect(screen.getByText(/Competency Heatmap/i)).toBeTruthy();
    expect(screen.getByText(/^Correct$/)).toBeTruthy();
  });

  it("persists the finished session to history", () => {
    render(
      <MemoryRouter>
        <RE5Exam />
      </MemoryRouter>,
    );
    completeExam(10);

    const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
    expect(history).toHaveLength(1);
    expect(history[0].total).toBe(10);
    expect(history[0].examType).toBe("practice");
    expect(history[0].passed).toBe(history[0].pct >= 66);
    expect(Object.keys(history[0].taskScores).length).toBeGreaterThan(0);

    // Wrong answers must be banked for the spaced-repetition drill.
    const missed = JSON.parse(localStorage.getItem(MISSED_KEY) || "{}");
    expect(Object.keys(missed).length).toBe(10 - history[0].score);
  });

  it("lets a candidate skip a question and come back to it", () => {
    render(
      <MemoryRouter>
        <RE5Exam />
      </MemoryRouter>,
    );
    startExam(10);

    // Nothing chosen yet, so the forward action offers to skip.
    expect(byText(/^Skip →$/)).toBeTruthy();
    const firstQuestion = screen.getByText(/Question 1 of 10/);
    expect(firstQuestion).toBeTruthy();
    fireEvent.click(byText(/^Skip →$/)!);

    expect(screen.getByText(/Question 2 of 10/)).toBeTruthy();
    expect(byText(/^← Previous$/)).toBeTruthy();

    // Back to question 1 through the navigator, and answer it this time.
    fireEvent.click(navigatorButtons()[0]);
    expect(screen.getByText(/Question 1 of 10/)).toBeTruthy();
    expect(navigatorButtons()[0].getAttribute("aria-label")).toMatch(/not answered/);

    fireEvent.click(optionButtons()[0]);
    expect(navigatorButtons()[0].getAttribute("aria-label")).toMatch(/, answered/);
    expect(screen.getByText(/1 of 10 answered/)).toBeTruthy();
  });

  it("flags a question for review and shows it in the navigator", () => {
    render(
      <MemoryRouter>
        <RE5Exam />
      </MemoryRouter>,
    );
    startExam(10);

    expect(navigatorButtons()[0].getAttribute("aria-label")).not.toMatch(/flagged/);
    fireEvent.click(byText(/Flag for review/)!);
    expect(navigatorButtons()[0].getAttribute("aria-label")).toMatch(/flagged/);

    // Toggling off again.
    fireEvent.click(byText(/Flagged for review/)!);
    expect(navigatorButtons()[0].getAttribute("aria-label")).not.toMatch(/flagged/);
  });

  it("warns before submitting with blanks, and marks them incorrect", () => {
    render(
      <MemoryRouter>
        <RE5Exam />
      </MemoryRouter>,
    );
    startExam(10);

    // Answer only the first question, then try to finish.
    fireEvent.click(optionButtons()[0]);
    fireEvent.click(byText(/Finish early/)!);

    // The count is interpolated, so it renders across several text nodes.
    expect(document.body.textContent).toMatch(/9 questions still unanswered/);
    fireEvent.click(byText(/Submit anyway/)!);
    expectNoRuntimeErrors();

    const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
    expect(history[0].total).toBe(10);
    // Nine blanks can never be right, so at most the one answered question is.
    expect(history[0].score).toBeLessThanOrEqual(1);
    // The review must say a blank was left blank, not show an empty answer.
    fireEvent.click(byText(/Review Answers & Explanations/)!);
    expect(document.body.textContent).toMatch(/Your answer: not answered/);
  });

  it("locks an answer once the explanation has been revealed", () => {
    render(
      <MemoryRouter>
        <RE5Exam />
      </MemoryRouter>,
    );
    startExam(10);

    fireEvent.click(optionButtons()[0]);
    // Practice mode reveals feedback immediately; the options lock with it.
    for (const option of optionButtons()) {
      expect(option.hasAttribute("disabled")).toBe(true);
    }
  });
});
