"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { navItems } from "@/lib/data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/64 bg-ivory/72 px-4 py-3 shadow-pearl backdrop-blur-xl md:px-5"
      >
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
          aria-label="NŪRÉ homepage"
        >
          <span className="editorial-title text-xl leading-none tracking-normal text-charcoal">
            NŪRÉ
          </span>
          <span className="h-6 w-px bg-champagne/38" />
          <span className="arabic-mark text-xs text-charcoal/64">نوري</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-charcoal/68 transition hover:bg-white/46 hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center lg:flex">
          <Button href="/collection" variant="secondary" className="min-h-10 px-5">
            Explore Collection
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-champagne/30 bg-white/40 transition hover:bg-white/62 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1.5">
            <span
              className={`h-px bg-charcoal transition ${isOpen ? "translate-y-1 rotate-45" : ""}`}
            />
            <span
              className={`h-px bg-charcoal transition ${isOpen ? "-translate-y-1 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-2 w-[calc(100%-16px)] max-w-6xl rounded-lg border border-white/60 bg-ivory/90 p-3 shadow-pearl backdrop-blur-xl lg:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-charcoal/74 transition hover:bg-white/52 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
              >
                {item.label}
              </Link>
            ))}
            <Button
              href="/collection"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full"
            >
              Explore Collection
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
