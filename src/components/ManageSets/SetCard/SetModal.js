import React from 'react'
import "./SetCard.css"
import {Badge, Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {encode} from "../../../clearFunctions/clearFunctions";

const SetModal = ({modal, toggleModal, obj, saveToCart}) => {
    let imageUrl;
    if (obj.image) {
        imageUrl = "data:image/png;base64," + encode(obj.image.data);
    } else {
        imageUrl = ""
    }
    return (
        <Modal isOpen={modal}>
            <ModalHeader toggle={toggleModal}><img className='set-box-image img-rounded' src={imageUrl} alt="product"/><h1>{obj.title}</h1></ModalHeader>
            <ModalBody>
                <Badge>Состав:</Badge>
                <p className='set-box-title'>{obj.consist}</p>
            </ModalBody>
            <Button className="addToCart" onClick={() => {
                saveToCart(obj);
                toggleModal();
            }}>Добавить в корзину</Button>
            <ModalFooter>
            </ModalFooter>
        </Modal>
    )
};

export default SetModal