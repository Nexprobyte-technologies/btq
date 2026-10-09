"use client";

import { useState } from "react";
import { img, showcaseTabs } from "@/data/site";
import { ArrowRight } from "./icons";
import { Reveal, Split } from "./Reveal";

export default function ShowcaseCollections() {
  const [active, setActive] = useState(0);

  return (
    <section className="section showcase scheme-dark">
      <div className="showcase__bg">
        <img src={img("showcase-bg.webp", 1800)} alt="" loading="lazy" />
      </div>

      <div className="container showcase__inner">
        <Reveal>
          <div className="eyebrow">OUR COLLECTIONS</div>
          <h2 className="showcase__title heading-font">
            <Split lines={["Dress Up Your", "Beautiful Moments"]} />
          </h2>

          <div className="showcase__tabs">
            {showcaseTabs.map((item, i) => (
              <button
                key={item.tab}
                type="button"
                className={`showcase__tab${active === i ? " is-active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <span className="num">0{i + 1}</span>
                <span className="name">{item.tab}</span>
                <span className="arrow">
                  <ArrowRight />
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="showcase__panel" key={showcaseTabs[active].tab}>
          <div className="showcase__media">
            <img src={img(showcaseTabs[active].image, 1100)} alt={showcaseTabs[active].tab} loading="lazy" />
          </div>
          <div className="showcase__panel-text">
            <h4 className="h5">{showcaseTabs[active].title}</h4>
            <p>{showcaseTabs[active].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
