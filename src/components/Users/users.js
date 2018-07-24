import React, { Component } from 'react';
import { API } from '../../config';
import User from './User';
import { withRouter } from 'react-router-dom'
import { Loading } from '../Loading/Loading';

const header = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Max-Age': '3600',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-id, Content-Length, X-Requested-With',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'multipart/form-data'
})

class Users extends Component {
    constructor() {
        super();

        this.state = {
            loading: false,
            users: []
        }
    }

    componentDidMount() {
        this.setState({loading: true})

        const options = {
            method: "GET",
            json: {},
            header: header,
            mode: 'cors'
        }
        fetch(API + "users", options)
            .then(response => response.json())
            .then(body => {
                console.log(body)
                this.setState({
                    users: body,
                    loading: false
                })

            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { users, loading } = this.state;

        if (loading) {
            return (<Loading/>)
        }

        if (users.length === 0) {
            return(
                <div className="container col-sm-12 col-lg-8 jumbotron">
                    <h1>No Users Found</h1>
                    <hr/>
                    <p>Any text</p>
                </div>
            )
        }
        return (
            <div className='container col-sm-12 col-lg-8'>
            {users.map((user, id) =>
                <User user={user} key={id}/>
            )}
            </div>
        )
    }
}

export default withRouter(Users)