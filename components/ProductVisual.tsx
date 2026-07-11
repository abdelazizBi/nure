import { LuxuryBottlePlaceholder } from "@/components/LuxuryBottlePlaceholder";

type ProductVisualProps = {
  name: string;
  imagePath?: string;
  size?: "hero" | "spotlight" | "card";
  variant?: string;
  label?: string;
  sublabel?: string;
  dark?: boolean;
};

export function ProductVisual({
  name,
  imagePath,
  size = "card",
  variant = "ivory",
  label,
  sublabel,
  dark = false,
}: ProductVisualProps) {
  const stageClass =
    size === "hero"
      ? "relative flex min-h-[430px] items-center justify-center md:min-h-[620px]"
      : size === "spotlight"
        ? "relative flex min-h-[460px] items-center justify-center"
        : "relative flex h-64 items-center justify-center";

  const glowClass =
    size === "hero"
      ? "absolute h-[78%] w-[82%] rounded-full bg-champagne/24 blur-3xl"
      : size === "spotlight"
        ? "absolute h-[72%] w-[72%] rounded-full bg-champagne/20 blur-3xl"
        : "absolute h-44 w-44 rounded-full bg-champagne/16 blur-2xl";

  return (
    <div
      className={stageClass}
      data-image-path={imagePath}
      aria-label={`${name} visual placeholder`}
    >
      <div className={glowClass} aria-hidden="true" />
      <LuxuryBottlePlaceholder
        name={name}
        imagePath={imagePath}
        size={size}
        variant={variant}
        label={label}
        sublabel={sublabel}
        dark={dark}
      />
    </div>
  );
}
