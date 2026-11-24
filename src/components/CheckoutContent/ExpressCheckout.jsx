import "./ExpressCheckout.css";

const ExpressCheckout = ({
  setPaymentMethod,
}) => {
  return (
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
  );
};

export default ExpressCheckout;