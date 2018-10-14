import React from 'react';
import {withRouter} from 'react-router-dom';
import {Col, Container, Jumbotron, Row, Card, CardImg} from 'reactstrap'
import "./ManageSets.css"
import Loading from "../Loading/Loading";
import Search from "../Search/Search";
import plus from './plus.svg'

class ManageSets extends React.Component {
    constructor() {
        super();


        this.state = {
            objs: [],
            loading: true,
            error: null,
        };

        this.findObjs = this.findObjs.bind(this);
        this.deleteSet = this.deleteSet.bind(this)
    }

    componentDidMount() {
        const { url } = this.props;
        fetch(`http://localhost:3000/${url}`)
            .then(response => response.ok ? response.json() : Promise.reject(response))
            .then(body =>
                this.setState({
                    objs: body,
                    loading: false
                })
            )
            .catch(err => {
                this.setState({
                    loading: false,
                    error: err
                });
            });
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
            .catch(err => {
                this.setState({
                    error: err,
                    loading: false
                })
            })

    }

    deleteSet({ _id }) {
        const { objs } = this.state;
        fetch(`http://localhost:3000/sets/deleteSet/${_id}`, {
            method: "DELETE",
        })
            .then(response => response.ok ? response.json() : Promise.reject(response))
            .then(body => {
                console.log(body);
                const deletesObj = objs.filter(obj => obj._id !== _id);
                this.setState({
                    objs: deletesObj
                })
            })
            .catch(err => {
                console.log(err);
                alert("Ошибка" + err.message)
            })
    }

    render() {
        const { objs, loading, error } = this.state;
        if (loading) {
            return (<Loading/>)
        }

        if (error) {
            return (
                <Container>
                    <Jumbotron className="NotFound">
                        <h2>Произошла ошибка: {error.message}</h2>

                    </Jumbotron>
                </Container>
            )

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
                        <Col>
                            <Container className="AddButton">
                                <img className="AddImg" src={plus} alt="plus"/>
                            </Container>

                        </Col>
                    </Row>}
                </Container>
            </div>

        )
    }
}

export default withRouter(ManageSets);