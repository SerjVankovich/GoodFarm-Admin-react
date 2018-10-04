import React from "react";
import { API } from "../../config";
import { withRouter } from "react-router-dom";
import Order from "./Order";
import  Loading  from "../Loading/Loading";
const request = require("request");

const header = new Headers({
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Max-Age": "3600",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Content-Type": "multipart/form-data"
});

class Orders extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      loading: false
    };

    this.handleCompleate = this.handleCompleate.bind(this)
  }

  formatOrders(json) {
    const orders = [];
    json.forEach(user => {
      user.activeOrders.forEach(order => {
        orders.push({
          id: order._id,
          userId: user._id,
          name: user.name,
          phone: user.phone,
          email: user.email,
          city: user.city,
          street: user.street,
          house: user.house,
          flat: user.flat,
          createdOn: order.createdOn,
          items: order.items,
          compleated: order.compleated,
          price: order.price
        });
      });
    });
    console.log(orders);
    return orders;
  }

  componentDidMount() {
    this.setState({loading: true});

    const options = {
      method: "GET",
      json: {},
      header: header,
      mode: "cors"
    };

    fetch(API + "users", options)
      .then(response => response.ok ? response.json() : Promise.reject(response))
      .then(body => {
        this.setState({
          orders: this.formatOrders(body),
          loading: false
        });
      })
      .catch(err => {
        this.props.history.push({pathname: '/fail', state: {error: err.message, backTo: '/orders'}})
      });
  }

  handleCompleate(id, order) {
    const { orders } = this.state;
    orders.splice(id, 1);

    const options = {
      method: "DELETE",
      json: {},
      headers: header,
      mode: "cors"
    };

    fetch(API + `users/${order.userId}/deleteOrder/${order.id}`, {
      method: "DELETE",
      headers: { Accept: "application/json" }
    })
      .then(response => {
        response.json();
      })
      .then(body => {
        this.setState({
          orders: orders
        });
        console.log(body);
      })
      .catch(err => console.log(err));
  }

  render() {

    const { loading } = this.state;
    if (loading) {
      return (<Loading />)
    }

    if (this.state.orders.length === 0) {
      return (

        <div className="container col-sm-12 col-lg-8 jumbotron">
          <h1>No orders found</h1>
          <p>Any text</p>
        </div>
      );
    }

    return (
      <div className="container col-sm-12 col-lg-8">
        {this.state.orders.map((order, id) => (
          <Order
            order={order}
            id={id}
            handleCompleate={this.handleCompleate}
            key={id}
          />
        ))}
      </div>
    );
  }
}

export default withRouter(Orders);
