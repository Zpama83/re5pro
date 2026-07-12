import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Study Guide", to: "/study-guide" },
  { label: "Deeper Knowledge", to: "/deeper-knowledge" },
  { label: "Resources", to: "/resources" },
  { label: "CPD", to: "/cpd-calculator" },
  { label: "RE1 Key Individual", to: "/re1" },
  { label: "Community", to: "/community" },
  { label: "Blog", to: "/blog" },
];

const ctaItem = { label: "RE5 Task 4 Course", to: "/course" };

export function MainNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="flex items-center gap-3 text-slate-100"
          activeClassName="text-white"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-sm font-extrabold text-slate-950">
            R
          </div>
          <div className="hidden xs:block">
            <div className="text-base font-semibold text-white">RE5 Certify Pro</div>
            <div className="text-xs text-slate-400">FSCA RE5 / RE1 exam prep</div>
          </div>
        </NavLink>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1.5 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-amber-300"
                activeClassName="bg-slate-800 text-amber-200"
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to={ctaItem.to}
              className="ml-1 rounded-full bg-amber-500/15 px-4 py-2 text-sm font-semibold text-amber-300 transition hover:bg-amber-500/25"
              activeClassName="bg-amber-500/25 text-amber-200"
            >
              {ctaItem.label}
            </NavLink>
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 text-slate-200 transition hover:border-slate-700 hover:text-white lg:hidden"
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="lg:hidden">
          <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
            <nav className="rounded-[28px] border border-slate-800/70 bg-slate-950/98 p-4 shadow-2xl shadow-slate-950/10 backdrop-blur-xl">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className="rounded-2xl px-3 py-3 text-sm font-medium text-slate-100 transition hover:bg-slate-800 hover:text-amber-300"
                    activeClassName="bg-slate-800 text-amber-200"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
                <NavLink
                  to={ctaItem.to}
                  className="mt-1 rounded-2xl bg-amber-500/15 px-3 py-3 text-sm font-semibold text-amber-300 transition hover:bg-amber-500/25"
                  activeClassName="bg-amber-500/25 text-amber-200"
                  onClick={() => setOpen(false)}
                >
                  {ctaItem.label}
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
