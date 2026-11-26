
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import Logo from "../../common/Logo/Logo";
import { checkoutData } from "../../data/Data";

import DeliverySection from "../CheckoutContent/DeliverySection";
import "./ShipMultipleAddressesContent.css";
import MultipleAddressOrderSummary from "./MultipleAddressOrderSummary";

const ShipMultipleAddressesContent = () => {
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
    (total, item) => total + getPrice(item.price) * item.quantity,
    0
  );

  const shipping = checkoutData.shipping.price;
  const total = subtotal + shipping;

  // ADDRESS STATES
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

  // DISCOUNT STATES
  const [discountCode, setDiscountCode] = useState("");
  const [discountMessage, setDiscountMessage] = useState("");

  // UPDATE MAIN SHIPPING ADDRESS
  const updateShipping = (e) => {
    const { name, value } = e.target;

    setShippingAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
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

  // ADD SHIPPING ADDRESS
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

  // REMOVE SHIPPING ADDRESS
  const removeShippingAddress = (id) => {
    setAdditionalAddresses((prev) =>
      prev.filter((address) => address.id !== id)
    );

    // Reassign products from removed address to main address
    setProductAddresses((prev) => {
      const updated = {};

      Object.entries(prev).forEach(([index, addressId]) => {
        updated[index] =
          addressId === id ? "main" : addressId;
      });

      return updated;
    });
  };

  // ASSIGN PRODUCT TO ADDRESS
  const assignProductAddress = (index, addressId) => {
    setProductAddresses((prev) => ({
      ...prev,
      [index]: addressId,
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

  // VALIDATE ADDRESS
  const isAddressComplete = (address) => {
    return Boolean(
      address?.address?.trim() &&
      address?.city?.trim() &&
      address?.zip?.trim()
    );
  };

  // CONTINUE TO CHECKOUT
  const handleContinue = (e) => {
    e.preventDefault();

    if (!cartItems.length) return;

    // Check every product assignment
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

    // Continue to existing checkout page
    navigate("/checkout", {
      state: {
        ...location.state,
        cartItems,
        multipleAddresses: true,
        shippingAddress,
        additionalAddresses,
        productAddresses,
      },
    });
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
    <div className="multi-address-container">

      {/* LEFT SIDE */}
      <main className="multi-address-main">

        <div className="multi-address-wrapper">

          {/* LOGO */}
          <div className="multi-address-logo">
            <Logo />
          </div>

          {/* PAGE HEADING */}
          <div className="multi-address-heading">
            <h2>Ship to multiple addresses</h2>

            <p>
              Send your products to different locations.
              Assign each product to its preferred shipping address.
            </p>
          </div>

          <form onSubmit={handleContinue}>

            {/* DELIVERY SECTION */}
            <DeliverySection
              multipleAddresses={true}
              setMultipleAddresses={() => { }}
              shippingAddress={shippingAddress}
              updateShipping={updateShipping}
              additionalAddresses={additionalAddresses}
              addShippingAddress={addShippingAddress}
              removeShippingAddress={removeShippingAddress}
              updateAdditionalAddress={updateAdditionalAddress}
              productAddresses={productAddresses}
              assignProductAddress={assignProductAddress}
              cartItems={cartItems}
              countries={checkoutData.countries}
            />

            {/* ADDRESS SUMMARY */}
            <div className="multi-address-info">
              <h4>Shipping information</h4>

              <p>
                Each product can be shipped to a different
                address. Make sure every product is assigned
                to a complete shipping address.
              </p>

              <div className="multi-address-count">
                <span>Shipping addresses</span>

                <strong>
                  {additionalAddresses.length + 1}
                </strong>
              </div>

              <div className="multi-address-count">
                <span>Products in your order</span>

                <strong>{cartItems.length}</strong>
              </div>
            </div>

            {/* CONTINUE BUTTON */}
            <button
              type="submit"
              className="multi-address-continue"
            >
              Continue to checkout
            </button>

            <button
              type="button"
              className="multi-address-back"
              onClick={() => navigate(-1)}
            >
              Return to cart
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

      {/* RIGHT SIDE - MULTIPLE ADDRESS ORDER SUMMARY */}
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
