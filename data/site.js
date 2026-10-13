import { version } from "./versions";

export const CDN = "https://skytheme-demo.myshopify.com/cdn/shop/files/";

// Curated high-resolution ethnic, saree, lehenga & women's boutique photography from Unsplash
export const ethnicFashionPhotos = [
  "photo-1610030469983-98e550d6193c", // Kanjivaram Silk Saree
  "photo-1583391733956-3750e0ff4e8b", // Royal Bridal Lehenga
  "photo-1742800767764-479556a4d8a5", // Contemporary Ethnic Suit
  "photo-1597897545901-6ac15b725974", // Crimson Wedding Lehenga
  "photo-1742800788220-1e42256d6022", // Designer Kurti Set
  "photo-1738690789530-9c5ee199575c", // Festive Silk Saree
  "photo-1732850195295-ed6eb52d1d2b", // Pastel Salwar Suit
  "photo-1776005395798-9fc7c1c50e95", // Draped Evening Gown
  "photo-1619516388835-2b60acc4049e", // Traditional Bridal Jewelry & Saree
  "photo-1716504627981-22728cb2d2e2", // Indo-Western Fusion Set
  "photo-1716504628105-bd76d91e85f2", // Handloom Tissue Saree
  "photo-1617627143750-d86bc21e42bb", // Embroidered Dupatta & Anarkali
  "photo-1609357605129-26f69add5d6e", // Festive Kurti & Saree
  "photo-1534528741775-53994a69daeb", // Fashion Model Editorial
  "photo-1515886657613-9f3515b0c78f", // Runway Couture
];

