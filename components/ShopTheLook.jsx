"use client";

import { useState } from "react";
import { img, shopTheLookProducts } from "@/data/site";
import { slugify } from "@/data/site";
import { Reveal, Split } from "./Reveal";

const hotspots = [
  { x: 34, y: 38, product: 0 },
  { x: 66, y: 56, product: 1 },
];

const scenes = [
  { label: "BRIDAL WEDDING", image: "https://images.unsplash.com/photo-1597897545901-6ac15b725974?auto=format&fit=crop&w=1600&q=85" },
  { label: "HERITAGE RECEPTION", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=85" },
];

export default function ShopTheLook() {
  const [scene, setScene] = useState(0);

  return (
    <section className="section scheme-dark">
      <div className="container">
        <div className="stl__grid">
          <Reveal className="stl__banner">
            <img src={img(scenes[scene].image, 1600)} alt="Boutique Bridal Look" loading="lazy" />

            {hotspots.map((h) => {
              const p = shopTheLookProducts[h.product];
              return (
                <span className="hotspot" key={h.x} style={{ left: `${h.x}%`, top: `${h.y}%` }}>
                  <span className="hotspot__card">
                    <img src={img(p.image, 200)} alt="" loading="lazy" />
                    <span>
                      <span className="t">{p.title}</span>
                      <span className="p">Bespoke Couture</span>
                    </span>
                  </span>
                </span>
              );
            })}
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="stl__title heading-font accent-font">
              <Split lines={["Heirloom Grace &", "Royal Silhouettes"]} />
            </h2>
            <p className="stl__desc">
              Curated bridal drapes, pure mulberry silk sarees, and handcrafted jewelry pairings for unforgettable celebrations.
            </p>

            <div className="stl__cards">
              {shopTheLookProducts.map((p) => (
                <a className="stl__card" href={`/products/${slugify(p.title)}`} key={p.title}>
                  <img src={img(p.image, 300)} alt={p.title} loading="lazy" />
                  <span>
                    <span className="t">{p.title}</span>
                    <span className="p">Available on Enquiry</span>
                    <span className="go">Enquire Design ↗</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="stl__nav">
              <span className="stl__label accent-font">{scenes[scene].label}</span>
              <span className="stl__counter">
                {scene + 1} <span style={{ opacity: 0.5 }}>/ {scenes.length}</span>
              </span>
              <div style={{ display: "flex", gap: 8 }}>
                {scenes.map((s, i) => (
                  <button
                    key={s.label}
                    type="button"
                    aria-label={s.label}
                    onClick={() => setScene(i)}
                    style={{
                      width: 34,
                      height: 4,
                      borderRadius: 4,
                      background: scene === i ? "rgb(255 68 0)" : "rgba(255,255,255,.3)",
                      transition: "background .3s",
                    }}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
