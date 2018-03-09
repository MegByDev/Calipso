import React, { Component } from 'react';
import Header from './components/header/header.js';
import Jumbo from './components/Jumbotron/jumbo.js';
import Card from './components/Produits/Articles.js';
import Footer from './components/footer/footer.js';
import Map_api from './components/Map/Api_map.js';

import './App.scss';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Jumbo />
				<Card />
				<Map_api />
				<Footer />
			</div>
		);
	}
}

export default App;
