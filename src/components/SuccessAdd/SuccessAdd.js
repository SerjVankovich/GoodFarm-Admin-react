import React from 'react'
import { Link } from 'react-router-dom'
import './SuccessAdd.css'

const SuccessAdd = ({title, addMore, link}) => (
    <div>
        <h1 className="center">{title}</h1>
        <h2 className="center"><Link to={link}>{addMore}</Link></h2>
    </div>
);

export default SuccessAdd;