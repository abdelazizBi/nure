import Link from "next/link";
import { Button } from "@/components/Button";
import { NoteChips } from "@/components/NoteChips";
import { ProductVisual } from "@/components/ProductVisual";
import { ProductTiltCard, ShimmerLayer } from "@/components/PremiumMotion";
import type { Product } from "@/lib/data";

export function ProductCard({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  const isDark = product.slug === "noor-elixir";
  const notes = [product.topNotes[0], product.heartNotes[0], product.baseNotes[0]];

  return (
    <ProductTiltCard className={isDark ? "bg-[#211d18]/90 text-ivory" : ""}>
      <Link
        href={`/collection/${product.slug}`}
        className="absolute inset-0 z-20 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
        aria-label={`View ${product.name}`}
      />
      <div className="card-lux-glow" aria-hidden="true" />
      <div className="absolute inset-x-6 top-4 h-px bg-gradient-to-r from-transparent via-champagne/44 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
      <div
        className={`product-card-stage relative overflow-hidden rounded-lg bg-gradient-to-br ${product.tone} ${
          compact ? "min-h-72" : ""
        }`}
      >
        <div className="absolute inset-x-8 bottom-8 h-8 rounded-full bg-charcoal/10 blur-xl" />
        <ShimmerLayer />
        <ProductVisual
          name={product.name}
          image={product.image || product.fallbackImage}
          dark={isDark}
        />
      </div>
      <div className="pointer-events-none relative z-30 pt-6">
        <div
          className={`flex items-center justify-between gap-4 text-[0.68rem] uppercase tracking-[0.22em] ${
            isDark ? "text-ivory/46" : "text-charcoal/42"
          }`}
        >
          <span>{product.concentration}</span>
          <span>{product.size}</span>
        </div>
        <h2
          className={`editorial-title mt-3 text-3xl ${
            isDark ? "text-ivory" : "text-charcoal"
          }`}
        >
          {product.name}
        </h2>
        <p className="mt-2 text-xs uppercase tracking-[0.22em] text-champagne">
          {product.scentFamily.join(" / ")}
        </p>
        <p
          className={`mt-4 ${compact ? "min-h-0" : "min-h-14"} text-sm leading-7 ${
            isDark ? "text-ivory/64" : "text-charcoal/62"
          }`}
        >
          {product.shortDescription}
        </p>
        <NoteChips
          notes={notes}
          className={`product-note-chips mt-5 transition duration-500 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100 ${
            isDark ? "[&_span]:border-ivory/14 [&_span]:bg-white/8 [&_span]:text-ivory/68" : ""
          }`}
        />
        <Button
          href={`/collection/${product.slug}`}
          variant={isDark ? "secondary" : "ghost"}
          className={`relative z-30 mt-6 min-h-10 px-0 ${
            isDark ? "border-ivory/16 bg-ivory px-5 text-charcoal" : "text-champagne"
          } pointer-events-auto`}
          aria-label={`Discover ${product.name}`}
        >
          Discover
        </Button>
      </div>
    </ProductTiltCard>
  );
}
