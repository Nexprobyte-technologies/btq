"use client";

import { useState } from "react";
import Link from "next/link";
import { img, products, collections } from "@/data/site";
import ProductCard from "@/components/ProductCard";
import AddToBag from "@/components/AddToBag";
import CollectionGrid from "@/components/CollectionGrid";
import { useStore } from "@/context/StoreContext";
import { Check, Close, Filter, Heart, HeartFilled, Shield, Sparkles, Star, Truck, WhatsAppFilled } from "./icons";

export function PageShell({ eyebrow, title, intro, children }) {
  return (
    <main className="store-page">
      <div className="store-wrap">
        <div className="store-heading">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="heading-font">{title}</h1>
          {intro && <p className="store-intro">{intro}</p>}
        </div>
        {children}
      </div>
    </main>
  );
}

export function CollectionDirectory() {
  return (
    <PageShell
      eyebrow="THE CHARMIQUE DIRECTORY"
      title="All Collections"
      intro="Explore considered artisanal pieces, ethnic edits, and modern wardrobe essentials designed for every occasion."
    >
      <CollectionGrid collections={collections} />
    </PageShell>
  );
}

export function CollectionPage({ slug }) {
  const [sortBy, setSortBy] = useState("featured");
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const collection = collections.find((item) => item.slug === slug);
  if (!collection && slug !== "all") return <NotFoundPage title="Collection not found" />;

  const baseItems = products.filter(
    (p) =>
      slug === "all" ||
      `${p.title} ${p.badge || ""}`.toLowerCase().includes(slug.replaceAll("-", " "))
  );

  const pool = baseItems.length ? baseItems : products;

  // Filter by category chip if chosen
  const filtered = pool.filter((p) => {
    if (activeCategoryFilter === "all") return true;
    return p.title.toLowerCase().includes(activeCategoryFilter);
  });

  // Sort products
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "title-asc") return a.title.localeCompare(b.title);
    return 0; // featured
  });

  const categories = [
    { label: "All Styles", value: "all" },
    { label: "Silk Sarees", value: "saree" },
    { label: "Bridal Lehengas", value: "lehenga" },
    { label: "Kurtis & Anarkalis", value: "anarkali" },
    { label: "Couture Gowns", value: "gown" },
  ];

  return (
    <PageShell
      eyebrow="CURATED COLLECTION"
      title={collection?.label || "All Creations"}
      intro={`Explore ${
        collection?.label?.toLowerCase() || "our signature styles"
      }, tailored with supreme fabric comfort, thoughtful silhouettes, and enduring luxury.`}
    >
      {/* Toolbar with live count, filter toggle and sorting */}
      <div className="store-toolbar">
        <div className="toolbar-left">
          <button
            type="button"
            className={`toolbar-filter-btn ${showFilters ? "is-active" : ""}`}
            onClick={() => setShowFilters((prev) => !prev)}
            aria-expanded={showFilters}
            aria-label="Filter products"
          >
            <Filter size={15} />
            <span>Filters</span>
            {activeCategoryFilter !== "all" && (
              <span className="filter-count-badge">1</span>
            )}
          </button>
          <span className="toolbar-count">
            Showing <b>{sorted.length}</b> styles
          </span>
        </div>
        <div className="toolbar-right">
          <label htmlFor="sort-select">Sort by:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="store-sort-select"
          >
            <option value="featured">Featured Picks</option>
            <option value="title-asc">Alphabetical: A to Z</option>
          </select>
        </div>
      </div>

      {/* Expandable Category filter pills */}
      {showFilters && (
        <div className="collection-filter-chips is-open">
          <span className="filter-chips-label">Filter:</span>
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              className={`filter-chip ${activeCategoryFilter === cat.value ? "is-active" : ""}`}
              onClick={() => setActiveCategoryFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
          {activeCategoryFilter !== "all" && (
            <button
              type="button"
              className="filter-chip filter-chip--clear"
              onClick={() => setActiveCategoryFilter("all")}
            >
              ✕ Clear Filter
            </button>
          )}
        </div>
      )}

      {/* Products Grid */}
      <div className="store-products">
        {sorted.map((product) => (
          <ProductCard product={product} key={product.slug} />
        ))}
      </div>

      {sorted.length === 0 && (
        <div className="store-empty">
          <p>No styles match the selected category filter.</p>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setActiveCategoryFilter("all")}
            style={{ marginTop: 14 }}
          >
            <span className="btn-text">Reset Filters</span>
          </button>
        </div>
      )}
    </PageShell>
  );
}

