import { version } from "./versions";

export const CDN = "https://skytheme-demo.myshopify.com/cdn/shop/files/";

export const img = (name, width = 1200) =>
  `${CDN}${name}?v=${version(name)}&width=${width}`;

export const navLinks = [
  { label: "Home", href: "#" },
  { label: "Shop", href: "#", mega: true },
  { label: "About Us", href: "#" },
  { label: "Collections", href: "#" },
  { label: "Catalog", href: "#" },
  { label: "Lookbook", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "Contact", href: "#" },
];

export const megaMenu = [
  {
    title: "New Arrivals",
    links: ["Outerwear", "Knitwear", "Sportswear", "Shirts", "Best Sellers"],
  },
  {
    title: "Popular Categories",
    links: ["Elegant Looks", "Heritage", "The New Edit", "Outerwear", "Premium Jacket"],
  },
];

export const megaImages = [
  { name: "coll-elegant-looks.webp", label: "Elegant Looks" },
  { name: "coll-heritage.webp", label: "Heritage" },
  { name: "coll-the-new-edit.webp", label: "The New Edit" },
  { name: "coll-premium-jacket.webp", label: "Premium Jacket" },
];

export const announcementSlides = [
  <>
    Big savings on everyday fashion only for a short time.{" "}
    <a className="u-line" href="#">Shop Now</a>
  </>,
  <>
    Free shipping on all orders over $25 — this week only.{" "}
    <a className="u-line" href="#">Grab the deal</a>
  </>,
  <>
    New season knitwear just landed. Fresh fits, better prices.{" "}
    <a className="u-line" href="#">Explore</a>
  </>,
];

export const mobileCategoryTabs = [
  {
    tab: "All",
    heading: "Discover Your Signature Everyday Style",
    items: [
      { label: "T-Shirts", image: "coll-casual-collection.webp" },
      { label: "Jackets", image: "coll-premium-jacket.webp" },
      { label: "Shirts", image: "coll-modern-basics.webp" },
      { label: "Suits", image: "coll-current-classic.webp" },
      { label: "Co-ords", image: "coll-weekend-edit.webp" },
      { label: "Blazers", image: "coll-signature-style.webp" },
    ],
  },
  {
    tab: "Men",
    heading: "Elevated Essentials Made for Him",
    items: [
      { label: "Crop Top", image: "coll-wardrobe-staples.webp" },
      { label: "Tops", image: "coll-daily-edit.webp" },
      { label: "Knitwear", image: "coll-essential-classic.webp" },
      { label: "Cloaks", image: "coll-outwear.webp" },
      { label: "Dresses", image: "coll-the-luxe-edit.webp" },
      { label: "Outwear", image: "coll-elegant-looks.webp" },
    ],
  },
  {
    tab: "Women",
    heading: "Timeless Trends Designed for Her",
    items: [
      { label: "Track Suits", image: "coll-heritage.webp" },
      { label: "Co-ords", image: "coll-trending-now.webp" },
      { label: "Blazers", image: "coll-modern-classic.webp" },
      { label: "Shirts", image: "coll-casual-collection.webp" },
      { label: "Crop Top", image: "coll-sundown-strips.webp" },
      { label: "Tops", image: "coll-the-new-edit.webp" },
    ],
  },
  {
    tab: "On Sale",
    heading: "Exceptional Styles at Better Prices",
    items: [
      { label: "Track Suits", image: "coll-premium-jacket.webp" },
      { label: "Co-ords", image: "coll-weekend-edit.webp" },
      { label: "Blazers", image: "coll-current-classic.webp" },
      { label: "Shirts", image: "coll-daily-edit.webp" },
      { label: "Crop Top", image: "coll-modern-basics.webp" },
      { label: "Dresses", image: "coll-wardrobe-staples.webp" },
    ],
  },
];

export const categoriesGrid = [
  { label: "Warm Wear", image: "cat1_5.webp" },
  { label: "Trend Wear", image: "cat2_6.webp" },
  { label: "Casuals", image: "cat3_5.webp" },
  { label: "Winter Edit", image: "cat4_4.webp" },
  { label: "Elegant Wear", image: "cat5_4_1.webp" },
  { label: "Occasion Wear", image: "cat6_5.webp" },
  { label: "Relaxed Fit", image: "cat7_3.webp" },
  { label: "Easy Wear", image: "cat8_1.webp" },
  { label: "DROP", image: "cat9_1.webp" },
  { label: "Luxe Collection", image: "coll-the-luxe-edit.webp" },
];

