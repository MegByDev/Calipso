import React, { Component } from 'react';

class Card extends Component {
	render() {
		const { name, price, devise, description, img, onClick } = this.props;
		return (
			<div id="ContainerCard" className="col s3">
				<div className="card">
					<div className="card-image">

						<img className="ImageArticle" src={img} alt="Paysage" />
						<span className="card-title">{name}</span>
						<a className="btn-floating halfway-fab waves-effect waves-light red" onClick={onClick}>
							<i className="material-icons">send</i>
						</a>
					</div>
					<div className="card-content">
						<p>{price}€</p>
						<p>{description}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