export function ProductPage({ slug }) {
  const product = products.find((item) => item.slug === slug);
  const { addToCart, toggleWishlist, isInWishlist, openEnquiry } = useStore();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name || "Default");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  if (!product) return <NotFoundPage title="Product not found" />;

  const isWishlisted = isInWishlist(slug);
  const colorImages = (product.colors || []).map((c) => c.image).filter(Boolean);
  const baseGallery = product.gallery || [product.image, product.hover].filter(Boolean);
  const gallery = Array.from(new Set([...(colorImages.length > 0 ? colorImages : []), ...baseGallery]));
  if (gallery.length === 0 && product.image) gallery.push(product.image);
  const sizes = product.sizes || ["XS", "S", "M", "L", "XL", "Custom Fit"];

  const handleColorSelect = (colorObj, index) => {
    setSelectedColor(colorObj.name);
    if (colorObj.image) {
      const idx = gallery.indexOf(colorObj.image);
      if (idx !== -1) {
        setActiveImageIndex(idx);
        return;
      }
    }
    if (gallery.length > 0) {
      setActiveImageIndex(index % gallery.length);
    }
  };

  const handleWhatsAppEnquiry = () => {
    const msg = `Hello Charmique Boutique! ✨\n\nI want to enquire about *${product.title}*.\nSelected Color: ${selectedColor}\nSelected Size: ${selectedSize}\nQuantity: ${quantity}\n\nPlease share pricing, blouse customization options, fabric availability, and delivery schedule.`;
    window.open(`https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <PageShell
      eyebrow="CHARMIQUE · COUTURE EDIT"
      title={product.title}
      intro="Artisanal tailoring, refined textures, and versatile silhouettes crafted for timeless elegance."
    >
      <div className="store-product-detail">
        {/* Left Side: Interactive Gallery */}
        <div className="store-product-gallery-wrapper">
          <div className="store-gallery-main">
            <img
              src={img(gallery[activeImageIndex] || product.image, 1200)}
              alt={`${product.title} view ${activeImageIndex + 1}`}
              className="gallery-active-image"
            />
            {product.badge && <span className="p-card__badge">{product.badge}</span>}
          </div>

          {gallery.length > 1 && (
            <div className="store-gallery-thumbs">
              {gallery.map((file, i) => (
                <button
                  key={`${file}-${i}`}
                  type="button"
                  className={`gallery-thumb-btn ${activeImageIndex === i ? "is-active" : ""}`}
                  onClick={() => {
                    setActiveImageIndex(i);
                    const matchingColor = (product.colors || []).find((c) => c.image === file);
                    if (matchingColor) {
                      setSelectedColor(matchingColor.name);
                    }
                  }}
                >
                  <img src={img(file, 240)} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Purchase Controls */}
        <section className="store-buy">
          <div className="product-rating-row">
            <div className="stars-row">
              <Star size={14} />
              <Star size={14} />
              <Star size={14} />
              <Star size={14} />
              <Star size={14} />
            </div>
            <span className="rating-badge">4.9 · Verified Customer Reviews</span>
          </div>

          <div className="store-price-wrap">
            <span className="store-price" style={{ fontSize: 16, letterSpacing: "0.08em", color: "#8b6508" }}>
              ⚜ Haute Couture Edition · Price on Enquiry
            </span>
          </div>

          <p className="product-description-text">
            {product.description ||
              "An iconic boutique essential crafted with premium breathable fibers and a relaxed, tailored drape. Effortlessly transitions from everyday gatherings to elevated evening moments."}
          </p>

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="product-option-block">
              <label className="option-label">
                Color: <b>{selectedColor}</b>
              </label>
              <div className="store-swatches">
                {product.colors.map((color, index) => (
                  <button
                    key={color.name}
                    type="button"
                    title={color.name}
                    className={`product-swatch-circle ${
                      selectedColor === color.name ? "is-selected" : ""
                    }`}
                    style={{ background: color.color }}
                    onClick={() => handleColorSelect(color, index)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Selection with Size Guide Trigger */}
          <div className="product-option-block">
            <div className="size-header-line">
              <label className="option-label">
                Select Size: <b>{selectedSize}</b>
              </label>
              <button
                type="button"
                className="size-guide-trigger"
                onClick={() => setSizeGuideOpen(true)}
              >
                📏 Size Guide
              </button>
            </div>
            <div className="product-sizes-chips">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`product-size-chip ${selectedSize === size ? "is-selected" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Stepper */}
          <div className="product-option-block">
            <label className="option-label">Quantity</label>
            <div className="product-quantity-stepper">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span>{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions: Enquire on WhatsApp, Add to Enquiry, Video Call, Wishlist */}
          <div className="product-cta-group" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", width: "100%" }}>
              <button
                type="button"
                className="btn-whatsapp-direct"
                onClick={handleWhatsAppEnquiry}
                style={{
                  flex: "1 1 200px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "14px 22px",
                  borderRadius: 100,
                  background: "#25D366",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: 15,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 6px 20px rgba(37,211,102,0.35)",
                }}
              >
                <WhatsAppFilled size={20} />
                <span>Enquire on WhatsApp</span>
              </button>

              <AddToBag
                slug={product.slug}
                size={selectedSize}
                color={selectedColor}
                quantity={quantity}
                className="flex-1"
              />
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", width: "100%" }}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => openEnquiry(product)}
                style={{
                  flex: "1 1 180px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <Sparkles size={16} />
                <span className="btn-text">Book Fitting / Custom Stitching</span>
              </button>

              <button
                type="button"
                className={`product-wishlist-toggle ${isWishlisted ? "is-active" : ""}`}
                onClick={() => toggleWishlist(product.slug)}
                style={{ flex: "0 0 auto" }}
              >
                {isWishlisted ? <HeartFilled size={18} /> : <Heart size={18} />}
                <span>{isWishlisted ? "Saved" : "Save"}</span>
              </button>
            </div>
          </div>

          {/* Value Props & Trust Badges */}
          <div className="product-trust-badges">
            <div className="trust-badge-row">
              <Truck size={17} />
              <span>Worldwide express door courier across India, USA, UK, Canada &amp; UAE</span>
            </div>
            <div className="trust-badge-row">
              <Shield size={17} />
              <span>100% Silk Mark certified genuine pure weaves with master craftsmanship</span>
            </div>
          </div>

          {/* Product Details & Fabric Care Accordions */}
          <div className="product-accordions-group">
            <details open>
              <summary>Product Highlights & Craftsmanship</summary>
              <p>
                {product.description ||
                  "Tailored with precision from selected breathable textiles. Built for versatile day-to-night styling with reinforced stitching and luxury texture."}
              </p>
            </details>
            <details>
              <summary>Fabric Care Instructions</summary>
              <p>
                Dry clean or machine wash cold on a gentle cycle with mild detergent. Avoid bleach.
                Air dry flat in shade to preserve fabric integrity and color vibrancy.
              </p>
            </details>
            <details>
              <summary>Shipping & Global Delivery</summary>
              <p>
                Orders are processed and dispatched within 24 hours. Domestic express courier
                typically delivers within 2–4 business days. Signature confirmation provided.
              </p>
            </details>
          </div>
        </section>
      </div>

      {/* Interactive Size Guide Modal */}
      {sizeGuideOpen && (
        <div className="size-guide-modal-overlay" role="dialog" aria-modal="true">
          <div className="size-guide-scrim" onClick={() => setSizeGuideOpen(false)} />
          <div className="size-guide-modal">
            <div className="size-guide-header">
              <h3>Boutique Sizing Chart (Inches)</h3>
              <button type="button" onClick={() => setSizeGuideOpen(false)}>
                <Close size={18} />
              </button>
            </div>
            <div className="size-guide-table-wrap">
              <table className="size-guide-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Bust / Chest</th>
                    <th>Waist</th>
                    <th>Hips</th>
                    <th>Length</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><b>XS</b></td>
                    <td>32–34&quot;</td>
                    <td>24–26&quot;</td>
                    <td>34–36&quot;</td>
                    <td>26&quot;</td>
                  </tr>
                  <tr>
                    <td><b>S</b></td>
                    <td>34–36&quot;</td>
                    <td>26–28&quot;</td>
                    <td>36–38&quot;</td>
                    <td>27&quot;</td>
                  </tr>
                  <tr>
                    <td><b>M</b></td>
                    <td>36–38&quot;</td>
                    <td>28–30&quot;</td>
                    <td>38–40&quot;</td>
                    <td>28&quot;</td>
                  </tr>
                  <tr>
                    <td><b>L</b></td>
                    <td>38–41&quot;</td>
                    <td>30–33&quot;</td>
                    <td>40–43&quot;</td>
                    <td>29&quot;</td>
                  </tr>
                  <tr>
                    <td><b>XL</b></td>
                    <td>41–44&quot;</td>
                    <td>33–36&quot;</td>
                    <td>43–46&quot;</td>
                    <td>30&quot;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="size-guide-note">
              Fits true to size. For a more relaxed, draped silhouette, we recommend sizing up one size.
            </p>
          </div>
        </div>
      )}
    </PageShell>
  );
}

const pages = {
  "about-us": {
    eyebrow: "THE CHARMIQUE STORY",
    title: "Timeless Craftsmanship, Thoughtfully Tailored",
    intro:
      "Charmique was founded on the philosophy that true luxury lies in fabric character, mindful construction, and wearable elegance.",
    body: "From hand-picked silk weaves and festive sarees to relaxed contemporary knitwear, our collections bridge heirloom artisan heritage with modern effortless dressing. Every garment is designed to feel as remarkable against the skin as it looks in the mirror.",
  },
  about: {
    eyebrow: "OUR PHILOSOPHY",
    title: "Everyday Luxury, Thoughtfully Considered",
    intro: "Curating signature wardrobe pieces that empower confident everyday expression.",
    body: "We blend tactile textures, comfortable cuts, and timeless color palettes to create pieces you will cherish for seasons to come.",
  },
  contact: {
    eyebrow: "BOUTIQUE CONCIERGE",
    title: "We Are At Your Service",
    intro:
      "Have questions regarding styling, custom fittings, or tracking an existing order? Our concierge team is here to assist.",
    body: "Reach us at concierge@charmique.example or phone +1 (415) 555-0145. Our atelier hours are Monday through Saturday, 9:00 AM – 6:00 PM PST.",
  },
  "privacy-policy": {
    eyebrow: "CLIENT SECURITY",
    title: "Privacy & Data Protection",
    intro: "Your privacy and trust are of paramount importance to Charmique.",
    body: "We utilize industry-standard 256-bit encryption protocols to protect your transactional data. We never share or sell personal information to third-party marketing brokers.",
  },
  "refund-policy": {
    eyebrow: "EFFORTLESS RETURNS",
    title: "30-Day Returns & Exchanges",
    intro: "We want you to feel utterly delighted with your boutique wardrobe selections.",
    body: "If any item does not fit precisely as you hoped, request a complimentary return or exchange within 30 days of receipt. Garments must remain unworn with original tags attached.",
  },
  faq: {
    eyebrow: "FREQUENT INQUIRIES",
    title: "Help & Frequently Asked Questions",
    intro: "Helpful answers to guide your boutique shopping experience.",
    body: "Orders ship within 24–48 hours. Express tracked delivery takes 2–4 business days. Size consultations are gladly accommodated through our concierge email or live chat.",
  },
  account: {
    eyebrow: "CHARMIQUE ATELIER",
    title: "Client Portal & Order Tracking",
    intro: "Access your order history, manage saved addresses, and view your private boutique wishlist.",
    body: "Enter your registered email address or order reference number below to retrieve live dispatch information and personalized tailoring notes.",
  },
};

export function InfoPage({ slug }) {
  const [formSent, setFormSent] = useState(false);
  const page =
    pages[slug] || {
      eyebrow: "CHARMIQUE JOURNAL",
      title: slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      intro: "Curated stories, styling notes, and useful details from the atelier.",
      body: "We are updating this section with fresh editorial content. Please contact our concierge for further details.",
    };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <PageShell eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
      <div className="store-copy">
        <p className="store-copy-lead">{page.body}</p>

        {slug === "contact" && (
          <div className="contact-form-wrapper">
            {formSent ? (
              <div className="contact-success-banner">
                <Check size={28} />
                <h4>Message Sent to Boutique Concierge</h4>
                <p>
                  Thank you for reaching out. A dedicated stylist will respond to your email within
                  4 business hours.
                </p>
              </div>
            ) : (
              <form className="store-contact-form" onSubmit={handleContactSubmit}>
                <div className="form-row-2">
                  <div className="contact-field">
                    <label>Your Name</label>
                    <input name="name" placeholder="Priya Sharma" required />
                  </div>
                  <div className="contact-field">
                    <label>Email Address</label>
                    <input name="email" type="email" placeholder="priya@example.com" required />
                  </div>
                </div>
                <div className="contact-field">
                  <label>Subject / Topic</label>
                  <input name="subject" placeholder="Sizing consultation, order enquiry..." required />
                </div>
                <div className="contact-field">
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    placeholder="How may our stylists assist you today?"
                    rows="5"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-dark contact-submit-btn">
                  <span className="dot" />
                  <span className="btn-text">Send Message to Concierge</span>
                </button>
              </form>
            )}
          </div>
        )}

        {slug === "account" && (
          <div className="account-portal-box">
            <h4>Check Order Status</h4>
            <p>Track delivery dispatch or manage your boutique profile:</p>
            <form
              className="account-lookup-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Order status: All systems active. Please check your inbox for recent dispatch details.");
              }}
            >
              <input type="text" placeholder="Order Reference (e.g. CHQ-482109)" required />
              <input type="email" placeholder="Billing Email Address" required />
              <button type="submit" className="btn btn-dark">
                <span className="dot" />
                <span className="btn-text">Track Order</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </PageShell>
  );
}

