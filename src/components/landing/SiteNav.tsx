import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

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
          ? "border-line bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center gap-6 px-5">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="font-jp text-[15px] font-black leading-none text-lime-brand">大智</span>
          <span className="font-display text-[19px] font-extrabold uppercase leading-none tracking-[0.02em] text-ink">
            Daichi
          </span>
        </Link>

        <span className="label-mono hidden text-mute sm:inline">Android · v1.5.0</span>

        <div className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link
            to={isDocs ? "/" : "/learn-more"}
            className="nav-link label-mono text-mute transition-colors hover:text-ink"
          >
            {isDocs ? "Home" : "The app"}
          </Link>
          <a
            href="https://github.com/lohit-dev/Daichi"
            className="nav-link label-mono hidden text-mute transition-colors hover:text-ink sm:inline"
          >
            Source
          </a>
          <a
            href="https://github.com/lohit-dev/Daichi/releases/download/v1.5.0/app-release.apk"
            className="label-mono rounded-full bg-lime-brand px-4 py-2 font-medium text-background transition-all duration-150 hover:-translate-y-px hover:shadow-[0_6px_20px_-6px_var(--lime)]"
          >
            Get the APK
          </a>
        </div>
      </nav>
    </header>
  );
}