const swatch = (name, color) => ({ name, color });

export const featuredProducts = [
  {
    title: "Drift Stripe Knit Top",
    price: "$104.00",
    badge: "",
    image: "pro_12-a.jpg",
    hover: "pro_12-b.jpg",
    colors: [swatch("Pink", "rgb(255 192 203)"), swatch("Pastel Green", "rgb(118 178 144)"), swatch("Beige", "rgb(234 216 171)")],
  },
  {
    title: "Classic Rib Trim Sweater",
    price: "$95.00",
    badge: "Exclusive",
    image: "pro13-a_4ceaa5e3-59e9-4e72-90a4-88b0bfe589ed.jpg",
    hover: "pro13-b_2a490a43-8212-498d-80bc-5248e32e7aa5.jpg",
    colors: [swatch("Purple", "rgb(126 96 168)"), swatch("Pink", "rgb(255 192 203)")],
  },
  {
    title: "Cozy Textured Knit Cardigan",
    price: "$120.00",
    badge: "Premium",
    image: "pro15-a_89ef6092-60f3-495f-9996-ddb95ff2157f.jpg",
    hover: "pro15-b_b10a288e-3c17-417e-ba80-d666206b07f1.jpg",
    colors: [swatch("Pastel Green", "rgb(118 178 144)"), swatch("Beige", "rgb(234 216 171)"), swatch("Olive", "rgb(107 114 74)")],
  },
  {
    title: "Casual Rugby Knit Top",
    price: "$90.00",
    badge: "Trending",
    image: "pro17-a_99761465-a2e5-4f3e-92d9-9d8300a50a8d.jpg",
    hover: "pro17-b_bc41ca56-0280-4053-9b76-35eb1bcec02d.jpg",
    colors: [swatch("Pink", "rgb(255 192 203)"), swatch("Pastel Green", "rgb(118 178 144)"), swatch("Purple", "rgb(126 96 168)")],
  },
  {
    title: "Drift Crew Sweatshirt",
    price: "$104.00",
    compareAt: "$120.00",
    badge: "13% OFF",
    image: "pro1-a_d1426ed4-16ce-4465-800a-735891f0f900.jpg",
    hover: "pro1-c.jpg",
    colors: [swatch("Maroon", "rgb(92 27 35)"), swatch("Gray", "rgb(138 138 138)"), swatch("Navy", "rgb(35 47 74)"), swatch("Bronze", "rgb(140 98 62)")],
  },
  {
    title: "Essential Crew Knit",
    price: "$90.00",
    badge: "Bestseller",
    image: "pro6-a_59628fb6-9df9-4173-af82-889238767e96.jpg",
    hover: "pro6-c_0f13e442-3376-4d5f-92ab-fb397d589d25.jpg",
    colors: [swatch("Off white", "rgb(245 243 236)"), swatch("Pink", "rgb(255 192 203)"), swatch("Pastel Green", "rgb(118 178 144)")],
  },
  {
    title: "Harbor Relaxed Knit",
    price: "$98.00",
    badge: "",
    image: "pro25-a_7b69871e-aeed-408e-9cd4-be6fa5f6cd9d.jpg",
    hover: "pro25-b_fa15ff25-eb40-4fd5-bf44-bbfe840457ae.jpg",
    colors: [swatch("Beige", "rgb(234 216 171)"), swatch("Olive", "rgb(107 114 74)")],
  },
  {
    title: "Weekend Stripe Polo",
    price: "$86.00",
    badge: "New",
    image: "pro20-a_cebb88af-83c2-434a-bbcc-6c00ebb6ba00.jpg",
    hover: "pro20-b_55a63dc1-6e6c-4238-8636-d5ba00e46792.jpg",
    colors: [swatch("Navy", "rgb(35 47 74)"), swatch("Pink", "rgb(255 192 203)")],
  },
];

