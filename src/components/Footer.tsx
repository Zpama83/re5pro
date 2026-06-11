import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

/**
 * Global footer. The admin entry is a deliberately discreet icon at the
 * bottom-right whose colour matches the background tint — it's there for the
 * admin to use, but invisible to everyone else at a glance.
 *
 * The /admin route itself is also gated (only the hardcoded admin email gets
 * past it), so visibility here is purely a visual nicety, not security.
 */
export const Footer: React.FC = () => (
  <footer className="pointer-events-none fixed inset-x-0 bottom-0 z-20 flex justify-end p-3 sm:p-4">
    <Link
      to="/admin"
      aria-label="Admin"
      title="Admin"
      className={[
        "pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full",
        // Background-blended: very low opacity in normal state,
        // becomes legible on hover for the admin who knows it's there.
        "bg-transparent text-foreground/10",
        "transition-colors duration-150",
        "hover:bg-background/80 hover:text-foreground/70 focus-visible:bg-background/80 focus-visible:text-foreground/70",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/50",
      ].join(" ")}
    >
      <Shield className="h-4 w-4" strokeWidth={1.5} />
    </Link>
  </footer>
);
