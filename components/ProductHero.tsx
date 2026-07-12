import { Button } from "@/components/Button";
import { FloatingParticleField, ShimmerLayer, SprayMist } from "@/components/PremiumMotion";
import { ProductVisual } from "@/components/ProductVisual";
import type { Product } from "@/lib/data";

export function ProductHero({ product }: { product: Product }) {
  const isDark = product.slug === "noor-elixir";

  return (
    <section
      className={`relative overflow-hidden pt-32 ${
        isDark ? "bg-[#211d18] text-ivory" : "text-charcoal"
      }`}
    >
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-[radial-gradient(circle_at_24%_32%,rgba(200,169,106,0.22),transparent_24rem),radial-gradient(circle_at_76%_20%,rgba(211,178,167,0.08),transparent_20rem)]"
            : "bg-[radial-gradient(circle_at_82%_12%,rgba(200,169,106,0.22),transparent_24rem),radial-gradient(circle_at_14%_40%,rgba(211,178,167,0.18),transparent_26rem)]"
        }`}
        aria-hidden="true"
      />
      <div className="arabic-pattern opacity-10" />
      <FloatingParticleField dense amber={isDark} />

      <div className="section-shell relative grid min-h-[calc(100vh-7rem)] items-center gap-10 pb-20 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-3 rounded-full border border-champagne/28 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-champagne backdrop-blur">
            <span className="arabic-mark text-sm">نوري</span>
            {product.scentFamily.join(" / ")}
          </p>
          <h1 className="editorial-title mt-7 text-6xl leading-[0.95] sm:text-8xl">
            {product.name}
          </h1>
          <p className={`mt-6 text-lg leading-9 ${isDark ? "text-ivory/70" : "text-charcoal/68"}`}>
            {product.shortDescription}
          </p>
          <div className="mt-8 grid gap-3 border-y border-champagne/20 py-5 sm:grid-cols-3">
            {[
              ["Concentration", product.concentration],
              ["Size", product.size],
              ["Longevity", product.longevity],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-champagne">
                  {label}
                </p>
                <p className={`mt-2 text-sm ${isDark ? "text-ivory/70" : "text-charcoal/64"}`}>
                  {value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/collection">Back to Collection</Button>
            <Button href="/#scent-finder" variant={isDark ? "secondary" : "secondary"}>
              Find Your Scent
            </Button>
          </div>
        </div>

        <div
          className={`relative overflow-hidden rounded-lg ${
            isDark
              ? "noor-visual-frame"
              : "border border-white/54 bg-white/24 shadow-pearl backdrop-blur-sm"
          }`}
        >
          <ShimmerLayer />
          {isDark ? <SprayMist active className="noor-smoke" /> : null}
          <div
            className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ backgroundColor: `${product.accentTone}36` }}
            aria-hidden="true"
          />
          <ProductVisual
            name={product.name}
            image={product.image || product.fallbackImage}
            size="spotlight"
            dark={isDark}
          />
        </div>
      </div>
    </section>
  );
}
