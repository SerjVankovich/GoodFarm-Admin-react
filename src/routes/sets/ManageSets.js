import React from 'react'
import Manage from "../../components/Manage/Manage";
import CardObj from "../../components/Manage/CardObj/CardObj";

export const ManageSets = (props) => (<Manage {...props}
                                             component={(props) => <CardObj {...props} updateUrl="/updateSet"/>}
                                             url="sets"
                                             delUrl="deleteSet"
                                             addUrl="/addSet"
/>);