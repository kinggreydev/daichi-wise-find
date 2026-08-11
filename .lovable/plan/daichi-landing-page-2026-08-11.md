# Daichi Landing Page

Build the Daichi marketing page at `/` (replacing the placeholder index route), plus a `/learn-more` page for the feature links to point at.

## Look and feel

Near-black background (#0b0c0a), lime accent (#b6e33e), quiet developer-made tone. Bricolage Grotesque for headings, Inter for body, Noto Sans JP weight 900 only for the 大智 mark. Fonts loaded via `<link>` tags in the root route head.

## Sections

1. **Nav** — sticky, blurs on scroll. Rounded lime icon + "Daichi" wordmark, a non-functional "Search" input with a `K` key hint, hover-underlined "Learn more" / "GitHub" links, solid lime "Download" pill that lifts on hover.
2. **Hero** — centered, ~96px top padding, soft 520px radial lime glow at 10% behind content. Kicker pill (大智 / great wisdom), two-line h1 ("Anime, tracked" / "the way it should be."), one-line muted tagline, lime "Download" + ghost "Learn more" CTAs, pulsing lime dot with "Latest stable release — Daichi v1.0.0". Below it, a 286px phone mockup (7px #16180f bezel, 34px radius, heavy soft shadow) that rises and fades in on load.
3. **Features** — its own section: lime uppercase eyebrow "Why Daichi", centered heading "Everything you need, nothing you don't", three cards (Discover / Library / Player) in a grid that stacks below 760px. Panel background, 1px border, 18px radius, 46px lime-tinted icon badge with hand-drawn 1.6px-stroke SVG linework, title, one-sentence description, lime arrow link. Card hover lifts 4px, border warms to lime, arrow nudges right.
4. **Footer** — single centered muted line: Open-source · Apache Licensed · GitHub · Copyright © 2026 Daichi.

**Learn more page** — a short dark page with `#discover`, `#library`, `#player` anchor sections matching the same visual language, so the card links resolve instead of 404ing.

## Hero phone screenshot

Your uploaded Daichi app screenshot (the Bleach home screen) becomes the phone mockup image, served through the asset CDN rather than committed as a binary.

## Motion

Only three animated moments: phone rise-in on load, the 2.4s pulsing release dot, and hover states. All transitions 0.15–0.2s ease. Everything disabled under `prefers-reduced-motion: reduce`.

## Technical notes

- Tokens go into `src/styles.css` as oklch-converted semantic variables registered in `@theme inline`; no hardcoded color utilities in components. `@keyframes` for pulse and rise-in plus the reduced-motion guard live there too.
- New components under `src/components/landing/`: `SiteNav`, `Hero`, `PhoneMockup`, `Features`, `SiteFooter`.
- Routes: rewrite `src/routes/index.tsx`, add `src/routes/learn-more.tsx`. Each gets its own `head()` with a Daichi-specific title, description, and og/twitter tags.
- No backend, no data fetching — static presentational page.
