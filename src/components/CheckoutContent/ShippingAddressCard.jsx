
import React from "react";
import AddressFields from "./AddressFields";
import "./ShippingAddressCard.css";

const ShippingAddressCard = ({
  address,
  index,
  onChange,
  onRemove,
  countries,
}) => {
  return (
    <div className="additional-address-card">
      <div className="address-card-heading">
        <h4>Shipping address {index + 2}</h4>

        <button
          type="button"
          onClick={onRemove}
        >
          Remove
        </button>
      </div>

      <AddressFields
        address={address}
        onChange={onChange}
        countries={countries}
      />
    </div>
  );
};

export default ShippingAddressCard;
