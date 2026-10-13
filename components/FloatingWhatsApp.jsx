"use client";

import { useState } from "react";
import { useStore } from "@/context/StoreContext";
import { WhatsAppFilled } from "./icons";

export default function FloatingWhatsApp() {
  const { openEnquiry } = useStore();
  const [hovered, setHovered] = useState(false);

  const boutiqueWhatsApp = "919876543210";

  const handleClick = () => {
    const defaultMsg = "Hello Charmique Boutique! ✨ I would like to enquire about your women's couture, sarees, and custom stitching.";
    const url = `https://api.whatsapp.com/send?phone=${boutiqueWhatsApp}&text=${encodeURIComponent(defaultMsg)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="floating-whatsapp-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        type="button"
        className="floating-whatsapp-btn"
        onClick={handleClick}
        aria-label="Chat with boutique stylist on WhatsApp"
        title="WhatsApp Boutique Concierge"
      >
        <WhatsAppFilled size={24} />
        <span className="floating-whatsapp-text">WhatsApp Stylist</span>
        <span className="online-status-dot" />
      </button>
    </div>
  );
}
