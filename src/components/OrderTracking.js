
import React, { useState, useEffect } from 'react';

const OrderTracking = () => {
  const [status, setStatus] = useState('Order Placed');

  useEffect(() => {
    const statuses = ['Order Placed', 'Preparing', 'On the Way', 'Delivered'];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % statuses.length;
      setStatus(statuses[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="order-tracking">
      <h1 className="text-3xl font-bold mb-4">Order Tracking</h1>
      <div className="text-lg font-semibold">Status: {status}</div>
    </div>
  );
};

export default OrderTracking;
