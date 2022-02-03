import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderList from '../../components/OrderList/OrderList';
import { useState, useEffect, useNavigate } from 'react';
import * as ordersAPI from '../../utilities/orders-api';

export default function OrderHistoryPage({ user, setUser }) {

  // THOUGHTS 
  // STATES
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState([]);
  // 
  function handleSelect(orderId) {
    // setSelectedOrder(orders[orders.findIndex((order)=> order.orderId === orderId)]);
    setSelectedOrder(orders.filter((o) => o.orderId === orderId))
  }

  // API requests
  useEffect(function () {
    async function getOrders() {
      const orders = await ordersAPI.getOrders();
      setOrders(orders);
      setSelectedOrder(orders[0]);
    }
    getOrders();
  }, [])
  // only fetching PAID orders.

  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <OrderList selectedOrder={selectedOrder} handleSelect={handleSelect} orders={orders} />
    </main>
  );
}