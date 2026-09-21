/**
 * End-to-end behaviour of the RE5 practice exam.
 *
 * The data-quality suite (src/data/__tests__) validates the question bank but
 * never mounts the component, which is how a ReferenceError in the
 * results-saving effect ("examType is not defined") shipped: every completed
 * exam threw during commit, unmounted the whole tree, and left the candidate
 * on a blank page with no score and no saved history. These tests drive a real
 * session from the home screen to the results screen so that regression cannot
 * come back silently.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RE5Exam from "@/components/RE5Exam";

const HISTORY_KEY = "re5pro-history";
const MISSED_KEY = "re5pro-missed";

/** Click through a whole session, always taking the first option. */
function completeExam(questionCount: number) {
  const slider = document.querySelector('input[type="range"]') as HTMLInputElement;
  fireEvent.change(slider, { target: { value: String(questionCount) } });
  fireEvent.click(screen.getByText(/Start Practice Exam/i));

  for (let i = 0; i < questionCount; i++) {
    const options = Array.from(document.querySelectorAll("button")).filter((b) =>
      /^[ABCD]\S/.test((b.textContent || "").trim()),
    );
    expect(options.length, `question ${i + 1} should render 4 options`).toBe(4);
    fireEvent.click(options[0]);

    const advance = Array.from(document.querySelectorAll("button")).find((b) =>
      /Next Question|View Results/.test(b.textContent || ""),
    );
    expect(advance, `question ${i + 1} should offer a way forward`).toBeTruthy();
    fireEvent.click(advance!);
  }
}

describe("RE5 practice exam", () => {
  let consoleError: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    localStorage.clear();
    // A React commit-phase error is reported through console.error even when the
    // tree unmounts, so we capture it rather than letting it pass unnoticed.
    consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleError.mockRestore();
  });

  it("reaches the results screen without throwing", () => {
    render(
      <MemoryRouter>
        <RE5Exam />
      </MemoryRouter>,
    );

    expect(() => completeExam(10)).not.toThrow();

    const uncaught = consoleError.mock.calls
      .map((c) => String(c[0]))
      .filter((m) => /is not defined|Uncaught/.test(m));
    expect(uncaught, `unexpected runtime error: ${uncaught[0]}`).toEqual([]);

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
});
