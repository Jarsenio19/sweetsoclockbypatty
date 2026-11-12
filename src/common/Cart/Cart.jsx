
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";

import "./Cart.css";

const Cart = () => {

  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>

      {/* CART ICON */}

      <IoCartOutline
        className="cart-icon"
        onClick={() => setCartOpen(true)}
        aria-label="Open cart"
      />


      {/* CART SIDEBAR */}

      <div className={`cart-sidebar ${cartOpen ? "active" : ""}`}>

        <button
          className="cart-close-btn"
          onClick={() => setCartOpen(false)}
          aria-label="Close cart"
        >
          ×
        </button>

        <div className="cart-content">

          <h2>Your Cart</h2>

          <p>Your cart is empty.</p>

        </div>

      </div>

    </>
  );

};

export default Cart;
