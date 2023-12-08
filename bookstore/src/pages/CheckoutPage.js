import React from 'react';
import CheckoutForm from '../components/CheckoutForm';

const CheckoutPage = () => {
  const handleCheckout = (shippingInfo) => {
    // Logic to handle checkout with shippingInfo
    console.log('Shipping Information:', shippingInfo);
  };

  return (
    <div>
      <CheckoutForm handleCheckout={handleCheckout} />
    </div>
  );
};

export default CheckoutPage;
