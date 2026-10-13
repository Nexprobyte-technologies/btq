"use client";

import { useState } from "react";
import Link from "next/link";
import { img, slugify } from "@/data/site";
import { useStore } from "@/context/StoreContext";
import { Eye, Heart, HeartFilled, Star } from "./icons";

export default function ProductCard({ product }) {
  const { title, price, compareAt, badge, image, hover, colors = [] } = product;
  const { openQuickView, toggleWishlist, isInWishlist } = useStore();
  const slug = product.slug || slugify(title);

  const [activeColor, setActiveColor] = useState(colors[0]?.name || "");
  const isWishlisted = isInWishlist(slug);

  // Calculate discount percent if compareAt is present
  let discountPercent = null;
  if (compareAt && price) {
    const orig = Number(compareAt.replace(/[^\d.]/g, ""));
    const curr = Number(price.replace(/[^\d.]/g, ""));
    if (orig > curr && curr > 0) {
      discountPercent = Math.round(((orig - curr) / orig) * 100);
    }
  }

  return (
    <article className="p-card">
      <div className="p-card__media">
        <Link href={`/products/${slug}`} className="p-card__img" aria-label={title}>
          <span className="p-card__slide is-main">
            <img src={img(image, 800)} alt={title} loading="lazy" width="800" height="1066" />
          </span>
          <span className="p-card__slide is-second">
            <img src={img(hover || image, 800)} alt="" loading="lazy" width="800" height="1066" />
          </span>
        </Link>

        {/* Top Badges */}
        <div className="p-card__badges">
          {badge && <span className="p-card__badge">{badge}</span>}
        </div>

        {/* Action icons (Wishlist & Quick View) */}
        <div className="p-card__floating-actions">
          <button
            className={`p-card__icon-btn ${isWishlisted ? "is-wishlisted" : ""}`}
            type="button"
            aria-label={isWishlisted ? `Remove ${title} from wishlist` : `Add ${title} to wishlist`}
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(slug);
            }}
          >
            {isWishlisted ? <HeartFilled size={16} /> : <Heart size={16} />}
          </button>

          <button
            className="p-card__icon-btn"
            type="button"
            aria-label={`Quick view ${title}`}
            title="Quick view"
            onClick={(e) => {
              e.preventDefault();
              openQuickView(product);
            }}
          >
            <Eye size={16} />
          </button>
        </div>

        {/* Color swatches bar */}
        {colors.length > 0 && (
          <div className="p-card__swatches">
            <span className="p-card__opt">{activeColor || "Color"}</span>
            <ul role="list">
              {colors.map((c) => (
                <li key={c.name}>
                  <button
                    type="button"
                    className={`swatch-dot ${activeColor === c.name ? "is-active" : ""}`}
                    style={{ "--c": c.color }}
                    title={c.name}
                    aria-label={c.name}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveColor(c.name);
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="p-card__detail">
        <div className="p-card__rating">
          <div className="stars-row">
            <Star size={12} />
            <Star size={12} />
            <Star size={12} />
            <Star size={12} />
            <Star size={12} />
          </div>
          <span className="rating-num">4.9</span>
        </div>

        <Link href={`/products/${slug}`} className="p-card__title">
          {title}
        </Link>

        <div className="p-card__info">
          <div className="p-card__bespoke-meta">
            <span className="p-card__bespoke-tag">⚜ Bespoke Atelier Piece</span>
          </div>
          <button
            className="btn btn-dark p-card__action-btn"
            type="button"
            onClick={() => openQuickView(product)}
            aria-label={`Enquire about ${title}`}
            title="Enquire / Custom Fit"
          >
            <span className="dot" />
            <span className="btn-text">Enquire</span>
          </button>
        </div>
      </div>
    </article>
  );
}
