import { createRoot } from "react-dom/client";
import "./index.css";
import { ConfigurationError } from "./components/ConfigurationError";

/**
 * `src/integrations/supabase/client.ts` calls `createClient` at module scope,
 * which throws when its environment variables are unset. That file is imported
 * transitively by App, so the throw happens while modules are being evaluated —
 * before React renders anything and outside any error boundary. The result is a
 * blank white page with no clue as to why.
 *
 * So check the configuration first, and only then load the app. App is imported
 * dynamically for exactly that reason: a static import would evaluate the
 * Supabase client before this check could run.
 */
const REQUIRED_ENV = ["VITE_SUPABASE_URL", "VITE_SUPABASE_PUBLISHABLE_KEY"] as const;

const missing = REQUIRED_ENV.filter((name) => !import.meta.env[name]);

const root = createRoot(document.getElementById("root")!);

if (missing.length > 0) {
  console.error(`Missing required environment variables: ${missing.join(", ")}`);
  root.render(<ConfigurationError missing={[...missing]} />);
} else {
  void import("./App.tsx").then(({ default: App }) => root.render(<App />));
}
