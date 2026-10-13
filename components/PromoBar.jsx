"use client";

import { useEffect, useState } from "react";
import { Reveal, Split } from "./Reveal";

const DUE = new Date();
DUE.setDate(DUE.getDate() + 9);

function parts() {
  const diff = Math.max(0, DUE.getTime() - Date.now());
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

export default function PromoBar() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setTime(parts());
    const id = setInterval(() => setTime(parts()), 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Mins", time.minutes],
    ["Secs", time.seconds],
  ];

  return (
    <section className="section promo scheme-dark">
      <div className="container">
        <Reveal className="promo__inner">
          <div>
            <div className="promo__sub">
              <Split lines={["Festive & Bridal Trunk Show 2026"]} />
            </div>
            <div className="promo__title">Reserve Your Bespoke Bridal Consultation</div>
          </div>

          <div className="countdown">
            {blocks.map(([label, value], i) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div className="countdown__block">
                  <div className="countdown__num">{String(value).padStart(2, "0")}</div>
                  <div className="countdown__label">{label}</div>
                </div>
                {i < blocks.length - 1 ? <span className="countdown__sep">:</span> : null}
              </div>
            ))}
          </div>

          <p className="promo__text">
            Complimentary video shopping appointments, custom neckline
            <br />
            measurements &amp; priority express courier across India and globally.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=919876543210&text=Hello%20Charmique%20Boutique!%20%E2%9C%A8%20I%20would%20like%20to%20reserve%20a%20bridal%20consultation."
            target="_blank"
            rel="noreferrer"
            className="btn btn-light"
          >
            <span className="dot" />
            <span className="btn-text">WhatsApp Stylist</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
