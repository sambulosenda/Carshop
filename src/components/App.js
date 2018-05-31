import React, { Component } from 'react';
import SearchCars from './SearchCars';
import '../styles/index.css';


class App extends Component{
  render(){
    return(
      <div>
        <h2>car shop</h2>
        <SearchCars/>
       
      </div>
    )
  }
}
export default App;
