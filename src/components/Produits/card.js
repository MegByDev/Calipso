import React, { Component } from 'react';

class Card extends Component {
	render() {
		const { name, price, devise, description, img, onClick } = this.props;
		return (
			<div id="ContainerCard" className="col s2">
				<div className="card">
					<div className="card-image">
<<<<<<< HEAD:src/components/Produits/card.js
						<img src={img} className="card-image" />
=======
						<img className="ImageArticle" src={img} alt="Paysage" />
>>>>>>> 58ed6689e55b928541114edaed820a88977021e6:src/Produits/card.js
						<span className="card-title">{name}</span>
						<a className="btn-floating halfway-fab waves-effect waves-light red" onClick={onClick}>
							<i className="material-icons">send</i>
						</a>
					</div>
					<div className="card-content">
<<<<<<< HEAD:src/components/Produits/card.js
						<p>{price} {devise}</p>
=======
						<p>{price}€</p>
>>>>>>> 58ed6689e55b928541114edaed820a88977021e6:src/Produits/card.js
						<p>{description}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
