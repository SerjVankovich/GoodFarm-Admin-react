import React from 'react';
import {withRouter} from 'react-router-dom';
import {Col, Container, Jumbotron, Row} from 'reactstrap'
import "./ManageSets.css"
import Loading from "../Loading/Loading";
import Search from "../Search/Search";

class ManageSets extends React.Component {
    constructor() {
        super();

        this.cartItems = [];

        this.state = {
            objs: [],
            loading: true,
            cart: [],
        };

        this.saveToCart = this.saveToCart.bind(this);
        this.checkObjOnCart = this.checkObjOnCart.bind(this);
        this.findObjs = this.findObjs.bind(this);
        this.deleteSet = this.deleteSet.bind(this)
    }

    componentDidMount() {
        const { url } = this.props;
        fetch(`http://localhost:3000/${url}`)
            .then(response => response.json())
            .then(body =>
                this.setState({
                    objs: body,
                    loading: false
                })
            )
            .catch(err => console.error(err));
    }

    findObjs(value) {
        const { url } = this.props;
        fetch(`http://localhost:3000/${url}?name=${value}`)
            .then(response => response.json())
            .then(body => {
                if (body.message === undefined) {
                    this.setState({ objs: body, loading: false })
                } else {
                    this.setState({ objs: [], loading: false})
                }


            })
            .catch(err => console.error(err))

    }

    deleteSet({ _id }) {
        const { objs } = this.state;
        fetch(`http://localhost:3000/sets/deleteSet/${_id}`, {
            method: "DELETE",
            headers: { Accept: "application/json" }
        })
            .then(response => response.json())
            .then(body => {
                console.log(body);
                const deletesObj = objs.filter(obj => obj._id !== _id);
                this.setState({
                    objs: deletesObj
                })
            })
            .catch(err => console.error(err))
    }

    saveToCart(obj) {
        if(this.cartItems === null) {
            this.cartItems = []
        }
        if (!this.checkObjOnCart(obj)) {
            obj.count = 1;
            this.cartItems.push(obj)
        }

    }

    checkObjOnCart(obj) {
        return this.cartItems.some(cartItem => {
            return obj._id === cartItem._id;
        })
    }

    componentWillUnmount() {
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems) )
    }

    render() {
        const { objs, loading } = this.state;
        if (loading) {
            return (<Loading/>)
        }

        if (objs.length === 0) {
            return (
                <div>
                    <Search findObjs={this.findObjs}/>
                    <Container>
                        <Jumbotron className="NotFound">
                            <h2>Наборы не найдены :(</h2>

                        </Jumbotron>
                    </Container>

                </div>
            )
        }
        return (
            <div>
                <Search findObjs={this.findObjs}/>
                <Container className="table">

                    {objs !== undefined &&
                    <Row>
                        {objs.map((obj, index) => (
                            <Col key={index} md="4" sm="6" xs="12">
                                {React.createElement(this.props.component,
                                    {
                                        saveToCart: this.saveToCart,
                                        obj: obj,
                                        deleteSet: this.deleteSet
                                    },
                                    this)}
                            </Col>
                        ))}
                    </Row>}
                </Container>
            </div>

        )
    }
}

export default withRouter(ManageSets);