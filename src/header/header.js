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
							<img className="Logo" src={img} alt="Logo" />
						</p>
					</div>
					<div className="nav-content">
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
