
import "./AddressFields.css";

const AddressFields = ({
  address,
  onChange,
  countries,
  showPhone = false,
}) => {
  return (
    <div className="checkout-address-fields">

      {/* COUNTRY */}
      <select
        name="country"
        value={address.country}
        onChange={onChange}
        required
      >
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      {/* FIRST NAME AND LAST NAME */}
      <div className="checkout-input-row">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={address.firstName}
          onChange={onChange}
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={address.lastName}
          onChange={onChange}
          required
        />
      </div>

      {/* ADDRESS */}
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={address.address}
        onChange={onChange}
        required
      />

      {/* APARTMENT */}
      <input
        type="text"
        name="apartment"
        placeholder="Apartment, suite, etc. (optional)"
        value={address.apartment}
        onChange={onChange}
      />

      {/* CITY, STATE, ZIP */}
      <div className="checkout-input-row checkout-location-row">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={address.city}
          onChange={onChange}
          required
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={address.state}
          onChange={onChange}
          required
        />

        <input
          type="text"
          name="zip"
          placeholder="ZIP code"
          value={address.zip}
          onChange={onChange}
          required
        />
      </div>

      {/* PHONE */}
      {showPhone && (
        <input
          type="tel"
          name="phone"
          placeholder="Phone (optional)"
          value={address.phone}
          onChange={onChange}
        />
      )}

    </div>
  );
};

export default AddressFields;
