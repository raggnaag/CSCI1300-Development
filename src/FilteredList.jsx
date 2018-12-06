import React, { Component } from 'react';
import { DropdownButton, ButtonToolbar, Button, MenuItem } from 'react-bootstrap';
import List from './List';


class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)

    this.state = {
      search: "",
      type: "",
      sort: "no",
      on: true
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
  onFilter = (event) => {
    this.setState({type: event}) //to be able to call in MenuItem aventKey
  }

  onPrice = (event) => {
    this.setState({price: event}) //to be able to call in MenuItem aventKey
  }

  //TODO (FilteredList): sEARCH IS A FUNCTION Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
      return ((item.name.toLowerCase().search(this.state.search) !== -1) &&
      ((item.type.search(this.state.type)) !== -1));
      console.log("FILTERING")
  }

  reset = (event) => {
    this.setState({sort:"no"})
  }

  sortItem = () => {
    // this.props.items.sort(function(a,b) {return b.price - a.price});
    this.setState({sort: "yes"})
  }

  render(){
    /*var filter = this.props.items.filter(this.filterItem);*/
    /*var sort = this.props.items.filter(this.sortItem);*/
    return (
      <div className="filter-list">
        <h1>Boats</h1>
          <DropdownButton id="typeDropdown" title={"Type"}>
            <MenuItem eventKey="" onSelect={this.onFilter}>All</MenuItem>
            <MenuItem eventKey="Sailboats" onSelect={this.onFilter}>Sailboats</MenuItem>
            <MenuItem eventKey="Motorboats" onSelect={this.onFilter}>Motorboats</MenuItem>
          </DropdownButton>
            <Button ClassName="price" onClick={this.sortItem}>
              Sort on price: Hi to low
            </Button>
            <Button bsStyle="primary" onClick={this.reset}>
              Clear sorting
            </Button>
            <p></p>
                <input type="text" placeholder="Search by brand" onChange={this.onSearch} />
            <p></p>
                <List items={this.props.items.filter(this.filterItem)} sort = {this.state.sort}/>
            <p></p>
      </div>
    );
  }
}

export default FilteredList;
