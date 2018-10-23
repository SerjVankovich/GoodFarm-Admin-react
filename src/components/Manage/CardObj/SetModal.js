import React from 'react'
import "./CardObj.css"
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
import {translate} from "../Manage"

const SetModal = ({modal, toggleModal, obj}) => {
    return (
        <Modal isOpen={modal}>
            <ModalHeader toggle={toggleModal}><h1>{obj.title}</h1></ModalHeader>
            <div className="set-box-name">В набор входит:</div>
            <ModalBody>
                {obj.items && obj.items.length !== 0
                    ?
                    obj.items.map((item, key) => (
                        <Card className="panel" key={key}>
                            <CardImg className="img-rounded" src={translate(item.image)} alt="item_image" />
                            <CardTitle>
                                {item.name}
                            </CardTitle>
                            <CardBody>
                                <div className="set-box-name">{item.count}</div>
                            </CardBody>
                        </Card>))
                        :
                    <div>No items</div>
                }
            </ModalBody>
            <Button className="addToCart" onClick={ () => toggleModal() }>Отмена</Button>
            <ModalFooter>
            </ModalFooter>
        </Modal>
    )
};


export default SetModal