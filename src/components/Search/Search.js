import React from "react";
import {Input} from "reactstrap";
import "./Search.css"

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            search: ""
        };

        this.checkInput = this.checkInput.bind(this)
    }

    checkInput(event) {
        const value = event.target.value;
        this.props.findObjs(value);
        this.setState({ search: value})


    }

    render() {
        const { search } = this.state;
        return (
            <div className="Search">
                <span className="Search-icon"/>
                <Input placeholder="Поиск наборов" onChange={this.checkInput} value={search} type="text" className="Search-input"/>
            </div>
        )
    }
}

export default Search