"use client";

import { useState } from "react";
import { img, mobileCategoryTabs } from "@/data/site";
import { slugify } from "@/data/site";
import { Reveal, Split } from "./Reveal";

const extraTabs = ["Blazers", "Essentials", "Everyday", "Relaxed", "Winter", "Occasion"];

export default function MobileCategories() {
  const [active, setActive] = useState(0);
  const current = mobileCategoryTabs[active];

  return (
    <section className="section mobile-cats scheme-light">
      <div className="container">
        <Reveal>
          <div className="tabs-scroll" role="tablist">
            {mobileCategoryTabs.map((item, i) => (
              <button
                key={item.tab}
                type="button"
                role="tab"
                aria-selected={active === i}
                className={`tab-pill${active === i ? " is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                {item.tab}
              </button>
            ))}
            {extraTabs.map((tab) => (
              <button key={tab} type="button" className="tab-pill" onClick={() => setActive(0)}>
                {tab}
              </button>
            ))}
          </div>

          <h3 className="h4 heading-font">
            <Split key={current.heading} lines={[current.heading]} />
          </h3>

          <div className="mobile-cats__grid">
            {current.items.map((item, i) => (
              <a href={`/collections/${slugify(item.label)}`} key={`${current.tab}-${item.label}`} data-reveal="" style={{ "--d": `${i * 0.05}s` }}>
                <img src={img(item.image, 500)} alt={item.label} loading="lazy" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
