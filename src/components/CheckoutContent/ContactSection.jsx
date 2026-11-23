
import React from "react";

import "./ContactSection.css";

const ContactSection = ({
  email,
  setEmail,
  emailOffers,
  setEmailOffers,
  navigate,
}) => {
  return (
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
        <input
          type="checkbox"
          checked={emailOffers}
          onChange={(e) => setEmailOffers(e.target.checked)}
        />

        <span>Email me news and offers</span>
      </label>

    </section>
  );
};

export default ContactSection;
