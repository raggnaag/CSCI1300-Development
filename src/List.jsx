import React, {Component} from 'react';
import Boats from './Boats'
//boat grid cards
class List extends Component {
  renderList() {
    var items = ""
    if (this.props.sort === "yes") {
      items = this.props.items.sort((a,b) => b.price - a.price).map(item => {
        return <li key={item.name}><Boats item = {item}/> </li>
      })
    } else {
      items = this.props.items.map(item => {
        return <li key={item.name}><Boats item = {item}/> </li>
      });
    }
    return items;
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default List;
