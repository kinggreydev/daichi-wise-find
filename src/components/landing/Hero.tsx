import { Link } from "@tanstack/react-router";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-24 pb-20">
      <div className="hero-glow left-1/2 top-4 -translate-x-1/2" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--lime-soft)] bg-lime-soft px-3 py-1.5">
          <span className="font-jp text-[13px] font-black text-lime-brand">大智</span>
          <span className="text-[12px] text-mute">/ great wisdom</span>
        </span>

        <h1 className="mt-7 font-display text-5xl leading-[1.05] tracking-[-0.035em] sm:text-6xl">
          <span className="block font-extrabold text-ink">Anime, tracked</span>
          <span className="block font-normal text-mute">the way it should be.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-[460px] text-[15px] leading-relaxed text-mute">
          A free, open-source anime discovery app for Android. No accounts, no ads, no noise.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com"
            className="rounded-full bg-lime-brand px-6 py-3 text-sm font-semibold text-background transition-all duration-150 hover:-translate-y-px hover:shadow-[0_8px_24px_-8px_var(--lime)]"
          >
            Download
          </a>
          <Link
            to="/learn-more"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors duration-150 hover:border-[color:var(--lime)]"
          >
            Learn more
          </Link>
        </div>

        <p className="mt-7 flex items-center justify-center gap-2 text-[12px] text-mute">
          <span className="animate-pulse-dot inline-block size-1.5 rounded-full bg-lime-brand" />
          Latest stable release — Daichi v1.0.0
        </p>

        <div className="mt-16">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
