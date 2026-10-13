"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { products as allProducts } from "@/data/site";

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toast, setToast] = useState(null);

  // Initialize from localStorage on client mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("charmique-cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
      const savedWishlist = localStorage.getItem("charmique-wishlist");
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }
    } catch (e) {
      console.warn("Could not load from localStorage", e);
    }
  }, []);

  const saveCart = (nextCart) => {
    setCart(nextCart);
    try {
      localStorage.setItem("charmique-cart", JSON.stringify(nextCart));
    } catch (e) {
      console.warn("Could not save cart to localStorage", e);
    }
  };

  const saveWishlist = (nextWishlist) => {
    setWishlist(nextWishlist);
    try {
      localStorage.setItem("charmique-wishlist", JSON.stringify(nextWishlist));
    } catch (e) {
      console.warn("Could not save wishlist to localStorage", e);
    }
  };

  const showToast = (message, duration = 3000) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, duration);
  };

  // Add item to shortlisted inquiry bag
  const addToCart = (productOrSlug, size = "M", color = "", quantity = 1, openDrawer = true) => {
    let p = typeof productOrSlug === "string" 
      ? allProducts.find((item) => item.slug === productOrSlug) 
      : productOrSlug;

    const slug = typeof productOrSlug === "string" ? productOrSlug : productOrSlug?.slug;
    const itemTitle = p?.title || "Boutique Creation";
    const itemPrice = "Bespoke Enquiry";
    const itemImage = p?.image || p?.gallery?.[0] || "";
    const chosenColor = color || p?.colors?.[0]?.name || "Default";
    const chosenSize = size || "M";

    const nextCart = [...cart];
    const existingIndex = nextCart.findIndex(
      (item) => item.slug === slug && item.size === chosenSize && item.color === chosenColor
    );

    if (existingIndex > -1) {
      nextCart[existingIndex].quantity = (nextCart[existingIndex].quantity || 1) + quantity;
    } else {
      nextCart.push({
        slug,
        title: itemTitle,
        price: itemPrice,
        image: itemImage,
        size: chosenSize,
        color: chosenColor,
        quantity: quantity || 1,
      });
    }

    saveCart(nextCart);
    showToast(`Added "${itemTitle}" to your enquiry selection`);
    if (openDrawer) {
      setIsCartOpen(true);
    }
  };

  const removeFromCart = (index) => {
    const item = cart[index];
    const nextCart = cart.filter((_, i) => i !== index);
    saveCart(nextCart);
    if (item) {
      showToast(`Removed "${item.title || 'Item'}" from selection`);
    }
  };

  const updateQuantity = (index, newQty) => {
    if (newQty <= 0) {
      removeFromCart(index);
      return;
    }
    const nextCart = [...cart];
    if (nextCart[index]) {
      nextCart[index].quantity = newQty;
      saveCart(nextCart);
    }
  };

  const clearCart = () => {
    saveCart([]);
  };

  const toggleWishlist = (slug) => {
    const exists = wishlist.includes(slug);
    let next;
    if (exists) {
      next = wishlist.filter((s) => s !== slug);
      showToast("Removed from wishlist");
    } else {
      next = [...wishlist, slug];
      showToast("Saved to your boutique wishlist ❤️");
    }
    saveWishlist(next);
  };

  const isInWishlist = (slug) => wishlist.includes(slug);

  const openEnquiry = (product = null) => {
    setEnquiryProduct(product);
    setIsEnquiryOpen(true);
  };

  const closeEnquiry = () => {
    setIsEnquiryOpen(false);
    setEnquiryProduct(null);
  };

  // Send all shortlisted items directly to WhatsApp
  const sendAllEnquiriesToWhatsApp = () => {
    if (cart.length === 0) {
      openEnquiry(null);
      return;
    }
    const boutiquePhone = "919876543210";
    let listText = cart
      .map(
        (item, i) =>
          `${i + 1}. *${item.title}*\n   Size: ${item.size} | Color: ${item.color} | Qty: ${item.quantity || 1}`
      )
      .join("\n\n");

    const message = `Hello Charmique Boutique! ✨\n\nI have selected the following designs from your boutique website for custom tailoring and price inquiries:\n\n${listText}\n\nPlease share fabric availability and dispatch timelines.`;

    const url = `https://api.whatsapp.com/send?phone=${boutiquePhone}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <StoreContext.Provider
      value={{
        cart,
        totalItems,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        isSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        isEnquiryOpen,
        enquiryProduct,
        openEnquiry,
        closeEnquiry,
        sendAllEnquiriesToWhatsApp,
        quickViewProduct,
        openQuickView: (product) => setQuickViewProduct(product),
        closeQuickView: () => setQuickViewProduct(null),
        toast,
        showToast,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
