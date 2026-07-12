import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { FadeReveal, FloatingParticleField, StaggerReveal } from "@/components/PremiumMotion";
import { productFamilies, products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Collection | NŪRÉ Luxury Arabic Perfume Maison",
  description:
    "Browse the NŪRÉ collection of oud, musk, amber, saffron, rose, floral, and resin fragrances.",
};

export default function CollectionPage() {
  return (
    <main id="top" className="relative overflow-hidden">
      <div className="noise" />
      <Navbar />

      <section className="relative overflow-hidden pt-32">
        <div className="arabic-pattern opacity-15" />
        <FloatingParticleField dense />
        <div className="mist-cloud left-[-8rem] top-28 h-80 w-80" />
        <div className="mist-cloud right-[-5rem] top-52 h-96 w-96 [animation-delay:-5s]" />

        <div className="section-shell relative grid min-h-[560px] items-end gap-8 pb-16 lg:grid-cols-[0.9fr_1fr]">
          <FadeReveal className="max-w-3xl">
            <p className="inline-flex items-center gap-3 rounded-full border border-champagne/28 bg-white/42 px-4 py-2 text-xs uppercase tracking-[0.28em] text-charcoal/62 shadow-pearl backdrop-blur">
              <span className="arabic-mark text-charcoal/38">المجموعة</span>
              Six luminous signatures
            </p>
            <h1 className="editorial-title mt-8 text-6xl leading-[0.95] text-charcoal sm:text-8xl">
              The NŪRÉ collection.
            </h1>
          </FadeReveal>

          <FadeReveal delay={120} className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-9 text-charcoal/64">
              A portfolio of modern oriental fragrances built around pearl-white
              light, transparent glass, warm resin, and the quiet ceremony of
              Arabic scent rituals.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {productFamilies.map((family) => (
                <a
                  key={family}
                  href={`#${family.toLowerCase()}`}
                  className="rounded-full border border-champagne/24 bg-white/38 px-4 py-2 text-xs uppercase tracking-[0.18em] text-charcoal/58 shadow-pearl backdrop-blur transition hover:border-champagne/54 hover:bg-white/66"
                >
                  {family}
                </a>
              ))}
            </div>
          </FadeReveal>
        </div>
      </section>

      <section className="relative pb-20 sm:pb-28">
        <div className="section-shell">
          <StaggerReveal className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div key={product.slug} id={product.scentFamily[0].toLowerCase()}>
                <ProductCard product={product} />
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="campaign-band py-20 text-ivory sm:py-28">
        <div className="arabic-pattern opacity-10" />
        <FloatingParticleField amber />
        <div className="section-shell relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-champagne">
              Collection architecture <span className="arabic-mark">نور</span>
            </p>
            <h2 className="editorial-title mt-4 text-5xl leading-tight sm:text-6xl">
              Six ways light becomes scent.
            </h2>
          </div>
          <div className="grid gap-6">
            <p className="text-lg leading-9 text-ivory/70">
              The collection moves from clean white oud and solar musk into
              saffron silk, pearl amber, desert florals, and the darker glow of
              Noor Elixir. Each bottle is imagined as a small atmosphere:
              restrained, luminous, and designed to leave space around the
              wearer.
            </p>
            <div className="soft-line opacity-60" />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/scent-finder" className="border-ivory bg-ivory text-charcoal">
                Find Your Scent
              </Button>
              <Button href="/#maison" variant="secondary" className="border-ivory/20 bg-white/8 text-ivory">
                Maison Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
