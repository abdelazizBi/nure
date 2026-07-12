import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProductHero } from "@/components/ProductHero";
import { RelatedProducts } from "@/components/RelatedProducts";
import { ScentPyramid } from "@/components/ScentPyramid";
import { FadeReveal, FloatingParticleField, StaggerReveal } from "@/components/PremiumMotion";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Fragrance Not Found | NURE",
    };
  }

  return {
    title: `${product.name} | NURE Collection`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product);
  const isDark = product.slug === "noor-elixir";

  return (
    <main id="top" className="relative overflow-hidden">
      <div className="noise" />
      <Navbar />
      <ProductHero product={product} />

      <section className={`relative py-20 sm:py-28 ${isDark ? "bg-[#211d18] text-ivory" : ""}`}>
        <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <FadeReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-champagne">
              Mood and measure
            </p>
            <h2 className="editorial-title mt-4 text-5xl leading-tight">
              Worn like atmosphere.
            </h2>
          </FadeReveal>
          <StaggerReveal className="grid gap-4 sm:grid-cols-3">
            {[
              ["Mood", product.mood],
              ["Occasion", product.occasion],
              ["Intensity", product.intensity],
            ].map(([label, value]) => (
              <article
                key={label}
                className={`rounded-lg border p-5 backdrop-blur-sm ${
                  isDark
                    ? "border-ivory/12 bg-white/7"
                    : "border-champagne/18 bg-white/34 shadow-pearl"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.24em] text-champagne">
                  {label}
                </p>
                <p className={`mt-4 text-sm leading-7 ${isDark ? "text-ivory/66" : "text-charcoal/62"}`}>
                  {value}
                </p>
              </article>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className={`relative py-20 sm:py-28 ${isDark ? "bg-[#211d18] text-ivory" : "bg-ivory/52"}`}>
        <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <FadeReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-champagne">
              Scent pyramid
            </p>
            <h2 className="editorial-title mt-4 text-5xl leading-tight">
              Top, heart, and base.
            </h2>
            <p className={`mt-5 max-w-xl text-base leading-8 ${isDark ? "text-ivory/66" : "text-charcoal/62"}`}>
              Each layer is shaped to move slowly: first brightness, then the
              signature material, then the lasting warmth that stays after the
              room quiets.
            </p>
          </FadeReveal>
          <ScentPyramid
            topNotes={product.topNotes}
            heartNotes={product.heartNotes}
            baseNotes={product.baseNotes}
            dark={isDark}
          />
        </div>
      </section>

      <section className={`relative overflow-hidden py-20 sm:py-28 ${isDark ? "bg-[#1f1c18] text-ivory" : ""}`}>
        <div className="arabic-pattern opacity-10" />
        <FloatingParticleField amber={isDark} />
        <div className="section-shell relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-champagne">
              Product story <span className="arabic-mark">الحكاية</span>
            </p>
            <h2 className="editorial-title mt-4 text-5xl leading-tight">
              The composition.
            </h2>
          </FadeReveal>
          <FadeReveal delay={120}>
            <p className={`text-xl leading-10 ${isDark ? "text-ivory/70" : "text-charcoal/68"}`}>
              {product.longStory}
            </p>
            <div className="mt-10 rounded-lg border border-champagne/20 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.32em] text-champagne">
                The Ritual
              </p>
              <p className={`mt-4 text-base leading-8 ${isDark ? "text-ivory/68" : "text-charcoal/62"}`}>
                Mist once at the pulse points and once into the air before
                dressing. Let the fragrance settle on fabric and skin without
                rubbing, so the top notes stay transparent and the base notes
                unfold with warmth.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/collection">Back to Collection</Button>
              <Button href="/#scent-finder" variant="secondary">
                Future Scent Finder
              </Button>
            </div>
          </FadeReveal>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
      <Footer />
    </main>
  );
}
