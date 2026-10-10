"use client";

import { useEffect, useRef } from "react";
import { img } from "@/data/site";
import { ArrowDiagonal } from "./icons";
import { Reveal, Split } from "./Reveal";

export default function Hero() {
  const mediaRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        if (y > window.innerHeight * 1.2) return;
        if (mediaRef.current) {
          mediaRef.current.style.transform = `translate3d(0, ${y * 0.28}px, 0) scale(${1 + y * 0.00012})`;
        }
        if (marqueeRef.current) {
          marqueeRef.current.style.transform = `translate3d(${-y * 0.18}px, -50%, 0)`;
          marqueeRef.current.style.opacity = String(Math.max(0, 1 - y / 700));
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="hero" allow-transparent-header="true">
      <div className="hero__media">
        <img
          ref={mediaRef}
          src="https://images.pexels.com/photos/35074529/pexels-photo-35074529.jpeg?_gl=1*18y39zc*_ga*NTU2MDI2MDY3LjE3OTE1NDMyODE.*_ga_8JE65Q40S6*czE3OTE1NDMyODAkbzEkZzEkdDE3OTE1NDMyODQkajU2JGwwJGgw"
          alt="New season campaign"
          width="2000"
          height="1054"
          fetchPriority="high"
        />
      </div>

      <div className="hero__marquee marquee marquee--rtl" aria-hidden="true" ref={marqueeRef}>
        <div className="marquee__track" style={{ "--dur": "26s" }}>
          <span className="item">Spring Sale&nbsp;&nbsp;—&nbsp;&nbsp;</span>
          <span className="item">Spring Sale&nbsp;&nbsp;—&nbsp;&nbsp;</span>
          <span className="item">Spring Sale&nbsp;&nbsp;—&nbsp;&nbsp;</span>
        </div>
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="h2 hero__title heading-font">
            <Split lines={["The New Season", "Starts Here"]} />
          </h1>
          <div className="hero__cta">
            <Reveal delay={0.35}>
              <a href="/collections/all" className="btn btn-light btn-arrow">
                <span className="dot" />
                <span className="btn-text">Shop Now</span>
                <span className="icon-box">
                  <ArrowDiagonal />
                  <ArrowDiagonal />
                </span>
              </a>
            </Reveal>
          </div>
        </div>

        <Reveal className="hero__text" delay={0.5}>
          Curated wardrobe staples crafted from premium fabrics,
          <br />
          blending timeless silhouettes with effortless versatility
          <br />
          to create confident style for every season.
        </Reveal>
      </div>

      <div className="hero__scroll">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}