export const tabProducts = {
  Premium: [
    {
      title: "Soft Touch Stripe Top",
      price: "$72.50",
      badge: "Premium",
      image: "pro20-a_cebb88af-83c2-434a-bbcc-6c00ebb6ba00.jpg",
      hover: "pro20-b_55a63dc1-6e6c-4238-8636-d5ba00e46792.jpg",
      colors: [swatch("Olive", "rgb(107 114 74)"), swatch("Black", "rgb(20 20 20)")],
    },
    {
      title: "Casual Men Shirt",
      price: "$95.00",
      badge: "Premium",
      image: "pro10-a_2651a4d6-06ae-437d-a476-c05f2de91979.jpg",
      hover: "pro10-b_85230f41-06ff-4107-8c0b-99bc34a2da08.jpg",
      colors: [swatch("Pink", "rgb(255 192 203)"), swatch("Beige", "rgb(234 216 171)"), swatch("Pastel blue", "rgb(176 205 224)")],
    },
    {
      title: "Classic Rib Trim Sweater",
      price: "$95.00",
      badge: "Exclusive",
      image: "pro13-a_4ceaa5e3-59e9-4e72-90a4-88b0bfe589ed.jpg",
      hover: "pro13-b_2a490a43-8212-498d-80bc-5248e32e7aa5.jpg",
      colors: [swatch("Purple", "rgb(126 96 168)"), swatch("Pink", "rgb(255 192 203)")],
    },
    {
      title: "Relaxed Collar Knit",
      price: "$90.00",
      badge: "Premium",
      image: "pro7-a_70a28ee3-8230-46de-938d-3d2cdaf07a94.jpg",
      hover: "pro7-c_1f7a3a74-897b-48df-a79c-30d0a92b2528.jpg",
      colors: [swatch("Sage Green", "rgb(152 170 143)"), swatch("Navy", "rgb(35 47 74)"), swatch("Off white", "rgb(245 243 236)")],
    },
    {
      title: "Wide Stripe Polo",
      price: "$120.00",
      badge: "",
      image: "pro9-a_2cb3bf0c-3ebd-4de7-8e9c-828c1c9b5484.jpg",
      hover: "pro9-b_027d2adc-e12f-447d-9c3e-151207d2d4c6.jpg",
      colors: [swatch("Navy", "rgb(35 47 74)"), swatch("Olive", "rgb(107 114 74)"), swatch("Black", "rgb(20 20 20)")],
    },
    {
      title: "Timeless Harbor Knit",
      price: "$98.00",
      badge: "Bestseller",
      image: "pro27-a_58f91172-953e-47e2-996a-9879b16673f3.jpg",
      hover: "pro27-b_4a0c725c-4621-4e23-b995-2acdd47f3e48.jpg",
      colors: [swatch("Pink", "rgb(255 192 203)"), swatch("Olive", "rgb(107 114 74)"), swatch("Gray", "rgb(138 138 138)")],
    },
    {
      title: "Stripe Block Polo",
      price: "$100.00",
      badge: "",
      image: "pro11-a_f70b1e15-0da9-4f16-907b-78cb62a18708.jpg",
      hover: "pro11-c_b2a07904-193f-4def-aa94-b3ad07ba26b9.jpg",
      colors: [swatch("Olive green", "rgb(94 104 66)"), swatch("Pink", "rgb(255 192 203)"), swatch("Beige", "rgb(234 216 171)")],
    },
    {
      title: "Drift Stripe Knit Top",
      price: "$104.00",
      badge: "",
      image: "pro_12-a.jpg",
      hover: "pro_12-b.jpg",
      colors: [swatch("Pink", "rgb(255 192 203)"), swatch("Pastel Green", "rgb(118 178 144)")],
    },
  ],
  "Fresh Picks": [
    {
      title: "Drift Crew Sweatshirt",
      price: "$104.00",
      compareAt: "$120.00",
      badge: "13% OFF",
      image: "pro1-a_d1426ed4-16ce-4465-800a-735891f0f900.jpg",
      hover: "pro1-c.jpg",
      colors: [swatch("Maroon", "rgb(92 27 35)"), swatch("Gray", "rgb(138 138 138)"), swatch("Navy", "rgb(35 47 74)")],
    },
    {
      title: "Essential Crew Knit",
      price: "$90.00",
      badge: "Bestseller",
      image: "pro6-a_59628fb6-9df9-4173-af82-889238767e96.jpg",
      hover: "pro6-c_0f13e442-3376-4d5f-92ab-fb397d589d25.jpg",
      colors: [swatch("Off white", "rgb(245 243 236)"), swatch("Pink", "rgb(255 192 203)")],
    },
    {
      title: "Cozy Textured Knit Cardigan",
      price: "$120.00",
      badge: "Premium",
      image: "pro15-a_89ef6092-60f3-495f-9996-ddb95ff2157f.jpg",
      hover: "pro15-b_b10a288e-3c17-417e-ba80-d666206b07f1.jpg",
      colors: [swatch("Pastel Green", "rgb(118 178 144)"), swatch("Beige", "rgb(234 216 171)")],
    },
    {
      title: "Heritage Knit Stripe Top",
      price: "$105.00",
      badge: "",
      image: "pro8-a_9647d642-343a-4184-9dd8-946a4a25ec36.jpg",
      hover: "pro8-b_083f4511-3be7-49f9-a089-681dc9bd0277.jpg",
      colors: [swatch("Beige", "rgb(234 216 171)"), swatch("Pink", "rgb(255 192 203)")],
    },
    {
      title: "Casual Rugby Knit Top",
      price: "$90.00",
      badge: "Trending",
      image: "pro17-a_99761465-a2e5-4f3e-92d9-9d8300a50a8d.jpg",
      hover: "pro17-b_bc41ca56-0280-4053-9b76-35eb1bcec02d.jpg",
      colors: [swatch("Pink", "rgb(255 192 203)"), swatch("Purple", "rgb(126 96 168)")],
    },
    {
      title: "Harbor Relaxed Knit",
      price: "$98.00",
      badge: "",
      image: "pro25-a_7b69871e-aeed-408e-9cd4-be6fa5f6cd9d.jpg",
      hover: "pro25-b_fa15ff25-eb40-4fd5-bf44-bbfe840457ae.jpg",
      colors: [swatch("Beige", "rgb(234 216 171)"), swatch("Olive", "rgb(107 114 74)")],
    },
    {
      title: "Weekend Stripe Polo",
      price: "$86.00",
      badge: "New",
      image: "pro20-a_cebb88af-83c2-434a-bbcc-6c00ebb6ba00.jpg",
      hover: "pro20-b_55a63dc1-6e6c-4238-8636-d5ba00e46792.jpg",
      colors: [swatch("Navy", "rgb(35 47 74)"), swatch("Pink", "rgb(255 192 203)")],
    },
    {
      title: "Relaxed Collar Knit",
      price: "$90.00",
      badge: "Premium",
      image: "pro7-a_70a28ee3-8230-46de-938d-3d2cdaf07a94.jpg",
      hover: "pro7-c_1f7a3a74-897b-48df-a79c-30d0a92b2528.jpg",
      colors: [swatch("Sage Green", "rgb(152 170 143)"), swatch("Navy", "rgb(35 47 74)")],
    },
  ],
  Trending: [
    {
      title: "Wide Stripe Polo",
      price: "$120.00",
      badge: "Trending",
      image: "pro9-a_2cb3bf0c-3ebd-4de7-8e9c-828c1c9b5484.jpg",
      hover: "pro9-b_027d2adc-e12f-447d-9c3e-151207d2d4c6.jpg",
      colors: [swatch("Navy", "rgb(35 47 74)"), swatch("Olive", "rgb(107 114 74)")],
    },
    {
      title: "Casual Men Shirt",
      price: "$95.00",
      badge: "Premium",
      image: "pro10-a_2651a4d6-06ae-437d-a476-c05f2de91979.jpg",
      hover: "pro10-b_85230f41-06ff-4107-8c0b-99bc34a2da08.jpg",
      colors: [swatch("Pink", "rgb(255 192 203)"), swatch("Beige", "rgb(234 216 171)")],
    },
    {
      title: "Timeless Harbor Knit",
      price: "$98.00",
      badge: "Bestseller",
      image: "pro27-a_58f91172-953e-47e2-996a-9879b16673f3.jpg",
      hover: "pro27-b_4a0c725c-4621-4e23-b995-2acdd47f3e48.jpg",
      colors: [swatch("Pink", "rgb(255 192 203)"), swatch("Gray", "rgb(138 138 138)")],
    },
    {
      title: "Stripe Block Polo",
      price: "$100.00",
      badge: "",
      image: "pro11-a_f70b1e15-0da9-4f16-907b-78cb62a18708.jpg",
      hover: "pro11-c_b2a07904-193f-4def-aa94-b3ad07ba26b9.jpg",
      colors: [swatch("Olive green", "rgb(94 104 66)"), swatch("Pink", "rgb(255 192 203)")],
    },
    {
      title: "Classic Rib Trim Sweater",
      price: "$95.00",
      badge: "Exclusive",
      image: "pro13-a_4ceaa5e3-59e9-4e72-90a4-88b0bfe589ed.jpg",
      hover: "pro13-b_2a490a43-8212-498d-80bc-5248e32e7aa5.jpg",
      colors: [swatch("Purple", "rgb(126 96 168)"), swatch("Pink", "rgb(255 192 203)")],
    },
    {
      title: "Drift Stripe Knit Top",
      price: "$104.00",
      badge: "",
      image: "pro_12-a.jpg",
      hover: "pro_12-b.jpg",
      colors: [swatch("Pink", "rgb(255 192 203)"), swatch("Beige", "rgb(234 216 171)")],
    },
    {
      title: "Essential Crew Knit",
      price: "$90.00",
      badge: "Bestseller",
      image: "pro6-a_59628fb6-9df9-4173-af82-889238767e96.jpg",
      hover: "pro6-c_0f13e442-3376-4d5f-92ab-fb397d589d25.jpg",
      colors: [swatch("Off white", "rgb(245 243 236)"), swatch("Pastel Green", "rgb(118 178 144)")],
    },
    {
      title: "Cozy Textured Knit Cardigan",
      price: "$120.00",
      badge: "Premium",
      image: "pro15-a_89ef6092-60f3-495f-9996-ddb95ff2157f.jpg",
      hover: "pro15-b_b10a288e-3c17-417e-ba80-d666206b07f1.jpg",
      colors: [swatch("Olive", "rgb(107 114 74)"), swatch("Beige", "rgb(234 216 171)")],
    },
  ],
};

