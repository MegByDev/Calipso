import React, { Component } from 'react';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import Map_api from './Map/Api_map.js';



import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      
      <Map_api/>
      <Footer/>
      </div>
    );
  }
}

export default App;
