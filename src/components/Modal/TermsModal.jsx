
import React, { useEffect } from "react";
import "./TermsModal.css";
import termsData from "../../data/Legal/TermsData";

const TermsModal = ({ isOpen, onClose }) => {

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
        aria-labelledby="terms-title"
        onClick={(e) => e.stopPropagation()}
      >

        {/* MODAL HEADER */}
        <div className="terms-modal-header">

          <h2 id="terms-title">
            Terms of service
          </h2>

          <button
            type="button"
            className="terms-close"
            onClick={onClose}
            aria-label="Close terms"
          >
            ×
          </button>

        </div>

        {/* MODAL BODY */}
        <div className="terms-modal-content">

          <div className="terms-document">
            {termsData}
          </div>

        </div>

      </div>

    </div>
  );
};

export default TermsModal;
