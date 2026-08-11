import { Link } from "@tanstack/react-router";
import { ArrowIcon, BookmarkIcon, PlayIcon, SearchIcon } from "./icons";

const features = [
  {
    icon: <SearchIcon />,
    title: "Discover",
    body: "Browse trending, seasonal and top-rated titles pulled from open metadata sources.",
    hash: "discover",
  },
  {
    icon: <BookmarkIcon />,
    title: "Library",
    body: "Keep your own list on your own device, with progress that stays in sync offline.",
    hash: "library",
  },
  {
    icon: <PlayIcon />,
    title: "Player",
    body: "A focused player with subs, dubs and gesture controls — nothing else in the way.",
    hash: "player",
  },
] as const;

export function Features() {
  return (
    <section className="border-t border-[color:var(--line-soft)] px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-lime-brand">
          Why Daichi
        </p>
        <h2 className="mx-auto mt-4 max-w-xl text-center font-display text-3xl font-bold tracking-[-0.025em] text-ink sm:text-4xl">
          Everything you need, nothing you don't
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Link
              key={f.title}
              to="/learn-more"
              hash={f.hash}
              className="group rounded-[18px] border border-line bg-panel px-8 py-9 transition-all duration-200 hover:-translate-y-1 hover:border-[color:var(--lime)] hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.9)]"
            >
              <span className="flex size-[46px] items-center justify-center rounded-[14px] bg-lime-soft text-lime-brand">
                {f.icon}
              </span>
              <h3 className="mt-6 font-display text-lg font-bold tracking-[-0.02em] text-ink">
                {f.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-mute">{f.body}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-lime-brand">
                Read more
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
