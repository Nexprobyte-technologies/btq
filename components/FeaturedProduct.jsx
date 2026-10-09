"use client";

import { useState } from "react";
import { featuredProduct, img } from "@/data/site";
import { Reveal } from "./Reveal";

export default function FeaturedProduct() {
  const [color, setColor] = useState(featuredProduct.colors[0].name);
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(0);
  const [hero, setHero] = useState(0);

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
              <strong>Where&apos;s The Discount?</strong>
              <span className="fp__code">SAVE20</span>
              <span>Buy 2, get $20 off by using this code</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="fp__title heading-font">{featuredProduct.title}</h2>
            <p className="fp__desc">{featuredProduct.description}</p>

            <div className="fp__price">
              <span>{featuredProduct.price}</span>
              <s>{featuredProduct.compareAt}</s>
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

            <div className="fp__buy">
              <div className="qty">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                  −
                </button>
                <span>{qty}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => setQty((q) => q + 1)}>
                  +
                </button>
              </div>
              <button className="btn btn-dark" type="button">
                <span className="dot" />
                <span className="btn-text">Add to cart — {featuredProduct.price}</span>
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
