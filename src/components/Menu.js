
import React from 'react';

const menus = {
  1: [
    { id: 1, name: 'Pizza', price: 10, image: '/images/pizza.jpg' },
    { id: 2, name: 'Burger', price: 8, image: '/images/burger.jpg' },
  ],
  2: [
    { id: 3, name: 'Pasta', price: 12, image: '/images/pasta.jpg' },
    { id: 4, name: 'Salad', price: 6, image: '/images/salad.jpg' },
  ],
};

const Menu = ({ restaurantId, onSelectItem }) => {
  const menu = menus[restaurantId] || [];

  return (
    <div className="menu">
      <h1 className="text-3xl font-bold mb-4">Menu</h1>
      <div className="grid grid-cols-1 gap-4">
        {menu.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-lg cursor-pointer" onClick={() => onSelectItem(item)}>
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md mb-2"/>
            <h2 className="text-xl font-semibold">{item.name} - ${item.price}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
