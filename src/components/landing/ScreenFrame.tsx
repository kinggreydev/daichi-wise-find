type ScreenFrameProps = {
  src: string;
  alt: string;
  label: string;
  width?: number;
};

export function ScreenFrame({ src, alt, label, width = 214 }: ScreenFrameProps) {
  return (
    <figure className="shrink-0" style={{ width }}>
      <div className="screen-card overflow-hidden rounded-[22px] border border-line bg-panel p-1.5 shadow-[0_30px_60px_-34px_rgba(0,0,0,0.95)]">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="block w-full rounded-[17px]"
        />
      </div>
      <figcaption className="label-mono mt-3 text-mute">{label}</figcaption>
    </figure>
  );
}
