type ScreenFrameProps = {
  src: string;
  alt: string;
  width?: number;
};

export function ScreenFrame({ src, alt, width = 214 }: ScreenFrameProps) {
  return (
    <figure className="max-w-full shrink-0" style={{ width }}>
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
    </figure>
  );
}
