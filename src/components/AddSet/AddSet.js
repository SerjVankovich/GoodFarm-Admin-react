import {Form, Input, Container, FormGroup, Label, Button, Col, Row} from 'reactstrap'
import React from 'react'
import './AddSet.css'
import AddItem from "./AddItem/AddItem";
import {encode} from "../../clearFunctions/clearFunctions";
import Item from "../Item/Item";

class AddSet extends React.Component {
    constructor(){
        super();
        this.state = {
            set: {
                image: [],
                name: "",
                description: "",
                price: "",
                items: []
            },

            validation: {
                name: false,
                description: false,
                price: false,
            },

            buttonEnable: false,

            url: window.URL,

            modalItem: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.fetchToServer = this.fetchToServer.bind(this);
        this.addItem = this.addItem.bind(this);
        this.toggleModal = this.toggleModal.bind(this)
    }

    static checkAll(set, validation) {
        const valid = validation.name && validation.description && validation.price && set.image.length !== 0;
        console.log(valid);
        return valid
    }

    fetchToServer() {
        const { set } = this.state;
        fetch("http://localhost:3000/sets/createSet",  {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(set)
        })
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(body => {
                console.log(body);
                if (body.message === "Set added succesfully") {
                    this.props.history.push('/successAddSet')
                }
            })
            .catch(err => {
                this.props.history.push({ pathname: '/fail', state: { error: err.message, backTo: "/addSet" }});
            })
    }

    handleTextChange(event) {
        const key = event.target.id;
        const { value } = event.target;
        const { set, validation } = this.state;
        set[key] = value;
        validation[key] = value.length > 2;
        this.setState({
            set, validation, buttonEnable: AddSet.checkAll(set, validation)
        });

    }

    addItem(item) {
        const { set } = this.state;
        set.items.push(item);
        console.log(set);

        this.setState({
            set
        })
    }

    toggleModal() {
        this.setState({
            modalItem: !this.state.modalItem
        })
    }


    handleChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const contents = event.target.result;
            const uint8Array = new Uint8Array(contents);
            const array = Array.prototype.map.call(uint8Array, x => x);

            //this.fetchToServer(array);

            const { set } = this.state;
            set.image = array;

            this.setState({
                set, buttonEnable: AddSet.checkAll(set, this.state.validation)
            })

        };
        if (file !== undefined) {
            reader.readAsArrayBuffer(file);
        } else {
            const { set } = this.state;
            set.image = [];
            this.setState({
                set, buttonEnable: AddSet.checkAll(set, this.state.validation)
            })
        }


    }

    render() {

        const { set, validation } = this.state;
        const file = "data:image/png;base64," + encode(set.image);

        return (
            <Container>
                <h1 className="center">Добавьте набор</h1>
                <hr/>
                <Form>
                    <FormGroup>
                        <Label>Изображение (png)</Label>
                        <Input onChange={this.handleChange} accept=".png" type="file" name="file" />
                        <img className="picture" src={file} alt="No file"/>
                    </FormGroup>
                    <hr/>
                    <FormGroup>
                        <Label>Название набора</Label>
                        <Input valid={validation.name} invalid={!validation.name} id="name" value={set.name} onChange={this.handleTextChange} placeholder="Введите название набора" type="text"/>
                    </FormGroup>
                    <hr/>
                    <FormGroup>
                        <Label>Описание</Label>
                        <Input valid={validation.description} invalid={!validation.description} id="description" value={set.description} onChange={this.handleTextChange} placeholder="Введите описание набора" type="text"/>
                    </FormGroup>
                    <hr/>
                    <FormGroup>
                        <Label>Цена</Label>
                        <Input valid={validation.price} invalid={!validation.price} id="price" value={set.price} onChange={this.handleTextChange} placeholder="Введите цену набора (в рублях)" type="number"/>
                    </FormGroup>

                    {set.items.length !== 0 ? set.items.map((item, id) => (
                        <Container>
                            <Row>
                                <Col key={id} xs="12" md="4" lg="3" >
                                    <Item item={item}/>
                                </Col>
                            </Row>
                        </Container>
                        )) : <p>No items</p>}
                    <Button className="addItemBtn" onClick={this.toggleModal}>+ продукт</Button>
                    <Button className="addBtn" onClick={this.fetchToServer} disabled={!this.state.buttonEnable} color="success">Добавить</Button>

                </Form>
                <AddItem modal={this.state.modalItem} toggleModal={this.toggleModal} addItem={this.addItem}/>
            </Container>




        )
    }
}

export default AddSet;