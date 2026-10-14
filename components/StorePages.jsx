"use client";

import { useState } from "react";
import Link from "next/link";
import { img, products, collections } from "@/data/site";
import ProductCard from "@/components/ProductCard";
import AddToBag from "@/components/AddToBag";
import CollectionGrid from "@/components/CollectionGrid";
import { useStore } from "@/context/StoreContext";
import { Check, Close, Filter, Heart, HeartFilled, Shield, Sparkles, Star, Truck, WhatsAppFilled, Phone, Mail, MapPin, Clock, ArrowDiagonal, ArrowRight } from "./icons";

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
    eyebrow: "THE ATELIER STORY",
    title: "Generational Weaving & Bespoke Couture",
    intro:
      "Born in Chennai, Charmique celebrates the quiet luxury of authentic handloom silks, intricate bridal embroideries, and made-to-measure tailoring.",
    body: "From hand-picked pure Kanjivaram and Banarasi weaves to bespoke wedding lehengas and tailored blouses, we connect discerning patrons directly with generational artisan weavers.",
  },
  about: {
    eyebrow: "THE ATELIER STORY",
    title: "Generational Weaving & Bespoke Couture",
    intro:
      "Born in Chennai, Charmique celebrates the quiet luxury of authentic handloom silks, intricate bridal embroideries, and made-to-measure tailoring.",
    body: "From hand-picked pure Kanjivaram and Banarasi weaves to bespoke wedding lehengas and tailored blouses, we connect discerning patrons directly with generational artisan weavers.",
  },
  contact: {
    eyebrow: "ATELIER & BOUTIQUE CONCIERGE",
    title: "Connect With Our Stylists",
    intro:
      "Whether visiting our flagship atelier in Chennai or scheduling a private virtual styling consultation, our personal concierges and master artisans are at your service.",
    body: "Direct phone concierge, instant WhatsApp consultations, flagship atelier visiting hours, and global order support.",
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
  },
};

