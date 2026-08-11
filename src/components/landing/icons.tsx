const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SearchIcon({ size = 22 }: { size?: number }) {
  return (
    <svg {...base} width={size} height={size} aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4 4" />
    </svg>
  );
}

export function BookmarkIcon({ size = 22 }: { size?: number }) {
  return (
    <svg {...base} width={size} height={size} aria-hidden="true">
      <path d="M6.5 4h11v16l-5.5-4-5.5 4V4Z" />
    </svg>
  );
}

export function PlayIcon({ size = 22 }: { size?: number }) {
  return (
    <svg {...base} width={size} height={size} aria-hidden="true">
      <path d="M9 6.5l8.5 5.5L9 17.5V6.5Z" />
    </svg>
  );
}

export function ArrowIcon({ size = 14 }: { size?: number }) {
  return (
    <svg {...base} width={size} height={size} aria-hidden="true">
      <path d="M5 12h13" />
      <path d="M13 6.5L18.5 12 13 17.5" />
    </svg>
  );
}

export function LeafMark({ size = 24 }: { size?: number }) {
  return (
    <svg {...base} width={size} height={size} aria-hidden="true">
      <path d="M5 19c0-7 5.5-13 14-14 1 8.5-5 15-10.5 15C6.5 20 5 19 5 19Z" />
      <path d="M7.5 16.5c3-3.5 6-5.5 9.5-7" />
    </svg>
  );
}
