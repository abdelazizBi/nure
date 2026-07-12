import Image from "next/image";
import type { CSSProperties } from "react";
import { productImageFallback } from "@/lib/data";

type ProductVisualProps = {
  name: string;
  image?: string;
  size?: "hero" | "spotlight" | "card";
  dark?: boolean;
  className?: string;
};

const imageSizes = {
  hero: "(min-width: 1024px) 50vw, (min-width: 640px) 68vw, 92vw",
  spotlight: "(min-width: 1024px) 44vw, (min-width: 640px) 64vw, 88vw",
  card: "(min-width: 768px) 30vw, 86vw",
};

export function ProductVisual({
  name,
  image,
  size = "card",
  dark = false,
  className = "",
}: ProductVisualProps) {
  const imageWrapStyle =
    size === "card"
      ? ({ flex: "0 0 auto", width: "min(94%, 270px)" } as CSSProperties)
      : undefined;

  const stageClass =
    size === "hero"
      ? "relative flex min-h-[460px] items-center justify-center md:min-h-[680px]"
      : size === "spotlight"
        ? "relative flex min-h-[500px] items-center justify-center"
        : "relative flex h-80 items-center justify-center";

  const glowClass =
    size === "hero"
      ? "absolute h-[78%] w-[82%] rounded-full bg-champagne/24 blur-3xl"
      : size === "spotlight"
        ? "absolute h-[72%] w-[72%] rounded-full bg-champagne/20 blur-3xl"
        : "absolute h-44 w-44 rounded-full bg-champagne/16 blur-2xl";

  return (
    <div
      className={`${stageClass} product-visual-stage product-visual-stage-${size} ${
        dark ? "product-visual-stage-dark" : ""
      } ${className}`}
    >
      <div className={glowClass} aria-hidden="true" />
      <div
        className={`real-bottle-wrap real-bottle-wrap-${size}`}
        style={imageWrapStyle}
      >
        <Image
          src={image ?? productImageFallback}
          alt={`${name} perfume bottle`}
          fill
          sizes={imageSizes[size]}
          className="real-bottle-image object-contain"
          priority={size === "hero" || size === "spotlight"}
        />
        <div className="real-bottle-shine" aria-hidden="true" />
        <div className="real-bottle-reflection" aria-hidden="true" />
      </div>
    </div>
  );
}
