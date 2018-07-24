import React from 'react'
import { OrderSimple } from './orderSimple';

export const OrdersSimple = (props) => {
    const { orders } = props;

    if (orders.length === 0) {
        return (
            <div className="jumbotron">
                <h1>This user haven't orders now.</h1>
            </div>
        )
    }
    return(
        <div>
            {orders.map((order, id) => (<OrderSimple order={order} key={id}/>))}
        </div>
    )
}

export default OrdersSimple