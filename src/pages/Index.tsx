import { Navigate } from "react-router-dom";
import RE5Exam from "@/components/RE5Exam";
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

  return <RE5Exam />;
};

export default Index;
