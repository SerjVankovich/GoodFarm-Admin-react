import React from 'react';
import { OrdersSimple } from './ordersForUsers';
import './User.css'

class User extends React.Component {
    constructor() {
        super()
        this.active = React.createRef();
        this.compleated = React.createRef();
    }

    render() {
        const { user } = this.props;

        return (
            <div className="col-lg-10 jumbotron user-card">
                <h1>{user.name}</h1>
                <hr/>
                <p>Phone: <span className="bold-text" >{user.phone}</span></p>
                <p>Email: <span className="bold-text">{user.email}</span></p>
                <p>City: <span className="bold-text">{user.city}</span></p>
                <p>Street: <span className="bold-text">{user.street}, {user.house}</span></p>
                <p>Flat: <span className="bold-text">{user.flat}</span></p>
                <hr/>
                <div id="accordion">
                <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Orders
                    </button>
                  </h5>
                </div>
            
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <OrdersSimple orders={user.activeOrders} />
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Compleated Orders
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body">
                        <OrdersSimple orders={user.compleatedOrders}/>
                </div>
                </div>
                </div>
                </div>
                
    </div>
                
  


        )
    }
}

export default User;