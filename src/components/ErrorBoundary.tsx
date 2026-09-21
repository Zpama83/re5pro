import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

/**
 * Last-resort guard around the app.
 *
 * Without this, an error thrown during render or in an effect unmounts the
 * whole React tree and the user is left staring at a blank page — which is
 * exactly what happened when the exam-results effect referenced an undeclared
 * variable. A candidate mid-exam should never lose the page silently.
 */
interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Surfaced in the browser console and in any error-reporting hook we add later.
    console.error("Unhandled application error:", error, info.componentStack);
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    return (
      <div
        role="alert"
        style={{
          background: "#031427",
          color: "#d3e4fe",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <div
          style={{
            maxWidth: 560,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(212,175,55,0.25)",
            borderRadius: 16,
            padding: 32,
          }}
        >
          <h1 style={{ fontSize: 22, margin: "0 0 12px", color: "#f5f7ff" }}>
            Something went wrong on this page
          </h1>
          <p style={{ color: "#bfc9e1", lineHeight: 1.7, margin: "0 0 20px", fontSize: 15 }}>
            Your saved progress and exam history are stored in this browser and have
            not been lost. Reload to carry on studying — if it keeps happening, please
            let us know what you were doing at the time.
          </p>
          <pre
            style={{
              background: "rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 8,
              padding: 12,
              fontSize: 12,
              color: "#ffb4ab",
              whiteSpace: "pre-wrap",
              margin: "0 0 20px",
            }}
          >
            {error.message}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: "linear-gradient(135deg, #e9c176, #d4af37)",
              color: "#412d00",
              border: "none",
              padding: "12px 24px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Reload the page
          </button>
        </div>
      </div>
    );
  }
}
