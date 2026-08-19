export function SiteFooter() {
  return (
    <footer className="border-t border-line-soft py-9">
      <div className="mx-auto flex w-full max-w-6xl px-5 flex-wrap items-center justify-between gap-4">
        <p className="label-mono flex flex-wrap items-center gap-3 text-mute">
          <a
            href="https://github.com/lohit-dev/Daichi"
            className="transition-colors hover:text-ink"
          >
            Open source
          </a>
          <span className="text-line">/</span>
          <a
            href="https://www.apache.org/licenses/LICENSE-2.0"
            className="transition-colors hover:text-ink"
          >
            Apache-2.0
          </a>
          <span className="text-line">/</span>
          <a
            href="https://github.com/lohit-dev/Daichi"
            className="transition-colors hover:text-ink"
          >
            GitHub
          </a>
        </p>
        <p className="label-mono text-mute">
          <span className="font-jp font-black text-lime-brand">大智</span> © 2026 Daichi
        </p>
      </div>
    </footer>
  );
}
