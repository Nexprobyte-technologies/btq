import Link from "next/link";
import { img, products, collections } from "@/data/site";
import ProductCard from "@/components/ProductCard";
import AddToBag from "@/components/AddToBag";
import CollectionGrid from "@/components/CollectionGrid";

export function PageShell({ eyebrow, title, intro, children }) {
  return <main className="store-page"><div className="store-wrap"><div className="store-heading"><span>{eyebrow}</span><h1>{title}</h1>{intro && <p>{intro}</p>}</div>{children}</div></main>;
}

export function CollectionDirectory() {
  return <PageShell eyebrow="THE CHARMIQUE EDIT" title="Collections" intro="Explore considered pieces for every part of your wardrobe."><CollectionGrid collections={collections}/></PageShell>;
}

export function CollectionPage({ slug }) {
  const collection = collections.find((item) => item.slug === slug);
  if (!collection && slug !== "all") return <NotFoundPage title="Collection not found" />;
  const matching = products.filter((p) => slug === "all" || `${p.title} ${p.badge || ""}`.toLowerCase().includes(slug.replaceAll("-", " ")));
  const items = matching.length ? matching : products.slice(0, 8);
  return <PageShell eyebrow="SHOP THE EDIT" title={collection?.label || "All products"} intro={`Discover ${collection?.label?.toLowerCase() || "the full collection"}, selected for effortless everyday style.`}><div className="store-toolbar"><span>{items.length} styles</span><span>New season · Thoughtfully selected</span></div><div className="store-products">{items.map((product) => <ProductCard product={product} key={product.slug}/>)}</div></PageShell>;
}

export function ProductPage({ slug }) {
  const product = products.find((item) => item.slug === slug);
  if (!product) return <NotFoundPage title="Product not found" />;
  const gallery = product.gallery || [product.image, product.hover || product.image];
  return <PageShell eyebrow="CHARMIQUE · NEW SEASON" title={product.title} intro="Made for everyday wear, with considered details and a comfortable feel."><div className="store-product-detail"><div className="store-gallery">{gallery.map((file, i) => <img key={`${file}-${i}`} src={img(file, 1000)} alt={`${product.title} view ${i + 1}`}/>)}</div><section className="store-buy"><span className="store-price">{product.price} {product.compareAt && <s>{product.compareAt}</s>}</span><p>{product.description || "A versatile wardrobe essential, designed to bring comfort and character to your everyday looks."}</p><label>Color</label><div className="store-swatches">{(product.colors || []).map((color) => <span title={color.name} key={color.name} style={{ background: color.color }}/>)}</div><label htmlFor="size">Choose a size</label><select id="size" defaultValue=""><option value="" disabled>Select size</option>{(product.sizes || ["XS", "S", "M", "L", "XL"]).map((size) => <option key={size}>{size}</option>)}</select><AddToBag slug={product.slug}/><p className="store-note">Complimentary shipping on orders over $100.</p><details><summary>Product details</summary><p>{product.description || "Designed for comfort and easy layering. Made to be worn season after season."}</p></details><details><summary>Care instructions</summary><p>Wash with similar colors on a gentle cycle. Air dry when possible.</p></details></section></div></PageShell>;
}

const pages = {
  "about-us": { eyebrow: "OUR STORY", title: "Everyday style, thoughtfully considered", intro: "Charmique is built around the pieces you reach for again and again: comfortable layers, lasting details, and an easy sense of confidence.", body: "We believe getting dressed should feel simple. Our collections bring together versatile shapes, tactile fabrics, and timeless colors, creating a wardrobe that works across seasons and occasions." },
  about: { eyebrow: "OUR STORY", title: "Everyday style, thoughtfully considered", intro: "Charmique is built around the pieces you reach for again and again.", body: "We bring together versatile shapes, tactile fabrics, and timeless colors to create a wardrobe that works across seasons and occasions." },
  contact: { eyebrow: "WE ARE HERE TO HELP", title: "Get in touch", intro: "Questions about an order, a product, or finding your fit? Send our team a note and we’ll be happy to help.", body: "Email us at hello@charmique.example or call +1 (415) 555-0145. Our team is available Monday to Friday, 9am–5pm." },
  "privacy-policy": { eyebrow: "HELP & SUPPORT", title: "Privacy policy", intro: "Your privacy matters to us.", body: "We use the information you provide to support your shopping experience, respond to enquiries, and keep you informed when you choose to hear from us. Contact our team with any privacy questions." },
  "refund-policy": { eyebrow: "HELP & SUPPORT", title: "Returns & refunds", intro: "We want you to feel great about your purchase.", body: "If an item is not right for you, contact our support team within 30 days of delivery to arrange a return. Items should be unworn and in their original condition." },
  faq: { eyebrow: "HELP & SUPPORT", title: "Frequently asked questions", intro: "A few helpful answers for your shopping experience.", body: "Orders are usually prepared within 1–3 business days. Shipping options and delivery estimates are shown at checkout. For a size recommendation, contact us with the product and fit you prefer." },
  account: { eyebrow: "YOUR CHARMIQUE ACCOUNT", title: "Welcome back", intro: "Account sign-in is coming soon. For help with an existing order, our team is ready to assist.", body: "Email hello@charmique.example with your order number and we’ll help you with tracking, returns, and product questions." },
};

