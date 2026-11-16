
import React, { useState } from "react";
import "./SignInContent.css";

import Logo from "../../common/Logo/Logo";
import TermsModal from "../Modal/TermsModal";
import PrivacyModal from "../Modal/PrivacyModal";

const SignInContent = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted");
  };

  return (
    <div className="signin-page">

      <div className="signin-logo">
        <Logo />
      </div>

      <div className="signin-content">

        <div className="signin-heading">
          <h1>Sign in</h1>
          <p>Sign in or create an account</p>
        </div>

        <form onSubmit={handleSubmit}>

          <button
            type="button"
            className="shop-button"
          >
            Continue with shop
          </button>

          <div className="signin-divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          <div className="email-input">
            <input
              type="email"
              placeholder="Email"
              required
            />

            <button
              type="submit"
              aria-label="Continue with email"
            >
              →
            </button>
          </div>

          <label className="newsletter-option">
            <input
              type="checkbox"
              defaultChecked
            />
            <span>
              Email me with news and offers
            </span>
          </label>

        </form>

        <div className="signin-terms">
          <p>
            By continuing, you agree to our{" "}
            <button
              type="button"
              onClick={() => setIsTermsOpen(true)}
            >
              Terms of service
            </button>
          </p>
        </div>

      </div>

      <div className="signin-footer">
        <button
          type="button"
          onClick={() => setIsPrivacyOpen(true)}
        >
          Privacy policy
        </button>
      </div>

      {/* TERMS MODAL */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />

      {/* PRIVACY MODAL */}
      {/* <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      /> */}

    </div>
  );
};

export default SignInContent;
