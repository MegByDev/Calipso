import React, { Component } from 'react';
import img from '../Images/Itadakimass.png';
import './header.scss';

class Header extends Component {
	render() {
		return (
			<div>
				<nav className="nav-extended">
					<div className="nav-wrapper">
						<p href="#!" className="brand-logo">
<<<<<<< HEAD:src/components/header/header.js
=======
							<img className="Logo" src={img} alt="Logo" />
>>>>>>> 58ed6689e55b928541114edaed820a88977021e6:src/header/header.js
						</p>
						<h1 className="logo">CALIPSO</h1>
					</div>
					<div className="nav-content">
<<<<<<< HEAD:src/components/header/header.js
					
=======
>>>>>>> 58ed6689e55b928541114edaed820a88977021e6:src/header/header.js
						<a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
							<i className="material-icons">shopping_cart</i>
						</a>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
