export const navItems = [
  { label: "Collection", href: "#collection" },
  { label: "Scent Finder", href: "#scent-finder" },
  { label: "The Maison", href: "#maison" },
  { label: "Rituals", href: "#rituals" },
];

export const nureImages = {
  genericBottle: "/images/nure/master-bottle.png",
  heroBottle: "/images/nure/hero-bottle.png",
  products: {
    whiteOud: "/images/nure/products/white-oud.png",
    solarMusk: "/images/nure/products/solar-musk.png",
    saffronVeil: "/images/nure/products/saffron-veil.png",
    noorElixir: "/images/nure/products/noor-elixir.png",
  },
} as const;

export const featuredPerfumes = [
  {
    name: "White Oud",
    category: "Eau de Parfum",
    volume: "50ml",
    family: "Modern Oriental",
    description: "Clean oud, white musk, and amber woods.",
    notes: ["Oud", "White musk", "Amber woods"],
    image: nureImages.products.whiteOud,
    tone: "from-ivory via-white to-sand/40",
  },
  {
    name: "Solar Musk",
    category: "Eau de Parfum",
    volume: "50ml",
    family: "Radiant Musk",
    description: "Warm musk, bergamot, soft vanilla, and golden amber.",
    notes: ["Musk", "Bergamot", "Vanilla", "Amber"],
    image: nureImages.products.solarMusk,
    tone: "from-[#FFF3D2] via-ivory to-champagne/30",
  },
  {
    name: "Saffron Veil",
    category: "Eau de Parfum",
    volume: "50ml",
    family: "Spiced Floral",
    description: "Saffron, rose, incense, and sandalwood.",
    notes: ["Saffron", "Rose", "Incense", "Sandalwood"],
    image: nureImages.products.saffronVeil,
    tone: "from-rose/45 via-ivory to-[#c48958]/25",
  },
];

export const scentFamilies = [
  {
    name: "Oud",
    arabic: "عود",
    line: "Polished woods with a soft mineral glow.",
    mood: "Smoked glass, white woods, ceremonial heat.",
    accent: "rgba(105, 78, 48, 0.42)",
  },
  {
    name: "Musk",
    arabic: "مسك",
    line: "Skin-close warmth, clean and luminous.",
    mood: "Cotton light, warm skin, transparent softness.",
    accent: "rgba(211, 178, 167, 0.5)",
  },
  {
    name: "Amber",
    arabic: "عنبر",
    line: "Golden resin, velvet heat, lasting radiance.",
    mood: "Resinous glow with a quiet after-dark trail.",
    accent: "rgba(200, 169, 106, 0.58)",
  },
  {
    name: "Saffron",
    arabic: "زعفران",
    line: "Spiced light threaded through silk and smoke.",
    mood: "A golden thread of spice, silk, and incense.",
    accent: "rgba(190, 118, 65, 0.54)",
  },
  {
    name: "Rose",
    arabic: "ورد",
    line: "Modern petals, dew, and quiet ceremony.",
    mood: "Damask petals diffused through pearl mist.",
    accent: "rgba(193, 126, 135, 0.48)",
  },
];

export const scentRail = [
  "Oud smoke",
  "White musk",
  "Solar amber",
  "Damask rose",
  "Saffron silk",
  "Desert botanicals",
  "Glass memory",
  "Golden resin",
];

export const noorElixirNotes = [
  { label: "Top", value: "Saffron, mandarin mist, pink pepper" },
  { label: "Heart", value: "Oud smoke, damask rose, black vanilla" },
  { label: "Base", value: "Golden resin, amber woods, soft musk" },
];
