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
import Fail from "./components/Fail/Fail";
import {AddMilk, SuccessAddMilk} from "./routes/milk/AddMilk";
import { UpdateMilk, SuccessUpdateMilk} from "./routes/milk/UpdateMilk";
import {ManageMilk} from "./routes/milk/ManageMilk";
import {AddBread, SuccessAddBread} from "./routes/bread/AddBread";
import {AddMeat, SuccessAddMeat} from "./routes/meat/AddMeat";
import {AddVegFruits, SuccessAddVegFruits} from "./routes/vegFruits/AddVegFruits";
import {SuccessUpdateSets, UpdateSets} from "./routes/sets/UpdateSets";
import {SuccessAddSets} from "./routes/sets/AddSets";
import {ManageSets} from "./routes/sets/ManageSets";


ReactDOM.render(
    <BrowserRouter>
        <div>
        <App />
        <Switch>
            {/* router */}
            <Route path="/" component={HomePage} exact />
            <Route path="/orders" component={Orders} exact />
            <Route path="/users" component={Users} exact />
            <Route path="/fail" component={Fail}/>

            {/* Sets router */}
            <Route path="/manageSets" component={ManageSets} />
            <Route path="/addSet" component={AddSet} exact />
            <Route path="/successAddSet" component={SuccessAddSets} />
            <Route path="/updateSet" component={UpdateSets} />
            <Route path="/successUpdateSet" component={SuccessUpdateSets}/>

            {/* Milk router */}
            <Route path="/manageMilk" component={ManageMilk}/>
            <Route path="/addMilk" component={AddMilk}/>
            <Route path="/successAddMilk" component={ SuccessAddMilk }/>
            <Route path="/updateMilk" component={UpdateMilk}/>
            <Route path="/successUpdateMilk" component={ SuccessUpdateMilk }/>

            {/* Bread router */}
            <Route path="/addBread" component={AddBread} />
            <Route path="/successAddBread" component={SuccessAddBread} />

            {/* Meat router */}
            <Route path="/addMeat" component={AddMeat} />
            <Route path="/successAddMeat" component={SuccessAddMeat} />

            {/* VegFruit router */}
            <Route path="/addVegFruits" component={AddVegFruits} />
            <Route path="/successAddVegFruits" component={SuccessAddVegFruits}/>

        </Switch>
        </div>

    </BrowserRouter>
    , document.getElementById('root'));
