import React, { Component } from 'react';
import { Link } from "react-router-dom"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Button
} from 'reactstrap'
import './App.css';

class App extends Component {

    constructor() {
        super();

        this.state = {
            isOpen: false
        };
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (<div className="navbar-my">
                    <Navbar light expand="md">
                        <NavbarBrand href="/"><p className="brand">GoodFarm</p></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <Link className="link" to="/users">Пользователи</Link>
                                <Link className="link"  to="/orders">Заказы</Link>
                                <Link className="dropdownLink" to="/manageMilk">Управление молоком</Link>
                                <UncontrolledDropdown nav inNavbar>
                                    <div className="link" >
                                        <DropdownToggle nav caret>
                                            Управление
                                        </DropdownToggle>
                                    </div>

                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link className="dropdownLink" to="/manageSets">Управление наборами</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link className="dropdownLink" to="/manageMilk">Управление молоком</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link className="dropdownLink" to="/manageBread">Управление хлебом</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link className="dropdownLink" to="/manageMeat">Управление мясом</Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Button className="dropdownLink" onClick={() => {
                                                this.props.history.push("/manageSets")
                                            }}>Управление фруктами и овощами</Button>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>);
  }
}

export default App;
