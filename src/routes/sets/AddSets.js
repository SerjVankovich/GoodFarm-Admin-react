import React from 'react'
import SuccessAdd from "../../components/SuccessAdd/SuccessAdd";

export const SuccessAddSets = (props) => (<SuccessAdd {...props}
                       title="Набор успешно добавлен"
                       link="/addSet"
                       addMore="Добавить ещё набор"
/>);