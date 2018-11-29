import React from 'react'
import AddSet from "../../components/AddSet/AddSet";
import SuccessAdd from "../../components/SuccessAdd/SuccessAdd";

export const UpdateSets = (props) => (<AddSet {...props} type="UPDATE"/>);

export const SuccessUpdateSets = (props) => (<SuccessAdd {...props}
                                                        title="Набор успешно обновлен"
                                                        link="/manageSets"
                                                        addMore="Вернуться обратно"
/>);