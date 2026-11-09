import './PrimaryButton.css'

const PrimaryButton = ({ text = " ", onClick, className = "" }) => {
  return (
    <div className="button-container">
      <button
        className={`read-more-btn fs-600 fw-bold ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}

export default PrimaryButton