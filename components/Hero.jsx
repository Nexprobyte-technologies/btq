"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowDiagonal, Chevron, WhatsAppFilled } from "./icons";

const SLIDE_DURATION = 4000;

export const HERO_SLIDES = [
  {
    id: "silk-sarees",
    eyebrow: "HAUTE COUTURE 2026 · CHENNAI FLAGSHIP ATELIER",
    titleLines: ["The Festive & Bridal", "Couture Edit"],
    subtitle:
      "Handcrafted pure silk sarees, regal bridal lehengas, and ethereal silhouettes. Bespoke tailoring, custom neckline designs, and worldwide boutique concierge.",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=2200&q=90",
    alt: "Charmique Festive & Bridal Saree Couture Edit",
    tag: "Pure Kanjivaram Silks",
    ctaText: "Explore Collections",
    ctaLink: "/collections",
  },
  {
    id: "bridal-lehengas",
    eyebrow: "ROYAL WEDDING COLLECTION · HANDCRAFTED ZARDOZI",
    titleLines: ["Regal Heritage", "Bridal Lehengas"],
    subtitle:
      "Intricately hand-embroidered velvet and mulberry silk lehengas with authentic antique dabka, zardozi work, and handcrafted bridal dupattas.",
    image:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=2200&q=90",
    alt: "Charmique Regal Heritage Bridal Lehengas",
    tag: "Bridal Masterpieces",
    ctaText: "Explore Bridal Edit",
    ctaLink: "/collections/wedding-edit",
  },
  {
    id: "festive-organza",
    eyebrow: "FESTIVE ATELIER 2026 · HANDLOOM WEAVES",
    titleLines: ["Ethereal Organza &", "Tissue Silks"],
    subtitle:
      "Featherlight handloom tissue drapes and metallic organza sarees illuminated with hand-cut gota patti and delicate pearl tassels.",
    image:
      "https://images.unsplash.com/photo-1738690789530-9c5ee199575c?auto=format&fit=crop&w=2200&q=90",
    alt: "Charmique Ethereal Organza and Tissue Silks",
    tag: "Festive Handlooms",
    ctaText: "Shop Festive Edit",
    ctaLink: "/collections",
  },
  {
    id: "designer-gowns",
    eyebrow: "INDO-WESTERN COUTURE · CONTEMPORARY LUXURY",
    titleLines: ["Designer Anarkalis &", "Cocktail Gowns"],
    subtitle:
      "Floor-grazing silhouette capes, resplendent sharara ensembles, and modern evening gowns sculpted with artisanal finesse.",
    image:
      "https://images.unsplash.com/photo-1742800767764-479556a4d8a5?auto=format&fit=crop&w=2200&q=90",
    alt: "Charmique Designer Anarkalis and Cocktail Gowns",
    tag: "Contemporary Atelier",
    ctaText: "Discover Ensembles",
    ctaLink: "/collections",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const mediaRef = useRef(null);
  const marqueeRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  // Continuous Auto-slide timer: advances every 4 seconds
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isPlaying, totalSlides, currentSlide]);

  // Parallax scroll effect
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        if (y > window.innerHeight * 1.2) return;
        if (mediaRef.current) {
          mediaRef.current.style.transform = `translate3d(0, ${y * 0.28}px, 0)`;
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

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextSlide();
    }
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const current = HERO_SLIDES[currentSlide];

  return (
    <section
      className="hero"
      allow-transparent-header="true"
      role="region"
      aria-roledescription="carousel"
      aria-label="Charmique Festive and Bridal Couture Slider"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background slide images with cross-fade & Ken Burns scale */}
      <div className="hero__media" ref={mediaRef}>
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`hero__slide-image ${isActive ? "is-active" : ""}`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                width="2200"
                height="1200"
                fetchPriority={index === 0 ? "high" : "auto"}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}
      </div>

      {/* Floating Side Navigation Arrows (Desktop / Tablet) */}
      <button
        type="button"
        className="hero__side-arrow hero__side-arrow--prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <Chevron dir="left" size={20} />
      </button>

      <button
        type="button"
        className="hero__side-arrow hero__side-arrow--next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <Chevron dir="right" size={20} />
      </button>

      {/* Hero Content Container */}
      <div className="container hero__inner">
        {/* Left Column: Eyebrow, Title, CTAs */}
        <div
          className="hero__content"
          key={`content-${currentSlide}`}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${currentSlide + 1} of ${totalSlides}: ${current.tag}`}
        >
          <div className="hero__eyebrow-tag hero__anim-eyebrow">
            <span className="hero__dot" />
            <span>{current.eyebrow}</span>
          </div>

          <h1 className="h1 hero__title heading-font hero__anim-title">
            {current.titleLines.map((line, idx) => (
              <span key={idx} style={{ display: "block" }}>
                {line}
              </span>
            ))}
          </h1>

          <div className="hero__cta hero__anim-cta">
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <a href={current.ctaLink} className="btn btn-light btn-arrow">
                <span className="dot" />
                <span className="btn-text">{current.ctaText}</span>
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
          </div>
        </div>

        {/* Right Column: Collection badge & Editorial description */}
        <div className="hero__aside" key={`aside-${currentSlide}`}>
          <div className="hero__slide-badge hero__anim-desc">
            <span className="hero__badge-label">Curated Collection</span>
            <span className="hero__badge-sep">·</span>
            <span className="hero__badge-title">{current.tag}</span>
          </div>

          <p className="hero__text hero__anim-desc">
            {current.subtitle}
          </p>
        </div>

        {/* Bottom Slider Bar: Tab Pills with Progress, Counter, and Controls */}
        <div className="hero__slider-bar">
          <div
            className="hero__slider-tabs"
            role="tablist"
            aria-label="Hero slide navigation"
          >
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  id={`hero-tab-${index}`}
                  aria-selected={isActive}
                  aria-controls={`hero-slide-${index}`}
                  className={`hero__tab ${isActive ? "is-active" : ""} ${
                    !isPlaying ? "is-paused" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  <div className="hero__tab-header">
                    <span className="hero__tab-num">0{index + 1}</span>
                    <span className="hero__tab-title">{slide.tag}</span>
                  </div>
                  <div className="hero__tab-bar">
                    {isActive && (
                      <span
                        key={`fill-${currentSlide}-${isPlaying}`}
                        className="hero__tab-fill"
                        style={{ animationDuration: `${SLIDE_DURATION}ms` }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="hero__slider-actions">
            <div className="hero__counter" aria-live="polite" aria-atomic="true">
              <span className="hero__counter-cur">0{currentSlide + 1}</span>
              <span className="hero__counter-sep">/</span>
              <span className="hero__counter-all">0{totalSlides}</span>
            </div>

            <div className="hero__slider-arrows-inline">
              <button
                type="button"
                className="hero__ctrl-arrow"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <Chevron dir="left" size={15} />
              </button>
              <button
                type="button"
                className="hero__ctrl-arrow"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <Chevron dir="right" size={15} />
              </button>
            </div>

            <button
              type="button"
              className="hero__play-btn"
              onClick={() => setIsPlaying((p) => !p)}
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
              title={isPlaying ? "Pause autoplay" : "Play autoplay"}
            >
              {isPlaying ? (
                <span className="hero__pause-icon" aria-hidden="true" />
              ) : (
                <span className="hero__play-icon" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span>Scroll</span>
        <i />
      </div>

      {/* Bottom Ticker Marquee */}
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
