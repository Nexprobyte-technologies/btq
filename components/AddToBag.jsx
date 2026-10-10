"use client";

export default function AddToBag({ slug }) {
  function add() {
    const size = document.getElementById("size")?.value;
    if (!size) { document.getElementById("size")?.focus(); return; }
    const cart = JSON.parse(localStorage.getItem("charmique-cart") || "[]");
    cart.push({ slug, size });
    localStorage.setItem("charmique-cart", JSON.stringify(cart));
    document.getElementById("add-to-bag").textContent = "Added to bag ✓";
  }
  return <button id="add-to-bag" className="store-add" type="button" onClick={add}>Add to bag</button>;
}
