"use client";

import { useState } from "react";
import { featuredProduct, img } from "@/data/site";
import { useStore } from "@/context/StoreContext";
import { Sparkles, WhatsAppFilled } from "./icons";
import { Reveal } from "./Reveal";

export default function FeaturedProduct() {
  const { addToCart, openEnquiry } = useStore();
  const [color, setColor] = useState(featuredProduct.colors[0].name);
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(0);
  const [hero, setHero] = useState(0);

  const handleAdd = () => {
    addToCart(featuredProduct, size, color, qty);
  };

  const handleWhatsAppInstant = () => {
    const msg = `Hello Charmique Boutique! ✨\n\nI want to enquire about *${featuredProduct.title}*.\nSelected Color: ${color}\nSelected Size: ${size}\nQuantity: ${qty}\n\nPlease share pricing, fabric availability, and blouse customization details.`;
    window.open(`https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="section scheme-light">
      <div className="container">
        <div className="fp">
          <Reveal className="fp__gallery">
            {featuredProduct.gallery.map((src, i) => (
              <figure key={src} onMouseEnter={() => setHero(i)}>
                <img src={img(src, 900)} alt={`${featuredProduct.title} ${i + 1}`} loading="lazy" />
              </figure>
            ))}
            <div className="fp__promo">
              <strong>✨ Bespoke Atelier Sizing</strong>
              <span className="fp__code">CUSTOM FIT</span>
              <span>Connect for blouse neck customization, cancan flare &amp; color swatches.</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="fp__title heading-font">{featuredProduct.title}</h2>
            <p className="fp__desc">{featuredProduct.description}</p>

            <div className="fp__bespoke-status">
              <span className="fp__bespoke-badge">⚜ Haute Couture Bridal Edition · Price on Enquiry</span>
            </div>
            <div className="fp__note">{featuredProduct.note}</div>

            <div className="fp__options">
              <div className="fp__label">
                Color: <b>{color}</b>
              </div>
              <div className="fp__swatches">
                {featuredProduct.colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    aria-label={c.name}
                    className={`swatch-dot${color === c.name ? " is-active" : ""}`}
                    style={{ "--c": c.color }}
                    onClick={() => setColor(c.name)}
                  />
                ))}
              </div>
            </div>

            <div className="fp__options">
              <div className="fp__label">
                Size: <b>{size}</b>
              </div>
              <div className="fp__sizes">
                {featuredProduct.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`size-chip${size === s ? " is-active" : ""}`}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="fp__stock">
              <i />
              {featuredProduct.stock}
            </div>

            <div className="fp__buy" style={{ flexWrap: "wrap", gap: 10 }}>
              <div className="qty">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                  −
                </button>
                <span>{qty}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => setQty((q) => q + 1)}>
                  +
                </button>
              </div>

              <button
                type="button"
                className="btn-whatsapp-direct"
                onClick={handleWhatsAppInstant}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 20px",
                  borderRadius: 100,
                  background: "#25D366",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: 14,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(37,211,102,0.3)",
                }}
              >
                <WhatsAppFilled size={18} />
                <span>Enquire on WhatsApp</span>
              </button>

              <button className="btn btn-dark" type="button" onClick={handleAdd}>
                <span className="dot" />
                <span className="btn-text">Shortlist for Enquiry</span>
              </button>

              <button
                className="btn btn-outline"
                type="button"
                onClick={() => openEnquiry(featuredProduct)}
                style={{ padding: "10px 18px", fontSize: 13 }}
              >
                <Sparkles size={14} style={{ marginRight: 6 }} />
                <span>Book Fitting Call</span>
              </button>
            </div>

            <div className="fp__acc">
              {featuredProduct.accordions.map((item, i) => (
                <div className={`fp__acc-item${open === i ? " is-open" : ""}`} key={item.title}>
                  <button
                    className="fp__acc-head"
                    type="button"
                    onClick={() => setOpen(open === i ? -1 : i)}
                    aria-expanded={open === i}
                  >
                    {item.title}
                    <span className="sign" />
                  </button>
                  <div
                    className="fp__acc-body"
                    style={{ maxHeight: open === i ? "460px" : "0px" }}
                  >
                    <div>
                      {item.body ? <p>{item.body}</p> : null}
                      {item.list ? (
                        <ul>
                          {item.list.map(([b, rest]) => (
                            <li key={b}>
                              <b>{b}</b>
                              <span>{rest}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
