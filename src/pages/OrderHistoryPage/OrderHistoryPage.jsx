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
  // selectedOrder, setSelectedOrder
  // 
  // API requests
  useEffect(function() {
    async function getOrders(){
      const orders = await ordersAPI.getOrders();
      setOrders(orders);
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
      <OrderList />
    </main>
  );
}