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
import SuccessAdd from "./components/SuccesAdd/SuccessAdd";
import Fail from "./components/Fail/Fail";
import AddSimpleProduct from "./components/AddSimpleProduct/AddSimpleProduct";

ReactDOM.render(
    <BrowserRouter>
        <div>

        <App />

        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/orders" component={Orders} exact/>
            <Route path="/users" component={Users} exact/>
            <Route path="/addSet" component={AddSet} exact/>
            <Route path="/fail" component={Fail}/>
            <Route path="/addMilk"
                   component={
                       (props) => <AddSimpleProduct {...props}
                                                    title="Добавьте молочный продукт"
                                                    url='http://localhost:3000/milk/createMilk'
                                                    backTo="/addMilk"
                                                    goTo="/successAddMilk"
                       />
                   }
            />
            <Route path="/addBread"
                   component={
                       (props) => <AddSimpleProduct {...props}
                                                    title="Добавьте хлебный продукт"
                                                    url='http://localhost:3000/bread/createBread'
                                                    backTo="/addBread"
                                                    goTo="/successAddBread"
                       />
                   }
            />
            <Route path="/addMeat"
                   component={
                       (props) => <AddSimpleProduct {...props}
                                                    title="Добавьте мясной или рыбный продукт"
                                                    url='http://localhost:3000/meat/createMeat'
                                                    backTo="/addMeat"
                                                    goTo="/successAddMeat"
                       />
                   }
            />
            <Route path="/addVegFruits"
                   component={
                       (props) => <AddSimpleProduct {...props}
                                                    title="Добавьте овощи или фрукты"
                                                    url='http://localhost:3000/vegFruits/createVegFruit'
                                                    backTo="/addVegFruits"
                                                    goTo="/successAddVegFruits"
                       />
                   }
            />
            <Route path="/successAddSet"
                   component={
                       (props) => <SuccessAdd {...props}
                                              title="Набор успешно добавлен"
                                              link="/addSet"
                                              addMore="Добавить ещё набор"
                       />}
            />
            <Route path="/successAddMilk"
                   component={
                       (props) => <SuccessAdd {...props}
                                              title="Молочный продукт успешно добавлен"
                                              link="/addMilk"
                                              addMore="Добавить ещё молочный продукт"/>}
            />
            /* TODO paths: "/successAddMeat", "/successAddBread", "/successAddVegFruits"*/
        </Switch>
        </div>

    </BrowserRouter>
    , document.getElementById('root'));
