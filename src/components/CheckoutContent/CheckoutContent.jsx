
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import Logo from "../../common/Logo/Logo";
import { checkoutData } from "../../data/Data";

import "./CheckoutContent.css";
import AddressFields from "./AddressFields";
import GiftMessage from "./GiftMessage";
import OrderSummary from "./OrderSummary";
import ContactSection from "./ContactSection";
import DeliverySection from "./DeliverySection";
import PaymentSection from "./PaymentSection";

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
  const [sameBilling, setSameBilling] = useState(false);
  const [emailOffers, setEmailOffers] = useState(false);


  // GIFT MESSAGE STATES
  const [giftMessageEnabled, setGiftMessageEnabled] = useState(false);
  const [giftMessage, setGiftMessage] = useState("");

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

  // UPDATE ADDITIONAL SHIPPING ADDRESS
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

  // REMOVE ADDITIONAL SHIPPING ADDRESS
  const removeShippingAddress = (id) => {
    setAdditionalAddresses((prev) =>
      prev.filter((address) => address.id !== id)
    );

    setProductAddresses((prev) => {
      const updated = {};

      Object.entries(prev).forEach(([index, addressId]) => {
        updated[index] = addressId === id ? "main" : addressId;
      });

      return updated;
    });
  };

  {/* ADDITIONAL ADDRESSES */ }
  {
    additionalAddresses.map((address, index) => (
      <div
        className="additional-address-card"
        key={address.id}
      >
        <div className="address-card-heading">
          <h4>Shipping address {index + 2}</h4>

          <button
            type="button"
            onClick={() => removeShippingAddress(address.id)}
          >
            Remove
          </button>
        </div>

        <AddressFields
          address={address}
          onChange={(e) =>
            updateAdditionalAddress(address.id, e)
          }
          countries={checkoutData.countries}
        />
      </div>
    ))
  }


  // DISCOUNT CODE
  const applyDiscount = () => {
    if (!discountCode.trim()) {
      setDiscountMessage("Please enter a discount code.");
    } else {
      setDiscountMessage("Please enter a valid discount code.");
    }
  };



  // PAYMENT SUBMISSION
  const handlePayment = (e) => {
    e.preventDefault();

    if (!cartItems.length) return;

    if (multipleAddresses) {
      const unassignedProducts = cartItems.filter(
        (_, index) => {
          const addressId = productAddresses[index] || "main";

          if (addressId === "main") {
            return (
              !shippingAddress.address ||
              !shippingAddress.city ||
              !shippingAddress.zip
            );
          }

          const address = additionalAddresses.find(
            (item) => item.id === addressId
          );

          return (
            !address ||
            !address.address ||
            !address.city ||
            !address.zip
          );
        }
      );

      if (unassignedProducts.length > 0) {
        alert("Please complete the shipping addresses for all products.");
        return;
      }
    }

    if (
      !sameBilling &&
      (
        !billingAddress.address ||
        !billingAddress.city ||
        !billingAddress.zip
      )
    ) {
      alert("Please complete your billing address.");
      return;
    }

    alert("Checkout information completed!");
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
            <ContactSection
              email={email}
              setEmail={setEmail}
              emailOffers={emailOffers}
              setEmailOffers={setEmailOffers}
              navigate={navigate}
            />

            {/* GIFT MESSAGE */}
            <GiftMessage
              giftMessageEnabled={giftMessageEnabled}
              setGiftMessageEnabled={setGiftMessageEnabled}
              giftMessage={giftMessage}
              setGiftMessage={setGiftMessage}
            />


            {/* DELIVERY */}
            <DeliverySection
              multipleAddresses={multipleAddresses}
              setMultipleAddresses={setMultipleAddresses}
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


            {/* PAYMENT */}
            <PaymentSection
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              sameBilling={sameBilling}
              setSameBilling={setSameBilling}
              billingAddress={billingAddress}
              updateBilling={updateBilling}
              countries={checkoutData.countries}
            />

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
      <OrderSummary
        cartItems={cartItems}
        getPrice={getPrice}
        subtotal={subtotal}
        total={total}
        shipping={checkoutData.shipping}
        discountCode={discountCode}
        setDiscountCode={setDiscountCode}
        discountMessage={discountMessage}
        applyDiscount={applyDiscount}
      />
    </div>
  );
};

export default CheckoutContent;
