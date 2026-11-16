
import React, { useEffect } from "react";
import "./PrivacyModal.css";
import privacyData from "../../data/Legal/PrivacyData";

const PrivacyModal = ({ isOpen, onClose }) => {

  // Close modal using Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Don't render if modal is closed
  if (!isOpen) return null;

  return (
    <div
      className="terms-overlay"
      onClick={onClose}
    >

      <div
        className="terms-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
        onClick={(e) => e.stopPropagation()}
      >

        {/* MODAL HEADER */}
        <div className="terms-modal-header">

          <h2 id="privacy-title">
            Privacy policy
          </h2>

          <button
            type="button"
            className="terms-close"
            onClick={onClose}
            aria-label="Close privacy policy"
          >
            ×
          </button>

        </div>

        {/* MODAL BODY */}
        <div className="terms-modal-content">

          <div className="terms-document">
            {privacyData}
          </div>

        </div>

      </div>

    </div>
  );
};

export default PrivacyModal;
