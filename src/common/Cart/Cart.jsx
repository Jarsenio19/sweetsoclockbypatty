
import { useState } from "react";
import { useNavigate } from "react-router";

import {
  IoCartOutline,
  IoAdd,
  IoRemove,
  IoTrashOutline,
} from "react-icons/io5";

import { carouselCardsData } from "../../data/Data";

import "./Cart.css";

const FREE_SHIPPING = 25;

const Cart = () => {
  const navigate = useNavigate();

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [discountCode, setDiscountCode] = useState("");
  const [discountMessage, setDiscountMessage] = useState("");

  // PRICE CONVERSION
  const getPrice = (price) => {
    return Number(String(price).replace(/[^0-9.]/g, "")) || 0;
  };

  // ADD PRODUCT
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.name === product.name
      );

      if (existing) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    setCartOpen(true);
  };

  // INCREASE QUANTITY
  const increaseQuantity = (name) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // DECREASE QUANTITY
  const decreaseQuantity = (name) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // REMOVE PRODUCT
  const removeItem = (name) => {
    setCartItems((prev) =>
      prev.filter((item) => item.name !== name)
    );
  };

  // TOTAL ITEMS
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // SUBTOTAL
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + getPrice(item.price) * item.quantity,
    0
  );

  // SHIPPING
  const remainingShipping = Math.max(
    FREE_SHIPPING - subtotal,
    0
  );

  const shippingProgress = Math.min(
    (subtotal / FREE_SHIPPING) * 100,
    100
  );

  // DISCOUNT
  const applyDiscount = () => {
    if (!discountCode.trim()) {
      setDiscountMessage("Please enter a discount code.");
    } else {
      setDiscountMessage("Please enter a valid discount code.");
    }
  };

  // CONNECT TO CHECKOUT
  const handleCheckout = () => {
    if (!cartItems.length) return;

    navigate("/checkout", {
      state: {
        cartItems,
      },
    });

    setCartOpen(false);
  };

  // PRODUCTS
  const renderProducts = () => (
    <div className="products-slider">
      {carouselCardsData.map((product) => (
        <div className="product-card" key={product.name}>
          <div className="product-image">
            <img src={product.image} alt={product.name} />

            <button
              className="add-product-btn"
              onClick={() => addToCart(product)}
              aria-label={`Add ${product.name} to cart`}
            >
              <IoAdd />
            </button>
          </div>

          <div className="product-info">
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* CART ICON */}

      <div className="cart-icon-wrapper">
        <IoCartOutline
          className="cart-icon"
          onClick={() => setCartOpen(true)}
        />

        {totalItems > 0 && (
          <span className="cart-count">
            {totalItems}
          </span>
        )}
      </div>

      {/* OVERLAY */}

      <div
        className={`cart-overlay ${cartOpen ? "active" : ""}`}
        onClick={() => setCartOpen(false)}
      />

      {/* CART SIDEBAR */}

      <div className={`cart-sidebar ${cartOpen ? "active" : ""}`}>

        {/* EMPTY CART */}

        {cartItems.length === 0 ? (
          <>
            <button
              className="cart-close-btn"
              onClick={() => setCartOpen(false)}
            >
              ×
            </button>

            <div className="cart-content empty-cart-content">

              <p className="empty-cart-message">
                Looks like you haven’t added anything yet,
                let’s get you started!
              </p>

              <button
                className="continue-shopping-btn"
                onClick={() => setCartOpen(false)}
              >
                Continue shopping
              </button>

              <section className="best-sellers">
                <h3>SHOP BEST SELLERS</h3>
                {renderProducts()}
              </section>

            </div>
          </>
        ) : (
          <>
            {/* CART HEADER */}

            <div className="cart-header">
              <h2>Cart ({totalItems})</h2>

              <button
                className="cart-close-btn"
                onClick={() => setCartOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="cart-content added-cart-content">

              {/* FREE SHIPPING */}

              <div className="shipping-section">

                {remainingShipping > 0 ? (
                  <p>
                    You're{" "}
                    <strong>
                      ${remainingShipping.toFixed(2)}
                    </strong>{" "}
                    away from free shipping
                  </p>
                ) : (
                  <p>
                    <strong>Congratulations!</strong>{" "}
                    You've unlocked free shipping!
                  </p>
                )}

                <div className="shipping-progress">
                  <div
                    style={{ width: `${shippingProgress}%` }}
                  />
                </div>

              </div>

              {/* CART PRODUCTS */}

              <div className="cart-items">

                {cartItems.map((item) => (
                  <div className="cart-item" key={item.name}>

                    <img src={item.image} alt={item.name} />

                    <div className="cart-item-info">
                      <h3>{item.name}</h3>

                      <div className="quantity-control">

                        <button
                          onClick={() => decreaseQuantity(item.name)}
                          aria-label="Decrease quantity"
                        >
                          <IoRemove />
                        </button>

                        <span>
                          {String(item.quantity).padStart(2, "0")}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.name)}
                          aria-label="Increase quantity"
                        >
                          <IoAdd />
                        </button>

                      </div>
                    </div>

                    <div className="cart-item-right">

                      <button
                        className="remove-item-btn"
                        onClick={() => removeItem(item.name)}
                        aria-label={`Remove ${item.name}`}
                      >
                        <IoTrashOutline />
                      </button>

                      <p>
                        ${(getPrice(item.price) * item.quantity).toFixed(2)}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

              {/* RECOMMENDED PRODUCTS */}

              <section className="recommended-section">
                <h3>YOU MAY ALSO LIKE</h3>
                {renderProducts()}
              </section>

              {/* CART BOTTOM */}

              <div className="cart-bottom">

                <div className="bottom-progress">
                  <div
                    style={{ width: `${shippingProgress}%` }}
                  />
                </div>

                {/* DISCOUNT */}

                <div className="discount-section">

                  <input
                    type="text"
                    placeholder="DISCOUNT CODE"
                    value={discountCode}
                    onChange={(e) => {
                      setDiscountCode(e.target.value);
                      setDiscountMessage("");
                    }}
                  />

                  <button onClick={applyDiscount}>
                    Apply
                  </button>

                </div>

                {discountMessage && (
                  <p className="discount-message">
                    {discountMessage}
                  </p>
                )}

                {/* SUBTOTAL */}

                <div className="subtotal-section">
                  <h3>SUBTOTAL</h3>
                  <p>${subtotal.toFixed(2)}</p>
                </div>

                {/* ACTIONS */}

                <div className="cart-actions">

                  <button
                    className="multiple-address-btn"
                    onClick={() => {
                      navigate("/checkout", {
                        state: {
                          cartItems,
                          multipleAddresses: true,
                        },
                      });

                      setCartOpen(false);
                    }}
                  >
                    Ship to Multiple Addresses
                  </button>

                  <button
                    className="checkout-btn"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>

                </div>

              </div>

            </div>
          </>
        )}

      </div>
    </>
  );
};

export default Cart;
