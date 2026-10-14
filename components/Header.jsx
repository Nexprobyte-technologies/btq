"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks, exploreMoreLinks, megaImages, img, categoriesGrid } from "@/data/site";
import { useStore } from "@/context/StoreContext";
import { ArrowDiagonal, ArrowRight, Bag, Close, Heart, Search, WhatsAppFilled } from "./icons";

export default function Header() {
  const pathname = usePathname();
  const { totalItems, wishlist, openCart, openSearch } = useStore();

  const isLightPage =
    pathname === "/collections" ||
    pathname.startsWith("/collections/") ||
    pathname === "/cart" ||
    pathname === "/search" ||
    ["/pages/about", "/pages/about-us", "/pages/contact", "/pages/privacy-policy", "/pages/refund-policy"].includes(
      pathname
    );

  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 35);
      setHidden(y > 340 && y > last);
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

  // Close menus on route change
  useEffect(() => {
    setMegaOpen(false);
    setExploreOpen(false);
    setDrawer(false);
  }, [pathname]);

  const allDrawerLinks = [...navLinks, ...exploreMoreLinks];

  return (
    <>
      <header
        className={`site-header${solid ? " is-solid" : ""}${hidden ? " is-hidden" : ""}${
          isLightPage ? " is-black-nav" : ""
        }`}
      >
        {/* Main Header Bar */}
        <div className="site-header__main">
          <div className="container site-header__inner">
            {/* LEFT SECTION: Logo + Primary Navigation */}
            <div className="site-header__nav-cluster">
              {/* Mobile burger button */}
              <button
                className="burger"
                type="button"
                aria-label="Open navigation menu"
                onClick={() => setDrawer(true)}
              >
                <span />
                <span />
                <span />
              </button>

              {/* Boutique Brand Logo on the Left */}
              <Link href="/" className="site-header__logo" aria-label="Charmiqe Boutique Home">
                <img
                  src="/logo.png"
                  alt="Charmiqe"
                  className="brand-logo-img"
                />
              </Link>

              {/* Primary Navigation — Home, Collections, Bridal Couture & Explore More Dropdown */}
              <nav className="site-nav" aria-label="Primary Navigation">
                {navLinks.map((link) => {
                  const isCollections = link.label === "Collections";
                  const isActive = pathname === link.href;
                  return (
                    <div
                      key={link.label}
                      className={`nav-item-wrap ${isCollections ? "has-mega" : ""}`}
                      onMouseEnter={() => isCollections && setMegaOpen(true)}
                      onMouseLeave={() => isCollections && setMegaOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`nav-link ${isActive ? "is-active" : ""}`}
                      >
                        <span className="nav-link-label">{link.label}</span>
                        {isCollections && (
                          <span className={`nav-chevron ${megaOpen ? "is-open" : ""}`}>
                            ▾
                          </span>
                        )}
                        {link.badge && (
                          <span className="nav-badge-pill">{link.badge}</span>
                        )}
                      </Link>
                    </div>
                  );
                })}

                {/* Explore More Dropdown */}
                <div
                  className="nav-item-wrap has-explore-dropdown"
                  onMouseEnter={() => setExploreOpen(true)}
                  onMouseLeave={() => setExploreOpen(false)}
                >
                  <button
                    type="button"
                    className={`nav-link explore-toggle-btn ${exploreOpen ? "is-active" : ""}`}
                    onClick={() => setExploreOpen((v) => !v)}
                    aria-expanded={exploreOpen}
                  >
                    <span className="nav-link-label">Explore More</span>
                    <span className={`nav-chevron ${exploreOpen ? "is-open" : ""}`}>▾</span>
                  </button>

                  <div className={`explore-dropdown-card ${exploreOpen ? "is-visible" : ""}`}>
                    <div className="explore-dropdown-header">
                      <span className="explore-tag">CURATED ATELIER SECTIONS</span>
                    </div>
                    <div className="explore-dropdown-list">
                      {exploreMoreLinks.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="explore-item-link"
                          onClick={() => setExploreOpen(false)}
                        >
                          <span className="explore-item-icon">{item.icon}</span>
                          <div className="explore-item-text">
                            <strong className="explore-item-title">{item.label}</strong>
                            <span className="explore-item-desc">{item.desc}</span>
                          </div>
                          <span className="explore-item-arrow">→</span>
                        </Link>
                      ))}
                    </div>
                    <div className="explore-dropdown-footer">
                      <a
                        href="https://api.whatsapp.com/send?phone=919876543210&text=Hello%20Charmique%20Boutique!%20%E2%9C%A8%20I%20would%20like%20to%20consult%20with%20your%20stylist."
                        target="_blank"
                        rel="noreferrer"
                        className="explore-footer-link"
                      >
                        <WhatsAppFilled size={13} />
                        <span>Stylist Concierge on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            {/* RIGHT SECTION: Search, Concierge, Wishlist, Bag */}
            <div className="site-header__actions">
              {/* Search Atelier Pill */}
              <button
                className="header-search-btn"
                type="button"
                aria-label="Search collection"
                title="Search Atelier (⌘K)"
                onClick={openSearch}
              >
                <Search size={15} />
                <span className="search-label">Search Atelier</span>
                <kbd className="search-kbd">⌘K</kbd>
              </button>

              {/* Direct WhatsApp Concierge CTA */}
              <button
                className="header-concierge-pill"
                type="button"
                aria-label="Direct WhatsApp Concierge"
                title="WhatsApp Concierge"
                onClick={() => {
                  const msg = "Hello Charmique Boutique! ✨ I would like to inquire about your women's couture, sarees, and custom stitching.";
                  window.open(`https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent(msg)}`, "_blank");
                }}
              >
                <WhatsAppFilled size={15} />
                <span className="concierge-label">Concierge</span>
              </button>

              {/* Wishlist Link / Trigger */}
              <Link
                href="/collections"
                className="header-icon header-wishlist-icon"
                aria-label="Wishlist"
                title="Saved Items"
              >
                <Heart size={18} />
                {wishlist.length > 0 && <span className="count count-bounce">{wishlist.length}</span>}
              </Link>

              {/* Shortlisted Enquiry Bag Trigger */}
              <button
                className="header-icon header-cart-icon"
                type="button"
                aria-label="Enquiry Bag"
                title="Shortlisted Items for Enquiry"
                onClick={openCart}
              >
                <Bag size={18} />
                {totalItems > 0 && <span className="count count-bounce">{totalItems}</span>}
              </button>
            </div>
          </div>

          {/* Luxury Full-Width Mega Menu Dropdown for Collections */}
          <div
            className={`mega-dropdown ${megaOpen ? "is-visible" : ""}`}
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <div className="container mega-dropdown__inner">
              <div className="mega-column">
                <div className="mega-col-header">
                  <span className="mega-col-icon">⚜</span>
                  <span className="mega-col-title">SIGNATURE WEAVES</span>
                </div>
                <ul className="mega-col-links">
                  {categoriesGrid.slice(0, 6).map((cat) => (
                    <li key={cat.label}>
                      <Link
                        href={`/collections/${cat.label.toLowerCase().replaceAll(" ", "-")}`}
                        onClick={() => setMegaOpen(false)}
                      >
                        <span>{cat.label}</span>
                        <span className="link-arrow">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mega-column">
                <div className="mega-col-header">
                  <span className="mega-col-icon">✦</span>
                  <span className="mega-col-title">OCCASIONS & STYLES</span>
                </div>
                <ul className="mega-col-links">
                  {categoriesGrid.slice(6, 12).map((cat) => (
                    <li key={cat.label}>
                      <Link
                        href={`/collections/${cat.label.toLowerCase().replaceAll(" ", "-")}`}
                        onClick={() => setMegaOpen(false)}
                      >
                        <span>{cat.label}</span>
                        <span className="link-arrow">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mega-editorial-column">
                <span className="mega-col-title">FEATURED ATELIER LOOKBOOK</span>
                <div className="mega-cards-grid">
                  {megaImages.slice(0, 3).map((item) => (
                    <Link
                      key={item.label}
                      href="/collections"
                      className="mega-feature-card"
                      onClick={() => setMegaOpen(false)}
                    >
                      <img src={img(item.name, 450)} alt={item.label} loading="lazy" />
                      <div className="mega-card-overlay">
                        <div>
                          <span className="mega-card-badge">HAUTE EDIT</span>
                          <span className="mega-card-title">{item.label}</span>
                        </div>
                        <ArrowDiagonal size={12} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mega-dropdown__footer">
              <div className="container mega-dropdown__footer-inner">
                <div className="mega-footer-text">
                  <span className="footer-crest">⚜</span>
                  <span>
                    <strong>Bespoke Couture Service:</strong> Custom blouse neckline styling, Maggam zardozi handwork &amp; video call shopping consultations available.
                  </span>
                </div>
                <a
                  href="https://api.whatsapp.com/send?phone=919876543210&text=Hello%20Charmique%20Boutique!%20I%20would%20like%20to%20customize%20an%20outfit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mega-footer-cta"
                >
                  <WhatsAppFilled size={14} />
                  <span>Consult Stylist on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`drawer${drawer ? " is-open" : ""}`}>
        <div className="drawer__scrim" onClick={() => setDrawer(false)} />
        <aside className="drawer__panel">
          <div className="drawer__head">
            <div className="drawer__brand-wrap">
              <img
                src="/logo.png"
                alt="Charmiqe"
                style={{ height: 44, width: "auto", objectFit: "contain", display: "block" }}
              />
            </div>
            <button type="button" aria-label="Close menu" onClick={() => setDrawer(false)}>
              <Close />
            </button>
          </div>

          <div className="drawer__search_bar">
            <button
              type="button"
              className="drawer__search_btn"
              onClick={() => {
                setDrawer(false);
                openSearch();
              }}
            >
              <Search size={16} />
              <span>Search silk sarees, bridal lehengas, suits...</span>
            </button>
          </div>

          <ul className="drawer__links">
            {allDrawerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} onClick={() => setDrawer(false)}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span>{link.label}</span>
                    {link.badge && (
                      <span
                        style={{
                          fontSize: 9,
                          fontWeight: 700,
                          padding: "2px 6px",
                          borderRadius: 99,
                          background: "#800020",
                          color: "#fff",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <ArrowRight size={14} />
                </Link>
              </li>
            ))}
          </ul>

          <div className="drawer__featured_categories">
            <span className="drawer__section_label">SIGNATURE WEAVES &amp; EDITS</span>
            <div className="drawer__cat_chips">
              {categoriesGrid.slice(0, 6).map((cat) => (
                <Link
                  key={cat.label}
                  href={`/collections/${cat.label.toLowerCase().replaceAll(" ", "-")}`}
                  onClick={() => setDrawer(false)}
                  className="drawer__cat_chip"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="drawer__footer">
            <button
              type="button"
              className="drawer__whatsapp_btn"
              onClick={() => {
                setDrawer(false);
                const msg = "Hello Charmique Boutique! ✨ I would like to enquire about your women's couture and sarees.";
                window.open(`https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent(msg)}`, "_blank");
              }}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "#25D366",
                color: "#ffffff",
                padding: "12px 16px",
                borderRadius: 100,
                fontWeight: 600,
                fontSize: 14,
                marginBottom: 14,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(37,211,102,0.25)",
              }}
            >
              <WhatsAppFilled size={18} />
              <span>WhatsApp Stylist Direct</span>
            </button>

            <p style={{ margin: "2px 0", fontSize: 12, opacity: 0.7 }}>Boutique Atelier &amp; Bridal Studio</p>
            <p style={{ margin: "2px 0", fontSize: 12, opacity: 0.7 }}>Mon – Sat: 10:00 AM – 8:00 PM</p>
            <Link
              href="/pages/contact"
              className="btn btn-dark"
              style={{ width: "100%", marginTop: 10 }}
              onClick={() => setDrawer(false)}
            >
              <span className="dot" />
              <span className="btn-text">Consult Boutique Stylist</span>
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
