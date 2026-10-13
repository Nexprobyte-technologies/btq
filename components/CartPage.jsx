"use client";

import Link from "next/link";
import { img } from "@/data/site";
import { useStore } from "@/context/StoreContext";
import { PageShell } from "@/components/StorePages";
import { Minus, Plus, Shield, Sparkles, Trash, Truck, WhatsAppFilled } from "./icons";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, openEnquiry, sendAllEnquiriesToWhatsApp } = useStore();

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <PageShell
      eyebrow="ATELIER SHORTLIST & CONCIERGE"
      title="Enquiry Selection"
      intro={
        cart.length
          ? `You have shortlisted ${totalItems} handcrafted design${totalItems === 1 ? "" : "s"} for bespoke boutique enquiry.`
          : "Your enquiry list is currently empty. Explore our bridal couture and pure silk sarees to begin."
      }
    >
      {cart.length === 0 ? (
        <div className="cart-page-empty-state">
          <div className="empty-state-icon">✨</div>
          <h3>Your enquiry selection is empty</h3>
          <p>
            Explore our curated collections of pure silk Kanjivaram sarees, royal bridal lehengas,
            anarkalis, and handcrafted festive sets.
          </p>
          <div className="empty-actions">
            <Link href="/collections" className="btn btn-dark">
              <span className="dot" />
              <span className="btn-text">Explore Women&apos;s Boutique</span>
            </Link>
            <Link href="/" className="btn btn-outline">
              <span className="btn-text">Return to Home</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="cart-page-layout">
          {/* Main items list */}
          <div className="cart-page-items-column">
            {/* Boutique Concierge banner */}
            <div className="cart-page-shipping-banner" style={{ background: "rgba(37,211,102,0.08)", borderColor: "rgba(37,211,102,0.25)" }}>
              <div className="banner-text" style={{ color: "#065f46" }}>
                <WhatsAppFilled size={18} />
                <span>
                  <b>Direct WhatsApp Concierge:</b> Ready to assist with custom blouse designs, measurements, video shopping calls, and immediate delivery timelines.
                </span>
              </div>
            </div>

            <div className="cart-table-head">
              <span>Shortlisted Design</span>
              <span className="col-qty">Quantity</span>
              <span className="col-total">Price</span>
            </div>

            <div className="cart-table-body">
              {cart.map((item, index) => (
                <article
                  key={`${item.slug}-${item.size}-${item.color}-${index}`}
                  className="cart-table-row"
                >
                  {/* Media & info */}
                  <div className="line-item-main">
                    <div className="line-item-thumb">
                      <img src={img(item.image, 260)} alt={item.title} loading="lazy" />
                    </div>
                    <div className="line-item-details">
                      <Link href={`/products/${item.slug}`} className="line-item-title">
                        {item.title}
                      </Link>
                      <div className="line-item-options">
                        {item.size && <span className="meta-tag">Size: {item.size}</span>}
                        {item.color && <span className="meta-tag">Color: {item.color}</span>}
                      </div>
                      <button
                        type="button"
                        className="line-item-remove-btn"
                        onClick={() => removeFromCart(index)}
                      >
                        <Trash size={13} />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>

                  {/* Quantity stepper */}
                  <div className="line-item-qty-cell">
                    <div className="item-stepper">
                      <button
                        type="button"
                        onClick={() => updateQuantity(index, (item.quantity || 1) - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span>{item.quantity || 1}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(index, (item.quantity || 1) + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Line total */}
                  <div className="line-item-total">
                    <span style={{ fontSize: 12, color: "#8b6508", fontWeight: 600 }}>⚜ Price on Enquiry</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="cart-page-bottom-actions">
              <Link href="/collections" className="u-line">
                ← Explore More Designs
              </Link>
            </div>
          </div>

          {/* Sidebar Summary */}
          <aside className="cart-page-summary-sidebar">
            <div className="summary-card">
              <h3 className="summary-card-title">Enquiry Summary</h3>

              <div className="summary-calc-rows">
                <div className="summary-row">
                  <span>Selected Designs</span>
                  <b>{totalItems} piece{totalItems > 1 ? "s" : ""}</b>
                </div>

                <div className="summary-row">
                  <span>Concierge Service</span>
                  <span style={{ color: "#059669", fontWeight: 600 }}>COMPLIMENTARY</span>
                </div>

                <div className="summary-row">
                  <span>Custom Blouse Tailoring</span>
                  <span style={{ color: "#059669", fontWeight: 600 }}>AVAILABLE ON REQUEST</span>
                </div>
              </div>

              <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                <button
                  type="button"
                  className="btn-whatsapp-direct"
                  onClick={sendAllEnquiriesToWhatsApp}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    width: "100%",
                    padding: "14px 20px",
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
                  <span>Send All via WhatsApp</span>
                </button>

                <button
                  type="button"
                  className="btn btn-dark cart-page-checkout-btn"
                  onClick={() => openEnquiry(null)}
                >
                  <Sparkles size={16} style={{ marginRight: 8 }} />
                  <span className="btn-text">Submit Bespoke Enquiry Form</span>
                </button>
              </div>

              <div className="summary-perks-box">
                <div className="perk-row">
                  <Shield size={16} />
                  <span>Silk Mark Certified Pure Fabrics</span>
                </div>
                <div className="perk-row">
                  <Truck size={16} />
                  <span>Door Delivery across India, USA, UK &amp; UAE</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </PageShell>
  );
}
