import React from 'react';
import {Card, CardBody, CardTitle, CardImg, CardText, Button} from 'reactstrap'
import {encode} from "../../../clearFunctions/clearFunctions";
import SetModal from "./SetModal";

class SetCard extends React.Component {
    constructor() {
        super();
        this.state = {
            modal: false
        };
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal
        })
    }

    render()  {
        const { obj, saveToCart, deleteSet} = this.props;
        const { modal } = this.state;
        let imageUrl;
        if (obj.image) {
            imageUrl = "data:image/png;base64," + encode(obj.image.data);
        } else {
            imageUrl = ""
        }
        return (
            <div>
                <Card className="card" >
                    <CardImg className="img-rounded pointer" onClick={this.toggleModal} top width="100%" src={imageUrl} alt="Set image"/>
                    <CardBody>
                        <div className="set-box-price">{obj.price} руб.</div>
                        <CardTitle className="set-box-name">{obj.name}</CardTitle>
                        <CardText className="set-box-title">{obj.description}</CardText>
                        <Button className="addToCart" onClick={() => {saveToCart(obj)}}>Изменить</Button>
                        <Button className="delete" onClick={() => {deleteSet(obj)}}>Удалить</Button>
                    </CardBody>
                </Card>
                <SetModal toggleModal={this.toggleModal} saveToCart={saveToCart} modal={modal} obj={obj}/>
            </div>
        )
    };


}

export default SetCard;