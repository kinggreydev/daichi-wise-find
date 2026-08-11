import phoneAsset from "@/assets/daichi-home.png.asset.json";

type PhoneMockupProps = {
  src?: string;
  alt?: string;
  width?: number;
  animate?: boolean;
};

export function PhoneMockup({
  src = phoneAsset.url,
  alt = "Daichi app home screen showing a featured anime and trending titles",
  width = 286,
  animate = true,
}: PhoneMockupProps) {
  const compact = width < 260;
  return (
    <div
      className={`mx-auto ${animate ? "animate-rise" : ""}`}
      style={{ width }}
    >
      <div
        className={`overflow-hidden bg-panel shadow-[0_40px_80px_-30px_rgba(0,0,0,0.85)] ${
          compact
            ? "rounded-[26px] border-[6px] border-[#1a1c16]"
            : "rounded-[34px] border-[7px] border-[color:var(--line-soft)]"
        }`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="block w-full"
        />
      </div>
    </div>
  );
}
