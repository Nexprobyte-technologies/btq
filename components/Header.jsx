"use client";

import { useEffect, useState } from "react";
import { img, megaImages, megaMenu, navLinks } from "@/data/site";
import { ArrowRight, Bag, Close, Search, User } from "./icons";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mega, setMega] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > 320 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  return (
    <>

      <header
        className={`site-header${solid ? " is-solid" : ""}${hidden ? " is-hidden" : ""}`}
        onMouseLeave={() => setMega(false)}
      >
        <div className="container site-header__inner">
          <nav className="site-nav" aria-label="Primary">
            {navLinks.map((link) =>
              link.mega ? (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setMega(true)}
                  onFocus={() => setMega(true)}
                >
                  {link.label}
                </a>
              ) : (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              )
            )}
          </nav>

          <button
            className="burger"
            type="button"
            aria-label="Open menu"
            onClick={() => setDrawer(true)}
          >
            <span />
            <span />
            <span />
          </button>

          <a href="#" className="site-header__logo" aria-label="Sky home">
            <img className="logo-on-dark" src={img("logo-white.svg", 200)} alt="Sky" width="90" height="35" />
            <img className="logo-on-light" src={img("logo-black.svg", 200)} alt="Sky" width="90" height="35" />
          </a>

          <div className="site-header__actions">
            <button className="header-icon" type="button" aria-label="Search" onMouseEnter={() => setMega(false)}>
              <Search />
            </button>
            <button className="header-icon" type="button" aria-label="Account">
              <User />
            </button>
            <button className="header-icon" type="button" aria-label="Cart">
              <Bag />
              <span className="count">0</span>
            </button>
          </div>
        </div>

        <div
          className={`mega${mega ? " is-open" : ""}`}
          onMouseEnter={() => setMega(true)}
          onMouseLeave={() => setMega(false)}
        >
          <div className="container mega__inner">
            {megaMenu.map((col) => (
              <div key={col.title}>
                <div className="mega__title">{col.title}</div>
                <ul className="mega__links">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="u-line">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <div className="mega__title">Popular Categories</div>
              <div className="mega__cards">
                {megaImages.map((m) => (
                  <a className="mega__card" href="#" key={m.label}>
                    <img src={img(m.image, 500)} alt={m.label} loading="lazy" />
                    <span>{m.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`drawer${drawer ? " is-open" : ""}`}>
        <div className="drawer__scrim" onClick={() => setDrawer(false)} />
        <aside className="drawer__panel">
          <div className="drawer__head">
            <strong className="heading-font" style={{ fontSize: 18 }}>
              Menu
            </strong>
            <button type="button" aria-label="Close menu" onClick={() => setDrawer(false)}>
              <Close />
            </button>
          </div>
          <ul className="drawer__links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setDrawer(false)}>
                  {link.label}
                  <ArrowRight size={14} />
                </a>
                {link.mega ? (
                  <div className="drawer__sub">
                    {megaMenu.flatMap((c) => c.links).map((s, si) => (
                      <a href="#" key={`${s}-${si}`}>
                        {s}
                      </a>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}
