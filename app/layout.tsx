import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NŪRÉ | Luxury Arabic Perfume Maison",
  description:
    "A fictional luxury Arabic fragrance maison crafting modern oriental scents in light.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
