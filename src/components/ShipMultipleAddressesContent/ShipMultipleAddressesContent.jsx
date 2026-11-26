
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import Logo from "../../common/Logo/Logo";
import { checkoutData } from "../../data/Data";

import ExpressCheckout from "../CheckoutContent/ExpressCheckout";
import ContactSection from "../CheckoutContent/ContactSection";

import MultipleAddressShippingProductCard from "./MultipleAddressShippingProductCard";
import MultipleAddressOrderSummary from "./MultipleAddressOrderSummary";
import MultipleAddressPayment from "./MultipleAddressPayment";

import "./ShipMultipleAddressesContent.css";

const ShipMultipleAddressesContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // =========================================
  // CART DATA
  // =========================================

  const cartItems = location.state?.cartItems || [];

  // =========================================
  // PRICE CONVERSION
  // =========================================

  const getPrice = (price) => {
    return Number(String(price).replace(/[^0-9.]/g, "")) || 0;
  };

  // =========================================
  // TOTALS
  // =========================================

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + getPrice(item.price) * item.quantity,
    0
  );

  const shipping = checkoutData.shipping.price;
  const total = subtotal + shipping;

  // =========================================
  // EXPRESS CHECKOUT
  // =========================================

  const [paymentMethod, setPaymentMethod] = useState("");

  // =========================================
  // CONTACT STATES
  // =========================================

  const [email, setEmail] = useState(
    location.state?.email || ""
  );

  const [emailOffers, setEmailOffers] = useState(false);

  // =========================================
  // SHIPPING ADDRESS STATES
  // =========================================

  const [shippingAddress, setShippingAddress] = useState(
    location.state?.shippingAddress || {
      ...checkoutData.defaultAddress,
    }
  );

  const [additionalAddresses, setAdditionalAddresses] = useState(
    location.state?.additionalAddresses || []
  );

  const [productAddresses, setProductAddresses] = useState(
    location.state?.productAddresses || {}
  );

  // =========================================
  // BILLING ADDRESS STATES
  // =========================================

  const [billingAddress, setBillingAddress] = useState(
    location.state?.billingAddress || {
      country: "United States",
      firstName: "",
      lastName: "",
      address: "",
      apartment: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
    }
  );

  const [saveInformation, setSaveInformation] = useState(
    location.state?.saveInformation || false
  );

  // UPDATE BILLING ADDRESS
  const updateBilling = (e) => {
    const { name, value } = e.target;

    setBillingAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================================
  // DISCOUNT STATES
  // =========================================

  const [discountCode, setDiscountCode] = useState("");
  const [discountMessage, setDiscountMessage] = useState("");

  // =========================================
  // UPDATE MAIN SHIPPING ADDRESS
  // =========================================

  const updateShipping = (e) => {
    const { name, value } = e.target;

    setShippingAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================================
  // UPDATE ADDITIONAL ADDRESS
  // =========================================

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

  // =========================================
  // ADD SHIPPING ADDRESS
  // =========================================

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

  // =========================================
  // REMOVE SHIPPING ADDRESS
  // =========================================

  const removeShippingAddress = (id) => {
    setAdditionalAddresses((prev) =>
      prev.filter((address) => address.id !== id)
    );

    setProductAddresses((prev) => {
      const updated = {};

      Object.entries(prev).forEach(([index, addressId]) => {
        updated[index] =
          addressId === id ? "main" : addressId;
      });

      return updated;
    });
  };

  // =========================================
  // ASSIGN PRODUCT TO ADDRESS
  // =========================================

  const assignProductAddress = (index, addressId) => {
    setProductAddresses((prev) => ({
      ...prev,
      [index]: addressId,
    }));
  };

  // =========================================
  // DISCOUNT CODE
  // =========================================

  const applyDiscount = () => {
    if (!discountCode.trim()) {
      setDiscountMessage("Please enter a discount code.");
    } else {
      setDiscountMessage("Please enter a valid discount code.");
    }
  };

  // =========================================
  // VALIDATE ADDRESS
  // =========================================

  const isAddressComplete = (address) => {
    return Boolean(
      address?.address?.trim() &&
      address?.city?.trim() &&
      address?.zip?.trim()
    );
  };

  // =========================================
  // CONTINUE TO CHECKOUT
  // =========================================

  const handleContinue = (e) => {
    e.preventDefault();

    if (!cartItems.length) return;

    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    // CHECK EVERY PRODUCT SHIPPING ADDRESS
    const hasInvalidAddress = cartItems.some((_, index) => {
      const addressId = productAddresses[index] || "main";

      if (addressId === "main") {
        return !isAddressComplete(shippingAddress);
      }

      const assignedAddress = additionalAddresses.find(
        (address) => address.id === addressId
      );

      return !isAddressComplete(assignedAddress);
    });

    if (hasInvalidAddress) {
      alert(
        "Please complete the shipping address for every product."
      );
      return;
    }

    // NAVIGATE TO CHECKOUT
    navigate("/checkout", {
      state: {
        ...location.state,

        cartItems,

        // CONTACT
        email,
        emailOffers,

        // PAYMENT
        paymentMethod,

        // SHIPPING
        multipleAddresses: true,
        shippingAddress,
        additionalAddresses,
        productAddresses,

        // BILLING
        billingAddress,
        saveInformation,
      },
    });
  };

  // =========================================
  // EMPTY CART
  // =========================================

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

  // =========================================
  // MAIN COMPONENT
  // =========================================

  return (
    <div className="multi-address-container">

      {/* =====================================
          LEFT SIDE
      ===================================== */}

      <main className="multi-address-main">

        <div className="multi-address-wrapper">

          {/* LOGO */}
          <div className="multi-address-logo">
            <Logo />
          </div>

          {/* EXPRESS CHECKOUT */}
          <ExpressCheckout
            setPaymentMethod={setPaymentMethod}
          />

          {/* CHECKOUT FORM */}
          <form onSubmit={handleContinue}>

            {/* =================================
                CONTACT SECTION
            ================================= */}

            <ContactSection
              email={email}
              setEmail={setEmail}
              emailOffers={emailOffers}
              setEmailOffers={setEmailOffers}
              navigate={navigate}
            />

            {/* =================================
                MULTIPLE ADDRESS PRODUCT CARD
            ================================= */}

            <div className="shipping-product-wrapper">
              <MultipleAddressShippingProductCard
                cartItems={cartItems}
              />
            </div>

            {/* =================================
                MULTIPLE ADDRESS PAYMENT
            ================================= */}

            <MultipleAddressPayment
              billingAddress={billingAddress}
              updateBilling={updateBilling}
              countries={checkoutData.countries}
              saveInformation={saveInformation}
              setSaveInformation={setSaveInformation}
              onNotNow={() => setSaveInformation(false)}
            />

            {/* =================================
                CONTINUE BUTTON
            ================================= */}

            <button
              type="submit"
              className="multi-address-continue"
            >
              Continue to checkout
            </button>

            {/* =================================
                RETURN TO CART
            ================================= */}

            <button
              type="button"
              className="multi-address-back"
              onClick={() => navigate(-1)}
            >
              Return to cart
            </button>

          </form>

          {/* =================================
              FOOTER
          ================================= */}

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

      {/* =====================================
          RIGHT SIDE - ORDER SUMMARY
      ===================================== */}

      <aside className="multi-address-summary">

        <MultipleAddressOrderSummary
          cartItems={cartItems}
          getPrice={getPrice}
          subtotal={subtotal}
          shipping={shipping}
          discountCode={discountCode}
          setDiscountCode={setDiscountCode}
          discountMessage={discountMessage}
          applyDiscount={applyDiscount}
        />

      </aside>

    </div>
  );
};

export default ShipMultipleAddressesContent;
