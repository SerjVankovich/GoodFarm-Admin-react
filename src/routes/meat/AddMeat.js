import React from 'react'
import AddSimpleProduct from "../../components/AddSimpleProduct/AddSimpleProduct";
import SuccessAdd from "../../components/SuccessAdd/SuccessAdd";

export const AddMeat = (props) => (<AddSimpleProduct {...props}
                                                    title="Добавьте мясной или рыбный продукт"
                                                    url='http://localhost:3000/meat/createMeat'
                                                    backTo="/addMeat"
                                                    goTo="/successAddMeat"
/>);

export const SuccessAddMeat = (props) => (<SuccessAdd {...props}
                                                     title="Мясной или рыбный продукт успешно добавлен"
                                                     link="/addMeat"
                                                     addMore="Добавить ещё мясной или рыбный продукт"
/>);