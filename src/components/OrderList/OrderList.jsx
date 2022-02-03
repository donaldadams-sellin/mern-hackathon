import './OrderList.css';
import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({ orders, handleSelect, selectedOrder }) {

  return (
    <main className="OrderList">
      {orders.map((order, idx) => <OrderListItem
        handleSelect={handleSelect}
        order={order}
        key={idx}
        selectedOrder={selectedOrder}
        
      />)}
    </main>
  );
}