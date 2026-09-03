import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteNav } from "@/components/landing/SiteNav";
import { ScreenFrame } from "@/components/landing/ScreenFrame";
import HomeImg from "@/assets/home_framed.png";
import DetailsImg from "@/assets/anime-details_framed.png";
import LibraryImg from "@/assets/library_framed.png";
import PlayerImg from "@/assets/player-overlay_framed.png";
import SearchImg from "@/assets/search-results_framed.png";
import CreditsImg from "@/assets/details-scrolled-1_framed.png";

const Home = HomeImg;
const Details = DetailsImg;
const Library = LibraryImg;
const Player = PlayerImg;
const Discover = SearchImg;
const Credits = CreditsImg;

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
    label: "Home",
    eyebrow: "Opens on what's airing",
    title: "Find something in seconds",
    body: "The app opens on what's airing right now — no algorithmic feed, no sponsored rows. Search sits one tap away and labels each result sub or dub before you commit.",
    rows: [
      ["Hot trends", "Ranked, refreshed daily"],
      ["Latest episodes", "Across every airing show"],
      ["Search", "Sub / dub marked per title"],
    ],
    image: Home,
    alt: "Daichi home screen with a featured anime, hot trends and latest episodes",
  },
  {
    id: "player",
    label: "Watch",
    eyebrow: "Sub or dub, your call",
    title: "Press play, keep watching",
    body: "A full player with scrubbing, skip controls, lock, picture-in-picture and fullscreen — with the episode list and chat sitting right below it so you never leave the screen.",
    rows: [
      ["Controls", "Scrub, skip, lock, PiP, fullscreen"],
      ["Sources", "Auto quality, language, server"],
      ["Episodes", "Now playing marked in the list"],
    ],
    image: Player,
    alt: "Daichi player with playback controls, progress bar and the episode list below",
  },

  {
    id: "details",
    label: "Details",
    eyebrow: "One screen, whole show",
    title: "The whole show on one screen",
    body: "Synopsis, score, studio, format and premiere date sit together — no tabs to hunt through. Cast and Japanese voice actors are listed where the data exists.",
    rows: [
      ["Synopsis", "Expandable, collapsed by default"],
      ["Credits", "Characters and voice actors"],
      ["Related", "You might also like"],
    ],
    image: Details,
    alt: "Daichi details screen showing synopsis, technical details and voice actors",
  },
  {
    id: "credits",
    label: "Cast",
    eyebrow: "Characters and voice actors",
    title: "Who is behind the voice",
    body: "Every details page carries the cast: characters paired with their Japanese voice actors, plus premiered, studio, genres and airing status in one plain table.",
    rows: [
      ["Cast", "Character to voice actor pairs"],
      ["Facts", "Premiered, studio, genres, status"],
      ["Related", "You might also like"],
    ],
    image: Credits,
    alt: "Daichi details screen showing the story, facts table and voice actor pairs",
  },
  {
    id: "library",
    label: "My List",
    eyebrow: "Local to your phone",
    title: "Saved on your device, nowhere else",
    body: "My List is a plain grid of what you saved, with the score on every poster. It lives on the phone — nothing is uploaded, nothing asks you to sign in.",
    rows: [
      ["Grid", "Posters with scores, saved count on top"],
      ["Editing", "Add or remove from any details page"],
      ["Storage", "Local only, no account"],
    ],
    image: Library,
    alt: "Daichi My Library screen showing eight saved anime posters with scores",
  },
  {
    id: "search",
    label: "Search",
    eyebrow: "Search across 10,000+ titles",
    title: "Type it, find it",
    body: "One search field over more than ten thousand titles. Results land as a poster grid with scores, so a franchise with thirty entries is still readable at a glance.",
    rows: [
      ["Search", "Free text across the catalogue"],
      ["Results", "Poster grid, scores on each card"],
      ["Clear", "One tap back to browsing"],
    ],
    image: Discover,
    alt: "Daichi search results for Detective Conan shown as a poster grid with scores",
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
          <p className="label-mono mt-10 text-lime-brand">Every screen, explained</p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.75rem,7vw,5rem)] font-extrabold uppercase leading-[0.9] text-ink">
            Inside the app
          </h1>
          <p className="mt-5 max-w-[52ch] text-mute">
            Everything Daichi does lives on four screens. Here's what each one looks like, captured
            from the Android build.
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
              <div
                className={`grid items-center gap-10 md:gap-16 ${
                  reversed
                    ? "md:grid-cols-[auto_minmax(0,1fr)]"
                    : "md:grid-cols-[minmax(0,1fr)_auto]"
                }`}
              >
                <div className={reversed ? "md:order-2" : "md:order-1"}>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="label-mono text-lime-brand">{s.label}</span>
                    <span className="label-mono text-mute">{s.eyebrow}</span>
                  </div>
                  <h2 className="mt-5 max-w-[24ch] font-display text-[clamp(2rem,4vw,3rem)] font-bold uppercase leading-[0.95] text-ink">
                    {s.title}
                  </h2>
                  <p className="mt-5 max-w-[52ch] text-[15px] leading-[1.75] text-mute">{s.body}</p>
                  <dl className="mt-8 max-w-[560px] border-t border-[color:var(--line-soft)]">
                    {s.rows.map(([k, v]) => (
                      <div
                        key={k}
                        className="grid gap-1 border-b border-[color:var(--line-soft)] py-3.5 sm:grid-cols-[minmax(0,150px)_minmax(0,1fr)] sm:items-baseline sm:gap-6"
                      >
                        <dt className="label-mono text-mute">{k}</dt>
                        <dd className="font-mono text-[13px] text-ink sm:text-right">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className={`flex justify-center ${reversed ? "md:order-1" : "md:order-2"}`}>
                  <ScreenFrame src={s.image} alt={s.alt} width={252} />
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
              href="https://github.com/lohit-dev/Daichi/releases/latest"
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
