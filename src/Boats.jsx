import React, { Component } from 'react';

// boat component, prints out the boat, image and price
class Boats extends Component {
  render() {
    return (
      <div>
        <img src={this.props.item.url}/>
          <p>
            {this.props.item.name}  - 
            ${this.props.item.price}
          </p>
      </div>
    );
  }
}
export default Boats;
