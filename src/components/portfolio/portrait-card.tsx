import Image from "next/image";

type PortraitCardProps = {
  src: string;
  alt: string;
};

export function PortraitCard({ src, alt }: PortraitCardProps) {
  return (
    <div className="reveal-up delay-2 paper-card grain-overlay relative mx-auto w-full max-w-[24rem] rounded-[2rem] p-3">
      <div className="relative aspect-[5/6] overflow-hidden rounded-[1.5rem] bg-surface">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 80vw, 24rem"
        />
      </div>
    </div>
  );
}
