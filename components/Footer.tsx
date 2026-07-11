import Link from "next/link";
import { Button } from "@/components/Button";
import { navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-champagne/18 bg-[#1f1c18] text-ivory">
      <div className="arabic-pattern opacity-10" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-champagne/12 blur-3xl" />
      <div className="section-shell relative grid gap-10 py-12 md:grid-cols-[1.1fr_0.8fr_1fr] md:py-16">
        <div>
          <Link href="#top" className="inline-flex items-end gap-3">
            <span className="editorial-title text-4xl">NŪRÉ</span>
            <span className="arabic-mark pb-1 text-sm text-ivory/62">نوري</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-ivory/62">
            A luminous Arabic fragrance maison for rituals of light, glass, and
            memory.
          </p>
          <p className="arabic-mark mt-6 text-xs text-champagne/72">
            عطر من نور وذاكرة
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-champagne">
            Explore
          </p>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-ivory/64 transition hover:text-ivory"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-champagne">
            Letters from the Maison
          </p>
          <div className="mt-4 flex rounded-full border border-ivory/14 bg-white/7 p-1 shadow-glow backdrop-blur">
            <input
              aria-label="Email address"
              placeholder="Email address"
              className="min-w-0 flex-1 bg-transparent px-4 text-sm text-ivory placeholder:text-ivory/38 outline-none"
            />
            <Button href="#" variant="secondary" className="min-h-10 border-ivory/16 bg-ivory text-charcoal hover:bg-white">
              Join
            </Button>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.16em] text-ivory/48">
            <Link href="#" className="transition hover:text-ivory">
              Instagram
            </Link>
            <Link href="#" className="transition hover:text-ivory">
              TikTok
            </Link>
            <Link href="#" className="transition hover:text-ivory">
              Pinterest
            </Link>
          </div>
        </div>
      </div>
      <div className="relative border-t border-ivory/10 py-5">
        <div className="section-shell flex text-xs text-ivory/42">
          <span>© 2026 NŪRÉ. Fictional portfolio concept.</span>
        </div>
      </div>
    </footer>
  );
}
