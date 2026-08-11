export function SiteFooter() {
  const items = [
    { label: "Open-source", href: "https://github.com" },
    { label: "Apache Licensed", href: "https://www.apache.org/licenses/LICENSE-2.0" },
    { label: "GitHub", href: "https://github.com" },
  ];

  return (
    <footer className="border-t border-[color:var(--line-soft)] px-5 py-10">
      <p className="flex flex-wrap items-center justify-center gap-2 text-center text-[13px] text-mute">
        {items.map((item) => (
          <span key={item.label} className="flex items-center gap-2">
            <a
              href={item.href}
              className="transition-colors duration-150 hover:text-ink"
            >
              {item.label}
            </a>
            <span className="text-line">·</span>
          </span>
        ))}
        <span>Copyright © 2026 Daichi</span>
      </p>
    </footer>
  );
}