export const lookbookProducts = [
  { title: "Woven Stripe Top", price: "$104.00", image: "pro_12-d_b53975df-f4d4-4596-b8c4-fb9fbdd35789.jpg", hover: "pro_12-d-1_a3a1ce07-1caa-4501-bce8-31c2148e7fbb.jpg", colors: [swatch("Pink", "rgb(255 192 203)"), swatch("Pastel Green", "rgb(118 178 144)"), swatch("Beige", "rgb(234 216 171)")] },
  { title: "Draped Wide-Leg Pant", price: "$104.00", image: "pro_14-e_bafc941f-1130-483d-aa8b-001342e44fbc.jpg", hover: "pro_14-f_cfb822d6-a495-4b90-95d8-7c27ce200b07.jpg", colors: [swatch("Pink", "rgb(255 192 203)"), swatch("Pastel Green", "rgb(118 178 144)")] },
  { title: "Heritage Knit Stripe Top", price: "$105.00", image: "pro_29-e_ff49eb1e-c8ae-4c49-b968-77831d4ef7a5.jpg", hover: "pro_29-f_e445e95b-4912-4c17-ba32-ddf860e5ba7e.jpg", colors: [swatch("Beige", "rgb(234 216 171)"), swatch("Pink", "rgb(255 192 203)")] },
  { title: "Classic Tailored Pant", price: "$105.00", image: "pro_16-e_bc6ed7c2-731f-4811-acdc-1d98027a26a5.jpg", hover: "pro16-f.jpg", colors: [swatch("Beige", "rgb(234 216 171)"), swatch("Pink", "rgb(255 192 203)")] },
  { title: "Knotted Stripe Knit Top", price: "$98.00", image: "pro_22-d.jpg", hover: "pro_22-d-1.jpg", colors: [swatch("Pastel blue", "rgb(176 205 224)"), swatch("Pink", "rgb(255 192 203)"), swatch("Brown", "rgb(122 84 62)")] },
];

