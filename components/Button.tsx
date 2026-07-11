import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-champagne bg-charcoal text-ivory shadow-glow hover:-translate-y-0.5 hover:bg-[#2b2722]",
  secondary:
    "border-champagne/40 bg-white/38 text-charcoal backdrop-blur-md hover:-translate-y-0.5 hover:border-champagne hover:bg-white/58",
  ghost:
    "border-transparent bg-transparent text-charcoal hover:bg-white/42 hover:text-charcoal",
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
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
