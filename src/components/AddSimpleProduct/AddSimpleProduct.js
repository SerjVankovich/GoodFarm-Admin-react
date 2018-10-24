import {Form, Input, Container, FormGroup, Label, Button} from 'reactstrap'
import React from 'react'
import './AddSimpleProduct.css'
import {encode} from "../../clearFunctions/clearFunctions";


class AddSimpleProduct extends React.Component {
    constructor(props) {
        super(props);

        const { type, location: {state} } = props;

        if (!type) {
            this.state = {
                obj: {
                    title: '',
                    price: '',
                    description: '',
                    consist: '',
                    quantity: '',
                    image: []
                },

                validation: {
                    title: false,
                    price: false,
                    description: false,
                    consist: false,
                    quantity: false,
                    image: false
                },

                buttonEnable: false
            };
        } else {
            state.image = state.image.data;
            this.state = {
                obj: state,
                validation: {
                    title: true,
                    price: true,
                    description: !state.description,
                    consist: !state.consist,
                    quantity: state.quantity.length > 2,
                    image: state.image.length > 0
                },
                buttonEnable: true
            }
        }

        this.handleTextChange = this.handleTextChange.bind(this);
        this.fetchToServer = this.fetchToServer.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    fetchToServer() {
        const { url, backTo, goTo, urlUpdate } = this.props;
        const { obj } = this.state;

        const { type } = this.props;
        if (type === "UPDATE") {
            this.putData(urlUpdate, obj, goTo, backTo)
        } else {
            this.postData(url, obj, goTo, backTo)
        }

    }

    postData(url, obj, goTo, backTo) {
        fetch(url,  {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(body => {
                console.log(body.message);
                if (body.message === "Added successfully") {
                    this.props.history.push(goTo)
                }
            })
            .catch(err => {
                this.props.history.push({ pathname: '/fail', state: { error: err.message, backTo }});
            })
    }

    putData(url, obj, goTo, backTo) {
        fetch(url + `/${obj._id}`,  {
            method: "PUT",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(() => {
                    this.props.history.push(goTo)
            })
            .catch(err => {
                this.props.history.push({ pathname: '/fail', state: { error: err.message, backTo }});
            })
    }

    handleChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const contents = event.target.result;
            const uint8Array = new Uint8Array(contents);
            const array = Array.prototype.map.call(uint8Array, x => x);

            const { obj } = this.state;
            obj.image = array;

            this.setState({
                milk: obj, buttonEnable: AddSimpleProduct.checkAll(obj, this.state.validation)
            })

        };
        if (file !== undefined) {
            reader.readAsArrayBuffer(file);
        } else {
            const { obj } = this.state;
            obj.image = [];
            this.setState({
                milk: obj, buttonEnable: AddSimpleProduct.checkAll(obj, this.state.validation)
            })
        }


    }

    handleTextChange(event) {
        const key = event.target.id;
        const { value } = event.target;
        const { obj, validation } = this.state;
        obj[key] = value;
        validation[key] = value.length > 1;
        this.setState({
            milk: obj, validation, buttonEnable: AddSimpleProduct.checkAll(obj, validation)
        });
    }

    static checkAll(milk, validation) {
        return validation.title && validation.price && validation.quantity && milk.image.length > 0
    }

    render() {
        const {title} = this.props;
        const { obj, validation } = this.state;
        const file = "data:image/png;base64," + encode(obj.image);
        return (
            <Container>
                <h1 className="center">{title}</h1>
                <hr/>
                <Form>
                    <FormGroup>
                        <Label>Изображение (png)</Label>
                        <Input onChange={this.handleChange} accept=".png" type="file" name="file" />
                        <img className="picture" src={file} alt="No file"/>
                    </FormGroup>
                    <hr/>
                    <FormGroup>
                        <Label>Название продукта</Label>
                        <Input valid={validation.title} invalid={!validation.title} id="title" value={obj.name || obj.title} onChange={this.handleTextChange} placeholder="Введите название продукта" type="text"/>
                    </FormGroup>
                    <hr/>
                    <FormGroup>
                        <Label>Количество</Label>
                        <Input valid={validation.quantity} invalid={!validation.quantity} id="quantity" value={obj.quantity} onChange={this.handleTextChange} placeholder="Введите количесто продукта" type="text"/>
                    </FormGroup>
                    <hr/>
                    <FormGroup>
                        <Label>Описание</Label>
                        <Input id="description" value={obj.description} onChange={this.handleTextChange} placeholder="Введите описание продукта" type="text"/>
                    </FormGroup>
                    <hr/>
                    <FormGroup>
                        <Label>Состав</Label>
                        <Input id="consist" value={obj.consist} onChange={this.handleTextChange} placeholder="Введите состав продукта" type="text"/>
                    </FormGroup>
                    <hr/>
                    <FormGroup>
                        <Label>Цена</Label>
                        <Input valid={validation.price} invalid={!validation.price} id="price" value={obj.price} onChange={this.handleTextChange} placeholder="Введите цену набора (в рублях)" type="number"/>
                    </FormGroup>
                    <Button className="addBtn" onClick={this.fetchToServer} disabled={!this.state.buttonEnable} color="success">Добавить</Button>

                </Form>
            </Container>
        )
    }
}

export default AddSimpleProduct;