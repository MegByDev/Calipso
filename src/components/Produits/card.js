import React, { Component } from 'react';



class Card extends Component {
	render() {
		const { name, price, devise, description, img, onClick } = this.props;
		return (
			<div className="col s4">
				<div className="card">
					<div className="card-image">
						<img src={img} className="card-image" />
						<span className="card-title">{name}</span>
						<a className="btn-floating halfway-fab waves-effect waves-light red" onClick={onClick}>
							<i className="material-icons">send</i>
						</a>
					</div>
					<div className="card-content">
						<p>{price} {devise}</p>
						<p>{description}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;