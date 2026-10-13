"use client";

import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { img } from "@/data/site";
import { Close, Minus, Plus, Sparkles, Trash, WhatsAppFilled } from "./icons";

export default function CartDrawer() {
  const {
    cart,
    totalItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    openEnquiry,
    sendAllEnquiriesToWhatsApp,
  } = useStore();

  return (
    <div className={`cart-drawer-wrap ${isCartOpen ? "is-active" : ""}`} aria-hidden={!isCartOpen}>
      <div className="cart-drawer-scrim" onClick={closeCart} />
      <aside className="cart-drawer-panel" role="dialog" aria-label="Enquiry Shortlist">
        {/* Head */}
        <div className="cart-drawer-head">
          <div className="cart-drawer-title">
            <span className="cart-drawer-badge">ENQUIRY</span>
            <h3>Shortlisted Designs</h3>
            <span className="cart-drawer-count">({totalItems})</span>
          </div>
          <button
            type="button"
            className="cart-drawer-close"
            onClick={closeCart}
            aria-label="Close Enquiry Bag"
          >
            <Close size={16} />
          </button>
        </div>

        {/* Boutique Concierge Banner */}
        <div className="cart-shipping-meter">
          <div className="meter-label">
            <Sparkles size={16} />
            <span>
              <b>Artisanal Boutique Concierge:</b> Connect directly on WhatsApp for custom sizing, blouses, and orders.
            </span>
          </div>
        </div>

        {/* Items List */}
        <div className="cart-drawer-body">
          {cart.length === 0 ? (
            <div className="cart-drawer-empty">
              <div className="empty-bag-icon">✨</div>
              <h4>Your enquiry list is empty</h4>
              <p>Explore our handcrafted pure silk sarees, royal bridal lehengas, and festive designer suits.</p>
              <Link
                href="/collections"
                className="btn btn-dark"
                onClick={closeCart}
                style={{ marginTop: 14 }}
              >
                <span className="dot" />
                <span className="btn-text">Explore Women&apos;s Couture</span>
              </Link>
            </div>
          ) : (
            <ul className="cart-drawer-items">
              {cart.map((item, index) => (
                <li key={`${item.slug}-${item.size}-${item.color}-${index}`} className="cart-drawer-item">
                  <div className="item-thumb">
                    <img src={img(item.image, 240)} alt={item.title} loading="lazy" />
                  </div>
                  <div className="item-info">
                    <div className="item-row-top">
                      <Link
                        href={`/products/${item.slug}`}
                        onClick={closeCart}
                        className="item-name"
                      >
                        {item.title}
                      </Link>
                      <button
                        type="button"
                        className="item-remove"
                        onClick={() => removeFromCart(index)}
                        aria-label="Remove item"
                      >
                        <Trash size={15} />
                      </button>
                    </div>

                    <div className="item-meta">
                      {item.size && <span className="meta-pill">Size: {item.size}</span>}
                      {item.color && <span className="meta-pill">Color: {item.color}</span>}
                    </div>

                    <div className="item-row-bottom">
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

                      <div className="item-price">
                        <span style={{ fontSize: 11, color: "#8b6508", fontWeight: 600 }}>⚜ Enquiry Item</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="subtotal-row">
              <span>Shortlisted Pieces</span>
              <b>{totalItems} item{totalItems > 1 ? "s" : ""}</b>
            </div>
            <p className="tax-shipping-note">
              Send your shortlisted selections directly to our boutique stylists for instant quotation, custom blouse measurements &amp; dispatch schedule.
            </p>
            <div className="cart-drawer-actions" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <button
                type="button"
                className="btn-whatsapp-direct"
                onClick={() => {
                  closeCart();
                  sendAllEnquiriesToWhatsApp();
                }}
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
                  fontSize: 14.5,
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
                className="btn btn-dark"
                onClick={() => {
                  closeCart();
                  openEnquiry(null);
                }}
                style={{ width: "100%" }}
              >
                <span className="dot" />
                <span className="btn-text">Submit Bespoke Enquiry</span>
              </button>

              <Link
                href="/cart"
                className="btn btn-outline btn-view-bag"
                onClick={closeCart}
                style={{ textAlign: "center" }}
              >
                <span className="btn-text">View Full Shortlist Page</span>
              </Link>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
