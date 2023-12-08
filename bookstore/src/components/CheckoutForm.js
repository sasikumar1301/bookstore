import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ handleCheckout }) => {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    address: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheckout(shippingInfo);
  };

  return (
    <div className='checkout-form'>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={shippingInfo.fullName}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={shippingInfo.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Mobile Number"
          name="mobileNumber"
          value={shippingInfo.mobileNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={shippingInfo.address}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={shippingInfo.city}
          onChange={handleChange}
        />
        {/* Add more input fields for shipping information */}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
