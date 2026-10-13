"use client";

import { useState } from "react";
import { img, lookbookImages, lookbookProducts } from "@/data/site";
import ProductCard from "./ProductCard";
import { Reveal, Split } from "./Reveal";

export default function LookbookCarousel() {
  const [active, setActive] = useState(0);

  return (
    <section className="section" style={{ background: "#fcf8f3" }}>
      <div className="container look">
        <Reveal className="look__intro">
          <h2 className="h3">
            <Split lines={["Bridal & Festive Lookbook 2026"]} />
          </h2>
          <p>
            Every ensemble is handwoven with pure mulberry silks, authentic antique zari
            <br />
            borders, and generational zardozi needlework. Custom sizing and video call
            <br />
            shopping available upon enquiry.
          </p>

          <div className="look__stage">
            {lookbookImages.map((src, i) => (
              <img
                key={src}
                className={active === i ? "is-on" : ""}
                src={img(src, 1000)}
                alt={`Lookbook ${i + 1}`}
                loading="lazy"
              />
            ))}
          </div>

          <div className="tabs-scroll" style={{ marginTop: 18, marginBottom: 0 }}>
            {lookbookImages.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`tab-pill${active === i ? " is-active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                0{i + 1}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="look__list">
          {lookbookProducts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08} onMouseEnter={() => setActive(i % lookbookImages.length)}>
              <div className="look-item">
                <ProductCard product={p} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
