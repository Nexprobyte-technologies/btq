"use client";

import { useEffect, useRef } from "react";
import { img } from "@/data/site";
import { ArrowDiagonal, WhatsAppFilled } from "./icons";
import { Reveal, Split } from "./Reveal";

export default function Hero() {
  const mediaRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        if (y > window.innerHeight * 1.2) return;
        if (mediaRef.current) {
          mediaRef.current.style.transform = `translate3d(0, ${y * 0.28}px, 0) scale(${1 + y * 0.00012})`;
        }
        if (marqueeRef.current) {
          marqueeRef.current.style.transform = `translate3d(${-y * 0.18}px, 0, 0)`;
          marqueeRef.current.style.opacity = String(Math.max(0, 1 - y / 700));
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="hero" allow-transparent-header="true">
      <div className="hero__media">
        <img
          ref={mediaRef}
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=2200&q=90"
          alt="Charmique Festive & Bridal Saree Couture Edit"
          width="2000"
          height="1054"
          fetchPriority="high"
        />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <Reveal delay={0.08}>
            <div className="hero__eyebrow-tag">
              <span className="hero__dot" />
              <span>HAUTE COUTURE 2026 · CHENNAI FLAGSHIP ATELIER</span>
            </div>
          </Reveal>
          <h1 className="h1 hero__title heading-font">
            <Split lines={["The Festive & Bridal", "Couture Edit"]} />
          </h1>
          <div className="hero__cta">
            <Reveal delay={0.35}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <a href="/collections" className="btn btn-light btn-arrow">
                  <span className="dot" />
                  <span className="btn-text">Explore Collections</span>
                  <span className="icon-box">
                    <ArrowDiagonal />
                    <ArrowDiagonal />
                  </span>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=919876543210&text=Hello%20Charmique%20Boutique!%20%E2%9C%A8%20I%20would%20like%20to%20enquire%20about%20your%20women%27s%20couture%20and%20bridal%20wear."
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp-hero"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 22px",
                    borderRadius: 100,
                    background: "#25D366",
                    color: "#ffffff",
                    fontWeight: 600,
                    fontSize: 14,
                    textDecoration: "none",
                    boxShadow: "0 6px 20px rgba(37,211,102,0.35)",
                  }}
                >
                  <WhatsAppFilled size={18} />
                  <span>WhatsApp Enquiries</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="hero__text" delay={0.5}>
          Handcrafted pure silk sarees, regal bridal lehengas, and ethereal silhouettes.
          <br />
          Bespoke tailoring, custom neckline designs, and worldwide boutique concierge.
        </Reveal>
      </div>

      <div className="hero__scroll">
        <span>Scroll</span>
        <i />
      </div>

      <div className="hero__bottom-ticker" ref={marqueeRef} aria-hidden="true">
        <div className="ticker-track">
          <span>✦ Festive &amp; Bridal Couture 2026</span>
          <span className="ticker-sep">·</span>
          <span>⚜ Pure Kanjivaram Mulberry Silks</span>
          <span className="ticker-sep">·</span>
          <span>✦ Handcrafted Zardozi Bridal Lehengas</span>
          <span className="ticker-sep">·</span>
          <span>⚜ Bespoke Atelier Stitching</span>
          <span className="ticker-sep">·</span>
          <span>✦ Direct WhatsApp Stylist Enquiries</span>
          <span className="ticker-sep">·</span>
          <span>✦ Festive &amp; Bridal Couture 2026</span>
          <span className="ticker-sep">·</span>
          <span>⚜ Pure Kanjivaram Mulberry Silks</span>
          <span className="ticker-sep">·</span>
          <span>✦ Handcrafted Zardozi Bridal Lehengas</span>
          <span className="ticker-sep">·</span>
          <span>⚜ Bespoke Atelier Stitching</span>
          <span className="ticker-sep">·</span>
          <span>✦ Direct WhatsApp Stylist Enquiries</span>
        </div>
      </div>
    </section>
  );
}
