
import "./MultipleAddressPayment.css";

const MultipleAddressPayment = ({
  billingAddress,
  updateBilling,
  countries = [],
  saveInformation = false,
  setSaveInformation,
  onNotNow,
  states = [],
}) => {
  return (
    <section className="multiple-address-payment">

      {/* HEADER */}
      <h3>Payment</h3>

      <p className="multiple-payment-subtitle">
        All transactions are secure and encrypted.
      </p>

      {/* FREE PAYMENT NOTICE */}
      <div className="free-payment-notice">
        Your order is free. No payment is required.
      </div>

      {/* BILLING ADDRESS */}
      <div className="multiple-billing-address">

        <h4>Billing address</h4>

        {/* COUNTRY */}
        <div className="multiple-address-field country-field">
          <label>Country/Region</label>

          <select
            name="country"
            value={billingAddress.country || ""}
            onChange={updateBilling}
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* FIRST NAME / LAST NAME */}
        <div className="multiple-address-row">
          <input
            type="text"
            name="firstName"
            placeholder="First name (optional)"
            value={billingAddress.firstName || ""}
            onChange={updateBilling}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={billingAddress.lastName || ""}
            onChange={updateBilling}
          />
        </div>

        {/* ADDRESS */}
        <div className="multiple-address-input">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={billingAddress.address || ""}
            onChange={updateBilling}
            required
          />

          <span className="address-search-icon">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <circle cx="10.8" cy="10.8" r="6.8" />
              <path d="m16 16 5 5" />
            </svg>
          </span>
        </div>

        {/* APARTMENT */}
        <input
          type="text"
          name="apartment"
          placeholder="Apartment, suite, etc. (optional)"
          value={billingAddress.apartment || ""}
          onChange={updateBilling}
        />

        {/* CITY / STATE / ZIP */}
        <div className="multiple-address-row multiple-location-row">

          <input
            type="text"
            name="city"
            placeholder="City"
            value={billingAddress.city || ""}
            onChange={updateBilling}
            required
          />

          {states.length > 0 ? (
            <select
              name="state"
              value={billingAddress.state || ""}
              onChange={updateBilling}
            >
              <option value="">State</option>

              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              name="state"
              placeholder="State"
              value={billingAddress.state || ""}
              onChange={updateBilling}
            />
          )}

          <input
            type="text"
            name="zip"
            placeholder="ZIP code"
            value={billingAddress.zip || ""}
            onChange={updateBilling}
            required
          />

        </div>
      </div>

      {/* SAVE INFORMATION */}
      <div className="multiple-save-information">

        <div className="save-information-content">
          <label>
            <input
              type="checkbox"
              checked={saveInformation}
              onChange={(e) =>
                setSaveInformation?.(e.target.checked)
              }
            />

            <span>
              Save my information for a faster checkout
            </span>
          </label>

          <p>
            By completing your order, you agree to create a Shop
            account subject to Shop's{" "}
            <a href="/terms">Terms</a> and{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>

        <button
          type="button"
          className="multiple-not-now"
          onClick={onNotNow}
        >
          Not now
        </button>

      </div>

    </section>
  );
};

export default MultipleAddressPayment;