export function InfoPage({ slug }) {
  const page =
    pages[slug] || {
      eyebrow: "CHARMIQUE JOURNAL",
      title: slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      intro: "Curated stories, styling notes, and useful details from the atelier.",
      body: "We are updating this section with fresh editorial content. Please contact our concierge for further details.",
    };

  return (
    <PageShell eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
        {slug === "contact" ? (
          <div className="contact-showcase">
            {/* Top Quick Connect Cards */}
            <div className="contact-primary-grid">
              {/* Card 1: Phone Concierge */}
              <div className="contact-feature-card">
                <div className="feature-icon-badge">
                  <Phone size={22} />
                </div>
                <span className="feature-tag">DIRECT CALLING</span>
                <h3>Stylist Phone Concierge</h3>
                <p>Speak directly with our in-house draping and sizing consultants.</p>
                <div className="feature-highlight-value">
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
                <div className="feature-sub-info">
                  <span>Mon – Sat: 10:00 AM – 8:00 PM IST</span>
                  <span>Sunday: 11:00 AM – 6:00 PM IST</span>
                </div>
                <a href="tel:+919876543210" className="feature-cta-btn">
                  <span>Call Stylist Now</span>
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Card 2: WhatsApp Stylist Desk */}
              <div className="contact-feature-card featured-whatsapp-card">
                <div className="feature-icon-badge whatsapp-badge">
                  <WhatsAppFilled size={24} />
                </div>
                <span className="feature-tag">INSTANT MESSAGING</span>
                <h3>WhatsApp Stylist Desk</h3>
                <p>Live fabric closeups, custom blouse sketches, and video consultation bookings.</p>
                <div className="feature-highlight-value">
                  <a
                    href="https://api.whatsapp.com/send?phone=919876543210&text=Hello%20Charmique%20Boutique!%20%E2%9C%A8%20I%20would%20like%20to%20consult%20with%20your%20stylist."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 98765 43210
                  </a>
                </div>
                <div className="feature-sub-info">
                  <span className="online-indicator">
                    <span className="online-dot" /> Concierge Online Now
                  </span>
                  <span>Typical response time: under 15 mins</span>
                </div>
                <a
                  href="https://api.whatsapp.com/send?phone=919876543210&text=Hello%20Charmique%20Boutique!%20%E2%9C%A8%20I%20would%20like%20to%20consult%20with%20your%20stylist."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feature-cta-btn whatsapp-cta"
                >
                  <WhatsAppFilled size={16} />
                  <span>Start WhatsApp Consultation</span>
                </a>
              </div>

              {/* Card 3: Email Desk */}
              <div className="contact-feature-card">
                <div className="feature-icon-badge">
                  <Mail size={22} />
                </div>
                <span className="feature-tag">WRITTEN INQUIRIES</span>
                <h3>Email & Orders Desk</h3>
                <p>For custom bridal orders, global shipment tracking, and corporate gifts.</p>
                <div className="feature-highlight-value">
                  <a href="mailto:concierge@charmique.com">concierge@charmique.com</a>
                </div>
                <div className="feature-sub-info">
                  <a href="mailto:orders@charmique.com" className="email-sub-link">
                    orders@charmique.com
                  </a>
                  <span>Response guaranteed within 4 business hours</span>
                </div>
                <a href="mailto:concierge@charmique.com" className="feature-cta-btn">
                  <span>Send an Email</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Flagship Atelier Experience & Visiting Details */}
            <div className="atelier-experience-section">
              {/* Location & Directions */}
              <div className="atelier-detail-card">
                <div className="atelier-card-header">
                  <div className="atelier-header-icon">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="atelier-eyebrow">CHENNAI FLAGSHIP ATELIER</span>
                    <h3>Visit Our Boutique</h3>
                  </div>
                </div>

                <div className="atelier-address-block">
                  <strong className="atelier-store-name">Charmique Haute Couture Atelier</strong>
                  <address className="atelier-full-address">
                    No. 42, Cathedral Road, Poes Garden,<br />
                    Chennai – 600086, Tamil Nadu, India
                  </address>
                  <div className="atelier-landmarks">
                    <span>Landmark: Opposite Semmozhi Poonga & Near Music Academy</span>
                    <span>Amenities: Private Bridal Trial Lounge & Complimentary Valet Parking</span>
                  </div>
                </div>

                <div className="atelier-action-group">
                  <a
                    href="https://maps.google.com/?q=Cathedral+Road+Chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ArrowDiagonal size={12} />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=919876543210&text=Hello%20Charmique!%20I%20would%20like%20to%20schedule%20an%20in-store%20visit."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <span>Schedule In-Store Visit</span>
                  </a>
                </div>
              </div>

              {/* Atelier Hours & Appointment Privileges */}
              <div className="atelier-detail-card">
                <div className="atelier-card-header">
                  <div className="atelier-header-icon">
                    <Clock size={22} />
                  </div>
                  <div>
                    <span className="atelier-eyebrow">STORE TIMINGS & TRIALS</span>
                    <h3>Hours & Consultations</h3>
                  </div>
                </div>

                <div className="atelier-hours-table">
                  <div className="hours-row">
                    <span className="day-name">Monday – Friday</span>
                    <span className="time-value">10:00 AM – 8:00 PM IST</span>
                  </div>
                  <div className="hours-row">
                    <span className="day-name">Saturday</span>
                    <span className="time-value">10:00 AM – 8:30 PM IST</span>
                  </div>
                  <div className="hours-row highlight-sunday">
                    <span className="day-name">Sunday</span>
                    <span className="time-value">11:00 AM – 6:00 PM IST</span>
                  </div>
                </div>

                <div className="bridal-appointment-note">
                  <div className="note-badge">
                    <Sparkles size={16} />
                    <strong>Private Bridal Suite Appointments</strong>
                  </div>
                  <p>
                    For bridal lehengas, bespoke Kanjivaram silk weaves, and wedding trousseau styling, we recommend reserving a private bridal salon appointment.
                  </p>
                  <a
                    href="https://api.whatsapp.com/send?phone=919876543210&text=Hello%20Charmique!%20I%20would%20like%20to%20book%20a%20Private%20Bridal%20Suite%20Appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bridal-book-link"
                  >
                    <span>Reserve Private Bridal Appointment via WhatsApp ↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Complimentary Atelier Services / Perks Row */}
            <div className="atelier-services-grid">
              <div className="service-perk-item">
                <span className="service-perk-crest">⚜</span>
                <h4>Custom Fitting & Blouse Stitching</h4>
                <p>Every saree and lehenga comes with expert blouse pattern tailoring & fall/pico finishes.</p>
              </div>

              <div className="service-perk-item">
                <span className="service-perk-crest">⚜</span>
                <h4>Virtual Video HD Shopping</h4>
                <p>Live walkthrough of fabrics, borders, and pallu drape over high-definition video call.</p>
              </div>

              <div className="service-perk-item">
                <span className="service-perk-crest">⚜</span>
                <h4>Silk Mark Certified Authentic</h4>
                <p>Pure mulberry silk and authentic zari guaranteed with government accredited Silk Mark certification.</p>
              </div>

              <div className="service-perk-item">
                <span className="service-perk-crest">⚜</span>
                <h4>Global Insured Doorstep Delivery</h4>
                <p>Express courier via DHL & FedEx to USA, UK, Canada, UAE, Singapore & Worldwide.</p>
              </div>
            </div>
          </div>
        ) : (slug === "about-us" || slug === "about") ? (
          <div className="about-showcase">
            {/* 1. Atelier Trust Highlights Strip */}
            <div className="about-stats-strip">
              <div className="about-stat-item">
                <span className="stat-crest">⚜</span>
                <div className="stat-text">
                  <strong>Silk Mark Certified</strong>
                  <span>100% Pure Mulberry Silks &amp; Tested Zari</span>
                </div>
              </div>
              <div className="about-stat-item">
                <span className="stat-crest">✦</span>
                <div className="stat-text">
                  <strong>350+ Master Artisans</strong>
                  <span>Generational Weavers from Kanchipuram &amp; Banaras</span>
                </div>
              </div>
              <div className="about-stat-item">
                <span className="stat-crest">⚜</span>
                <div className="stat-text">
                  <strong>Bespoke Bridal Fits</strong>
                  <span>Custom Blouse Tailoring &amp; Maggam Zardozi</span>
                </div>
              </div>
              <div className="about-stat-item">
                <span className="stat-crest">✦</span>
                <div className="stat-text">
                  <strong>Worldwide Express</strong>
                  <span>Insured Doorstep Delivery across 25+ Countries</span>
                </div>
              </div>
            </div>

            {/* 2. Visual Narrative Split: Atelier Heritage & Philosophy */}
            <div className="about-split-section">
              <div className="about-image-card">
                <div className="about-image-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
                    alt="Handcrafted Pure Kanjivaram Silk Saree Weave"
                    loading="lazy"
                  />
                  <div className="about-image-badge">
                    <span className="badge-gold-star">✦</span>
                    <span>POES GARDEN, CHENNAI · ESTD. 2012</span>
                  </div>
                </div>
                <div className="about-image-caption">
                  <span>“Every warp and weft is examined millimeter-by-millimeter for genuine zari purity, drape softness, and heirloom longevity.”</span>
                </div>
              </div>

              <div className="about-narrative-card">
                <span className="about-pill-tag">THE ATELIER PHILOSOPHY</span>
                <h2>Where Generational Weaving Meets Modern Sophistication</h2>
                <p className="narrative-lead">
                  Charmique was founded with a single uncompromising mission: to restore the personal intimacy, artisanal integrity, and slow craftsmanship of the traditional Indian bridal boutique.
                </p>
                <p>
                  In an era dominated by rapid synthetic production, our heart remains with the slow loom. We collaborate directly with master weaving families across Kanchipuram, Banaras, and Chanderi—preserving heritage motifs such as the <em>Mayil</em> (peacock), <em>Rudraksh</em>, and temple korvai borders while tailoring cuts for effortless modern draping.
                </p>
                <p>
                  By eliminating commercial middlemen, we ensure master weavers receive righteous respect and fair livelihood, while delivering couture-grade heirlooms directly into your wardrobe.
                </p>

                <div className="about-quote-box">
                  <span className="quote-mark">“</span>
                  <p>
                    An Indian heirloom is never just fabric—it weaves together your joyful laughter at sangeets, the sanctity of wedding pheras, and memories cherished across generations.
                  </p>
                  <span className="quote-author">— The Charmique Atelier Family</span>
                </div>
              </div>
            </div>

            {/* 3. The 3 Boutique Pillars */}
            <div className="about-pillars-section">
              <div className="pillars-header">
                <span className="about-pill-tag">WHAT DEFINES US</span>
                <h3>Our Uncompromised Boutique Promises</h3>
                <p>Every garment bearing the Charmique crest adheres to three foundational tenets:</p>
              </div>

              <div className="about-pillars-grid">
                <div className="about-pillar-card">
                  <div className="pillar-icon-box">
                    <span className="pillar-icon">⚜</span>
                  </div>
                  <h4>Purity &amp; Authenticity in Every Thread</h4>
                  <p>
                    We exclusively work with pure natural fibers—high-density mulberry silks, natural organza, fine breathable cottons, and genuine tested silver/gold zari. Every pure silk drape is backed by verified certification.
                  </p>
                  <ul className="pillar-list">
                    <li>✓ Silk Mark purity tested</li>
                    <li>✓ Authentic zari borders &amp; rich pallus</li>
                    <li>✓ Breathable, skin-friendly natural dyes</li>
                  </ul>
                </div>

                <div className="about-pillar-card">
                  <div className="pillar-icon-box">
                    <span className="pillar-icon">✂</span>
                  </div>
                  <h4>Custom Tailoring &amp; Blouse Artistry</h4>
                  <p>
                    No outfit is complete without an impeccable fit. Our master pattern-makers and in-house embroidery artisans hand-stitch custom bridal blouse necklines, back ties, maggam zardozi, and precision fall/pico finishes.
                  </p>
                  <ul className="pillar-list">
                    <li>✓ Made-to-measure blouse tailoring</li>
                    <li>✓ Handcrafted aari, zardozi &amp; pearl work</li>
                    <li>✓ Complimentary fall, pico &amp; tassels</li>
                  </ul>
                </div>

                <div className="about-pillar-card">
                  <div className="pillar-icon-box">
                    <span className="pillar-icon">✦</span>
                  </div>
                  <h4>Intimate, High-Touch Concierge</h4>
                  <p>
                    Whether visiting our private salon in Poes Garden or shopping from London, New York, or Dubai, our personal stylists provide HD video calls, live drape walkthroughs, and responsive styling advice.
                  </p>
                  <ul className="pillar-list">
                    <li>✓ 1-on-1 WhatsApp video shopping</li>
                    <li>✓ Dedicated bridal trousseau consultant</li>
                    <li>✓ Insured door delivery with tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. The 4-Step Boutique Journey */}
            <div className="about-journey-section">
              <div className="journey-header">
                <span className="about-pill-tag">THE SHOPPING EXPERIENCE</span>
                <h3>From the Master Loom to Your Celebration</h3>
                <p>Simple, transparent, and personalized at every step of your journey:</p>
              </div>

              <div className="about-journey-steps">
                <div className="journey-step-card">
                  <div className="step-num">01</div>
                  <h5>Discover Collections</h5>
                  <p>Browse our limited-edition edits online or request private showcase drops directly on WhatsApp.</p>
                </div>

                <div className="journey-step-card">
                  <div className="step-num">02</div>
                  <h5>Live Video Drape</h5>
                  <p>Schedule a live HD video call to inspect texture, pallu motifs, weight, and true colors in daylight.</p>
                </div>

                <div className="journey-step-card">
                  <div className="step-num">03</div>
                  <h5>Precision Tailoring</h5>
                  <p>Share your measurements or reference blouse pictures. Our master tailors cut and stitch with millimeter precision.</p>
                </div>

                <div className="journey-step-card">
                  <div className="step-num">04</div>
                  <h5>Heirloom Packaging</h5>
                  <p>Delivered in signature protective cotton keepsakes with tracking, customs clearance, and full transit insurance.</p>
                </div>
              </div>
            </div>

            {/* 5. Clean Boutique CTA Banner */}
            <div className="about-cta-banner">
              <div className="about-cta-content">
                <span className="cta-crest">⚜</span>
                <h3>Begin Your Boutique Experience</h3>
                <p>
                  Visit our flagship salon in Chennai or connect directly with our master stylists on WhatsApp for customized bridal consultations.
                </p>
                <div className="about-cta-actions">
                  <Link href="/collections" className="btn btn-dark">
                    <span className="dot" />
                    <span className="btn-text">Explore Signature Weaves</span>
                  </Link>
                  <Link href="/pages/contact" className="btn btn-outline" style={{ background: "rgba(255,255,255,0.08)", color: "#ffffff", borderColor: "rgba(255,255,255,0.25)" }}>
                    <span>Visit Chennai Flagship</span>
                  </Link>
                  <a
                    href="https://api.whatsapp.com/send?phone=919876543210&text=Hello%20Charmique%20Boutique!%20%E2%9C%A8%20I%20would%20like%20to%20know%20more%20about%20your%20atelier%20and%20collections."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <WhatsAppFilled size={15} />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="store-copy">
            <p className="store-copy-lead">{page.body}</p>
          </div>
        )}
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
