"use client";

import { useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { Chevron } from "./icons";
import { Reveal, Split } from "./Reveal";

export default function ProductRail({ products, title, lines, description, cta, id }) {
  const railRef = useRef(null);
  const [pos, setPos] = useState(0);

  const scrollBy = (dir) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = railRef.current;
    if (!el) return;
    setPos(el.scrollLeft);
  };

  const atStart = pos < 8;

  return (
    <section className="section scheme-white" id={id}>
      <div className="container">
        <Reveal className="section-head">
          <div>
            <h2 className="h2">
              <Split lines={lines} />
            </h2>
          </div>
          <div className="head-aside">
            {description ? <p className="section-desc">{description}</p> : null}
            {cta ? (
              <a href="/collections/all" className="btn btn-dark">
                <span className="dot" />
                <span className="btn-text">{cta}</span>
              </a>
            ) : null}
          </div>
        </Reveal>

        <div className="rail-wrap">
          <div className="rail-nav">
            <button
              type="button"
              className="icon-btn"
              aria-label="Previous"
              disabled={atStart}
              onClick={() => scrollBy(-1)}
            >
              <Chevron dir="left" />
            </button>
            <button type="button" className="icon-btn" aria-label="Next" onClick={() => scrollBy(1)}>
              <Chevron />
            </button>
          </div>

          <div className="rail" ref={railRef} onScroll={onScroll}>
            {products.map((p) => (
              <ProductCard key={p.title} product={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
