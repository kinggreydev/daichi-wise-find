import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteNav } from "@/components/landing/SiteNav";
import { PhoneMockup } from "@/components/landing/PhoneMockup";
import homeAsset from "@/assets/daichi-home.png.asset.json";
import detailsAsset from "@/assets/daichi-details.png.asset.json";
import playerAsset from "@/assets/daichi-player.png.asset.json";
import libraryAsset from "@/assets/daichi-library.png.asset.json";

export const Route = createFileRoute("/learn-more")({
  head: () => ({
    meta: [
      { title: "Everything Daichi does — Learn more" },
      {
        name: "description",
        content:
          "A closer look at Daichi: discovery, anime details, the player and your list — one section each, with real screenshots from the Android app.",
      },
      { property: "og:title", content: "Everything Daichi does — Learn more" },
      {
        property: "og:description",
        content:
          "Discovery, anime details, the player and your list — the four parts of Daichi, explained with real screenshots.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/learn-more" }],
  }),
  component: LearnMore,
});

const sections = [
  {
    id: "discover",
    eyebrow: "Discover",
    title: "Find something to watch in seconds.",
    body: "The home screen opens on what's airing right now — no algorithmic feed, no sponsored rows. Search is one tap away and tells you upfront whether a title is subbed or dubbed.",
    bullets: [
      "Trending ranked list, refreshed daily",
      "Latest episodes across every airing show",
      "Search results labelled sub / dub per title",
    ],
    image: homeAsset.url,
    alt: "Daichi home screen with a featured anime, hot trends and latest episodes",
  },
  {
    id: "details",
    eyebrow: "Anime Details",
    title: "Everything about a show on one screen.",
    body: "Synopsis, score, studio, format and premiere date sit together without a tab to hunt through. Cast and voice actors are listed for the shows that have them.",
    bullets: [
      "Expandable synopsis, collapsed by default",
      "Characters and Japanese voice actors",
      '"You Might Also Like" recommendations',
    ],
    image: detailsAsset.url,
    alt: "Daichi anime details screen showing the story synopsis, technical details and voice actors",
  },
  {
    id: "player",
    eyebrow: "Player",
    title: "Press play, keep watching.",
    body: "Episodes queue up automatically so a session doesn't stop between them. Switch between subbed and dubbed sources on any title that offers both.",
    bullets: [
      "Episode list with search and sort",
      "Up-next queue that carries across a season",
      "Sub / dub switchable per title",
    ],
    image: playerAsset.url,
    alt: "Daichi player entry screen with watch subbed and dub buttons over a hero image",
  },
  {
    id: "library",
    eyebrow: "My List",
    title: "Your list, saved on your device.",
    body: "Anything you save shows up as a grid you can scan at a glance, with scores kept alongside the poster. Nothing is synced anywhere and nothing asks you to sign in.",
    bullets: [
      "Grid view of every saved title",
      "Add or remove from any details page",
      "No account, no login wall",
    ],
    image: libraryAsset.url,
    alt: "Daichi library grid of saved anime titles with star ratings",
  },
] as const;

const stack = [
  "Expo",
  "React Native",
  "TypeScript",
  "Expo Router",
  "NativeWind",
  "EAS Build",
];

function LearnMore() {
  return (
    <div className="min-h-screen bg-background font-sans text-[15px] leading-relaxed text-ink">
      <SiteNav variant="docs" />

      <main className="mx-auto w-full max-w-5xl px-5">
        <div className="pb-10 pt-14">
          <Link
            to="/"
            className="text-[13px] text-mute transition-colors duration-150 hover:text-lime-brand"
          >
            ← Back to Daichi
          </Link>
          <p className="mt-8 font-jp text-[13px] font-black text-lime-brand">大智</p>
          <h1 className="mt-3 font-display text-[40px] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
            Everything Daichi does.
          </h1>
          <p className="mt-4 max-w-[560px] text-mute">
            Four parts to the app — discovery, details, playback and your saved
            list. Here's what each one looks like in practice.
          </p>
        </div>

        <div>
          {sections.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <section
                key={s.id}
                id={s.id}
                className={`scroll-mt-24 py-[72px] ${
                  i === sections.length - 1
                    ? ""
                    : "border-b border-[color:var(--line)]"
                }`}
              >
                <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
                  <div className={reversed ? "lg:order-2" : "lg:order-1"}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-lime-brand">
                      {s.eyebrow}
                    </p>
                    <h2 className="mt-4 font-display text-[26px] font-bold leading-[1.2] tracking-[-0.025em] text-ink">
                      {s.title}
                    </h2>
                    <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.7] text-mute">
                      {s.body}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-[14px] text-mute">
                          <span aria-hidden="true" className="text-lime-brand">
                            —
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={reversed ? "lg:order-1" : "lg:order-2"}>
                    <PhoneMockup
                      src={s.image}
                      alt={s.alt}
                      width={230}
                      animate={false}
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <section className="border-t border-[color:var(--line)] py-16 text-center">
          <h2 className="font-display text-[26px] font-bold tracking-[-0.025em] text-ink">
            Built with
          </h2>
          <ul className="mt-7 flex flex-wrap justify-center gap-3">
            {stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line px-[18px] py-[9px] text-[13px] text-mute"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
