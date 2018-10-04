import React from 'react'
import './Fail.css'
import {Link} from "react-router-dom";
import { Container } from 'reactstrap'

const Fail = (props) => {
    const {error, backTo} = props.location.state;

    return (
        <Container>
            <h1 className="center">Что-то пошло не так</h1>
                <p className="center">{errorTranslator(error)}</p>
            <h2 className="center"><Link to={backTo}>Попробовать снова</Link></h2>
        </Container>
    )
};

const errorTranslator = err => {
    let errorString = "";
    if (err === 'Failed to fetch') {
        errorString = "Сервер не отвечает"
    }
    return errorString
};

export default Fail;