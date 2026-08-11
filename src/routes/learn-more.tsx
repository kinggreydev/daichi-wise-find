import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteNav } from "@/components/landing/SiteNav";
import { BookmarkIcon, PlayIcon, SearchIcon } from "@/components/landing/icons";

export const Route = createFileRoute("/learn-more")({
  head: () => ({
    meta: [
      { title: "Learn more — Daichi" },
      {
        name: "description",
        content:
          "How Daichi works: discovery from open metadata, a local-first library, and a focused player for subs and dubs.",
      },
      { property: "og:title", content: "Learn more — Daichi" },
      {
        property: "og:description",
        content:
          "How Daichi works: discovery, library and player, explained in a couple of sentences each.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/learn-more" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/learn-more" }],
  }),
  component: LearnMore,
});

const sections = [
  {
    id: "discover",
    icon: <SearchIcon />,
    title: "Discover",
    body: "Search across more than ten thousand titles, or browse trending, seasonal and top-airing lists. Metadata comes from open community sources, so nothing is behind a login.",
  },
  {
    id: "library",
    icon: <BookmarkIcon />,
    title: "Library",
    body: "Your list lives on your device. Mark episodes as watched, pick up where you left off, and export the whole thing whenever you want to move on.",
  },
  {
    id: "player",
    icon: <PlayIcon />,
    title: "Player",
    body: "Subbed and dubbed playback with gesture seek, speed control and background audio. No overlays, no autoplay trailers, no recommendations mid-episode.",
  },
] as const;

function LearnMore() {
  return (
    <div className="min-h-screen bg-background font-sans text-[15px] leading-relaxed text-ink">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lime-brand">
          Learn more
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] text-ink">
          What Daichi actually does
        </h1>
        <p className="mt-4 max-w-[520px] text-mute">
          Three parts, built by one small group of developers in the open.
        </p>

        <div className="mt-14 space-y-5">
          {sections.map((s) => (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-24 rounded-[18px] border border-line bg-panel px-8 py-9"
            >
              <span className="flex size-[46px] items-center justify-center rounded-[14px] bg-lime-soft text-lime-brand">
                {s.icon}
              </span>
              <h2 className="mt-6 font-display text-2xl font-bold tracking-[-0.025em] text-ink">
                {s.title}
              </h2>
              <p className="mt-3 text-mute">{s.body}</p>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
