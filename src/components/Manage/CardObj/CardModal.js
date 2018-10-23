import React from 'react'
import "./CardObj.css"
import {
    Badge,
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import {translate} from "../Manage"

const CardModal = ({modal, toggleModal, obj}) => {
    const imageUrl = translate(obj.image);
    return (
        <Modal isOpen={modal}>
            <ModalHeader toggle={toggleModal}> <img src={imageUrl} alt="product"/><h1>{obj.title}</h1></ModalHeader>
            <ModalBody>
                <Badge>СоставK:</Badge>
                <p className="set-box-title">{obj.consist}</p>
            </ModalBody>
            <Button className="addToCart" onClick={ () => toggleModal() }>Отмена</Button>
            <ModalFooter>
            </ModalFooter>
        </Modal>
    )
};


export default CardModal