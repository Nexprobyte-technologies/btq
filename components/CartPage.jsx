"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { products, img } from "@/data/site";
import { PageShell } from "@/components/StorePages";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  useEffect(() => { setCart(JSON.parse(localStorage.getItem("charmique-cart") || "[]")); }, []);
  function remove(index) { const next = cart.filter((_, i) => i !== index); setCart(next); localStorage.setItem("charmique-cart", JSON.stringify(next)); }
  const subtotal = cart.reduce((sum, item) => { const p = products.find((product) => product.slug === item.slug); return sum + (Number(String(p?.price || "0").replace(/[^\d.]/g, "")) || 0); }, 0);
  return <PageShell eyebrow="YOUR SELECTION" title="Shopping bag" intro={cart.length ? `${cart.length} item${cart.length === 1 ? "" : "s"} in your bag.` : "Your bag is currently empty."}>{cart.length ? <div className="cart-lines">{cart.map((item, i) => { const p = products.find((product) => product.slug === item.slug); if (!p) return null; return <article className="cart-line" key={`${item.slug}-${i}`}><img src={img(p.image || p.gallery?.[0], 300)} alt=""/><div><Link href={`/products/${p.slug}`}><strong>{p.title}</strong></Link><p>Size: {item.size}</p><p>{p.price}</p><button onClick={() => remove(i)}>Remove</button></div></article>; })}<div className="cart-total"><strong>Subtotal</strong><strong>${subtotal.toFixed(2)}</strong></div><p>Shipping and taxes calculated at checkout.</p><button className="store-add" onClick={(e) => { e.currentTarget.textContent = "Checkout is not connected yet"; }}>Continue to checkout</button></div> : <Link className="store-text-link" href="/collections/all">Continue shopping ↗</Link>}</PageShell>;
}
