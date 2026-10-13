"use client";

import { useState } from "react";
import { useStore } from "@/context/StoreContext";
import { img } from "@/data/site";
import { Check, Close, Shield, Truck } from "./icons";

export default function CheckoutModal() {
  const { isCheckoutOpen, closeCheckout, cart, subtotal, clearCart } = useStore();
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirmation
  const [formData, setFormData] = useState({
    firstName: "Priya",
    lastName: "Sharma",
    email: "priya.sharma@example.com",
    phone: "+91 98765 43210",
    address: "42 Heritage Avenue, Green Park",
    city: "New Delhi",
    postalCode: "110016",
    shippingMethod: "standard",
    paymentMethod: "card",
  });
  const [orderNumber, setOrderNumber] = useState("");

  if (!isCheckoutOpen) return null;

  const shippingCost = subtotal >= 100 || formData.shippingMethod === "standard" ? 0 : 15;
  const estimatedTax = Number((subtotal * 0.05).toFixed(2));
  const orderTotal = (subtotal + shippingCost + estimatedTax).toFixed(2);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const generatedOrderNum = "CHQ-" + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(generatedOrderNum);
    setStep(3);
    clearCart();
  };

  return (
    <div className="checkout-overlay" role="dialog" aria-modal="true">
      <div className="checkout-scrim" onClick={step === 3 ? closeCheckout : undefined} />
      <div className="checkout-modal">
        <div className="checkout-header">
          <div className="brand-logo">
            <span>CHARMIQUE</span>
            <span className="checkout-badge">SECURE CHECKOUT</span>
          </div>
          <button
            type="button"
            className="checkout-close"
            onClick={closeCheckout}
            aria-label="Close checkout"
          >
            <Close size={18} />
          </button>
        </div>

        {/* Steps indicator */}
        {step < 3 && (
          <div className="checkout-steps-bar">
            <div className={`step-dot ${step >= 1 ? "is-active" : ""}`}>
              <span>1</span>
              <label>Shipping</label>
            </div>
            <div className="step-line" />
            <div className={`step-dot ${step >= 2 ? "is-active" : ""}`}>
              <span>2</span>
              <label>Payment</label>
            </div>
          </div>
        )}

        <div className="checkout-content">
          {step === 1 && (
            <form
              className="checkout-form"
              onSubmit={(e) => {
                e.preventDefault();
                setStep(2);
              }}
            >
              <h4 className="checkout-section-title">Shipping & Contact Details</h4>

              <div className="form-row form-row-2">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row form-row-2">
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Street Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-row form-row-2">
                <div className="form-group">
                  <label>City / State</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Postal / PIN Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <h4 className="checkout-section-title" style={{ marginTop: 24 }}>
                Delivery Method
              </h4>
              <div className="shipping-options">
                <label
                  className={`shipping-option ${
                    formData.shippingMethod === "standard" ? "is-selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="shippingMethod"
                    value="standard"
                    checked={formData.shippingMethod === "standard"}
                    onChange={handleInputChange}
                  />
                  <div className="opt-desc">
                    <strong>Standard Boutique Delivery (3–5 Business Days)</strong>
                    <span>Complimentary for orders over $100</span>
                  </div>
                  <b>FREE</b>
                </label>

                <label
                  className={`shipping-option ${
                    formData.shippingMethod === "express" ? "is-selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="shippingMethod"
                    value="express"
                    checked={formData.shippingMethod === "express"}
                    onChange={handleInputChange}
                  />
                  <div className="opt-desc">
                    <strong>Express Priority Air Courier (1–2 Business Days)</strong>
                    <span>Fast-tracked white-glove packaging</span>
                  </div>
                  <b>$15.00</b>
                </label>
              </div>

              <button type="submit" className="btn btn-dark checkout-next-btn">
                <span className="dot" />
                <span className="btn-text">Continue to Payment</span>
              </button>
            </form>
          )}

          {step === 2 && (
            <form className="checkout-form" onSubmit={handlePlaceOrder}>
              <h4 className="checkout-section-title">Select Payment Method</h4>

              <div className="payment-options">
                <label
                  className={`payment-option ${
                    formData.paymentMethod === "card" ? "is-selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={handleInputChange}
                  />
                  <div className="payment-label">
                    <strong>Credit or Debit Card</strong>
                    <span>Visa, MasterCard, Amex, RuPay</span>
                  </div>
                </label>

                {formData.paymentMethod === "card" && (
                  <div className="card-input-box">
                    <div className="form-group">
                      <label>Card Number</label>
                      <input type="text" placeholder="•••• •••• •••• 4242" defaultValue="4242 •••• •••• 8890" />
                    </div>
                    <div className="form-row form-row-2">
                      <div className="form-group">
                        <label>Expires</label>
                        <input type="text" placeholder="MM/YY" defaultValue="08/28" />
                      </div>
                      <div className="form-group">
                        <label>CVV / CVC</label>
                        <input type="password" placeholder="•••" defaultValue="888" maxLength="4" />
                      </div>
                    </div>
                  </div>
                )}

                <label
                  className={`payment-option ${
                    formData.paymentMethod === "upi" ? "is-selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === "upi"}
                    onChange={handleInputChange}
                  />
                  <div className="payment-label">
                    <strong>Instant UPI / QR Code</strong>
                    <span>Google Pay, PhonePe, Paytm, BHIM</span>
                  </div>
                </label>

                <label
                  className={`payment-option ${
                    formData.paymentMethod === "cod" ? "is-selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={handleInputChange}
                  />
                  <div className="payment-label">
                    <strong>Cash on Delivery (COD)</strong>
                    <span>Pay in cash or card upon delivery</span>
                  </div>
                </label>
              </div>

              <div className="security-guarantee">
                <Shield size={16} />
                <span>256-bit SSL encrypted checkout. Your information is 100% private.</span>
              </div>

              <div className="step-actions-row">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setStep(1)}
                >
                  <span className="btn-text">Back</span>
                </button>
                <button type="submit" className="btn btn-dark btn-confirm-order">
                  <span className="dot" />
                  <span className="btn-text">Place Order — ${orderTotal}</span>
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="order-confirmed-view">
              <div className="confirmed-badge">
                <Check size={32} />
              </div>
              <h3>Order Placed Successfully!</h3>
              <p className="order-tag">Order Reference: <b>{orderNumber}</b></p>
              <p className="order-message">
                Thank you for your order with <b>Charmique Boutique</b>! A confirmation email and tracking link have been dispatched to <b>{formData.email}</b>.
              </p>

              <div className="order-summary-box">
                <div className="summary-line">
                  <span>Shipping to:</span>
                  <b>{formData.firstName} {formData.lastName}, {formData.city}</b>
                </div>
                <div className="summary-line">
                  <span>Estimated Delivery:</span>
                  <b>3–5 Business Days</b>
                </div>
                <div className="summary-line">
                  <span>Payment Status:</span>
                  <span className="status-paid">Paid & Verified (${orderTotal})</span>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-dark"
                onClick={closeCheckout}
                style={{ marginTop: 24 }}
              >
                <span className="dot" />
                <span className="btn-text">Continue Shopping</span>
              </button>
            </div>
          )}

          {/* Sidebar order summary */}
          {step < 3 && (
            <aside className="checkout-summary-sidebar">
              <h5 className="summary-title">Order Summary ({cart.length})</h5>
              <div className="summary-items-list">
                {cart.map((item, i) => (
                  <div key={i} className="summary-item-row">
                    <img src={img(item.image, 140)} alt={item.title} />
                    <div className="summary-item-text">
                      <strong>{item.title}</strong>
                      <span>Qty: {item.quantity || 1} · {item.size}</span>
                      <span style={{ color: "#8b6508", fontSize: 12 }}>⚜ Price on Enquiry</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="summary-calc">
                <div className="calc-row">
                  <span>Concierge Service</span>
                  <span style={{ color: "#25D366", fontWeight: 600 }}>COMPLIMENTARY</span>
                </div>
                <div className="calc-row">
                  <span>Custom Sizing &amp; Fitting</span>
                  <span style={{ color: "#8b6508", fontWeight: 600 }}>INCLUDED</span>
                </div>
                <div className="calc-row total-row">
                  <b>Quotation Status</b>
                  <b style={{ color: "#8b6508" }}>Direct Stylist Quote</b>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
