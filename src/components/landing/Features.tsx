import { Link } from "@tanstack/react-router";
import { ArrowIcon, BookmarkIcon, PlayIcon, SearchIcon } from "./icons";

const features = [
  {
    icon: <SearchIcon />,
    label: "Find",
    title: "What's airing, not what's promoted",
    body: "Trending, latest episodes and search that tells you upfront whether a title is subbed or dubbed.",
    hash: "discover",
  },
  {
    icon: <PlayIcon />,
    label: "Watch",
    title: "Press play and keep going",
    body: "Episodes queue up on their own, and you can switch sub or dub on any title that has both.",
    hash: "player",
  },
  {
    icon: <BookmarkIcon />,
    label: "Keep",
    title: "A list that stays on your phone",
    body: "Save anything from its details page. Nothing syncs anywhere, nothing asks you to sign in.",
    hash: "library",
  },
] as const;

const manifest = [
  ["Version", "1.0.0 stable"],
  ["Platform", "Android 8.0+"],
  ["Built with", "Expo · React Native"],
  ["License", "Apache-2.0"],
  ["Accounts", "None"],
  ["Trackers", "None"],
];

export function Features() {
  return (
    <>
      <section className="border-t border-[color:var(--line-soft)] px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="label-mono text-lime-brand">Three things it does</p>

          <div className="mt-10 divide-y divide-[color:var(--line-soft)] border-y border-[color:var(--line-soft)]">
            {features.map((f) => (
              <Link
                key={f.label}
                to="/learn-more"
                hash={f.hash}
                className="group grid items-start gap-x-6 gap-y-4 py-9 transition-colors duration-150 md:grid-cols-[120px_minmax(0,1fr)_auto]"
              >
                <span className="flex items-center gap-3 text-lime-brand">
                  {f.icon}
                  <span className="label-mono">{f.label}</span>
                </span>
                <span>
                  <h3 className="font-display text-[26px] font-bold uppercase leading-[1.05] tracking-[0.01em] text-ink transition-colors duration-150 group-hover:text-lime-brand sm:text-[32px]">
                    {f.title}
                  </h3>
                  <span className="mt-3 block max-w-[52ch] text-[14px] leading-[1.7] text-mute">
                    {f.body}
                  </span>
                </span>
                <span className="label-mono inline-flex items-center gap-2 text-mute transition-colors group-hover:text-ink">
                  Read
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-6xl">
          <p className="label-mono text-mute">The build</p>
          <dl className="mt-6 grid gap-x-10 border-t border-[color:var(--line-soft)] sm:grid-cols-2 lg:grid-cols-3">
            {manifest.map(([k, v]) => (
              <div
                key={k}
                className="flex items-baseline justify-between gap-4 border-b border-[color:var(--line-soft)] py-4"
              >
                <dt className="label-mono text-mute">{k}</dt>
                <dd className="font-mono text-[13px] text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
