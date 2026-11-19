
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import Logo from "../../common/Logo/Logo";
import { checkoutData } from "../../data/Data";

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

  const shipping = checkoutData.shipping.price;
  const total = subtotal + shipping;

  // FORM STATES
  const [email, setEmail] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [discountMessage, setDiscountMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [sameBilling, setSameBilling] = useState(true);

  // MULTIPLE SHIPPING ADDRESSES
  const [multipleAddresses, setMultipleAddresses] = useState(
    location.state?.multipleAddresses ?? false
  );

  const [productAddresses, setProductAddresses] = useState({});
  const [additionalAddresses, setAdditionalAddresses] = useState([]);

  const [shippingAddress, setShippingAddress] = useState({
    ...checkoutData.defaultAddress,
  });

  const [billingAddress, setBillingAddress] = useState({
    ...checkoutData.defaultAddress,
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

  // ENABLE / DISABLE MULTIPLE ADDRESSES
  const toggleMultipleAddresses = () => {
    setMultipleAddresses((prev) => !prev);
  };

  // ASSIGN ADDRESS TO PRODUCT
  const assignProductAddress = (index, addressId) => {
    setProductAddresses((prev) => ({
      ...prev,
      [index]: addressId,
    }));
  };

  // ADD NEW SHIPPING ADDRESS
  const addShippingAddress = () => {
    setAdditionalAddresses((prev) => [
      ...prev,
      {
        id: `address-${Date.now()}`,
        country: "United States",
        firstName: "",
        lastName: "",
        address: "",
        apartment: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
      },
    ]);
  };

  // UPDATE ADDITIONAL ADDRESS
  const updateAdditionalAddress = (id, e) => {
    const { name, value } = e.target;

    setAdditionalAddresses((prev) =>
      prev.map((address) =>
        address.id === id
          ? { ...address, [name]: value }
          : address
      )
    );
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
        {checkoutData.countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
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

    if (multipleAddresses) {
      const unassignedProducts = cartItems.filter(
        (_, index) => {
          const addressId = productAddresses[index] || "main";

          if (addressId === "main") {
            return !shippingAddress.address ||
              !shippingAddress.city ||
              !shippingAddress.zip;
          }

          const address = additionalAddresses.find(
            (item) => item.id === addressId
          );

          return !address ||
            !address.address ||
            !address.city ||
            !address.zip;
        }
      );

      if (unassignedProducts.length > 0) {
        alert(
          "Please complete the shipping addresses for all products."
        );
        return;
      }
    } rt("Checkout information completed!");
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
              <h3>Shipping</h3>

              {!multipleAddresses ? (
                <>
                  {cartItems.map((item, index) => (
                    <div className="shipping-product-card" key={`${item.name}-${index}`}>
                      <img src={item.image} alt={item.name} />

                      <div>
                        <strong>{item.name}</strong>
                        <small>Quantity: {item.quantity}</small>
                      </div>
                    </div>
                  ))}

                  {renderAddressFields(
                    shippingAddress,
                    updateShipping,
                    true
                  )}

                  <button
                    type="button"
                    className="add-address-btn"
                    onClick={() => setMultipleAddresses(true)}
                  >
                    + Add shipping address
                  </button>
                </>
              ) : (
                <div className="multiple-address-container">

                  <p className="multiple-address-description">
                    Add shipping addresses and select where each product
                    should be delivered.
                  </p>

                  {/* PRIMARY SHIPPING ADDRESS */}
                  <div className="additional-address-card">
                    <h4>Primary shipping address</h4>

                    {renderAddressFields(
                      shippingAddress,
                      updateShipping,
                      true
                    )}
                  </div>

                  {/* ADDITIONAL ADDRESSES */}
                  {additionalAddresses.map((address, index) => (
                    <div
                      className="additional-address-card"
                      key={address.id}
                    >
                      <h4>Shipping address {index + 2}</h4>

                      {renderAddressFields(
                        address,
                        (e) => updateAdditionalAddress(address.id, e),
                        true
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    className="add-address-btn"
                    onClick={addShippingAddress}
                  >
                    + Add shipping address
                  </button>

                  {/* ASSIGN PRODUCTS */}
                  <div className="product-address-assignments">
                    <h4>Assign products to addresses</h4>

                    {cartItems.map((item, index) => (
                      <div
                        className="multiple-address-product"
                        key={`${item.name}-${index}`}
                      >
                        <div className="multiple-address-product-info">
                          <strong>{item.name}</strong>
                          <span>Quantity: {item.quantity}</span>
                        </div>

                        <select
                          value={productAddresses[index] || "main"}
                          onChange={(e) =>
                            assignProductAddress(index, e.target.value)
                          }
                        >
                          <option value="main">
                            Primary shipping address
                          </option>

                          {additionalAddresses.map((address, addressIndex) => (
                            <option
                              key={address.id}
                              value={address.id}
                            >
                              Shipping address {addressIndex + 2}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>

                </div>
              )}
            </section>

            {/* PAYMENT */}
            <section className="checkout-section">
              <h3>Payment</h3>

              <p className="checkout-subtitle">
                All transactions are secure and encrypted.
              </p>

              <div className="payment-options">

                {/* CREDIT CARD */}
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
            {checkoutData.policies.map((policy) => (
              <a
                key={policy}
                href={`#${policy.toLowerCase().replaceAll(" ", "-")}`}
              >
                {policy}
              </a>
            ))}
          </footer>

        </div>
      </main>

      {/* RIGHT SIDE - ORDER SUMMARY */}
      <aside className="checkout-summary">
        <div className="checkout-summary-inner">

          {/* PRODUCTS */}
          <div className="checkout-products">
            {cartItems.map((item, index) => (
              <div
                className="checkout-product"
                key={`${item.name}-${index}`}
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
              <span>{checkoutData.shipping.label}</span>
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
