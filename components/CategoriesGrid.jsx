"use client";

import { useRef, useState, useEffect } from "react";
import { categoriesGrid, img, slugify } from "@/data/site";
import { ArrowDiagonal, Chevron } from "./icons";
import { Reveal, Split } from "./Reveal";

export default function CategoriesGrid() {
  const lineRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = lineRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollByDir = (dir) => {
    const el = lineRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.72;
    el.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="section scheme-white" id="signature-collections">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <h2 className="h3">
              <Split lines={["Discover Signature Collections"]} />
            </h2>
          </div>
          <div className="cats-head-actions">
            <a href="/collections" className="btn btn-dark">
              <span className="dot" />
              <span className="btn-text">Explore All ({categoriesGrid.length})</span>
            </a>
            <div className="cats-nav-arrows">
              <button
                type="button"
                className="icon-btn"
                aria-label="Previous signature collections"
                disabled={!canScrollLeft}
                onClick={() => scrollByDir(-1)}
              >
                <Chevron dir="left" size={16} />
              </button>
              <button
                type="button"
                className="icon-btn"
                aria-label="Next signature collections"
                disabled={!canScrollRight}
                onClick={() => scrollByDir(1)}
              >
                <Chevron dir="right" size={16} />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="cats-line-wrap">
          <div
            className="cats-line"
            ref={lineRef}
            onScroll={checkScroll}
            role="region"
            aria-label="Discover Signature Collections Carousel"
            tabIndex={0}
          >
            {categoriesGrid.map((cat, i) => (
              <a
                key={cat.label}
                href={`/collections/${slugify(cat.label)}`}
                className="cat-card"
              >
                <img
                  src={img(cat.image, 600)}
                  alt={cat.label}
                  loading="lazy"
                  width="400"
                  height="533"
                />
                <div className="cat-card__content">
                  <div className="cat-card__top">
                    <span className="cat-card__num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="cat-card__arrow" aria-hidden="true">
                      <ArrowDiagonal size={12} />
                    </span>
                  </div>
                  <div className="cat-card__bottom">
                    <span className="cat-card__title">{cat.label}</span>
                    <span className="cat-card__tag">Curated Edit</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
