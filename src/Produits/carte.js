import React, { Component } from 'react';

class Cart extends Component {
	render() {
		const { img, name, total, nb, initDelete } = this.props;
		return (
			<li className="collection-item avatar">
				<img src={img} alt="" className="Circle" />
				<span className="title">{name}</span>
				<p>
					<b>Prix: </b>
					{total} euros<br />
					<b>Nombre de produits: </b>
					{nb}
				</p>
				<a href="#!" className="secondary-content" onClick={initDelete}>
					<button>
						<i className="material-icons">delete</i>
					</button>
				</a>
			</li>
		);
	}
}

export default Cart;
