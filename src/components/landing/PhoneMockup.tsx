import phoneAsset from "@/assets/daichi-home.png.asset.json";

export function PhoneMockup() {
  return (
    <div className="animate-rise mx-auto w-[286px]">
      <div className="overflow-hidden rounded-[34px] border-[7px] border-[color:var(--line-soft)] bg-panel shadow-[0_40px_80px_-30px_rgba(0,0,0,0.85)]">
        <img
          src={phoneAsset.url}
          alt="Daichi app home screen showing a featured anime and trending titles"
          width={272}
          height={588}
          loading="lazy"
          className="block w-full"
        />
      </div>
    </div>
  );
}
