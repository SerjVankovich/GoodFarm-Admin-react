import React from 'react'
import Manage from "../../components/Manage/Manage";
import CardObj from "../../components/Manage/CardObj/CardObj";

export const ManageMilk = (props) => (<Manage {...props}
                                             component={(props) => <CardObj {...props} updateUrl="/updateMilk"/>}
                                             delUrl="deleteMilk"
                                             url="milk"
                                             addUrl="addMilk"
/>);