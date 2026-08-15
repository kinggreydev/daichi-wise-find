# Daichi Discovery Hub

# Daichi Landing Page — Design Prompt

Use this as a build spec for recreating the Daichi marketing site (e.g. in Next.js/Tailwind, Astro, or handed to a coding agent) — everything needed to reproduce it exactly, without needing the original HTML file.

## Brand

- App: **Daichi** (大智, "great wisdom") — a free, open-source anime discovery/streaming app for Android, built with Expo/React Native.
- Tone: quiet, restrained, developer-made. Not a commercial streaming service — closer to how Mihon/Tachiyomi present themselves. No hype copy, no "revolutionary," no fake urgency.
- Reference: functionally modeled on mihon.app's real structure (VitePress docs site) — sticky nav with search, one hero phone screenshot, three feature cards, plain footer. Not a long scrolling marketing page.

## Color tokens

```
--bg:        #0b0c0a   (near-black background)
--panel:     #131511   (card/surface background)
--line:      #232620   (default border)
--line-soft: #1a1c17   (subtler divider)
--lime:      #b6e33e   (brand accent — buttons, links, icon fills, glow)
--lime-soft: rgba(182,227,62,0.14)   (tinted badge backgrounds)
--ink:       #f0f1ea   (primary text)
--mute:      #8a9082   (secondary text)
```

## Typography

- **Display/headings**: Bricolage Grotesque (variable weight, 400–800). Tight letter-spacing (-0.02em to -0.035em on the hero h1). Used for h1/h2/h3 only — not body copy.
- **Body**: Inter, 400–600 weight. Base size 15px, line-height 1.6.
- **Kanji accents**: Noto Sans JP, weight 900, used only for the 智/大智 mark — never for body text.
- Google Fonts import: `Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800` + `Inter:wght@400;500;600` + `Noto+Sans+JP:wght@900`

## Layout — section by section

**Nav** (sticky, blurred on scroll)
- Left: 24px rounded-icon logo + "Daichi" wordmark, weight 700
- Center-left: fake search input, placeholder "Search", with a `K` kbd hint on the right edge
- Right: text links (Learn more, GitHub) with an animated underline on hover, plus a solid lime "Download" pill button that lifts 1px on hover with a soft lime shadow

**Hero** (centered, generous vertical padding ~96px top)
- A soft radial lime glow (520px circle, 10% opacity) positioned behind the content, not a hard shape
- Kicker pill: lime-tinted background, lime border at 25% opacity, containing "大智" in Noto Sans JP + "/ great wisdom" in muted Inter
- H1: two lines, first line full-weight ink color, second line muted/lighter weight — e.g. "Anime, tracked" / "the way it should be."
- One-line tagline below, muted, max-width ~460px, centered
- Two CTAs side by side: solid lime primary "Download", outlined ghost "Learn more"
- A small release-status line beneath the CTAs: a pulsing lime dot (2.4s ease-out pulse ring) + "Latest stable release — Daichi v1.0.0"
- One hero phone mockup below everything: 286px wide, dark bezel border (#16180f, ~7px), rounded 34px, heavy soft drop shadow, fades/rises in on page load (translateY 18px → 0, 0.7s cubic-bezier(0.16,1,0.3,1))

**Feature section** (below hero, NOT part of the hero — its own moment)
- Small uppercase lime eyebrow: "Why Daichi"
- Centered heading: "Everything you need, nothing you don't"
- Three-column card grid (stacks to 1 column under 760px), 20px gap
- Each card: `--panel` background, 1px `--line` border, 18px border-radius, 36px/32px padding
- Card hover: lifts translateY(-4px), border brightens to lime at 35% opacity, soft shadow appears
- Inside each card: a 46px rounded icon badge (lime-soft background, lime linework icon, 22px), then h3 title, then muted description, then a lime text link with an arrow that nudges right on card hover
- Cards: **Discover** (search icon) / **Library** (bookmark icon) / **Player** (play icon) — link out to `learn-more.html#discover`, `#library`, `#player`

**Footer**
- Single centered line: "Open-source · Apache Licensed · GitHub · Copyright © 2026 Daichi", muted color, links brighten to ink on hover, `·` separators in the border-line color

## Motion rules

- Everything respects `prefers-reduced-motion: reduce` (disable animations/transitions near-instantly)
- Only three animated moments: hero phone rise-in on load, the pulsing release dot, and hover states (underlines, card lift, button lift, arrow nudge) — nothing loops or auto-plays besides the pulse
- All transitions 0.15–0.2s ease, nothing slower

## What NOT to do

- No gradient gimmicks beyond the one soft hero glow
- No numbered markers (01/02/03) — the three features aren't a sequence
- No stock icon packs — use simple 1.6px-stroke linework SVGs matching the lime accent
- No dense marketing copy — every section keeps to 1–2 sentences max use whatever image you like

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/245c8054-b55a-4c50-be8a-c2b6639ef82a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
