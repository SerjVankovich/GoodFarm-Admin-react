import React from 'react';
import {Card, CardBody, CardTitle, CardImg, CardText, Button} from 'reactstrap'
import SetModal from "./SetModal";
import "./CardObj.css"
import {Link} from "react-router-dom";
import {translate} from "../Manage"
import CardModal from "./CardModal";

class CardObj extends React.Component {
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
        const { obj, deleteObj, url, updateUrl} = this.props;
        const { modal } = this.state;
        const imageUrl = translate(obj.image);
        return (
            <div>
                <Card className="card" >
                    <CardImg className="img-rounded pointer" onClick={this.toggleModal} top width="100%" src={imageUrl} alt="Set image"/>
                    <CardBody>
                        <div className="set-box-price">{obj.price} руб.</div>
                        <CardTitle className="set-box-name">{obj.title || obj.name}</CardTitle>
                        <CardText className="set-box-title">{obj.description}</CardText>
                        <Link to={{pathname: updateUrl, state: obj}}><p className="addToCart">Изменить</p></Link>
                        <Button className="delete" onClick={() => {deleteObj(obj)}}>Удалить</Button>
                    </CardBody>
                </Card>
                { url === "sets"
                    ?
                    <SetModal toggleModal={this.toggleModal}  modal={modal} obj={obj}/>
                    :
                    <CardModal toggleModal={this.toggleModal}  modal={modal} obj={obj}/>
                }

            </div>

        )
    };


}

export default CardObj;