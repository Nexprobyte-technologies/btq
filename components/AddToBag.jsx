"use client";

import { useState } from "react";
import { useStore } from "@/context/StoreContext";
import { Check, Sparkles } from "./icons";

export default function AddToBag({ slug, size, color, quantity = 1, className = "" }) {
  const { addToCart } = useStore();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    const chosenSize = size || document.getElementById("size")?.value || "M";
    const chosenColor = color || "";

    addToCart(slug, chosenSize, chosenColor, quantity, true);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  }

  return (
    <button
      id="add-to-bag"
      className={`store-add ${added ? "is-added" : ""} ${className}`}
      type="button"
      onClick={handleAdd}
    >
      {added ? (
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <Check size={16} /> Shortlisted
        </span>
      ) : (
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <Sparkles size={16} /> Shortlist Design
        </span>
      )}
    </button>
  );
}
