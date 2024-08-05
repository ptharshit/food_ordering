
import React from 'react';

const restaurants = [
  { id: 1, name: 'Restaurant A', image: 'a.avif' },
  { id: 2, name: 'Restaurant B', image: 'b.avif' },
];

const RestaurantList = ({ onSelectRestaurant }) => {
  return (
    <div className="restaurant-list">
      <h1 className="text-3xl font-bold mb-4">Restaurants</h1>
      <div className="grid grid-cols-1 gap-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="border p-4 rounded-lg shadow-lg cursor-pointer" onClick={() => onSelectRestaurant(restaurant)}>
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover rounded-md mb-2"/>
            <h2 className="text-xl font-semibold">{restaurant.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
