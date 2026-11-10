import './Footer.css'
import logo from "../../assets/SweetOclockLogo.png";

const Footer = () => {

  const menuLeft = [
    'Corporate Gifting',
    'Contact Us',
    'Frequently Asked Questions',
    'Shipping',
    'Store Locator'
  ];

  const menuRight = [
    'Wholesale',
    'Care Instructions',
    'Ingredients and Nutrition',
    'Promotion Terms and Conditions'
  ];

  const legalLinks = [
    'Privacy Policy',
    'Cookies Policy',
    'Terms Of Use',
    'Accessibility',
    'Do not sell or share my personal information'
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-logo">
          <img src={logo} alt="Sweet O'Clock Logo" />
        </div>

        <div className="footer-content">

          {/* MENU */}
          <div className="footer-column">
            <h4>MENU</h4>

            <div className="footer-links">
              {[menuLeft, menuRight].map((column, index) => (
                <ul key={index}>
                  {column.map((item, i) => (
                    <li key={i}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="footer-column">
            <h4>CONTACT</h4>

            <div className="contact-content">
              <div>
                <p>
                  Web Store Questions?{' '}
                  <a href="tel:6312575830">631-257-5830</a>
                </p>

                <p>
                  Wholesale Questions?{' '}
                  <a href="tel:6317806511">631-780-6511</a>
                </p>
              </div>

              <div>
                <p>Visit Our Bake Shop</p>
                <p>43 North Sea Rd.</p>
                <p>Southampton, NY 11968</p>
                <a href="tel:6312839830">631-283-9830</a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>© 2026 Jayson Arsenio. All Rights Reserved.</p>

          <div className="footer-legal">
            {legalLinks.map((link, index) => (
              <span key={index}>
                <a href="#">{link}</a>
                {index !== legalLinks.length - 1 && ' | '}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer