import React, { Component } from 'react';
import './App.css';

class Aggregate extends Component{
  render(){
    return(
      <div style={{width:"40%", display: 'inline-block'}} className="Aggregate">
        <h2 style = {{color: '#fff2'}}> number Text </h2>
      </div>
    );
  }
}

class Search extends Component{
  render(){
    return(
      <div>
        <img/>
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component{
  render(){
    return(
      <div style={{width: "25%", display: 'inline-block'}}>
        <img/>
        <h3> Playlist name </h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
          <li>Song 4</li>
          <li>Song 5</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
       <div className="App">
         <h1> mySpotify </h1>
         <Aggregate/>
         <Aggregate/>
         <Search/>
         <Playlist/>
       </div>
    );
  }
}

export default App;
