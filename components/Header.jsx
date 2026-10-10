"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";
import { ArrowRight, Bag, Close, Search, User } from "./icons";

export default function Header() {
  const pathname = usePathname();
  const blackNav = pathname === "/collections" || pathname.startsWith("/collections/") || pathname === "/blogs" || pathname.startsWith("/blogs/") || ["/pages/about", "/pages/about-us", "/pages/contact"].includes(pathname);
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
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
        className={`site-header${solid ? " is-solid" : ""}${hidden ? " is-hidden" : ""}${blackNav ? " is-black-nav" : ""}`}
      >
        <div className="container site-header__inner">
          <nav className="site-nav" aria-label="Primary">
            {navLinks.map((link) =>
              <a key={link.label} href={link.href}>{link.label}</a>
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

          <a href="/" className="site-header__logo" aria-label="Charmique home">
            <span>CHARMIQUE</span>
          </a>

          <div className="site-header__actions">
            <button className="header-icon" type="button" aria-label="Search" onClick={() => { window.location.href = "/search"; }}>
              <Search />
            </button>
            <button className="header-icon" type="button" aria-label="Account" onClick={() => { window.location.href = "/account"; }}>
              <User />
            </button>
            <button className="header-icon" type="button" aria-label="Cart" onClick={() => { window.location.href = "/cart"; }}>
              <Bag />
              <span className="count">0</span>
            </button>
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
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}
