import React, {Component} from 'react';
import {InputGroup, InputGroupAddon, Input, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import Gallery from "./Gallery/Gallery";

class Global extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            items: [],
        }
    }

    search() {
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        if (this.state.query !== '') {
            fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'})
                .then(response => response.json())
                .then(json => {

                    let {items} = json;
                    this.setState({items});
                });
        } else {
            alert('Input must not be empty!!');
        }

    }

    render() {
        return (
            <div className="Global">
                <h1 className="title">Book explorer!!</h1>
                <InputGroup>
                    <Input type="text"
                           placeholder="Search a book"
                           onChange={event => this.setState({query: event.target.value})}
                           onKeyPress={event => {
                               if (event.key === 'Enter') {
                                   this.search();
                               }
                           }} />
                    <InputGroupAddon addonType="append">
                        <Button color="primary" onClick={() => {
                            this.search();
                        }} >Search</Button>
                    </InputGroupAddon>
                </InputGroup>
                <Gallery items={this.state.items}/>
            </div>
        )
    }
}

export default Global;