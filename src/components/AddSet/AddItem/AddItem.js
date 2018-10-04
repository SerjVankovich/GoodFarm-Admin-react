import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import {encode} from "../../../clearFunctions/clearFunctions";

class AddItem extends React.Component {
    constructor() {
        super();

        this.state = {
            item: {
                name: "",
                count: "",
                image: []
            },

            validation: {
                name: false,
                count: false,
            },

            buttonEnable: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.clearModal = this.clearModal.bind(this)
    }

    handleChange(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const contents = event.target.result;
                const uint8Array = new Uint8Array(contents);
                const array = Array.prototype.map.call(uint8Array, x => x);

                const { item, validation } = this.state;
                item.image = array;

                this.setState({
                    item, buttonEnable: AddItem.checkAll(item, validation)
                })

            };
            if (file !== undefined) {
                reader.readAsArrayBuffer(file);
            } else {
                const { item, validation } = this.state;
                item.image = [];
                this.setState({
                    item, buttonEnable: AddItem.checkAll(item, validation)
                })
            }
    }

    handleTextChange(event) {
        const key = event.target.id;
        const {value} = event.target;
        const {item, validation} = this.state;
        item[key] = value;
        validation[key] = value.length > 2;
        this.setState({
            item, validation, buttonEnable: AddItem.checkAll(item, validation)
        });
    }

    static checkAll(item, validation) {
        console.log(validation.name, validation.count, item.image.length);
        return validation.name && validation.count && item.image.length !== 0
    }

    clearModal() {
        this.setState({
            item: {
                name: "",
                count: "",
                image: []
            },

            validation: {
                name: false,
                count: false,
            },

            buttonEnable: false
        })
    }

    render() {
        const {modal, toggleModal, addItem} = this.props;
        const {item, validation, buttonEnable} = this.state;

        const file = "data:image/png;base64," + encode(item.image);
        return (
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>Изображение (png)</Label>
                            <Input onChange={this.handleChange} accept=".png" type="file" name="file" />
                            <img className="picture" src={file} alt="No file"/>
                        </FormGroup>
                        <hr/>
                        <FormGroup>
                            <Label>Название продукта</Label>
                            <Input valid={validation.name} invalid={!validation.name} id="name" value={item.name} onChange={this.handleTextChange} placeholder="Введите название продукта" type="text"/>
                        </FormGroup>
                        <hr/>
                        <FormGroup>
                            <Label>Количество</Label>
                            <Input valid={validation.count} invalid={!validation.count} id="count" value={item.count} onChange={this.handleTextChange} placeholder="Введите количество продукта" type="text"/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" disabled={!buttonEnable} onClick={() => {
                        toggleModal();
                        addItem(item);
                        this.clearModal()
                    }}>Добавить</Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>Отмена</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default AddItem;