"use client";

import { useEffect, useRef } from "react";

function useInView(options) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      options || { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}

export function Reveal({ children, className = "", delay = 0, as: Tag = "div", style, ...rest }) {
  const ref = useInView();
  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal=""
      style={{ "--d": `${delay}s`, ...(style || {}) }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function Split({ lines, className = "", delay = 0 }) {
  const ref = useInView({ threshold: 0.2 });
  let counter = 0;

  return (
    <span ref={ref} className={`split ${className}`} style={{ "--d": `${delay}s` }}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} style={{ display: "block" }}>
          {line.split(" ").map((word, wordIndex) => {
            const i = counter++;
            return (
              <span className="word" key={`${word}-${wordIndex}`} style={{ marginRight: "0.26em" }}>
                <i style={{ "--i": i }}>{word}</i>
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

export function useScrollY() {
  const ref = useRef(0);
  return ref;
}
