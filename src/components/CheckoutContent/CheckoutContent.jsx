
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import Logo from "../../common/Logo/Logo";

import "./CheckoutContent.css";

const CheckoutContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // CART DATA
  const cartItems = location.state?.cartItems || [];

  // PRICE CONVERSION
  const getPrice = (price) => {
    return Number(String(price).replace(/[^0-9.]/g, "")) || 0;
  };

  // TOTALS
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + getPrice(item.price) * item.quantity,
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;

  // FORM STATES
  const [email, setEmail] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [discountMessage, setDiscountMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [sameBilling, setSameBilling] = useState(true);

  const [shippingAddress, setShippingAddress] = useState({
    country: "United States",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const [billingAddress, setBillingAddress] = useState({
    country: "United States",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
  });

  // UPDATE SHIPPING ADDRESS
  const updateShipping = (e) => {
    const { name, value } = e.target;

    setShippingAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // UPDATE BILLING ADDRESS
  const updateBilling = (e) => {
    const { name, value } = e.target;

    setBillingAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // DISCOUNT CODE
  const applyDiscount = () => {
    if (!discountCode.trim()) {
      setDiscountMessage("Please enter a discount code.");
    } else {
      setDiscountMessage("Please enter a valid discount code.");
    }
  };

  // ADDRESS FIELDS
  const renderAddressFields = (
    address,
    update,
    showPhone = false
  ) => (
    <>
      <select
        name="country"
        value={address.country}
        onChange={update}
        required
      >
        <option value="United States">United States</option>
        <option value="Philippines">Philippines</option>
        <option value="Canada">Canada</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Australia">Australia</option>
      </select>

      <div className="checkout-input-row">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={address.firstName}
          onChange={update}
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={address.lastName}
          onChange={update}
          required
        />
      </div>

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={address.address}
        onChange={update}
        required
      />

      <input
        type="text"
        name="apartment"
        placeholder="Apartment, suite, etc. (optional)"
        value={address.apartment}
        onChange={update}
      />

      <div className="checkout-input-row checkout-location-row">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={address.city}
          onChange={update}
          required
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={address.state}
          onChange={update}
          required
        />

        <input
          type="text"
          name="zip"
          placeholder="ZIP code"
          value={address.zip}
          onChange={update}
          required
        />
      </div>

      {showPhone && (
        <input
          type="tel"
          name="phone"
          placeholder="Phone (optional)"
          value={address.phone}
          onChange={update}
        />
      )}
    </>
  );

  // PAYMENT SUBMISSION
  const handlePayment = (e) => {
    e.preventDefault();

    if (!cartItems.length) return;

    alert(
      "Checkout form completed. Connect your payment provider to accept payments."
    );
  };

  // EMPTY CART
  if (!cartItems.length) {
    return (
      <div className="checkout-empty">
        <Logo />

        <h2>Your cart is empty</h2>

        <p>
          Looks like you haven't added anything to your cart yet.
        </p>

        <button onClick={() => navigate("/shop")}>
          Continue shopping
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-container">

      {/* LEFT SIDE */}

      <main className="checkout-main">

        <div className="checkout-form-wrapper">

          {/* LOGO */}

          <div className="checkout-logo">
            <Logo />
          </div>

          {/* EXPRESS CHECKOUT */}

          <div className="express-checkout">

            <p className="express-title">
              Express checkout
            </p>

            <div className="express-buttons">

              <button
                type="button"
                className="shop-pay"
                onClick={() => setPaymentMethod("shop")}
              >
                shop
              </button>

              <button
                type="button"
                className="paypal"
                onClick={() => setPaymentMethod("paypal")}
              >
                PayPal
              </button>

              <button
                type="button"
                className="google-pay"
                onClick={() => setPaymentMethod("google")}
              >
                G Pay
              </button>

            </div>

            <div className="checkout-or">
              <span>OR</span>
            </div>

          </div>

          <form onSubmit={handlePayment}>

            {/* CONTACT */}

            <section className="checkout-section">

              <div className="checkout-section-heading">

                <h3>Contact</h3>

                <button
                  type="button"
                  className="signin-link"
                  onClick={() => navigate("/signin")}
                >
                  Sign in
                </button>

              </div>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label className="checkout-checkbox">
                <input type="checkbox" />
                <span>Email me news and offers</span>
              </label>

            </section>

            {/* DELIVERY */}

            <section className="checkout-section">

              <h3>Delivery</h3>

              {renderAddressFields(
                shippingAddress,
                updateShipping,
                true
              )}

              <div className="shipping-method">
                <h4>Shipping method</h4>

                <p>
                  Enter your shipping address to view available
                  shipping methods.
                </p>
              </div>

            </section>

            {/* PAYMENT */}

            <section className="checkout-section">

              <h3>Payment</h3>

              <p className="checkout-subtitle">
                All transactions are secure and encrypted.
              </p>

              <div className="payment-options">

                {/* CARD */}

                <div
                  className={`payment-option ${paymentMethod === "card" ? "selected" : ""
                    }`}
                >

                  <label className="payment-option-heading">

                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                    />

                    <span>Credit card</span>

                    <div className="card-brands">
                      <span>VISA</span>
                      <span>MC</span>
                      <span>AMEX</span>
                    </div>

                  </label>

                  {paymentMethod === "card" && (

                    <div className="card-fields">

                      <input
                        type="text"
                        placeholder="Card number"
                        autoComplete="cc-number"
                        required
                      />

                      <div className="checkout-input-row">

                        <input
                          type="text"
                          placeholder="Expiration date (MM / YY)"
                          autoComplete="cc-exp"
                          required
                        />

                        <input
                          type="text"
                          placeholder="Security code"
                          autoComplete="cc-csc"
                          required
                        />

                      </div>

                      <input
                        type="text"
                        placeholder="Name on card"
                        autoComplete="cc-name"
                        required
                      />

                    </div>

                  )}

                </div>

                {/* SHOP PAY */}

                <label className="payment-option">

                  <div className="payment-option-heading">

                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "shop"}
                      onChange={() => setPaymentMethod("shop")}
                    />

                    <span>Shop Pay</span>

                    <small>shop</small>

                  </div>

                </label>

                {/* PAYPAL */}

                <label className="payment-option">

                  <div className="payment-option-heading">

                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "paypal"}
                      onChange={() => setPaymentMethod("paypal")}
                    />

                    <span>PayPal</span>

                    <small>PayPal</small>

                  </div>

                </label>

                {/* GOOGLE PAY */}

                <label className="payment-option">

                  <div className="payment-option-heading">

                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "google"}
                      onChange={() => setPaymentMethod("google")}
                    />

                    <span>Google Pay</span>

                    <small>G Pay</small>

                  </div>

                </label>

              </div>

              {/* BILLING ADDRESS */}

              <div className="billing-section">

                <h3>Billing address</h3>

                <label className="billing-choice">

                  <input
                    type="radio"
                    name="billing"
                    checked={sameBilling}
                    onChange={() => setSameBilling(true)}
                  />

                  <span>Same as shipping address</span>

                </label>

                <label className="billing-choice">

                  <input
                    type="radio"
                    name="billing"
                    checked={!sameBilling}
                    onChange={() => setSameBilling(false)}
                  />

                  <span>Use a different billing address</span>

                </label>

                {!sameBilling && (
                  <div className="billing-fields">

                    {renderAddressFields(
                      billingAddress,
                      updateBilling
                    )}

                  </div>
                )}

              </div>

            </section>

            {/* PAY NOW */}

            <button
              type="submit"
              className="checkout-pay-btn"
            >
              Pay now
            </button>

          </form>

          {/* FOOTER */}

          <footer className="checkout-footer">

            <a href="#refund">Refund policy</a>
            <a href="#shipping">Shipping policy</a>
            <a href="#privacy">Privacy policy</a>
            <a href="#terms">Terms of service</a>

          </footer>

        </div>

      </main>

      {/* RIGHT SIDE - ORDER SUMMARY */}

      <aside className="checkout-summary">

        <div className="checkout-summary-inner">

          {/* PRODUCTS */}

          <div className="checkout-products">

            {cartItems.map((item) => (

              <div
                className="checkout-product"
                key={item.name}
              >

                <div className="checkout-product-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <span>{item.quantity}</span>

                </div>

                <div className="checkout-product-info">
                  <h4>{item.name}</h4>
                </div>

                <p>
                  $
                  {(
                    getPrice(item.price) * item.quantity
                  ).toFixed(2)}
                </p>

              </div>

            ))}

          </div>

          {/* DISCOUNT */}

          <div className="checkout-discount">

            <input
              type="text"
              placeholder="Discount code or gift card"
              value={discountCode}
              onChange={(e) => {
                setDiscountCode(e.target.value);
                setDiscountMessage("");
              }}
            />

            <button
              type="button"
              onClick={applyDiscount}
            >
              Apply
            </button>

          </div>

          {discountMessage && (
            <p className="checkout-discount-message">
              {discountMessage}
            </p>
          )}

          {/* TOTALS */}

          <div className="checkout-totals">

            <div>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div>
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="checkout-total">

              <span>Total</span>

              <div>
                <small>USD</small>
                <strong>${total.toFixed(2)}</strong>
              </div>

            </div>

          </div>

        </div>

      </aside>

    </div>
  );
};

export default CheckoutContent;
