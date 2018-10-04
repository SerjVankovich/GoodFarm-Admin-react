import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Orders from './components/Orders/orders';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Users from './components/Users/users';
import AddSet from "./components/AddSet/AddSet";
import "bootstrap/dist/css/bootstrap-grid.min.css"
import SuccessAddSet from "./components/SuccesAddSet/SuccessAddSet";
import Fail from "./components/Fail/Fail";

ReactDOM.render(
    <BrowserRouter>
        <div>

        <App />

        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/orders" component={Orders} exact/>
            <Route path="/users" component={Users} exact/>
            <Route path="/addSet" component={AddSet} exact/>
            <Route path="/successAddSet" component={SuccessAddSet}/>
            <Route path="/fail" component={Fail}/>
        </Switch>
        </div>

    </BrowserRouter>
    , document.getElementById('root'));