export const lookbookImages = ["LC-5.webp", "LC-4.webp", "LC-3.webp", "LC-2.webp", "LC-1.webp"];

export const panelBackgrounds = {
  base: "bg-img.webp",
  hover: "bg-image-hover.webp",
};

export const collectionPanelMen = {
  eyebrow: "STYLE MEETS CONFIDENCE",
  title: "Shop Men",
  cta: "Discover the Edit",
  tags: ["Proper Fit", "Comfort Fit Style", "Easy Care", "Wind Resistant", "Lightweight Material"],
  front: "men_front.webp",
  back: "men_back.webp",
};

export const collectionPanelWomen = {
  eyebrow: "ELEVATE YOUR STYLE",
  title: "Shop Women",
  cta: "Browse All Styles",
  tags: ["Skin Friendly", "Versatile Style", "Comfort Fit Style", "Quick Dry", "Shape Retention"],
  front: "women_front.webp",
  back: "women_back.webp",
};

export const showcaseTabs = [
  { tab: "Jackets", title: "Designed to Stand Out", image: "showcase1.webp", text: "Stylish jackets crafted for warmth, comfort, and everyday confidence." },
  { tab: "Sports Wear", title: "Elevate Your Wardrobe", image: "showcase2.webp", text: "Classic stripes and polished knits made for everyday comfort and easy layering." },
  { tab: "Relaxed Fit", title: "Timeless Fits. Modern Style.", image: "showcase3.webp", text: "Relaxed silhouettes offering effortless comfort for every casual occasion." },
];

