import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './App.css';

class App extends Component {
  render() {

    const style = {
      backgroundColor: '#FFCA28'
    }

    const linkStyle = {
      backgroundColor: "#FFFFFF"
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={style}>
      <Link className="navbar-brand" to="/">GoodFarm</Link>
      <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="my-nav" className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/orders">Orders</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/users" >Users</Link>
      </li>
    </ul>
        <span className="navbar-text">
          <Link className="nav-link" to="/login" >Log in</Link>
        </span>
      </div>
      </nav>
    );
  }
}

export default App;
