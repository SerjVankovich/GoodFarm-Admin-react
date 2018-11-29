import React from 'react'
import AddSimpleProduct from "../../components/AddSimpleProduct/AddSimpleProduct";
import SuccessAdd from "../../components/SuccessAdd/SuccessAdd";
export const AddMilk = (props) => (<AddSimpleProduct {...props}
                             title="Добавьте молочный продукт"
                             url='http://localhost:3000/milk/createMilk'
                             backTo="/addMilk"
                             goTo="/successAddMilk"
/>);

export const SuccessAddMilk = (props) => (<SuccessAdd {...props}
                                                     title="Молочный продукт успешно добавлен"
                                                     link="/addMilk"
                                                     addMore="Добавить ещё молочный продукт"
/>);