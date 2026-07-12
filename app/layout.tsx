import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "NŪRÉ — Luminous Arabic Perfume Maison",
    template: "%s | NŪRÉ",
  },
  description:
    "A luminous Arabic perfume maison crafting modern oriental fragrances in oud, musk, amber, saffron, and rose.",
  openGraph: {
    type: "website",
    siteName: "NŪRÉ",
    title: "NŪRÉ — Luminous Arabic Perfume Maison",
    description: "Modern oriental fragrances shaped through light, glass, and memory.",
    images: [{ url: "/images/nure/hero-bottle.png", width: 1122, height: 1402, alt: "NŪRÉ perfume bottle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NŪRÉ — Luminous Arabic Perfume Maison",
    description: "Modern oriental fragrances shaped through light, glass, and memory.",
    images: ["/images/nure/hero-bottle.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
