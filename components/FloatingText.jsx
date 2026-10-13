"use client";

import { useEffect, useRef } from "react";
import { img } from "@/data/site";
import { Reveal, Split } from "./Reveal";

const floats = [
  { cls: "float-img--1", src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=85", speed: -0.06 },
  { cls: "float-img--2", src: "https://images.unsplash.com/photo-1597897545901-6ac15b725974?auto=format&fit=crop&w=600&q=85", speed: 0.09 },
  { cls: "float-img--3", src: "https://images.unsplash.com/photo-1742800767764-479556a4d8a5?auto=format&fit=crop&w=600&q=85", speed: 0.07 },
  { cls: "float-img--4", src: "https://images.unsplash.com/photo-1776005395798-9fc7c1c50e95?auto=format&fit=crop&w=600&q=85", speed: -0.08 },
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
                "Artisanal luxury handwoven to",
                "celebrate the timeless beauty &",
                "grandeur of Indian womanhood.",
              ]}
            />
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <p>
            From generational mulberry silk weaves to regal bridal zardozi needlework, each creation
            at Charmique Atelier is custom-tailored to celebrate your most unforgettable milestones.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
