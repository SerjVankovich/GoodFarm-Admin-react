import React from 'react'

const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDay();

    const months = ["January", 'February', "March", "April", "May", "June", "July", "August",
                    "September", "October", "November", "December"]

    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const output = day + " " + month + " " + year
    return output;

}

export const OrderSimple = (props) => {
    const { order } = props;
    return(
        <div className="jumbotron" style={{backgroundColor: "rgb(130, 241, 123)"}}>
            <h1>{formatDate(order.createdOn)}</h1>
            <hr/>
            {order.items.map((item, id) => (
                <div className="jumbotron" key={id}>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <p>{item.count} items</p>
                </div>
            ))}
            <hr/>
            <p>Price: <span style={{fontWeight: "bold"}}>{order.price}</span></p>
        </div>
    )
}

export default OrderSimple