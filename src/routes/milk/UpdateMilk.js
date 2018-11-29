import React from 'react'
import AddSimpleProduct from "../../components/AddSimpleProduct/AddSimpleProduct";
import SuccessAdd from "../../components/SuccessAdd/SuccessAdd";

export const UpdateMilk = (props) => (<AddSimpleProduct {...props}
                                                title="Обновите молочный продукт"
                                                type="UPDATE"
                                                urlUpdate="http://localhost:3000/milk/updateMilk"
                                                backTo="/manageMilk"
                                                goTo="/successUpdateMilk"
/>);

export const SuccessUpdateMilk = (props) => (<SuccessAdd {...props}
                                                 title="Молочный продукт успешно обновлен"
                                                 link="/manageMilk"
                                                 addMore="Вернуться обратно"
/>);
