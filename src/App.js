
import React, { useState } from 'react';
import RestaurantList from './components/RestaurantList';
import Menu from './components/Menu';
import ItemSelection from './components/ItemSelection';
import PlaceOrder from './components/PlaceOrder';
import OrderTracking from './components/OrderTracking';

const App = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [trackOrder, setTrackOrder] = useState(false);

  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setSelectedItems([]);
    setOrderPlaced(false);
    setTrackOrder(false);
  };

  const handleSelectItem = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  const handleOrderPlaced = () => {
    setTrackOrder(true);
  };

  return (
    <div className="App container mx-auto p-4">
      {!selectedRestaurant && <RestaurantList onSelectRestaurant={handleSelectRestaurant} />}
      {selectedRestaurant && !orderPlaced && (
        <Menu restaurantId={selectedRestaurant.id} onSelectItem={handleSelectItem} />
      )}
      {selectedRestaurant && selectedItems.length > 0 && !orderPlaced && (
        <ItemSelection selectedItems={selectedItems} onPlaceOrder={handlePlaceOrder} />
      )}
      {orderPlaced && !trackOrder && <PlaceOrder onOrderPlaced={handleOrderPlaced} />}
      {trackOrder && <OrderTracking />}
    </div>
  );
};

export default App;
