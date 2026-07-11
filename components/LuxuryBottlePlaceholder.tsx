type BottleVariant =
  | "ivory"
  | "champagne"
  | "saffron"
  | "amber"
  | "rose"
  | "deep-gold";

type LuxuryBottlePlaceholderProps = {
  name: string;
  imagePath?: string;
  variant?: BottleVariant | string;
  size?: "hero" | "spotlight" | "card";
  label?: string;
  sublabel?: string;
  dark?: boolean;
};

const variantStyles: Record<BottleVariant, string> = {
  ivory: "[--bottle-accent:247_242_234] [--bottle-liquid:220_199_171] [--bottle-ink:30_28_26]",
  champagne:
    "[--bottle-accent:200_169_106] [--bottle-liquid:255_224_157] [--bottle-ink:30_28_26]",
  saffron:
    "[--bottle-accent:196_123_64] [--bottle-liquid:211_151_83] [--bottle-ink:30_28_26]",
  amber:
    "[--bottle-accent:152_104_53] [--bottle-liquid:213_153_75] [--bottle-ink:30_28_26]",
  rose: "[--bottle-accent:211_178_167] [--bottle-liquid:218_154_146] [--bottle-ink:30_28_26]",
  "deep-gold":
    "[--bottle-accent:200_169_106] [--bottle-liquid:116_78_38] [--bottle-ink:255_249_239]",
};

const sizeStyles = {
  hero: "w-[min(68vw,360px)]",
  spotlight: "w-[min(62vw,330px)]",
  card: "w-[112px]",
};

export function LuxuryBottlePlaceholder({
  name,
  imagePath,
  variant = "ivory",
  size = "card",
  label = "NŪRÉ",
  sublabel = "نوري",
  dark = false,
}: LuxuryBottlePlaceholderProps) {
  const normalizedVariant =
    variant in variantStyles ? (variant as BottleVariant) : "ivory";

  return (
    <div
      className={`luxury-bottle-wrap ${sizeStyles[size]} ${variantStyles[normalizedVariant]}`}
      data-image-path={imagePath}
      aria-label={`${name} placeholder bottle. Replace with ${imagePath ?? "a future product image"}.`}
    >
      <div className="bottle-spray" aria-hidden="true" />
      <div className="bottle-orbit bottle-orbit-one" aria-hidden="true" />
      <div className="bottle-orbit bottle-orbit-two" aria-hidden="true" />
      <div className={`luxury-bottle ${dark ? "luxury-bottle-dark" : ""}`}>
        <div className="luxury-bottle-cap" />
        <div className="luxury-bottle-neck" />
        <div className="luxury-bottle-shoulder" />
        <div className="luxury-bottle-liquid" />
        <div className="luxury-bottle-shimmer" />
        <div className="luxury-bottle-base" />
        <div className="luxury-bottle-label">
          <span className="editorial-title">{label}</span>
          <small className="arabic-mark">{sublabel}</small>
        </div>
      </div>
      <div className="bottle-reflection" aria-hidden="true" />
    </div>
  );
}
