import { Link } from "@tanstack/react-router";
import { ScreenFrame } from "./ScreenFrame";
import Home from "@/assets/home.png";
import Details from "@/assets/anime-details.png";
import Library from "@/assets/library-with-anime.png";
import Player from "@/assets/player-playing.png";

const strip = [
  {
    src: Home,
    label: "Home",
    alt: "Daichi home screen with a featured anime, hot trends and latest episodes",
  },
  {
    src: Player,
    label: "Watch",
    alt: "Daichi watch screen with subbed and dubbed buttons over a hero image",
  },
  {
    src: Details,
    label: "Details",
    alt: "Daichi details screen with synopsis, studio and voice actors",
  },
  {
    src: Library,
    label: "My list",
    alt: "Daichi list of saved anime titles with scores",
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
              href="https://github.com"
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
