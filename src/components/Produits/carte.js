import React, { Component } from 'react';
import './Articles.scss';





class Cart extends Component {
	render() {
		const { img, devise, name, total, nb, initDelete } = this.props;
		return (
<<<<<<< HEAD:src/components/Produits/carte.js
			<ul className="collection-item avatar">
			<li>
				<img src={img} alt="" className="circle" />
				<span className="Title">{name}</span>
				<p>
					<b>Prix:  </b>
					{total} <br />{devise}
=======
			<li className="collection-item avatar">
				<img src={img} alt="" className="Circle" />
				<span className="title">{name}</span>
				<p>
					<b>Prix: </b>
					{total} euros<br />
>>>>>>> 58ed6689e55b928541114edaed820a88977021e6:src/Produits/carte.js
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
