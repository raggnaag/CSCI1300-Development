import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Beneteau from './Images/Beneteau.jpg'
import FilteredList from './FilteredList';
import Boats from './Boats';
import Contender from './Images/Contender.jpg'
import Intrepid from './Images/Intrepid.jpg'
import KeyWest from './Images/Key-West.jpg'
import Stingray from './Images/Stingray.jpg'
import Dinghy from './Images/Dinghy.jpg'
import Jeanneau from './Images/Jeanneau.jpg'
import XYachts from './Images/XYachts.jpg'
import Hr from './Images/Hr.jpg'
import Fortyniner from './Images/fortyniner.jpg'
import Bavaria from './Images/Bavaria.jpg'
import Jetski from './Images/Jetski.jpg'



// create a boat list using the 'const' variable keyword
const boats = [
	{name: "Contender", type: "Motorboats", price:"45.000", url: Contender},
	{name: "Intrepid", type: "Motorboats", price:"32.500", url: Intrepid},
	{name: "Key West", type: "Motorboats", price:"5.250", url: KeyWest},
	{name: "Stingray", type: "Motorboats", price:"20.200", url: Stingray},
	{name: "Bavaria", type: "Motorboats", price:"55.00", url: Bavaria},
	{name: "Sea Doo", type: "Motorboats", price:"23.000", url: Jetski},
	{name: "Dinghy", type: "Sailboats", price:"350", url: Dinghy},
	{name: "Beneteau", type: "Sailboats", price:"500.000", url: Beneteau},
	{name: "Jenneau", type: "Sailboats", price:"350.000", url: Jeanneau},
	{name: "X-yachts", type: "Sailboats", price:"650.000", url: XYachts},
	{name: "Halberg rassy", type: "Sailboats", price:"100.000", url: Hr},
	{name: "49er", type: "Sailboats", price:"25.000", url: Fortyniner}

	];

class App extends Component {
    render() {
        return (
	<div className="App">
          <HelloWorld name={''}/>
          <FilteredList items={boats}/>
      </div>
        );
    }
}

export default App;
