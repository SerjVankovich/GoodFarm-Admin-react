import React from 'react'
import { Link } from 'react-router-dom'
import './SuccessAddSet.css'

const SuccessAddSet = () => (
    <div>
        <h1 className="center">Набор успешно добавлен</h1>
        <h2 className="center"><Link to={'/addSet'}>Добавить ещё набор</Link></h2>
    </div>
);

export default SuccessAddSet;