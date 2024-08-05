
import React from 'react';

const ItemSelection = ({ selectedItems, onPlaceOrder }) => {
  const total = selectedItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="item-selection">
      <h1 className="text-3xl font-bold mb-4">Selected Items</h1>
      <ul className="mb-4">
        {selectedItems.map((item, index) => (
          <li key={index} className="mb-2">{item.name} - ${item.price}</li>
        ))}
      </ul>
      <div className="font-semibold text-lg mb-4">Total: ${total}</div>
      <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" onClick={onPlaceOrder}>Place Order</button>
    </div>
  );
};

export default ItemSelection;
