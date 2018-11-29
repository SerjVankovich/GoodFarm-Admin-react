import React from 'react'
import AddSimpleProduct from "../../components/AddSimpleProduct/AddSimpleProduct";
import SuccessAdd from "../../components/SuccessAdd/SuccessAdd";

export const AddVegFruits = (props) => (<AddSimpleProduct {...props}
                             title="Добавьте овощи или фрукты"
                             url='http://localhost:3000/vegFruits/createVegFruit'
                             backTo="/addVegFruits"
                             goTo="/successAddVegFruits"
/>);

export const SuccessAddVegFruits = (props) => (<SuccessAdd {...props}
                                                          title="Растительный продукт успешно добавлен"
                                                          link="/addVegFruits"
                                                          addMore="Добавить ещё растительный продукт"
/>);