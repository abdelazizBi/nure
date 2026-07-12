export type ScentFamily =
  | "Oud"
  | "Musk"
  | "Amber"
  | "Saffron"
  | "Rose"
  | "Floral"
  | "Resin";

export type Product = {
  name: string;
  slug: string;
  shortDescription: string;
  longStory: string;
  image: string;
  fallbackImage: string;
  scentFamily: ScentFamily[];
  concentration: string;
  size: string;
  mood: string;
  intensity: string;
  longevity: string;
  occasion: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  accentTone: string;
  tone: string;
  relatedProductSlugs: string[];
};

export const navItems = [
  { label: "Collection", href: "/collection" },
  { label: "Scent Finder", href: "/scent-finder" },
  { label: "The Maison", href: "/#maison" },
  { label: "Rituals", href: "/#rituals" },
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

export const productImageFallback = nureImages.genericBottle;

export const products: Product[] = [
  {
    name: "White Oud",
    slug: "white-oud",
    shortDescription: "Clean oud, white musk, and amber woods diffused through pearl light.",
    longStory:
      "White Oud translates the ceremonial depth of oud into a transparent modern signature. Mineral woods, white musk, and a veil of amber create a quiet trail that feels polished, luminous, and close to skin.",
    image: nureImages.products.whiteOud,
    fallbackImage: productImageFallback,
    scentFamily: ["Oud", "Musk", "Amber"],
    concentration: "Eau de Parfum",
    size: "50ml",
    mood: "Polished, serene, architectural",
    intensity: "Medium",
    longevity: "8 hours",
    occasion: "Day rituals, gallery evenings, understated ceremony",
    topNotes: ["Bergamot mist", "White tea", "Cardamom"],
    heartNotes: ["White oud", "Iris veil", "Clean musk"],
    baseNotes: ["Amber woods", "Sandalwood", "Cashmere resin"],
    accentTone: "#dcc7ab",
    tone: "from-ivory via-white to-sand/40",
    relatedProductSlugs: ["solar-musk", "saffron-veil", "pearl-amber"],
  },
  {
    name: "Solar Musk",
    slug: "solar-musk",
    shortDescription: "Warm musk, bergamot, soft vanilla, and golden amber with sunlit ease.",
    longStory:
      "Solar Musk is NŪRÉ's softest radiance: a warm-skin musk brightened by citrus and held by creamy amber. It is minimal, luminous, and quietly addictive, made for mornings that linger into gold.",
    image: nureImages.products.solarMusk,
    fallbackImage: productImageFallback,
    scentFamily: ["Musk", "Amber"],
    concentration: "Eau de Parfum",
    size: "50ml",
    mood: "Radiant, intimate, effortless",
    intensity: "Soft to medium",
    longevity: "7 hours",
    occasion: "Everyday signature, warm weather, close conversation",
    topNotes: ["Bergamot", "Mandarin light", "Neroli"],
    heartNotes: ["Solar musk", "Orange blossom", "Soft vanilla"],
    baseNotes: ["Golden amber", "Skin woods", "Clean resin"],
    accentTone: "#f0c86c",
    tone: "from-[#FFF3D2] via-ivory to-champagne/30",
    relatedProductSlugs: ["white-oud", "desert-bloom", "pearl-amber"],
  },
  {
    name: "Saffron Veil",
    slug: "saffron-veil",
    shortDescription: "Saffron, rose, incense, and sandalwood wrapped in translucent spice.",
    longStory:
      "Saffron Veil is a golden thread across silk: spiced, floral, and gently smoky. Damask rose and incense soften the brightness of saffron while sandalwood gives the composition a graceful, lasting shape.",
    image: nureImages.products.saffronVeil,
    fallbackImage: productImageFallback,
    scentFamily: ["Saffron", "Rose", "Floral"],
    concentration: "Eau de Parfum",
    size: "50ml",
    mood: "Silken, spiced, magnetic",
    intensity: "Medium to bold",
    longevity: "9 hours",
    occasion: "Evening dinners, celebrations, dressed rituals",
    topNotes: ["Saffron", "Pink pepper", "Mandarin peel"],
    heartNotes: ["Damask rose", "Incense", "Suede accord"],
    baseNotes: ["Sandalwood", "Amber silk", "Musk"],
    accentTone: "#c48958",
    tone: "from-rose/45 via-ivory to-[#c48958]/25",
    relatedProductSlugs: ["noor-elixir", "white-oud", "desert-bloom"],
  },
  {
    name: "Pearl Amber",
    slug: "pearl-amber",
    shortDescription: "A translucent amber study with vanilla resin, labdanum, and soft woods.",
    longStory:
      "Pearl Amber keeps amber luminous instead of heavy. Labdanum, benzoin, and pale woods move through a pearl-white haze, leaving warmth without weight and polish without excess.",
    image: productImageFallback,
    fallbackImage: productImageFallback,
    scentFamily: ["Amber", "Resin"],
    concentration: "Eau de Parfum",
    size: "50ml",
    mood: "Velvet, golden, composed",
    intensity: "Medium",
    longevity: "8 hours",
    occasion: "Office evenings, quiet luxury moments, layered rituals",
    topNotes: ["Pear accord", "Bitter orange", "Saffron dust"],
    heartNotes: ["Labdanum", "Vanilla resin", "Amber silk"],
    baseNotes: ["Benzoin", "Pale woods", "Musk"],
    accentTone: "#c8a96a",
    tone: "from-[#fff0cf] via-ivory to-champagne/35",
    relatedProductSlugs: ["solar-musk", "white-oud", "noor-elixir"],
  },
  {
    name: "Desert Bloom",
    slug: "desert-bloom",
    shortDescription: "Rose, desert botanicals, mineral petals, and airy musk after first rain.",
    longStory:
      "Desert Bloom imagines a floral note rising from warm stone after rain. Rose and neroli are made sheer with mineral petals, date blossom, and airy musk for a fresh, refined bloom.",
    image: productImageFallback,
    fallbackImage: productImageFallback,
    scentFamily: ["Floral", "Rose", "Musk"],
    concentration: "Eau de Parfum",
    size: "50ml",
    mood: "Fresh, petal-soft, optimistic",
    intensity: "Soft",
    longevity: "6 hours",
    occasion: "Daylight, garden gatherings, spring rituals",
    topNotes: ["Neroli", "Dewed citrus", "Pink pepper"],
    heartNotes: ["Damask rose", "Date blossom", "Mineral petals"],
    baseNotes: ["Airy musk", "Blond woods", "Amber water"],
    accentTone: "#d3b2a7",
    tone: "from-rose/30 via-white to-sage/20",
    relatedProductSlugs: ["solar-musk", "saffron-veil", "pearl-amber"],
  },
  {
    name: "Noor Elixir",
    slug: "noor-elixir",
    shortDescription: "Oud, saffron, black vanilla, and golden resin behind smoked glass.",
    longStory:
      "Noor Elixir is the collection's after-dark signature. Oud smoke and saffron gather around black vanilla and golden resin, creating a cinematic trail that feels warm, shadowed, and luminous at once.",
    image: nureImages.products.noorElixir,
    fallbackImage: productImageFallback,
    scentFamily: ["Oud", "Saffron", "Amber", "Resin"],
    concentration: "Extrait de Parfum",
    size: "50ml",
    mood: "Cinematic, resinous, nocturnal",
    intensity: "Bold",
    longevity: "12 hours",
    occasion: "Evening, formal rituals, memorable arrivals",
    topNotes: ["Saffron", "Mandarin mist", "Pink pepper"],
    heartNotes: ["Oud smoke", "Damask rose", "Black vanilla"],
    baseNotes: ["Golden resin", "Amber woods", "Soft musk"],
    accentTone: "#9a6c3a",
    tone: "from-[#332b23] via-[#1f1c18] to-[#6a4728]/50",
    relatedProductSlugs: ["saffron-veil", "pearl-amber", "white-oud"],
  },
];

export const productFamilies = ["Oud", "Musk", "Amber", "Saffron", "Rose", "Floral", "Resin"] as const;

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product) {
  return product.relatedProductSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((related): related is Product => Boolean(related));
}

export const featuredPerfumes = products.slice(0, 3).map((product) => ({
  name: product.name,
  slug: product.slug,
  category: product.concentration,
  volume: product.size,
  family: product.scentFamily.join(" / "),
  description: product.shortDescription,
  notes: [product.topNotes[0], product.heartNotes[0], product.baseNotes[0]],
  image: product.image,
  tone: product.tone,
}));

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
