"use client";

import { useEffect, useRef } from "react";
import { img } from "@/data/site";
import { Reveal, Split } from "./Reveal";

const floats = [
  { cls: "float-img--1", src: "Frame_1171284777.webp", speed: -0.06 },
  { cls: "float-img--2", src: "Frame_1171284778.webp", speed: 0.09 },
  { cls: "float-img--3", src: "Frame_1171284779.webp", speed: 0.07 },
  { cls: "float-img--4", src: "Frame_1171284777.webp", speed: -0.08 },
];

export default function FloatingText() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return undefined;
    const nodes = Array.from(wrap.querySelectorAll(".float-img"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = wrap.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      nodes.forEach((node, i) => {
        const speed = floats[i].speed || 0.06;
        const shift = (progress - 0.5) * 420 * speed * 6;
        node.style.transform = `translate3d(0, ${shift}px, 0)`;
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="section float-text scheme-light" ref={wrapRef}>
      {floats.map((f, i) => (
        <div className={`float-img ${f.cls}`} key={i}>
          <img src={img(f.src, 500)} alt="" loading="lazy" />
        </div>
      ))}

      <div className="container float-text__inner">
        <Reveal>
          <h2 className="heading-font">
            <Split
              lines={[
                "Discover fashion designed to",
                "empower, inspire, and celebrate",
                "your unique sense of style.",
              ]}
            />
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <p>
            Made for real life, each piece blends everyday comfort with timeless style &amp;
            thoughtfully designed pieces that bring comfort and confidence to everyday dressing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
