import React, { Component } from 'react';
import './Articles.scss';





class Cart extends Component {
	render() {
		const { img, devise, name, total, nb, initDelete } = this.props;
		return (
			<ul className="collection-item avatar">
			<li>
				<img src={img} alt="" className="circle" />
				<span className="Title">{name}</span>
				<p>
					<b>Prix:  </b>
					{total} <br />{devise}
					<b>Nombre de produits: </b>
					{nb}
				</p>
				<a href="#!" className="secondary-content" onClick={initDelete}>
					<button>
						<i className="material-icons">delete</i>
					</button>
				</a>
			</li>
			</ul>
		);
	}
}

export default Cart;
