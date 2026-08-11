import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LeafMark } from "./icons";

export function SiteNav({ variant = "landing" }: { variant?: "landing" | "docs" }) {
  const isDocs = variant === "docs";
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "border-line bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center gap-4 px-5">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-lg bg-lime-soft text-lime-brand">
            <LeafMark size={15} />
          </span>
          <span className="font-display text-[15px] font-bold tracking-[-0.02em] text-ink">
            Daichi
          </span>
        </Link>

        {!isDocs && (
          <div className="ml-2 hidden min-w-0 flex-1 sm:block">
            <div className="flex h-9 max-w-64 items-center gap-2 rounded-lg border border-line bg-panel px-3 text-mute">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="M16 16l4 4" />
              </svg>
              <span className="flex-1 text-[13px]">Search</span>
              <kbd className="rounded border border-line px-1.5 py-0.5 font-sans text-[10px] text-mute">
                K
              </kbd>
            </div>
          </div>
        )}

        <div className="ml-auto flex items-center gap-5">
          <Link
            to={isDocs ? "/" : "/learn-more"}
            className="nav-link hidden text-[13px] text-mute transition-colors hover:text-ink sm:inline"
          >
            {isDocs ? "Home" : "Learn more"}
          </Link>

          <a
            href="https://github.com"
            className="nav-link hidden text-[13px] text-mute transition-colors hover:text-ink sm:inline"
          >
            GitHub
          </a>
          <a
            href="https://github.com"
            className="rounded-full bg-lime-brand px-4 py-2 text-[13px] font-semibold text-background transition-all duration-150 hover:-translate-y-px hover:shadow-[0_6px_20px_-6px_var(--lime)]"
          >
            Download
          </a>
        </div>
      </nav>
    </header>
  );
}
