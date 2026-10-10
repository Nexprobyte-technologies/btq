"use client";

import { footerColumns } from "@/data/site";
import { ArrowRight, Facebook, Instagram, X, Youtube } from "./icons";
import { Reveal } from "./Reveal";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <Reveal className="newsletter">
            <div className="footer__label">JOIN OUR NEWSLETTER</div>
            <p>Be the first to know about new collections and exclusive offers.</p>
            <form className="newsletter__field" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email" aria-label="Email" />
              <button type="submit" aria-label="Subscribe">
                <ArrowRight size={15} />
              </button>
            </form>
            <div className="socials">
              <a href="#" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" aria-label="X">
                <X />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube />
              </a>
            </div>
          </Reveal>

          {footerColumns.map((col, i) => (
            <Reveal key={col.title} delay={0.08 * (i + 1)}>
              <div className="footer__label">{col.title}</div>
              <ul className="footer__links">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href={link === "Home" ? "/" : link === "All collections" ? "/collections" : link.toLowerCase().includes("collection") || ["Current Classics", "Daily Edit", "Modern Basics", "Heritage"].includes(link) ? `/collections/${link.toLowerCase().replaceAll(" ", "-")}` : link === "Blogs" ? "/blogs" : link === "About" ? "/pages/about-us" : link === "Contact" ? "/pages/contact" : `/pages/${link.toLowerCase().replaceAll(" ", "-")}`}>{link}</a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal delay={0.4}>
            <div className="footer__label">CONTACT</div>
            <p style={{ fontSize: 14.5, color: "rgb(0 0 0 / .6)" }}>
              1450 Market Street, Suite 600
              <br />
              San Francisco, CA 94103
              <br />
              United States
            </p>
            <a href="/pages/contact" className="btn btn-dark" style={{ marginTop: 18 }}>
              <span className="dot" />
              <span className="btn-text">Get in Touch</span>
            </a>
            <div className="footer__brand">CHARMIQUE</div>
          </Reveal>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Sky Theme — Home page demo. All rights reserved.</span>
          <div className="footer__pay">
            {["VISA", "MASTERCARD", "AMEX", "PAYPAL", "SHOP PAY", "APPLE PAY"].map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
