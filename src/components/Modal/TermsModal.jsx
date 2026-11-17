
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
            {termsData.title}
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

            {termsData.sections.map((section, index) => (

              <section
                className="terms-section"
                key={index}
              >

                {/* SECTION HEADING */}
                {section.heading && (
                  <h3>{section.heading}</h3>
                )}

                {/* PARAGRAPHS */}
                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>
                    {paragraph}
                  </p>
                ))}

              </section>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default TermsModal;
