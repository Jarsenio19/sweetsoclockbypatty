
import React from "react";
import {
  IoPricetagOutline,
  IoCarOutline,
  IoPricetag,
} from "react-icons/io5";

import "./MultipleAddressOrderSummary.css";

const MultipleAddressOrderSummary = ({
  subtotal,
  discountCode,
  setDiscountCode,
  discountMessage,
  applyDiscount,
}) => {
  return (
    <aside className="multi-order-summary">

      <div className="multi-order-summary-inner">

        {/* PRODUCTS */}
        <div className="multi-order-fees">

          <div className="multi-order-fee">

            <div className="multi-order-fee-icon">
              <IoPricetagOutline />
              <span className="multi-order-badge">1</span>
            </div>

            <div className="multi-order-fee-info">
              <strong>Products</strong>
              <span>- To be calculated</span>
            </div>

            <small>FREE</small>

          </div>

          {/* SHIPPING */}
          <div className="multi-order-fee">

            <div className="multi-order-fee-icon">
              <IoCarOutline />
              <span className="multi-order-badge">1</span>
            </div>

            <div className="multi-order-fee-info">
              <strong>Shipping</strong>
              <span>- To be calculated</span>
            </div>

            <small>FREE</small>

          </div>

          {/* TAX */}
          <div className="multi-order-fee">

            <div className="multi-order-fee-icon">
              <IoPricetag />
              <span className="multi-order-badge">1</span>
            </div>

            <div className="multi-order-fee-info">
              <strong>Tax</strong>
              <span>- To be calculated</span>
            </div>

            <small>FREE</small>

          </div>

        </div>

        {/* GIFT CARD */}
        <div className="multi-order-discount">

          <input
            type="text"
            placeholder="Gift card"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />

          <button
            type="button"
            onClick={applyDiscount}
          >
            Apply
          </button>

        </div>

        {discountMessage && (
          <p className="multi-order-discount-message">
            {discountMessage}
          </p>
        )}

        {/* TOTAL */}
        <div className="multi-order-total">

          <strong>Total</strong>

          <div>
            <small>USD</small>
            <span>${subtotal.toFixed(2)}</span>
          </div>

        </div>

      </div>

    </aside>
  );
};

export default MultipleAddressOrderSummary;
