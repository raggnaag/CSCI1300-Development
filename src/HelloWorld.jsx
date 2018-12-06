import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

class HelloWorld extends Component {
    render() {
        return (
          <div>
        	   <h1>Welcome to yachtworld{this.props.name}!</h1>
          </div>
        );
    }
}

export default HelloWorld;
