import { Link } from "@tanstack/react-router";
import { ScreenFrame } from "./ScreenFrame";
import Home from "@/assets/home.webp.asset.json";
import Details from "@/assets/anime-details.webp.asset.json";
import Player from "@/assets/player-overlay.png.asset.json";
import Library from "@/assets/library.png.asset.json";
import Trends from "@/assets/view-all.webp.asset.json";
import Search from "@/assets/search-results.webp.asset.json";

const strip = [
  {
    src: Home.url,
    label: "Home",
    alt: "Daichi home screen featuring Bleach with hot trends and latest episodes",
  },
  {
    src: Trends.url,
    label: "Trends",
    alt: "Daichi hot trends screen with a grid of ranked anime posters and scores",
  },
  {
    src: Details.url,
    label: "Details",
    alt: "Daichi details screen for Demon Slayer with score, duration and watch buttons",
  },
  {
    src: Player.url,
    label: "Player",
    alt: "Daichi player with playback controls, progress bar and the episode list below",
  },
  {
    src: Library.url,
    label: "My List",
    alt: "Daichi My Library screen showing saved anime posters with scores",
  },
  {
    src: Search.url,
    label: "Search",
    alt: "Daichi search results for Detective Conan as a poster grid with scores",
  },
];


export function Hero() {
  return (
    <section className="relative overflow-hidden pb-4 pt-16 sm:pt-24">
      <div className="hero-glow -left-24 top-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5">
        <p className="label-mono text-lime-brand">大智 — great wisdom</p>

        <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.25rem,10vw,7.5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.01em] text-ink">
          Every anime you
          <br />
          <span className="text-mute">meant to finish.</span>
        </h1>

        <div className="mt-9 grid gap-8 border-t border-line-soft pt-7 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-[46ch] text-[15px] leading-[1.7] text-mute">
            Daichi is an open-source Android app for finding anime, watching it subbed or dubbed,
            and keeping your own list on your own phone. No account, no ads, no feed deciding for
            you.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/lohit-dev/Daichi/releases/latest"
              className="label-mono rounded-full bg-lime-brand px-6 py-3 font-medium text-background transition-all duration-150 hover:-translate-y-px hover:shadow-[0_10px_28px_-10px_var(--lime)]"
            >
              Download for Android
            </a>
            <Link
              to="/learn-more"
              className="label-mono rounded-full border border-line px-6 py-3 text-ink transition-colors duration-150 hover:border-lime-brand"
            >
              See the app
            </Link>
          </div>
        </div>
      </div>

      <div className="relative mt-16">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="rail" aria-hidden="true" />
        </div>
        <div className="animate-rise mt-8 overflow-x-auto pb-4">
          <div className="flex w-max gap-5 px-5 md:px-[max(1.25rem,calc(50vw-36rem+1.25rem))]">
            {strip.map((s) => (
              <ScreenFrame key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
