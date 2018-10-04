import React from 'react'
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'
import './Item.css'
import {encode} from "../../clearFunctions/clearFunctions";

const Item = (props) => {
    const { item : { name, count, image} } = props;
    const src = "data:image/png;base64," + encode(image);
    return (
        <div>
            <Card className="cardItem">
                <CardImg className="cardImage" src={src} alt="itemImage"/>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>{count}</CardSubtitle>
                    <Button color="danger">Удалить</Button>
                </CardBody>
            </Card>
        </div>
    )
};



export default Item