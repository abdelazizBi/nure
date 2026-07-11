"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "premium-button-primary border-champagne bg-charcoal text-ivory shadow-glow",
  secondary:
    "premium-button-secondary border-champagne/40 bg-white/38 text-charcoal backdrop-blur-md",
  ghost:
    "premium-button-ghost border-transparent bg-transparent text-charcoal",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`premium-button inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full border px-6 text-sm font-medium transition duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne ${variants[variant]} ${className}`}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        event.currentTarget.style.setProperty("--button-x", `${x}px`);
        event.currentTarget.style.setProperty("--button-y", `${y}px`);
      }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
