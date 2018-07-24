import React from 'react';
import '../globalCSS.css'
import './Order.css';

const Order = (props) => {
    const { order, id, handleCompleate } = props;
    return(
        <div className="jumbotron order-card" key={id}>
                        <h1>Name: {order.name}</h1>
                        <hr/>
                        <p>Phone:  <span className="bold-text" >{order.phone}</span> </p>
                        <p>Email: <span className="bold-text" >{order.email}</span></p>
                        <p>City: <span className="bold-text">{order.city}</span></p>
                        <p>Street: <span className="bold-text">{order.street}, {order.house}</span></p>
                        <p>Flat: <span className="bold-text">{order.flat}</span></p>
                        <hr/>
                        <h2>Items:</h2>
                        {order.items.map((item, id) =>
                            <div className="jumbotron item-block" key={id}>
                                <h1>{id+1}: {item.name}</h1>
                                <hr/>
                                <p>{item.description}</p>
                                <p>Price: <span className="bold-text">{item.price}</span></p>
                                <p>Count: <span className="bold-text">{item.count}</span></p>
                            </div>
                        )}
                        <h1 className="price-block" >Price: {order.price} руб.</h1>
                        <button type="submit" onClick={() => {
                            handleCompleate(id, order)}}  className="btn-completed button-complete">Complete</button>
                </div>
    )
}

export default Order;