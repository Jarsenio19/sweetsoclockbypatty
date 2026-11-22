import './GiftMessage.css'


const GiftMessage = ({
  giftMessageEnabled,
  setGiftMessageEnabled,
  giftMessage,
  setGiftMessage,
}) => {
  const handleToggle = (e) => {
    const checked = e.target.checked;

    setGiftMessageEnabled(checked);

    if (!checked) {
      setGiftMessage("");
    }
  };

  return (
    <div
      className={`gift-message-container ${giftMessageEnabled ? "active" : ""
        }`}
    >
      <label className="gift-message-toggle">
        <input
          type="checkbox"
          checked={giftMessageEnabled}
          onChange={handleToggle}
        />

        <span>Add gift message</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="8" width="18" height="13" rx="2" />
          <path d="M12 8v13" />
          <path d="M3 12h18" />
          <path d="M12 8H7.5a2.5 2.5 0 1 1 2.5-2.5V8" />
          <path d="M12 8h4.5a2.5 2.5 0 1 0-2.5-2.5V8" />
        </svg>
      </label>

      {giftMessageEnabled && (
        <div className="gift-message-fields">
          <p>
            Write a special message for your recipient.
          </p>

          <textarea
            placeholder="Enter your gift message..."
            value={giftMessage}
            onChange={(e) =>
              setGiftMessage(e.target.value)
            }
            maxLength={250}
            rows={4}
          />

          <span className="gift-message-counter">
            {giftMessage.length}/250 characters
          </span>
        </div>
      )}
    </div>
  );
};

export default GiftMessage;
