import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteNav } from "@/components/landing/SiteNav";
import { ScreenFrame } from "@/components/landing/ScreenFrame";
import homeAsset from "@/assets/daichi-home.png.asset.json";
import detailsAsset from "@/assets/daichi-details.png.asset.json";
import playerAsset from "@/assets/daichi-player.png.asset.json";
import libraryAsset from "@/assets/daichi-library.png.asset.json";

export const Route = createFileRoute("/learn-more")({
  head: () => ({
    meta: [
      { title: "Inside Daichi — every screen, explained" },
      {
        name: "description",
        content:
          "A screen-by-screen look at Daichi for Android: home and discovery, the watch screen, anime details, and your saved list.",
      },
      { property: "og:title", content: "Inside Daichi — every screen, explained" },
      {
        property: "og:description",
        content:
          "Home, watch, details and your list — the four screens of Daichi, with real captures from the Android app.",
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
    label: "Screen 01",
    eyebrow: "Home & discovery",
    title: "Find something in seconds",
    body: "The app opens on what's airing right now — no algorithmic feed, no sponsored rows. Search sits one tap away and labels each result sub or dub before you commit.",
    rows: [
      ["Hot trends", "Ranked, refreshed daily"],
      ["Latest episodes", "Across every airing show"],
      ["Search", "Sub / dub marked per title"],
    ],
    image: homeAsset.url,
    alt: "Daichi home screen with a featured anime, hot trends and latest episodes",
  },
  {
    id: "player",
    label: "Screen 02",
    eyebrow: "Watch",
    title: "Press play, keep watching",
    body: "Pick a language, pick an episode, and the next one is already queued. The episode list is searchable and sortable for long-running shows.",
    rows: [
      ["Sources", "Subbed and dubbed"],
      ["Queue", "Auto-advance across a season"],
      ["Episodes", "Search and sort"],
    ],
    image: playerAsset.url,
    alt: "Daichi watch screen with watch subbed and dub buttons over a hero image",
  },
  {
    id: "details",
    label: "Screen 03",
    eyebrow: "Anime details",
    title: "The whole show on one screen",
    body: "Synopsis, score, studio, format and premiere date sit together — no tabs to hunt through. Cast and Japanese voice actors are listed where the data exists.",
    rows: [
      ["Synopsis", "Expandable, collapsed by default"],
      ["Credits", "Characters and voice actors"],
      ["Related", "You might also like"],
    ],
    image: detailsAsset.url,
    alt: "Daichi details screen showing synopsis, technical details and voice actors",
  },
  {
    id: "library",
    label: "Screen 04",
    eyebrow: "My list",
    title: "Saved on your device, nowhere else",
    body: "Anything you save shows up as a grid you can scan at a glance, scores kept next to the poster. Nothing is uploaded and nothing asks you to sign in.",
    rows: [
      ["View", "Poster grid with scores"],
      ["Editing", "Add or remove from any details page"],
      ["Storage", "Local only, no account"],
    ],
    image: libraryAsset.url,
    alt: "Daichi list of saved anime titles with star ratings",
  },
] as const;

function LearnMore() {
  return (
    <div className="min-h-screen bg-background font-sans text-[15px] leading-relaxed text-ink">
      <SiteNav variant="docs" />

      <main className="mx-auto w-full max-w-6xl px-5">
        <div className="pb-12 pt-14">
          <Link
            to="/"
            className="label-mono text-mute transition-colors duration-150 hover:text-lime-brand"
          >
            ← Back
          </Link>
          <p className="label-mono mt-10 text-lime-brand">Four screens</p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.75rem,7vw,5rem)] font-extrabold uppercase leading-[0.9] text-ink">
            Inside the app
          </h1>
          <p className="mt-5 max-w-[52ch] text-mute">
            Everything Daichi does lives on four screens. Here's what each one
            looks like, captured from the Android build.
          </p>
        </div>

        {sections.map((s, i) => {
          const reversed = i % 2 === 1;
          return (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-20 border-t border-[color:var(--line-soft)] py-16"
            >
              <div className="grid items-start gap-12 md:grid-cols-[1fr_auto]">
                <div className={reversed ? "md:order-2" : "md:order-1"}>
                  <div className="flex items-baseline gap-4">
                    <span className="label-mono text-lime-brand">{s.label}</span>
                    <span className="label-mono text-mute">{s.eyebrow}</span>
                  </div>
                  <h2 className="mt-5 max-w-[24ch] font-display text-[clamp(2rem,4vw,3rem)] font-bold uppercase leading-[0.95] text-ink">
                    {s.title}
                  </h2>
                  <p className="mt-5 max-w-[52ch] text-[15px] leading-[1.75] text-mute">
                    {s.body}
                  </p>
                  <dl className="mt-8 max-w-[520px] border-t border-[color:var(--line-soft)]">
                    {s.rows.map(([k, v]) => (
                      <div
                        key={k}
                        className="flex items-baseline justify-between gap-6 border-b border-[color:var(--line-soft)] py-3.5"
                      >
                        <dt className="label-mono text-mute">{k}</dt>
                        <dd className="text-right font-mono text-[13px] text-ink">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className={reversed ? "md:order-1" : "md:order-2"}>
                  <ScreenFrame
                    src={s.image}
                    alt={s.alt}
                    label={s.eyebrow}
                    width={236}
                  />
                </div>
              </div>
            </section>
          );
        })}

        <section className="border-t border-[color:var(--line-soft)] py-16">
          <p className="label-mono text-mute">Ready</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
            <h2 className="max-w-[20ch] font-display text-[clamp(2rem,4vw,3rem)] font-extrabold uppercase leading-[0.95] text-ink">
              Put it on your phone
            </h2>
            <a
              href="https://github.com"
              className="label-mono rounded-full bg-lime-brand px-6 py-3 font-medium text-background transition-all duration-150 hover:-translate-y-px hover:shadow-[0_10px_28px_-10px_var(--lime)]"
            >
              Download for Android
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
