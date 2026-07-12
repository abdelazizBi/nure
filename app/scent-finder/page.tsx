import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScentFinder } from "@/components/ScentFinder";
import { FloatingParticleField } from "@/components/PremiumMotion";

export const metadata: Metadata = {
  title: "Scent Finder | NŪRÉ",
  description: "Discover your NŪRÉ fragrance through a guided luxury scent finder.",
};

export default function ScentFinderPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="noise" />
      <Navbar />
      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:pb-24 sm:pt-40">
        <div className="arabic-pattern opacity-15" />
        <FloatingParticleField dense />
        <div className="mist-cloud -left-28 top-24 h-96 w-96" />
        <div className="mist-cloud -right-28 top-80 h-[30rem] w-[30rem] [animation-delay:-4s]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-champagne">
              Scent finder <span className="arabic-mark text-charcoal/38">بصمتك</span>
            </p>
            <h1 className="editorial-title mt-5 text-5xl leading-[1.03] text-charcoal sm:text-7xl">
              Find the scent that follows your light.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-charcoal/62 sm:text-lg">
              Answer a few quiet questions and discover the NŪRÉ fragrance shaped around your mood, ritual, and presence.
            </p>
          </div>
          <ScentFinder />
        </div>
      </section>
      <Footer />
    </main>
  );
}
