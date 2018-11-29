import React from 'react'
import AddSimpleProduct from "../../components/AddSimpleProduct/AddSimpleProduct";
import SuccessAdd from "../../components/SuccessAdd/SuccessAdd";

export const AddBread = (props) => (<AddSimpleProduct {...props}
                                                     title="Добавьте хлебный продукт"
                                                     url='http://localhost:3000/bread/createBread'
                                                     backTo="/addBread"
                                                     goTo="/successAddBread"
/>);

export const SuccessAddBread = (props) => (<SuccessAdd {...props}
                                                      title="Хлебный продукт успешно добавлен"
                                                      link="/addBread"
                                                      addMore="Добавить ещё хлебный продукт"
/>);