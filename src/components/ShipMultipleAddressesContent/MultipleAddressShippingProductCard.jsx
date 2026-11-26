
import React from "react";
import "./MultipleAddressShippingProductCard.css";

const MultipleAddressShippingProductCard = ({
  cartItems = [],
  addShippingAddress,
  additionalAddresses = [],
  discountCode = "",
  setDiscountCode,
  discountMessage = "",
  applyDiscount,
}) => {
  const MAX_ADDRESSES = 10;

  const canAddAddress =
    additionalAddresses.length < MAX_ADDRESSES - 1;

  const hasRecipients = additionalAddresses.length > 0;

  return (
    <div className="multiple-address-shipping">

      {/* SHIPPING HEADING */}
      <h3 className="multiple-address-shipping-title">
        Shipping
      </h3>

      {/* PRODUCT LIST */}
      <div className="multiple-address-product-list">

        {cartItems.map((item, index) => (
          <div
            className="multiple-address-product-card"
            key={item.id || index}
          >

            {/* PRODUCT IMAGE */}
            <div className="multiple-address-product-image">
              <img
                src={item.image || item.imageUrl}
                alt={item.name || item.title || "Product"}
              />

              {/* QUANTITY BADGE */}
              <span className="multiple-address-product-quantity">
                {item.quantity || 1}
              </span>
            </div>

            {/* PRODUCT NAME */}
            <span className="multiple-address-product-name">
              {item.name || item.title}
            </span>

          </div>
        ))}

      </div>

      {/* ADD SHIPPING ADDRESS BUTTON */}
      <button
        type="button"
        className="multiple-address-add-button"
        onClick={addShippingAddress}
        disabled={!canAddAddress}
      >
        <span className="multiple-address-plus">+</span>
        Add shipping address
      </button>

      {/* ADDRESS LIMIT INFORMATION */}
      <p className="multiple-address-limit">
        You can send to up to 10 shipping addresses.
      </p>

      {/* DISCOUNT SECTION */}
      <div className="multiple-address-discount">

        <h4>Discount code</h4>

        <div className="multiple-address-discount-form">

          <input
            type="text"
            placeholder="Enter recipients prior to applying discount codes."
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            disabled={!hasRecipients}
          />

          <button
            type="button"
            onClick={applyDiscount}
            disabled={!hasRecipients || !discountCode.trim()}
          >
            Apply
          </button>

        </div>

        {/* DISCOUNT MESSAGE */}
        {discountMessage && (
          <p className="multiple-address-discount-message">
            {discountMessage}
          </p>
        )}

      </div>

    </div>
  );
};

export default MultipleAddressShippingProductCard;