export const img = (name, width = 1200) => {
  if (!name) return `https://images.unsplash.com/${ethnicFashionPhotos[0]}?auto=format&fit=crop&w=${width}&q=85`;
  if (/^https?:\/\//.test(name)) return name;
  if (/\.svg$/i.test(name)) return `${CDN}${name}?v=${version(name)}&width=${width}`;
  const key = String(name).split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const photo = ethnicFashionPhotos[key % ethnicFashionPhotos.length];
  return `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`;
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections", hasMega: true },
  { label: "Bridal Couture", href: "/collections/wedding-edit", badge: "Bespoke" },
];

export const exploreMoreLinks = [
  {
    label: "Pure Silks",
    href: "/collections/silk-sarees",
    desc: "Heirloom Kanjivaram & Banarasi weaves",
    icon: "⚜",
  },
  {
    label: "Stories & Journal",
    href: "/blogs",
    desc: "Editorial fashion features & styling notes",
    icon: "✦",
  },
  {
    label: "About Atelier",
    href: "/pages/about-us",
    desc: "Our heritage & generational craftsmanship",
    icon: "⚜",
  },
  {
    label: "Contact & Concierge",
    href: "/pages/contact",
    desc: "Atelier studio visit & video call bookings",
    icon: "✦",
  },
  {
    label: "Custom Sizing & FAQ",
    href: "/pages/faq",
    desc: "Blouse measurements, timelines & orders",
    icon: "⚜",
  },
];

export const slugify = (value) =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const megaImages = [
  { name: "photo-1610030469983-98e550d6193c", label: "Pure Silk Sarees" },
  { name: "photo-1597897545901-6ac15b725974", label: "Bridal Lehengas" },
  { name: "photo-1742800788220-1e42256d6022", label: "Designer Kurti Sets" },
  { name: "photo-1776005395798-9fc7c1c50e95", label: "Couture Gowns" },
];

export const announcementSlides = [
  <>
    ✨ Handcrafted Pure Silk Sarees, Bespoke Bridal Lehengas &amp; Designer Blouses.{" "}
    <a className="u-line" href="/collections">Explore Collection</a>
  </>,
  <>
    💬 Direct WhatsApp Inquiries Welcome · Custom Tailoring &amp; Sizing Available.{" "}
    <a className="u-line" href="/pages/contact">Consult Stylist</a>
  </>,
  <>
    🌸 Book Video Call Shopping &amp; Atelier Consultations with Master Designers.{" "}
    <a className="u-line" href="/pages/contact">Book Now</a>
  </>,
];

export const mobileCategoryTabs = [
  {
    tab: "All",
    heading: "Curated Women's Couture & Ethnic Attire",
    items: [
      { label: "Sarees", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85" },
      { label: "Lehengas", image: "https://images.unsplash.com/photo-1597897545901-6ac15b725974?auto=format&fit=crop&w=800&q=85" },
      { label: "Kurti Sets", image: "https://images.unsplash.com/photo-1742800788220-1e42256d6022?auto=format&fit=crop&w=800&q=85" },
      { label: "Anarkalis", image: "https://images.unsplash.com/photo-1742800767764-479556a4d8a5?auto=format&fit=crop&w=800&q=85" },
      { label: "Gowns", image: "https://images.unsplash.com/photo-1776005395798-9fc7c1c50e95?auto=format&fit=crop&w=800&q=85" },
      { label: "Bridal Edit", image: "https://images.unsplash.com/photo-1619516388835-2b60acc4049e?auto=format&fit=crop&w=800&q=85" },
    ],
  },
  {
    tab: "Bridal",
    heading: "Regal Ensembles Handcrafted For The Bride",
    items: [
      { label: "Silk Sarees", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85" },
      { label: "Wedding Lehengas", image: "https://images.unsplash.com/photo-1597897545901-6ac15b725974?auto=format&fit=crop&w=800&q=85" },
      { label: "Reception Gowns", image: "https://images.unsplash.com/photo-1776005395798-9fc7c1c50e95?auto=format&fit=crop&w=800&q=85" },
      { label: "Aari Blouses", image: "https://images.unsplash.com/photo-1716504628105-bd76d91e85f2?auto=format&fit=crop&w=800&q=85" },
    ],
  },
  {
    tab: "Festive",
    heading: "Vibrant Handloom & Flowing Silhouettes",
    items: [
      { label: "Organza Sarees", image: "https://images.unsplash.com/photo-1738690789530-9c5ee199575c?auto=format&fit=crop&w=800&q=85" },
      { label: "Sharara Sets", image: "https://images.unsplash.com/photo-1732850195295-ed6eb52d1d2b?auto=format&fit=crop&w=800&q=85" },
      { label: "Indo-Western", image: "https://images.unsplash.com/photo-1716504627981-22728cb2d2e2?auto=format&fit=crop&w=800&q=85" },
      { label: "Chanderi Kurtis", image: "https://images.unsplash.com/photo-1742800788220-1e42256d6022?auto=format&fit=crop&w=800&q=85" },
    ],
  },
];

export const categoriesGrid = [
  { label: "Silk Sarees", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85" },
  { label: "Bridal Lehengas", image: "https://images.unsplash.com/photo-1597897545901-6ac15b725974?auto=format&fit=crop&w=1000&q=85" },
  { label: "Anarkali Suits", image: "https://images.unsplash.com/photo-1742800767764-479556a4d8a5?auto=format&fit=crop&w=1000&q=85" },
  { label: "Kurti Sets", image: "https://images.unsplash.com/photo-1742800788220-1e42256d6022?auto=format&fit=crop&w=1000&q=85" },
  { label: "Festive Sarees", image: "https://images.unsplash.com/photo-1738690789530-9c5ee199575c?auto=format&fit=crop&w=1000&q=85" },
  { label: "Salwar & Sharara", image: "https://images.unsplash.com/photo-1732850195295-ed6eb52d1d2b?auto=format&fit=crop&w=1000&q=85" },
  { label: "Couture Gowns", image: "https://images.unsplash.com/photo-1776005395798-9fc7c1c50e95?auto=format&fit=crop&w=1000&q=85" },
  { label: "Wedding Edit", image: "https://images.unsplash.com/photo-1619516388835-2b60acc4049e?auto=format&fit=crop&w=1000&q=85" },
  { label: "Indo-Western Sets", image: "https://images.unsplash.com/photo-1716504627981-22728cb2d2e2?auto=format&fit=crop&w=1000&q=85" },
  { label: "Designer Blouses", image: "https://images.unsplash.com/photo-1716504628105-bd76d91e85f2?auto=format&fit=crop&w=1000&q=85" },
  { label: "Organza Edit", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85" },
  { label: "Everyday Ethnic", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=85" },
];

const swatch = (name, color) => ({ name, color });

export const featuredProducts = [
  {
    title: "Kanjivaram Pure Silk Zari Saree",
    badge: "Heritage Pure Silk",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
    hover: "https://images.unsplash.com/photo-1716504628105-bd76d91e85f2?auto=format&fit=crop&w=1000&q=85",
    description: "Woven by master weavers with pure mulberry silk and antique gold zari borders. Includes an unstitched contrast brocade blouse piece.",
    colors: [swatch("Royal Crimson", "#800020"), swatch("Temple Mustard", "#d4af37"), swatch("Peacock Teal", "#004953")],
  },
  {
    title: "Handcrafted Velvet Bridal Lehenga",
    badge: "Bridal Exclusive",
    image: "https://images.unsplash.com/photo-1597897545901-6ac15b725974?auto=format&fit=crop&w=1000&q=85",
    hover: "https://images.unsplash.com/photo-1619516388835-2b60acc4049e?auto=format&fit=crop&w=1000&q=85",
    description: "Rich micro-velvet kalis adorned with intricate zardozi, dabka, and pearl hand-embroidery. Accompanied by twin organza dupattas.",
    colors: [swatch("Rani Pink", "#e75480"), swatch("Deep Crimson", "#6b0f1a"), swatch("Emerald Green", "#097969")],
  },
  {
    title: "Chanderi Silk Anarkali Suit Set",
    badge: "Festive Edit",
    image: "https://images.unsplash.com/photo-1742800767764-479556a4d8a5?auto=format&fit=crop&w=1000&q=85",
    hover: "https://images.unsplash.com/photo-1742800788220-1e42256d6022?auto=format&fit=crop&w=1000&q=85",
    description: "Floor-sweeping chanderi silhouette layered with gotapatti yoke detailing, paired with churidar and a tissue zari dupatta.",
    colors: [swatch("Sage Green", "#8a9a86"), swatch("Dusty Rose", "#dcae96"), swatch("Mustard", "#e1ad01")],
  },
  {
    title: "Organza Floral Embroidered Saree",
    badge: "Trending Now",
    image: "https://images.unsplash.com/photo-1738690789530-9c5ee199575c?auto=format&fit=crop&w=1000&q=85",
    hover: "https://images.unsplash.com/photo-1716504627981-22728cb2d2e2?auto=format&fit=crop&w=1000&q=85",
    description: "Weightless silk organza hand-painted with soft botanical motifs and finished with a fine scalloped cutdana border.",
    colors: [swatch("Pastel Peach", "#ffdab9"), swatch("Lavender", "#e6e6fa"), swatch("Mint Green", "#98ff98")],
  },
  {
    title: "Mirror-Work Georgette Sharara Set",
    badge: "Sangeet Favorite",
    image: "https://images.unsplash.com/photo-1732850195295-ed6eb52d1d2b?auto=format&fit=crop&w=1000&q=85",
    hover: "https://images.unsplash.com/photo-1742800788220-1e42256d6022?auto=format&fit=crop&w=1000&q=85",
    description: "Flared tiered sharara paired with a peplum short kurti adorned with real glass mirror embroidery and resham threads.",
    colors: [swatch("Turquoise", "#40e0d0"), swatch("Sunshine Yellow", "#ffdb58"), swatch("Ivory", "#fffff0")],
  },
  {
    title: "Draped Pre-Stitched Reception Gown",
    badge: "Couture Design",
    image: "https://images.unsplash.com/photo-1776005395798-9fc7c1c50e95?auto=format&fit=crop&w=1000&q=85",
    hover: "https://images.unsplash.com/photo-1597897545901-6ac15b725974?auto=format&fit=crop&w=1000&q=85",
    description: "Modern saree gown with pre-pleated satin pallu and a bodice encrusted with hand-sewn champagne bugle beads.",
    colors: [swatch("Champagne Gold", "#fad6a5"), swatch("Midnight Navy", "#000080"), swatch("Wine", "#722f37")],
  },
  {
    title: "Handloom Tussar Silk Kurti & Pant",
    badge: "Pure Handloom",
    image: "https://images.unsplash.com/photo-1742800788220-1e42256d6022?auto=format&fit=crop&w=1000&q=85",
    hover: "https://images.unsplash.com/photo-1742800767764-479556a4d8a5?auto=format&fit=crop&w=1000&q=85",
    description: "Natural textured tussar silk kurta featuring traditional Bagru handblock prints and mother-of-pearl buttons.",
    colors: [swatch("Raw Ecru", "#c2b280"), swatch("Indigo", "#4b0082"), swatch("Terracotta", "#e2725b")],
  },
  {
    title: "Banarasi Georgette Meenakari Saree",
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1716504628105-bd76d91e85f2?auto=format&fit=crop&w=1000&q=85",
    hover: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
    description: "Supple pure georgette woven with intricate Meenakari floral jaal in kadwa technique. Unmatched drape and heirloom value.",
    colors: [swatch("Royal Purple", "#7851a9"), swatch("Rani Magenta", "#ca1f7b"), swatch("Emerald", "#005a36")],
  },
];

export const tabProducts = {
  "Bridal Sarees": [
    {
      title: "Kanjivaram Pure Silk Zari Saree",
      badge: "Pure Silk",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      hover: "https://images.unsplash.com/photo-1716504628105-bd76d91e85f2?auto=format&fit=crop&w=1000&q=85",
      colors: [swatch("Maroon", "#800020"), swatch("Gold", "#ffd700")],
    },
    {
      title: "Banarasi Georgette Meenakari Saree",
      badge: "Handloom",
      image: "https://images.unsplash.com/photo-1716504628105-bd76d91e85f2?auto=format&fit=crop&w=1000&q=85",
      hover: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      colors: [swatch("Purple", "#7851a9"), swatch("Rani", "#ca1f7b")],
    },
    {
      title: "Temple Border Silk Saree",
      badge: "Authentic Zari",
      image: "https://images.unsplash.com/photo-1738690789530-9c5ee199575c?auto=format&fit=crop&w=1000&q=85",
      hover: "https://images.unsplash.com/photo-1619516388835-2b60acc4049e?auto=format&fit=crop&w=1000&q=85",
      colors: [swatch("Mustard", "#e1ad01"), swatch("Maroon", "#800020")],
    },
    {
      title: "Tissue Organza Scalloped Saree",
      badge: "Hand-Embroidered",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85",
      hover: "https://images.unsplash.com/photo-1716504627981-22728cb2d2e2?auto=format&fit=crop&w=1000&q=85",
      colors: [swatch("Rose Gold", "#b76e79"), swatch("Ivory", "#fffff0")],
    },
  ],
  "Designer Lehengas": [
    {
      title: "Handcrafted Velvet Bridal Lehenga",
      badge: "Bridal Exclusive",
      image: "https://images.unsplash.com/photo-1597897545901-6ac15b725974?auto=format&fit=crop&w=1000&q=85",
      hover: "https://images.unsplash.com/photo-1619516388835-2b60acc4049e?auto=format&fit=crop&w=1000&q=85",
      colors: [swatch("Red", "#b22222"), swatch("Maroon", "#800020")],
    },
    {
      title: "Pastel Flora Organza Lehenga",
      badge: "Reception Couture",
      image: "https://images.unsplash.com/photo-1742800767764-479556a4d8a5?auto=format&fit=crop&w=1000&q=85",
      hover: "https://images.unsplash.com/photo-1732850195295-ed6eb52d1d2b?auto=format&fit=crop&w=1000&q=85",
      colors: [swatch("Blush Pink", "#ffb6c1"), swatch("Mint", "#98ff98")],
    },
    {
      title: "Mirror-Work Heavy Kali Lehenga",
      badge: "Sangeet Night",
      image: "https://images.unsplash.com/photo-1732850195295-ed6eb52d1d2b?auto=format&fit=crop&w=1000&q=85",
      hover: "https://images.unsplash.com/photo-1742800788220-1e42256d6022?auto=format&fit=crop&w=1000&q=85",
      colors: [swatch("Teal", "#008080"), swatch("Yellow", "#ffd700")],
    },
    {
      title: "Raw Silk Zardozi Trousseau Lehenga",
      badge: "Master Artisan",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85",
      hover: "https://images.unsplash.com/photo-1597897545901-6ac15b725974?auto=format&fit=crop&w=1000&q=85",
      colors: [swatch("Crimson Silk", "#800000"), swatch("Emerald", "#004953")],
    },
  ],
  "Kurtis & Anarkalis": [
    {
      title: "Chanderi Silk Anarkali Suit Set",
      badge: "Festive Pick",
      image: "https://images.unsplash.com/photo-1742800767764-479556a4d8a5?auto=format&fit=crop&w=1000&q=85",
      hover: "https://images.unsplash.com/photo-1742800788220-1e42256d6022?auto=format&fit=crop&w=1000&q=85",
      colors: [swatch("Sage Green", "#8a9a86"), swatch("Dusty Rose", "#dcae96")],
    },
    {
      title: "Handloom Tussar Silk Kurti & Pant",
      badge: "Everyday Luxury",
      image: "https://images.unsplash.com/photo-1742800788220-1e42256d6022?auto=format&fit=crop&w=1000&q=85",
      hover: "https://images.unsplash.com/photo-1742800767764-479556a4d8a5?auto=format&fit=crop&w=1000&q=85",
      colors: [swatch("Mustard", "#e1ad01"), swatch("Raw Silk", "#c2b280")],
    },
    {
      title: "Mirror-Work Georgette Sharara Set",
      badge: "Occasion Wear",
      image: "https://images.unsplash.com/photo-1732850195295-ed6eb52d1d2b?auto=format&fit=crop&w=1000&q=85",
      hover: "https://images.unsplash.com/photo-1716504627981-22728cb2d2e2?auto=format&fit=crop&w=1000&q=85",
      colors: [swatch("Turquoise", "#40e0d0"), swatch("Ivory", "#fffff0")],
    },
    {
      title: "Angrakha Pure Silk Festive Anarkali",
      badge: "Heritage Cut",
      image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=85",
      hover: "https://images.unsplash.com/photo-1742800767764-479556a4d8a5?auto=format&fit=crop&w=1000&q=85",
      colors: [swatch("Indigo Blue", "#1b3f8b"), swatch("Mehendi Olive", "#556b2f")],
    },
  ],
  "Party Gowns": [
    {
      title: "Draped Pre-Stitched Reception Gown",
      badge: "Cocktail Edit",
      image: "https://images.unsplash.com/photo-1776005395798-9fc7c1c50e95?auto=format&fit=crop&w=1000&q=85",
      hover: "https://images.unsplash.com/photo-1597897545901-6ac15b725974?auto=format&fit=crop&w=1000&q=85",
      colors: [swatch("Champagne", "#fad6a5"), swatch("Wine", "#722f37")],
    },
    {
      title: "Organza Cape & Dhoti Set",
      badge: "Indo-Western",
      image: "https://images.unsplash.com/photo-1716504627981-22728cb2d2e2?auto=format&fit=crop&w=1000&q=85",
      hover: "https://images.unsplash.com/photo-1776005395798-9fc7c1c50e95?auto=format&fit=crop&w=1000&q=85",
      colors: [swatch("Midnight Blue", "#191970"), swatch("Emerald", "#004953")],
    },
    {
      title: "Embellished Cocktail Mermaid Gown",
      badge: "Red Carpet",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
      hover: "https://images.unsplash.com/photo-1776005395798-9fc7c1c50e95?auto=format&fit=crop&w=1000&q=85",
      colors: [swatch("Rose Bronze", "#a0522d"), swatch("Onyx Black", "#1b1b1b")],
    },
    {
      title: "Bespoke Pleated Corset Saree Gown",
      badge: "Couture Silhouette",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
      hover: "https://images.unsplash.com/photo-1716504627981-22728cb2d2e2?auto=format&fit=crop&w=1000&q=85",
      colors: [swatch("Champagne Shimmer", "#e5c59f"), swatch("Ruby Silk", "#9b111e")],
    },
  ],
};

export const lookbookProducts = featuredProducts.slice(0, 4);

export const lookbookImages = [
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1597897545901-6ac15b725974?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1742800767764-479556a4d8a5?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1776005395798-9fc7c1c50e95?auto=format&fit=crop&w=1200&q=85",
];

export const panelBackgrounds = {
  base: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85",
  hover: "https://images.unsplash.com/photo-1597897545901-6ac15b725974?auto=format&fit=crop&w=1400&q=85",
};

export const collectionPanelBridal = {
  eyebrow: "ROYAL WEDDING ATELIER",
  title: "Bridal & Wedding Edit",
  cta: "Explore Bridal Couture",
  tags: ["Pure Silk Weaves", "Handmade Zardozi", "Custom Blouse Stitching", "Bridal Trousseau", "Heirloom Quality"],
  front: "https://images.unsplash.com/photo-1597897545901-6ac15b725974?auto=format&fit=crop&w=1000&q=85",
  back: "https://images.unsplash.com/photo-1619516388835-2b60acc4049e?auto=format&fit=crop&w=1000&q=85",
};

export const collectionPanelFestive = {
  eyebrow: "CONTEMPORARY ETHNIC ELEGANCE",
  title: "Festive & Party Wear",
  cta: "Browse Festive Styles",
  tags: ["Organza & Chanderi", "Gotapatti Work", "Flowy Silhouettes", "Handblock Prints", "Lightweight Comfort"],
  front: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
  back: "https://images.unsplash.com/photo-1742800767764-479556a4d8a5?auto=format&fit=crop&w=1000&q=85",
};

export const showcaseTabs = [
  {
    tab: "Kanjivaram Sarees",
    title: "Timeless Pure Silk Weaves",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
    text: "Heirloom South Indian silk sarees with rich korvai contrast borders, heavy zari pallus, and ceremonial temple motifs.",
  },
  {
    tab: "Bridal Lehengas",
    title: "Handcrafted For Your Grand Day",
    image: "https://images.unsplash.com/photo-1597897545901-6ac15b725974?auto=format&fit=crop&w=1200&q=85",
    text: "Opulent velvet and raw silk lehengas tailored with hundreds of hours of intricate aari, zardozi, and dabka needlework.",
  },
  {
    tab: "Festive Anarkalis",
    title: "Fluid Grace & Tactile Comfort",
    image: "https://images.unsplash.com/photo-1742800767764-479556a4d8a5?auto=format&fit=crop&w=1200&q=85",
    text: "Ethereal flared anarkalis in chanderi, georgette, and organza designed for effortless movement and festive celebration.",
  },
];

export const brands = [
  { name: "KANJIVARAM ATELIER", tag: "Pure Silk Weaves", count: "30+ Designs" },
  { name: "BANARAS MEENAKARI", tag: "Heritage Handloom", count: "25+ Designs" },
  { name: "CHANDERI COUTURE", tag: "Lightweight Luxury", count: "20+ Designs" },
  { name: "AARI BLOUSE STUDIO", tag: "Custom Maggam Work", count: "40+ Designs" },
  { name: "ROYAL TROUSSEAU", tag: "Bridal Lehengas", count: "18+ Designs" },
  { name: "ORGANZA BLOOM", tag: "Modern Florals", count: "22+ Designs" },
];

export const instagramCards = [
  { image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85", product: "Crimson Kanjivaram Saree" },
  { image: "https://images.unsplash.com/photo-1597897545901-6ac15b725974?auto=format&fit=crop&w=800&q=85", product: "Velvet Bridal Lehenga" },
  { image: "https://images.unsplash.com/photo-1742800767764-479556a4d8a5?auto=format&fit=crop&w=800&q=85", product: "Emerald Anarkali Suit" },
  { image: "https://images.unsplash.com/photo-1738690789530-9c5ee199575c?auto=format&fit=crop&w=800&q=85", product: "Organza Scallop Saree" },
  { image: "https://images.unsplash.com/photo-1732850195295-ed6eb52d1d2b?auto=format&fit=crop&w=800&q=85", product: "Turquoise Sharara Set" },
  { image: "https://images.unsplash.com/photo-1776005395798-9fc7c1c50e95?auto=format&fit=crop&w=800&q=85", product: "Champagne Draped Gown" },
];

export const featuredProduct = {
  title: "Handcrafted Velvet Bridal Lehenga Set",
  description:
    "An ethereal bridal masterpiece hand-embroidered by generational artisans. Features rich micro-velvet kalis adorned with antique zardozi, dabka, and pearl work. Complete with a bespoke unstitched bridal blouse and twin organza dupattas.",
  note: "Custom tailoring, blouse neck customization, and color customizations available upon enquiry.",
  stock: "Made to order & ready-to-ship pieces available",
  gallery: [
    "https://images.unsplash.com/photo-1597897545901-6ac15b725974?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1619516388835-2b60acc4049e?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1716504628105-bd76d91e85f2?auto=format&fit=crop&w=1200&q=85",
  ],
  colors: [swatch("Royal Crimson", "#800020"), swatch("Rani Pink", "#e75480"), swatch("Emerald Green", "#097969")],
  sizes: ["XS", "S", "M", "L", "XL", "Custom Fit"],
  accordions: [
    {
      title: "Artisanal Craftsmanship & Details",
      body: "Over 180 hours of hand-embroidery featuring authentic zari, resham threads, and semi-precious beads. Tailored with double cancan layering for an opulent, graceful flare.",
    },
    {
      title: "Custom Tailoring & Measurements",
      list: [
        ["Custom Sizing:", "Our stylists connect with you on WhatsApp/video call to take exact measurements."],
        ["Blouse Styles:", "Choose from sweetheart, boat neck, deep back, or modest necklines."],
        ["Dispatch Time:", "Ready pieces ship in 48 hours; custom bridal lehengas take 12–18 business days."],
        ["Global Shipping:", "Express tracked air courier across India, USA, UK, Canada, Australia, and UAE."],
      ],
    },
  ],
};

export const shopTheLookProducts = [
  {
    title: "Kanjivaram Pure Silk Zari Saree",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=85",
  },
  {
    title: "Chanderi Silk Anarkali Suit Set",
    image: "https://images.unsplash.com/photo-1742800767764-479556a4d8a5?auto=format&fit=crop&w=600&q=85",
  },
];

export const footerColumns = [
  { title: "WOMEN'S BOUTIQUE", links: ["Silk Sarees", "Bridal Lehengas", "Kurti Sets", "Anarkali Suits", "Couture Gowns"] },
  { title: "ATELIER SERVICES", links: ["Bespoke Blouse Stitching", "Bridal Trousseau", "Video Shopping Call", "Fabric Care"] },
  { title: "HELP & INQUIRIES", links: ["Contact Stylist", "Book Fitting", "About Our Atelier", "Shipping & Delivery", "FAQ"] },
];

const allProducts = [
  ...featuredProducts,
  ...Object.values(tabProducts).flat(),
  ...lookbookProducts,
  featuredProduct,
  ...shopTheLookProducts,
];

export const products = [
  ...new Map(
    allProducts.map((product) => [
      slugify(product.title),
      { ...product, slug: slugify(product.title) },
    ])
  ).values(),
];

export const collections = [
  ...new Map(
    [
      ...categoriesGrid,
      ...mobileCategoryTabs.flatMap((tab) =>
        tab.items.map((item) => ({ label: item.label, image: item.image }))
      ),
      ...megaImages.map((item) => ({ label: item.label, image: item.name })),
    ].map((item) => [slugify(item.label), { ...item, slug: slugify(item.label) }])
  ).values(),
];
