
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

  if (!isOpen) return null;

  return (
    <div
      className="privacy-overlay"
      onClick={onClose}
    >

      <div
        className="privacy-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
        onClick={(e) => e.stopPropagation()}
      >

        {/* MODAL HEADER */}
        <div className="privacy-modal-header">

          <h2 id="privacy-title">
            {privacyData.title}
          </h2>

          <button
            type="button"
            className="privacy-close"
            onClick={onClose}
            aria-label="Close privacy policy"
          >
            ×
          </button>

        </div>

        {/* MODAL BODY */}
        <div className="privacy-modal-content">

          <div className="privacy-document">

            {privacyData.sections.map((section, index) => (

              <section
                className="privacy-section"
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

                {/* CARDS */}
                {section.type === "cards" && (
                  <div className="privacy-cards">

                    {section.items.map((item, itemIndex) => (

                      <div
                        className="privacy-card"
                        key={itemIndex}
                      >

                        <h4>{item.title}</h4>

                        <p>{item.description}</p>

                      </div>

                    ))}

                  </div>
                )}

              </section>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default PrivacyModal;
