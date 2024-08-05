
import React from 'react';

const PlaceOrder = ({ onOrderPlaced }) => {
  return (
    <div className="place-order">
      <h1 className="text-3xl font-bold mb-4">Place Order</h1>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={onOrderPlaced}>Confirm Order</button>
    </div>
  );
};

export default PlaceOrder;
