"use client";

import { useState } from "react";
import { tabProducts } from "@/data/site";
import ProductCard from "./ProductCard";
import { Reveal, Split } from "./Reveal";

const tabs = Object.keys(tabProducts);

export default function FeaturedProductsTabs() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section className="section scheme-light">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <h2 className="h3">
              <Split lines={["Curated Atelier Signatures"]} />
            </h2>
          </div>
          <div className="pills" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={active === tab}
                className={`pill${active === tab ? " is-active" : ""}`}
                onClick={() => setActive(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid-products" key={active}>
          {tabProducts[active].map((product) => (
            <div key={product.title}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
