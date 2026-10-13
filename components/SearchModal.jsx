"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import { img, products, collections } from "@/data/site";
import { Close, Search, ArrowRight } from "./icons";

const popularTags = ["Knit Top", "Sweater", "Saree", "Cardigan", "Lehenga", "Festive", "Co-ords", "Polo"];

export default function SearchModal() {
  const { isSearchOpen, closeSearch, openQuickView } = useStore();
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery("");
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const trimmed = query.trim().toLowerCase();
  const matchedProducts = trimmed
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(trimmed) ||
          (p.badge && p.badge.toLowerCase().includes(trimmed))
      )
    : [];

  const matchedCollections = trimmed
    ? collections.filter((c) => c.label.toLowerCase().includes(trimmed))
    : [];

  return (
    <div className="search-modal-overlay" role="dialog" aria-modal="true">
      <div className="search-modal-scrim" onClick={closeSearch} />
      <div className="search-modal-container">
        {/* Search header / input */}
        <div className="search-modal-header">
          <div className="search-bar-wrap">
            <Search size={20} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search boutique styles, sarees, knits, or collections..."
              className="search-modal-input"
            />
            {query && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setQuery("")}
                aria-label="Clear search"
              >
                <Close size={14} />
              </button>
            )}
          </div>
          <button
            type="button"
            className="search-modal-close"
            onClick={closeSearch}
            aria-label="Close search"
          >
            <Close size={18} />
          </button>
        </div>

        {/* Content body */}
        <div className="search-modal-body">
          {!trimmed ? (
            <div className="search-suggestions">
              <span className="search-section-label">POPULAR SEARCHES</span>
              <div className="popular-tags-list">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="tag-chip"
                    onClick={() => setQuery(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="search-curated-collections">
                <span className="search-section-label">EXPLORE CURATED EDITS</span>
                <div className="curated-pills-row">
                  {collections.slice(0, 6).map((col) => (
                    <Link
                      key={col.slug}
                      href={`/collections/${col.slug}`}
                      onClick={closeSearch}
                      className="collection-pill"
                    >
                      <span>{col.label}</span>
                      <ArrowRight size={12} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="search-results-wrap">
              {matchedProducts.length === 0 && matchedCollections.length === 0 ? (
                <div className="search-empty-state">
                  <p>No results found for &ldquo;<b>{query}</b>&rdquo;</p>
                  <span>Try searching for &quot;knit&quot;, &quot;saree&quot;, &quot;sweater&quot;, or &quot;festive&quot;.</span>
                </div>
              ) : (
                <>
                  {matchedCollections.length > 0 && (
                    <div className="matching-collections-section">
                      <span className="search-section-label">MATCHING COLLECTIONS</span>
                      <div className="collections-chips-row">
                        {matchedCollections.map((col) => (
                          <Link
                            key={col.slug}
                            href={`/collections/${col.slug}`}
                            onClick={closeSearch}
                            className="collection-pill is-matched"
                          >
                            <span>{col.label}</span>
                            <ArrowRight size={12} />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {matchedProducts.length > 0 && (
                    <div className="matching-products-section">
                      <span className="search-section-label">
                        PRODUCTS ({matchedProducts.length})
                      </span>
                      <div className="search-product-grid">
                        {matchedProducts.slice(0, 8).map((p) => (
                          <div key={p.slug} className="search-product-row">
                            <Link
                              href={`/products/${p.slug}`}
                              onClick={closeSearch}
                              className="search-product-thumb"
                            >
                              <img src={img(p.image, 200)} alt={p.title} />
                            </Link>
                            <div className="search-product-info">
                              <Link
                                href={`/products/${p.slug}`}
                                onClick={closeSearch}
                                className="search-product-title"
                              >
                                {p.title}
                              </Link>
                              <div className="search-product-price">
                                <span style={{ color: "#8b6508", fontSize: 12 }}>⚜ Bespoke Atelier Piece</span>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="search-quick-btn"
                              onClick={() => {
                                closeSearch();
                                openQuickView(p);
                              }}
                            >
                              Quick View
                            </button>
                          </div>
                        ))}
                      </div>

                      {matchedProducts.length > 8 && (
                        <div className="search-view-all">
                          <Link
                            href={`/search?q=${encodeURIComponent(query)}`}
                            onClick={closeSearch}
                            className="btn btn-outline"
                          >
                            <span className="btn-text">
                              View all {matchedProducts.length} results ↗
                            </span>
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
