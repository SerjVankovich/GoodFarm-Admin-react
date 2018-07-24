import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Orders from './components/Orders/orders';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Users from './components/Users/users';

ReactDOM.render(
    <BrowserRouter>
        <div>

        <App />

        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/orders" component={Orders} exact/>
            <Route path="/users" component={Users} exact/>
        </Switch>
        </div>

    </BrowserRouter>
    , document.getElementById('root'));