export const brands = [
  { name: "SOLENE", tag: "Curated Collection", count: "15 Products" },
  { name: "URBANMUSE", tag: "Curated Collection", count: "15 Products" },
  { name: "LENORA", tag: "Curated Collection", count: "10 Products" },
  { name: "ELIRA", tag: "Collection Type", count: "15 Products" },
  { name: "VELIX", tag: "Collection Type", count: "10 Products" },
  { name: "VELVET LANE", tag: "Collection Type", count: "15 Products" },
  { name: "WILD LOOM", tag: "Collection Type", count: "10 Products" },
  { name: "URBANIQUE", tag: "Collection Type", count: "15 Products" },
  { name: "ARVELLE", tag: "Collection Type", count: "15 Products" },
];

export const instagramCards = [
  { image: "SM1.webp", product: "Casual Stripe Pullover", price: "$98.00" },
  { image: "SM3.webp", product: "Classic Rib Sweater", price: "From $98.00", compareAt: "$150.00" },
  { image: "SM4.webp", product: "Casual Crew Pullover", price: "$80.00" },
  { image: "SM5.webp", product: "Signature Collar Pullover", price: "$50.00" },
  { image: "SM6.webp", product: "Casual Men Shirt", price: "$95.00" },
  { image: "SM7.webp", product: "Drift Stripe Knit Top", price: "$104.00" },
  { image: "SM8.webp", product: "Heritage Stripe Sweater", price: "$110.00" },
  { image: "Frame_1171284778.webp", product: "Casual Rugby Knit Top", price: "$90.00" },
];

export const featuredProduct = {
  title: "Drift Crew Sweatshirt",
  description:
    "Wear it on its own for a laid-back look or layer it over a tee or under a jacket when the temperature drops.",
  price: "$104.00",
  compareAt: "$120.00",
  note: "The model is 173 cm tall and is wearing size S",
  stock: "100 in stock, Get yours today!",
  gallery: [
    "pro1-a_d1426ed4-16ce-4465-800a-735891f0f900.jpg",
    "pro1-b.jpg",
    "pro1-c.jpg",
    "pro1-d.jpg",
  ],
  colors: [swatch("Maroon", "rgb(92 27 35)"), swatch("Gray", "rgb(138 138 138)"), swatch("Navy", "rgb(35 47 74)"), swatch("Bronze", "rgb(140 98 62)")],
  sizes: ["XS", "S", "M", "L", "XL"],
  accordions: [
    {
      title: "Product Description",
      body: "Stay comfortable and effortlessly stylish with the Drift Crew Sweatshirt, a versatile everyday essential designed for relaxed, modern dressing. Made with a soft and cozy feel, this classic crew-neck sweatshirt offers comfortable wear while keeping you looking sharp.",
    },
    {
      title: "Clothing Care Instructions",
      list: [
        ["Machine Wash Cold:", "Wash with similar colors on a gentle cycle."],
        ["Do Not Bleach:", "Avoid bleach and harsh chemicals to protect fabric quality."],
        ["Tumble Dry Low:", "Use a low-heat setting or air dry when possible."],
        ["Iron Low:", "Iron inside out using low to medium heat."],
        ["Do Not Dry Clean:", "Avoid dry cleaning unless specifically recommended."],
        ["Store Properly:", "Fold or hang garments in a cool, dry place away from direct sunlight."],
      ],
    },
  ],
};

export const shopTheLookProducts = [
  { title: "Fine Line Knit Top", price: "$50.00", image: "pro19-a_2d567d84-35e2-4e9b-84a8-7b3094eef4cd.jpg" },
  { title: "Crewneck Stripe Knit", price: "$105.00", image: "pro_14-a_7e155c36-a423-4fe7-8960-4f34699d53f9.jpg" },
];

export const footerColumns = [
  { title: "QUICK LINKS", links: ["Home", "About", "Contact", "All collections", "Blogs"] },
  { title: "BEST COLLECTIONS", links: ["Casual Collection", "Current Classics", "Daily Edit", "Modern Basics", "Heritage"] },
  { title: "HELP & SUPPORT", links: ["Contact", "Legal Notice", "Refund Policy", "Privacy Policy", "FAQ"] },
];
