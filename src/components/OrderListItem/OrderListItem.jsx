import './OrderListItem.css'

export default function OrderListItem({ order, handleSelect, selectedOrder }) {
    return (
        <div className={selectedOrder[0] && selectedOrder[0].orderId=== order.orderId ? `OrderListItem active`: `OrderListItem`} onClick={() => handleSelect(order.orderId)}>
            <div>
                <div>
                    Order Id: <span className="smaller">{order.orderId}</span>
                </div>
                <div className="smaller">
                    {order.createdAt.slice(0, 10)}
                </div>
            </div>
            <div className="align-rt">
                <div>
                    ${order.orderTotal.toFixed(2)}
                </div>
                <div className="smaller">
                    {order.totalQty} Items
                </div>
            </div>
        </div>
    )
}