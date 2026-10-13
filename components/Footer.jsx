"use client";

import { useState } from "react";
import Link from "next/link";
import { footerColumns } from "@/data/site";
import { ArrowRight, Check, Facebook, Instagram, Shield, Sparkles, Truck, WhatsAppFilled, X, Youtube } from "./icons";
import { Reveal } from "./Reveal";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setNewsletterEmail("");
    }
  };

  const handleWhatsAppChat = () => {
    const msg = "Hello Charmique Atelier! ✨ I would like to enquire about your bridal collections, saree designs, and custom stitching.";
    window.open(`https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <footer className="footer">
      {/* Pre-footer Trust & Value Bar */}
      <div className="footer-perks-bar">
        <div className="container footer-perks-grid">
          <div className="footer-perk-card">
            <Truck size={22} />
            <div>
              <strong>Worldwide Express Dispatch</strong>
              <p>Direct door delivery across India, USA, UK, Canada & UAE with bridal protective packing.</p>
            </div>
          </div>
          <div className="footer-perk-card">
            <Sparkles size={22} />
            <div>
              <strong>Master Artisanal Craftsmanship</strong>
              <p>Authentic mulberry silk weaves, genuine zari borders, and intricate handcrafted zardozi embroidery.</p>
            </div>
          </div>
          <div className="footer-perk-card">
            <Shield size={22} />
            <div>
              <strong>Custom Tailoring & Video Calls</strong>
              <p>Direct video appointments for live viewing, custom blouse necklines, and bespoke sizing.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__top">
          <Reveal className="newsletter">
            <div className="footer__label">JOIN THE ATELIER CIRCLE</div>
            <p>Receive exclusive private access to seasonal drops, bridal preview edits, and VIP festive releases.</p>

            {subscribed ? (
              <div className="newsletter-success">
                <Check size={16} />
                <span>You are subscribed to the VIP circle!</span>
              </div>
            ) : (
              <form className="newsletter__field" onSubmit={handleNewsletter}>
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  aria-label="Email Address"
                  required
                />
                <button type="submit" aria-label="Subscribe to newsletter">
                  <ArrowRight size={15} />
                </button>
              </form>
            )}

            <div className="socials">
              <a
                href="https://api.whatsapp.com/send?phone=919876543210"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
              >
                <WhatsAppFilled />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube />
              </a>
            </div>
          </Reveal>

          {footerColumns.map((col, i) => (
            <Reveal key={col.title} delay={0.08 * (i + 1)}>
              <div className="footer__label">{col.title}</div>
              <ul className="footer__links">
                {col.links.map((link) => {
                  let href = "/";
                  const lower = link.toLowerCase();
                  if (lower.includes("silk saree") || lower.includes("saree")) href = "/collections/silk-sarees";
                  else if (lower.includes("lehenga")) href = "/collections/bridal-lehengas";
                  else if (lower.includes("kurti")) href = "/collections/kurti-sets";
                  else if (lower.includes("anarkali")) href = "/collections/anarkali-suits";
                  else if (lower.includes("gown")) href = "/collections/couture-gowns";
                  else if (lower.includes("blouse") || lower.includes("trousseau") || lower.includes("video"))
                    href = "/pages/contact";
                  else if (lower.includes("about")) href = "/pages/about-us";
                  else if (lower.includes("contact") || lower.includes("stylist") || lower.includes("fitting"))
                    href = "/pages/contact";
                  else if (lower.includes("shipping")) href = "/pages/contact";
                  else if (lower.includes("faq")) href = "/pages/about-us";
                  else href = `/collections`;

                  return (
                    <li key={link}>
                      <Link href={href}>{link}</Link>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}

          <Reveal delay={0.4}>
            <div className="footer__label">BOUTIQUE ATELIER</div>
            <p style={{ fontSize: 14.5, color: "rgb(0 0 0 / .65)", lineHeight: 1.6 }}>
              Boutique Studio & Bridal Atelier
              <br />
              Cathedral Road, Chennai &amp; Indiranagar, Bangalore
              <br />
              Mon – Sat: 10:00 AM – 8:00 PM
              <br />
              WhatsApp: +91 98765 43210
            </p>
            <button
              type="button"
              className="btn-whatsapp-direct"
              onClick={handleWhatsAppChat}
              style={{
                marginTop: 18,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 18px",
                borderRadius: 100,
                background: "#25D366",
                color: "#fff",
                fontWeight: 600,
                fontSize: 13.5,
                border: "none",
                cursor: "pointer",
              }}
            >
              <WhatsAppFilled size={18} />
              <span>WhatsApp Stylist</span>
            </button>
            <div className="footer__brand">CHARMIQUE</div>
          </Reveal>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Charmique Haute Couture Women&apos;s Boutique. Handcrafted with pride.</span>
          <div className="footer__pay">
            {[
              "PURE SILK MARK",
              "HANDLOOM CERTIFIED",
              "BESPOKE BRIDAL",
              "WORLDWIDE COURIER",
              "WHATSAPP CONCIERGE",
            ].map((p) => (
              <span key={p} style={{ fontSize: 11, letterSpacing: "0.08em" }}>
                ✦ {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
