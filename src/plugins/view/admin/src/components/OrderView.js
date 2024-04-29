// @ts-nocheck
// custom-plugin/views/OrderView.js

import React, { useState, useEffect } from 'react';
import Strapi from 'strapi-sdk-javascript';

const OrderView = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch order data
    const fetchOrder = async () => {
      try {
        const strapi = new Strapi();
        // Make an API request to fetch order data by its ID
        const response = await strapi.request('GET', '/orders/:orderId');
        // Set the fetched order data to state
        setOrder(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching order:', error);
        setLoading(false);
      }
    };

    // Call the fetchOrder function
    fetchOrder();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!order) {
    return <div>Order not found.</div>;
  }

  return (
    <div>
      <h1>Order Details</h1>
      <p>Order ID: {order.orderId}</p>
      <p>Currency: {order.currency}</p>
      <p>Value: {order.value}</p>
      <p>Collected By: {order.collectedBy}</p>
      <p>Payment Type: {order.paymentType}</p>
      <p>State: {order.state}</p>
      {/* Add more order details as needed */}
    </div>
  );
};

export default OrderView;
