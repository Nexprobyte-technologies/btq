"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { img, slugify } from "@/data/site";
import { Close, Minus, Plus, Shield, Truck, WhatsAppFilled } from "./icons";

export default function QuickViewModal() {
  const { quickViewProduct, closeQuickView, addToCart } = useStore();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedColor(quickViewProduct.colors?.[0]?.name || "");
      setSelectedSize(quickViewProduct.sizes?.[0] || "M");
      setQuantity(1);
      setActiveImage(0);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const productSlug = product.slug || slugify(product.title);
  const images = product.gallery || [product.image, product.hover || product.image].filter(Boolean);

  const handleAdd = () => {
    addToCart(product, selectedSize, selectedColor, quantity, true);
    closeQuickView();
  };

  return (
    <div className="quickview-overlay" role="dialog" aria-modal="true">
      <div className="quickview-scrim" onClick={closeQuickView} />
      <div className="quickview-modal">
        <button
          type="button"
          className="quickview-close"
          onClick={closeQuickView}
          aria-label="Close preview"
        >
          <Close size={18} />
        </button>

        <div className="quickview-grid">
          {/* Gallery side */}
          <div className="quickview-gallery">
            <div className="quickview-main-img">
              <img
                src={img(images[activeImage] || product.image, 900)}
                alt={product.title}
              />
              {product.badge && <span className="p-card__badge">{product.badge}</span>}
            </div>

            {images.length > 1 && (
              <div className="quickview-thumbs">
                {images.map((src, i) => (
                  <button
                    key={`${src}-${i}`}
                    type="button"
                    className={`thumb-btn ${activeImage === i ? "is-active" : ""}`}
                    onClick={() => setActiveImage(i)}
                  >
                    <img src={img(src, 160)} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details side */}
          <div className="quickview-details">
            <span className="quickview-eyebrow">CHARMIQUE · QUICK VIEW</span>
            <h3 className="quickview-title">{product.title}</h3>

            <div className="quickview-price-wrap">
              <span className="price-main" style={{ fontSize: 14, letterSpacing: "0.06em", color: "#8b6508" }}>
                ⚜ Bespoke Couture · Price on Enquiry
              </span>
            </div>

            <p className="quickview-desc">
              {product.description ||
                "Crafted for modern versatility and tactile elegance. An elevated boutique staple tailored with premium natural fibers and meticulous attention to drape."}
            </p>

            {/* Color swatches */}
            {product.colors && product.colors.length > 0 && (
              <div className="quickview-section">
                <label className="section-label">
                  Color: <b>{selectedColor}</b>
                </label>
                <div className="swatches-list">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      className={`swatch-circle ${selectedColor === c.name ? "is-selected" : ""}`}
                      style={{ "--bg-c": c.color }}
                      title={c.name}
                      onClick={() => setSelectedColor(c.name)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size selector */}
            <div className="quickview-section">
              <div className="size-label-row">
                <label className="section-label">
                  Select Size: <b>{selectedSize}</b>
                </label>
              </div>
              <div className="sizes-chips">
                {(product.sizes || ["XS", "S", "M", "L", "XL"]).map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`size-button ${selectedSize === s ? "is-selected" : ""}`}
                    onClick={() => setSelectedSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="quickview-actions" style={{ flexWrap: "wrap", gap: 10 }}>
              <div className="quickview-stepper">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              <button
                type="button"
                className="btn-whatsapp-direct"
                onClick={() => {
                  const msg = `Hello Charmique Boutique! ✨\n\nI want to enquire about *${product.title}*.\nSelected Color: ${selectedColor}\nSelected Size: ${selectedSize}\nQuantity: ${quantity}\n\nPlease share price, blouse customization options and delivery schedule.`;
                  window.open(`https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent(msg)}`, "_blank");
                  closeQuickView();
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "11px 18px",
                  borderRadius: 100,
                  background: "#25D366",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: 13.5,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(37,211,102,0.3)",
                }}
              >
                <WhatsAppFilled size={18} />
                <span>Enquire on WhatsApp</span>
              </button>

              <button
                type="button"
                className="btn btn-dark quickview-add-btn"
                onClick={handleAdd}
              >
                <span className="dot" />
                <span className="btn-text">Shortlist for Enquiry</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="quickview-perks">
              <div className="perk-item">
                <Truck size={15} />
                <span>Worldwide express door delivery &amp; tracked dispatch</span>
              </div>
              <div className="perk-item">
                <Shield size={15} />
                <span>100% pure silk mark &amp; bespoke tailoring assistance</span>
              </div>
            </div>

            <div className="quickview-full-link">
              <Link
                href={`/products/${productSlug}`}
                onClick={closeQuickView}
                className="u-line"
              >
                View complete product details & size guide ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