export function SearchPage({ query = "" }) {
  const [searchTerm, setSearchTerm] = useState(query);
  const q = searchTerm.toLowerCase().trim();
  const results = products.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      (p.badge && p.badge.toLowerCase().includes(q))
  );

  return (
    <PageShell
      eyebrow="FIND YOUR SIGNATURE LOOK"
      title={q ? `Search: “${searchTerm}”` : "Search Collection"}
      intro={q ? `Found ${results.length} matching boutique styles.` : "Search through all apparel, knits, and festive edits."}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="store-search-form"
      >
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by product name, category, or fabric..."
          className="search-input"
        />
      </form>

      <div className="store-products">
        {results.map((p) => (
          <ProductCard product={p} key={p.slug} />
        ))}
      </div>

      {q && !results.length && (
        <div className="store-empty">
          <p>No products match your search for &ldquo;{searchTerm}&rdquo;.</p>
          <Link href="/collections/all" className="btn btn-dark" style={{ marginTop: 14 }}>
            <span className="dot" />
            <span className="btn-text">Browse All Styles</span>
          </Link>
        </div>
      )}
    </PageShell>
  );
}

export function NotFoundPage({ title = "Page Not Found" }) {
  return (
    <PageShell
      eyebrow="404 ERROR"
      title={title}
      intro="The page you requested could not be located in our current boutique directory."
    >
      <div style={{ textAlign: "center", paddingBlock: 40 }}>
        <Link className="btn btn-dark" href="/collections/all">
          <span className="dot" />
          <span className="btn-text">Return to Collection Directory</span>
        </Link>
      </div>
    </PageShell>
  );
}
