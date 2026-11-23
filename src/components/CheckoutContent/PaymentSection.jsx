
import AddressFields from "./AddressFields";
import "./PaymentSection.css"

const PaymentSection = ({
  paymentMethod,
  setPaymentMethod,
  sameBilling,
  setSameBilling,
  billingAddress,
  updateBilling,
  countries,
}) => {
  return (
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
              <span className="visa">VISA</span>
              <span className="mastercard">●●</span>
              <span className="amex">AMEX</span>
              <span className="more-cards">+5</span>
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

              {/* BILLING ADDRESS */}
              <label className="same-billing-checkbox">
                <input
                  type="checkbox"
                  checked={sameBilling}
                  onChange={(e) =>
                    setSameBilling(e.target.checked)
                  }
                />

                <span>
                  Use shipping address as billing address
                </span>
              </label>

              {!sameBilling && (
                <div className="billing-fields">
                  <AddressFields
                    address={billingAddress}
                    onChange={updateBilling}
                    countries={countries}
                  />
                </div>
              )}
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
              onChange={() => {
                setPaymentMethod("shop");
                setSameBilling(false);
              }}
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
    </section>
  );
};

export default PaymentSection;
