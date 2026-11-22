
import React from "react";
import "./OrderSummary.css";

const OrderSummary = ({
  cartItems,
  getPrice,
  subtotal,
  total,
  shipping,
  discountCode,
  setDiscountCode,
  discountMessage,
  applyDiscount,
}) => {
  return (
    <>

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
                  <img src={item.image} alt={item.name} />
                  <span>{item.quantity}</span>
                </div>

                <div className="checkout-product-info">
                  <h4>{item.name}</h4>
                </div>

                <p>
                  ${(getPrice(item.price) * item.quantity).toFixed(2)}
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
              onChange={(e) => setDiscountCode(e.target.value)}
            />

            <button type="button" onClick={applyDiscount}>
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
              <span>{shipping.label}</span>
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
    </>
  );
};

export default OrderSummary;
