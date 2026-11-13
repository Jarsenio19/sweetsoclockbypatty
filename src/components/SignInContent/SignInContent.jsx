
import React from "react";
import "./SignInContent.css";

import Logo from "../../common/Logo/Logo";

const SignInContent = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted");
  };

  return (
    <div className="signin-page">

      {/* LOGO */}
      <div className="signin-logo">
        <Logo />
      </div>

      {/* SIGN IN CONTENT */}
      <div className="signin-content">

        {/* HEADING */}
        <div className="signin-heading">
          <h1>Sign in</h1>
          <p>Sign in or create an account</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit}>

          {/* SHOP BUTTON */}
          <button type="button" className=".bg-primary-400 shop-button">
            Continue with shop
          </button>

          {/* DIVIDER */}
          <div className="signin-divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          {/* EMAIL INPUT */}
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

          {/* NEWSLETTER CHECKBOX */}
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

        {/* TERMS */}
        <div className="signin-terms">
          <p>
            By continuing, you agree to our{" "}
            <a href="/terms">Terms of service</a>
          </p>
        </div>

      </div>

      {/* FOOTER */}
      <div className="signin-footer">
        <a href="/privacy">Privacy policy</a>
      </div>

    </div>
  );
};

export default SignInContent;
