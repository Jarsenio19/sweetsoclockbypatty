
import React from "react";

import AddressFields from "./AddressFields";
import ShippingAddressCard from "./ShippingAddressCard";
import "./DeliverySection.css";

const DeliverySection = ({
  multipleAddresses,
  setMultipleAddresses,
  shippingAddress,
  updateShipping,
  additionalAddresses,
  addShippingAddress,
  removeShippingAddress,
  updateAdditionalAddress,
  productAddresses,
  assignProductAddress,
  cartItems,
  countries,
}) => {
  return (
    <section className="checkout-section">

      <h3>Delivery</h3>

      {!multipleAddresses ? (
        <>
          <AddressFields
            address={shippingAddress}
            onChange={updateShipping}
            countries={countries}
          />

          <button
            type="button"
            className="add-address-btn"
            onClick={() => setMultipleAddresses(true)}
          >
            Want to ship to more than one address?
          </button>
        </>
      ) : (
        <div className="multiple-address-container">

          <p className="multiple-address-description">
            Add shipping addresses and select where each product
            should be delivered.
          </p>

          {/* PRIMARY ADDRESS */}
          <div className="additional-address-card">
            <h4>Primary shipping address</h4>

            <AddressFields
              address={shippingAddress}
              onChange={updateShipping}
              countries={countries}
            />
          </div>

          {/* ADDITIONAL ADDRESSES */}
          {additionalAddresses.map((address, index) => (
            <ShippingAddressCard
              key={address.id}
              address={address}
              index={index}
              onChange={(e) =>
                updateAdditionalAddress(address.id, e)
              }
              onRemove={() =>
                removeShippingAddress(address.id)
              }
              countries={countries}
            />
          ))}

          {/* ADD SHIPPING ADDRESS */}
          <button
            type="button"
            className="add-address-btn"
            onClick={addShippingAddress}
          >
            + Add shipping address
          </button>

          {/* ASSIGN PRODUCTS */}
          <div className="product-address-assignments">

            <h4>Assign products to addresses</h4>

            {cartItems.map((item, index) => (
              <div
                className="multiple-address-product"
                key={`${item.name}-${index}`}
              >

                <div className="multiple-address-product-info">
                  <strong>{item.name}</strong>
                  <span>Quantity: {item.quantity}</span>
                </div>

                <select
                  value={productAddresses[index] || "main"}
                  onChange={(e) =>
                    assignProductAddress(index, e.target.value)
                  }
                >

                  <option value="main">
                    Primary shipping address
                  </option>

                  {additionalAddresses.map((address, addressIndex) => (
                    <option
                      key={address.id}
                      value={address.id}
                    >
                      Shipping address {addressIndex + 2}
                    </option>
                  ))}

                </select>

              </div>
            ))}

          </div>

          {/* USE ONE ADDRESS */}
          <button
            type="button"
            className="add-address-btn"
            onClick={() => setMultipleAddresses(false)}
          >
            Use one shipping address instead
          </button>

        </div>
      )}

      {/* SHIPPING METHOD */}
      <div className="shipping-method">

        <h4>Shipping method</h4>

        <p>
          Enter your shipping address to view available
          shipping methods.
        </p>

      </div>

    </section>
  );
};

export default DeliverySection;