export function InfoPage({ slug }) {
  const page = pages[slug] || { eyebrow: "CHARMIQUE JOURNAL", title: slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase()), intro: "Stories, inspiration, and useful details from Charmique.", body: "We are updating this page with more information. Please get in touch if you need help." };
  return <PageShell eyebrow={page.eyebrow} title={page.title} intro={page.intro}><div className="store-copy"><p>{page.body}</p>{slug === "contact" && <form className="store-contact" action="mailto:hello@charmique.example" method="post" encType="text/plain"><input name="name" placeholder="Your name" required/><input name="email" type="email" placeholder="Email address" required/><textarea name="message" placeholder="How can we help?" rows="5" required/><button className="store-add">Send message</button></form>}</div></PageShell>;
}

const articles = [
  { slug: "a-guide-to-easy-layering", title: "A guide to easy layering", category: "STYLE NOTES", image: "showcase1.webp", excerpt: "Build a more versatile wardrobe with pieces that layer naturally, season after season." },
  { slug: "the-weekend-knit-edit", title: "The weekend knit edit", category: "THE EDIT", image: "showcase2.webp", excerpt: "Soft textures and relaxed shapes make getting dressed feel effortless." },
  { slug: "finding-your-everyday-uniform", title: "Finding your everyday uniform", category: "INSPIRATION", image: "showcase3.webp", excerpt: "A few thoughtful essentials can make a world of difference to your daily routine." },
];
export function BlogIndex() { return <PageShell eyebrow="FROM THE JOURNAL" title="Stories & style notes" intro="Ideas, inspiration, and a closer look at the pieces we love."><div className="store-collections">{articles.map((a) => <Link href={`/blogs/${a.slug}`} className="store-collection" key={a.slug}><img src={img(a.image, 800)} alt=""/><span>{a.category}<b>{a.title} ↗</b></span></Link>)}</div></PageShell>; }
export function BlogPage({ slug }) { const article = articles.find((item) => item.slug === slug); if (!article) return <NotFoundPage title="Story not found"/>; return <PageShell eyebrow={article.category} title={article.title} intro={article.excerpt}><article className="store-article"><img src={img(article.image, 1400)} alt=""/><p>Great style starts with pieces that feel as good as they look. Choose comfortable shapes, build around a palette you love, and let thoughtful layers take you from one part of the day to the next.</p><p>Explore our latest collection for versatile favorites made to be worn your way.</p><Link className="store-text-link" href="/collections/all">Shop the collection ↗</Link></article></PageShell>; }
export function SearchPage({ query = "" }) { const q = query.toLowerCase(); const results = products.filter((p) => p.title.toLowerCase().includes(q)); return <PageShell eyebrow="FIND YOUR FAVORITES" title={q ? `Search: ${query}` : "Search"} intro={q ? `${results.length} matching styles` : "Explore our collection."}><form action="/search" className="store-search"><input name="q" defaultValue={query} placeholder="Search products…"/><button className="store-add">Search</button></form><div className="store-products">{results.map((p) => <ProductCard product={p} key={p.slug}/>)}</div>{q && !results.length && <p className="store-empty">No styles found. Try another search.</p>}</PageShell>; }
export function NotFoundPage({ title = "Page not found" }) { return <PageShell eyebrow="404" title={title} intro="We couldn't find the page you were looking for."><Link className="store-text-link" href="/collections/all">Continue shopping ↗</Link></PageShell>; }
