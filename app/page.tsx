import type { CSSProperties } from "react";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProductVisual } from "@/components/ProductVisual";
import {
  featuredPerfumes,
  noorElixirNotes,
  scentFamilies,
  scentRail,
} from "@/lib/data";

function MistParticles({ dense = false }: { dense?: boolean }) {
  const particles = dense
    ? [
        ["8%", "18%", "7px", "10s", "-1s"],
        ["18%", "68%", "4px", "14s", "-6s"],
        ["32%", "28%", "9px", "12s", "-4s"],
        ["48%", "74%", "5px", "13s", "-7s"],
        ["62%", "18%", "6px", "11s", "-3s"],
        ["74%", "58%", "10px", "15s", "-8s"],
        ["88%", "31%", "5px", "10s", "-5s"],
        ["94%", "78%", "7px", "12s", "-2s"],
      ]
    : [
        ["12%", "22%", "8px", "10s", "-1s"],
        ["28%", "68%", "5px", "12s", "-4s"],
        ["47%", "18%", "7px", "13s", "-6s"],
        ["67%", "35%", "9px", "11s", "-3s"],
        ["78%", "72%", "6px", "14s", "-7s"],
        ["90%", "28%", "4px", "10s", "-5s"],
      ];

  return (
    <div className="mist-layer" aria-hidden="true">
      {particles.map(([x, y, size, speed, delay]) => (
        <span
          key={`${x}-${y}-${size}`}
          style={
            {
              "--x": x,
              "--y": y,
              "--size": size,
              "--speed": speed,
              "--delay": delay,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

function SectionIntro({
  eyebrow,
  arabic,
  title,
  text,
  align = "center",
}: {
  eyebrow: string;
  arabic?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-champagne data-[align=left]:justify-start" data-align={align}>
        <span>{eyebrow}</span>
        {arabic ? (
          <span className="arabic-mark text-[0.68rem] text-charcoal/38">
            {arabic}
          </span>
        ) : null}
      </p>
      <h2 className="editorial-title mt-4 text-4xl leading-tight text-charcoal sm:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-charcoal/62 data-[align=center]:mx-auto" data-align={align}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const railItems = [...scentRail, ...scentRail];

  return (
    <main id="top" className="relative overflow-hidden">
      <div className="noise" />
      <Navbar />

      <section className="relative min-h-screen overflow-hidden pt-24">
        <div className="arabic-pattern" />
        <MistParticles dense />
        <div className="mist-cloud left-[-7rem] top-28 h-72 w-72" />
        <div className="mist-cloud right-[-4rem] top-52 h-96 w-96 [animation-delay:-4s]" />

        <div className="section-shell grid min-h-[calc(100vh-6rem)] items-center gap-8 pb-14 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="relative z-10 animate-reveal pt-10 lg:pt-0">
            <p className="inline-flex items-center gap-3 rounded-full border border-champagne/28 bg-white/42 px-4 py-2 text-xs uppercase tracking-[0.28em] text-charcoal/62 shadow-pearl backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
              Luminous oriental minimalism
              <span className="arabic-mark text-charcoal/36">نور</span>
            </p>
            <h1 className="editorial-title mt-8 max-w-3xl text-5xl leading-[0.96] text-charcoal sm:text-7xl sm:leading-[0.92] lg:text-8xl">
              Fragrance, reimagined in light.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-9 text-charcoal/68">
              A luminous Arabic perfume maison crafting modern oriental scents
              from oud, musk, amber, saffron, rose, and desert botanicals.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#collection">Explore Collection</Button>
              <Button href="#scent-finder" variant="secondary">
                Find Your Scent
              </Button>
            </div>
            <div className="mt-10 hidden max-w-xl grid-cols-3 gap-4 border-y border-champagne/18 py-5 sm:grid">
              {["Glass", "Oud", "Memory"].map((word, index) => (
                <div key={word}>
                  <p className="editorial-title text-2xl text-charcoal">
                    {word}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-charcoal/42">
                    0{index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-reveal [animation-delay:160ms]">
            <div className="hero-stage min-h-[500px] px-4 py-8 sm:min-h-[560px] sm:px-8 lg:min-h-[700px]">
              <span className="note-chip-float left-4 top-[18%] rounded-full px-4 py-2 text-xs text-charcoal/64 [animation-delay:-1s] sm:left-8">
                White oud
              </span>
              <span className="note-chip-float right-5 top-[28%] rounded-full px-4 py-2 text-xs text-charcoal/64 [animation-delay:-4s]">
                Saffron veil
              </span>
              <span className="note-chip-float bottom-[23%] left-8 rounded-full px-4 py-2 text-xs text-charcoal/64 [animation-delay:-6s]">
                Solar musk
              </span>
              <ProductVisual
                name="NŪRÉ hero bottle"
                imagePath="/images/nure/hero-bottle.png"
                size="hero"
                variant="champagne"
              />
              <div className="absolute bottom-7 left-7 right-7 grid gap-3 border-t border-champagne/20 pt-4 text-xs text-charcoal/58 sm:grid-cols-4">
                {["Oud", "Musk", "Amber", "Saffron"].map((note) => (
                  <span
                    key={note}
                    className="rounded-full border border-white/54 bg-ivory/44 px-3 py-2 text-center backdrop-blur-xl"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-champagne/14 bg-ivory/42 py-5">
        <div className="scent-marquee gap-3">
          {railItems.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="rounded-full border border-champagne/22 bg-white/30 px-5 py-2 text-xs uppercase tracking-[0.24em] text-charcoal/46 backdrop-blur"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="collection" className="relative py-20 sm:py-28">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <SectionIntro
              eyebrow="Featured collection"
              arabic="المجموعة"
              title="Modern oriental signatures, held in glass."
              text="Three luminous studies in depth, softness, and memory."
              align="left"
            />
            <p className="max-w-xl justify-self-end text-base leading-8 text-charcoal/56 lg:text-right">
              The first NŪRÉ collection is staged like a campaign still:
              restrained, tactile, and made to let each note breathe.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featuredPerfumes.map((perfume, index) => (
              <article
                key={perfume.name}
                className="group relative overflow-hidden rounded-lg border border-white/62 bg-white/34 p-4 shadow-pearl backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-champagne/54 hover:bg-white/48 hover:shadow-glow"
              >
                <div className="absolute inset-x-6 top-4 h-px bg-gradient-to-r from-transparent via-champagne/44 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div
                  className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${perfume.tone}`}
                >
                  <div className="absolute inset-x-8 bottom-8 h-8 rounded-full bg-charcoal/10 blur-xl" />
                  <ProductVisual
                    name={perfume.name}
                    imagePath={perfume.imagePath}
                    variant={perfume.bottleVariant}
                    label={index === 2 ? "VEIL" : "NŪRÉ"}
                    sublabel={index === 2 ? "زعفران" : "نوري"}
                  />
                </div>
                <div className="pt-6">
                  <div className="flex items-center justify-between gap-4 text-[0.68rem] uppercase tracking-[0.22em] text-charcoal/42">
                    <span>{perfume.category}</span>
                    <span>{perfume.volume}</span>
                  </div>
                  <h3 className="editorial-title mt-3 text-3xl text-charcoal">
                    {perfume.name}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-champagne">
                    {perfume.family}
                  </p>
                  <p className="mt-4 min-h-14 text-sm leading-7 text-charcoal/62">
                    {perfume.description}
                  </p>
                  <div className="mt-5 flex translate-y-1 flex-wrap gap-2 opacity-80 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {perfume.notes.map((note) => (
                      <span
                        key={note}
                        className="rounded-full border border-champagne/24 bg-ivory/58 px-3 py-1 text-xs text-charcoal/58 transition group-hover:border-champagne/44"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="campaign-band py-20 text-ivory sm:py-28">
        <div className="arabic-pattern opacity-10" />
        <MistParticles />
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[430px]">
            <div className="absolute left-0 top-8 w-56 rotate-[-8deg] rounded-lg border border-ivory/14 bg-white/8 p-4 shadow-glow backdrop-blur-md sm:w-72">
              <ProductVisual
                name="Layered oud ritual"
                imagePath="/images/nure/ritual-oud.png"
                variant="amber"
                label="OUD"
                sublabel="عود"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-60 rotate-[7deg] rounded-lg border border-champagne/24 bg-ivory/80 p-4 text-charcoal shadow-pearl backdrop-blur-md sm:w-80">
              <ProductVisual
                name="Layered musk ritual"
                imagePath="/images/nure/ritual-musk.png"
                variant="rose"
                label="MUSK"
                sublabel="مسك"
              />
            </div>
          </div>
          <div className="relative z-10 max-w-2xl lg:pl-10">
            <p className="text-xs uppercase tracking-[0.32em] text-champagne">
              Ritual atmosphere <span className="arabic-mark">طقوس</span>
            </p>
            <h2 className="editorial-title mt-4 text-5xl leading-tight sm:text-6xl">
              Scent as architecture: mist, glass, then memory.
            </h2>
            <p className="mt-6 text-lg leading-9 text-ivory/68">
              NŪRÉ’s visual world should feel less like a shelf and more like
              entering a room where fragrance has already changed the light.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ivory/58 py-20 sm:py-28">
        <div className="mist-cloud left-1/2 top-10 h-72 w-72 -translate-x-1/2" />
        <div className="section-shell">
          <SectionIntro
            eyebrow="Scent universe"
            arabic="عالم العطر"
            title="Five notes of light."
            text="A quiet system of raw materials, each shaped with restraint, atmosphere, and radiance."
          />
          <div className="relative mt-14 grid gap-4 lg:grid-cols-5">
            {scentFamilies.map((family, index) => (
              <article
                key={family.name}
                className="group relative min-h-72 overflow-hidden rounded-lg border border-champagne/18 bg-white/30 p-5 transition duration-500 hover:-translate-y-2 hover:border-champagne/48 hover:bg-white/52 hover:shadow-glow"
                style={
                  {
                    "--family-accent": family.accent,
                    transform: `translateY(${index % 2 === 0 ? "0" : "22px"})`,
                  } as CSSProperties
                }
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,var(--family-accent),transparent_58%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="arabic-mark text-sm text-charcoal/38">
                      {family.arabic}
                    </span>
                    <span className="h-10 w-10 rounded-full border border-champagne/22 bg-ivory/42 shadow-pearl transition group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="editorial-title text-4xl text-charcoal">
                      {family.name}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-charcoal/62">
                      {family.line}
                    </p>
                    <p className="mt-4 translate-y-2 text-xs uppercase leading-6 tracking-[0.18em] text-charcoal/42 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {family.mood}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="signature" className="relative overflow-hidden bg-[#221f1b] py-20 text-ivory sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_35%,rgba(200,169,106,0.24),transparent_26rem),radial-gradient(circle_at_78%_18%,rgba(211,178,167,0.14),transparent_22rem)]" />
        <div className="arabic-pattern opacity-10" />
        <MistParticles dense />
        <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[560px] overflow-hidden rounded-lg border border-ivory/12 bg-white/6 shadow-glow backdrop-blur-sm">
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.08),transparent)]" />
            <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/16 blur-3xl" />
            <ProductVisual
              name="Noor Elixir"
              imagePath="/images/nure/noor-elixir.png"
              size="spotlight"
              variant="deep-gold"
              label="NOOR"
              sublabel="إكسير"
              dark
            />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-champagne">
              Signature spotlight <span className="arabic-mark">نور</span>
            </p>
            <h2 className="editorial-title mt-4 text-5xl leading-tight sm:text-7xl">
              Noor Elixir
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-ivory/66">
              A richer evening fragrance where oud, saffron, black vanilla, and
              golden resin move like warm light behind smoked glass.
            </p>
            <div className="mt-9 grid gap-3">
              {noorElixirNotes.map((note) => (
                <div
                  key={note.label}
                  className="grid gap-4 rounded-lg border border-ivory/10 bg-white/6 p-4 backdrop-blur-sm transition hover:border-champagne/36 sm:grid-cols-[86px_1fr]"
                >
                  <span className="text-xs uppercase tracking-[0.28em] text-champagne">
                    {note.label}
                  </span>
                  <span className="text-sm leading-7 text-ivory/66">
                    {note.value}
                  </span>
                </div>
              ))}
            </div>
            <Button href="#signature" className="mt-9 border-champagne bg-ivory text-charcoal hover:bg-white">
              Discover Noor Elixir
            </Button>
          </div>
        </div>
      </section>

      <section id="scent-finder" className="relative overflow-hidden py-20 sm:py-28">
        <div className="arabic-pattern opacity-15" />
        <div className="section-shell relative">
          <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-rose/18 blur-3xl" />
          <div className="absolute -right-12 bottom-0 h-80 w-80 rounded-full bg-champagne/18 blur-3xl" />
          <div className="relative grid items-center gap-8 border-y border-champagne/20 py-14 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-champagne">
                Scent finder <span className="arabic-mark text-charcoal/36">بصمتك</span>
              </p>
              <h2 className="editorial-title mt-4 max-w-3xl text-5xl leading-tight text-charcoal sm:text-6xl">
                Find the scent that follows your light.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-charcoal/62">
                Answer a few questions and discover your NŪRÉ signature.
              </p>
            </div>
            <Button href="#scent-finder" className="md:justify-self-end">
              Start Scent Finder
            </Button>
          </div>
        </div>
      </section>

      <section id="maison" className="relative py-20 sm:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-champagne">
              The Maison <span className="arabic-mark text-charcoal/36">الدار</span>
            </p>
            <h2 className="editorial-title mt-4 text-5xl leading-tight text-charcoal sm:text-6xl">
              Arabic rituals, translated through modern light.
            </h2>
          </div>
          <div className="grid gap-6">
            <p className="text-xl leading-9 text-charcoal/68">
              NŪRÉ blends Arabic fragrance rituals with a modern language of
              light, glass, and memory.
            </p>
            <div className="soft-line" />
            <div id="rituals" className="grid gap-4 sm:grid-cols-3">
              {["Mist", "Layer", "Remember"].map((ritual) => (
                <div
                  key={ritual}
                  className="rounded-lg border border-champagne/18 bg-white/28 p-5 shadow-pearl backdrop-blur-sm transition hover:-translate-y-1 hover:border-champagne/42"
                >
                  <p className="editorial-title text-2xl text-charcoal">
                    {ritual}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-charcoal/56">
                    A quiet gesture for scent to become atmosphere.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
