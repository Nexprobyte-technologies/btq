"use client";

import { useState } from "react";
import { useStore } from "@/context/StoreContext";
import { img } from "@/data/site";
import { Check, Close, Sparkles, WhatsAppFilled } from "./icons";

export default function EnquiryModal() {
  const { enquiryProduct, isEnquiryOpen, closeEnquiry } = useStore();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    inquiryType: "Custom Stitching & Fit",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isEnquiryOpen) return null;

  const product = enquiryProduct;
  const boutiquePhone = "+919876543210"; // Boutique WhatsApp contact number

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSend = () => {
    const msg = `Hello Charmique Boutique! ✨\n\nI would like to inquire about: *${productName}*\n\n👤 Name: ${formData.name || "Customer"}\n📞 Phone: ${formData.phone || "Not specified"}\n📍 City: ${formData.city || "Not specified"}\n🧵 Requirement: ${formData.inquiryType}\n💬 Notes: ${formData.message || "Please share fabric details, pricing, and availability."}`;

    const url = `https://api.whatsapp.com/send?phone=${boutiquePhone.replace(/\+/g, "")}&text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    closeEnquiry();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      closeEnquiry();
    }, 4000);
  };

  return (
    <div className="enquiry-modal-overlay" role="dialog" aria-modal="true">
      <div className="enquiry-modal-scrim" onClick={closeEnquiry} />
      <div className="enquiry-modal-box">
        <button
          type="button"
          className="enquiry-modal-close"
          onClick={closeEnquiry}
          aria-label="Close Enquiry Modal"
        >
          <Close size={18} />
        </button>

        <div className="enquiry-modal-header">
          <div className="enquiry-tag">
            <Sparkles size={14} />
            <span>BOUTIQUE ATELIER CONCIERGE</span>
          </div>
          <h3>Product Enquiry & Styling Consultation</h3>
          <p>
            Connect directly with our master stylists for custom sizing, bridal fittings, fabric
            details, and live video shopping.
          </p>
        </div>

        {product && (
          <div className="enquiry-product-preview">
            <img src={img(product.image || product.gallery?.[0], 180)} alt={product.title} />
            <div className="enquiry-product-info">
              <span className="enquiry-code">SKU: CHQ-{product.slug?.toUpperCase()?.slice(0, 8) || "COUTURE"}</span>
              <h4>{product.title}</h4>
              <span className="enquiry-price" style={{ color: "#8b6508", fontSize: 13, fontWeight: 600 }}>
                ⚜ Haute Couture · Price on Enquiry
              </span>
            </div>
          </div>
        )}

        {submitted ? (
          <div className="enquiry-success-view">
            <div className="success-icon">
              <Check size={32} />
            </div>
            <h4>Enquiry Received!</h4>
            <p>
              Thank you, <b>{formData.name || "valued client"}</b>. Our boutique stylist has received
              your request and will get in touch on WhatsApp at <b>{formData.phone}</b> within 2 hours.
            </p>
            <button type="button" className="btn btn-dark" onClick={closeEnquiry} style={{ marginTop: 16 }}>
              <span className="dot" />
              <span className="btn-text">Back to Collections</span>
            </button>
          </div>
        ) : (
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="enquiry-form-row">
              <div className="enquiry-field">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Ananya Sundaram"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="enquiry-field">
                <label>WhatsApp / Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="enquiry-form-row">
              <div className="enquiry-field">
                <label>Your City / Location</label>
                <input
                  type="text"
                  name="city"
                  placeholder="e.g. Chennai, Bangalore, Hyderabad, USA"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="enquiry-field">
                <label>Enquiry Type</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                >
                  <option value="Custom Stitching & Fit">Custom Stitching & Sizing</option>
                  <option value="Price & Delivery Timeline">Price & Delivery Timeline</option>
                  <option value="Bridal Trousseau Consultation">Bridal Trousseau Consultation</option>
                  <option value="Video Call Live Viewing">Book Video Shopping Call</option>
                  <option value="Color & Fabric Customization">Color / Fabric Customization</option>
                </select>
              </div>
            </div>

            <div className="enquiry-field">
              <label>Message / Measurements / Special Requests</label>
              <textarea
                name="message"
                rows="3"
                placeholder="Share any special preferences like sleeve length, neckline, wedding date, or fabric questions..."
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            <div className="enquiry-actions">
              <button
                type="button"
                className="btn-whatsapp-direct"
                onClick={handleWhatsAppSend}
              >
                <WhatsAppFilled size={20} />
                <span>Chat Instantly on WhatsApp</span>
              </button>

              <button type="submit" className="btn btn-dark btn-submit-enquiry">
                <span className="dot" />
                <span className="btn-text">Submit Enquiry</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
