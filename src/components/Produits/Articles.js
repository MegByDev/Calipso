import React, { Component } from 'react';
import Card from './card.js';
import data from './data_produits.js';
import Cart from './carte.js';
import './Articles.scss';

class Articles extends Component {
	state = {
		cartData: [],
	};
	sendToArray = product => {
		let { cartData } = this.state;
		// on vérifie si l'element existe déja dans le tab
		let index = cartData.indexOf(product);
		if (index === -1) {
			this.setState({
				cartData: [...this.state.cartData, product],
			});
		} else {
			// incrément le nombre
			cartData[index].nb++;
			//crée un clé total et lui donne la valeur du prix multiplier par le nombre
			cartData[index].total = cartData[index].price * cartData[index].nb;
			this.setState({
				cartData: [...cartData],
			});
		}
	};

	delete = (product, i) => {
		let { cartData } = this.state;
		//si la clé est supp a 1
		if (cartData[i].nb > 1) {
			// tu décrémentes la valeur de la clé nbr
			cartData[i].nb--;
			//tu recalcules le total
			cartData[i].total = cartData[i].nb * cartData[i].price;
		} else {
			//si nah tu me retire juste l'élément à supp
			cartData.splice(i, 1);
		}
		this.setState({
			cartData: [...cartData],
		});
	};

	render() {
		console.log(this.state.cartData);
		return (
			<div className="App">
				<div className="row">
					{data.map((el, i) => {
						return (
							<Card
								key={i}
								name={el.name}
								price={el.price}
								devise={el.devise}
								description={el.description}
								img={el.img}
								alt={el.name}
								onClick={() => this.sendToArray(el)}
							/>
						);
					})}
					<div>
						<ul className="collection">
							{this.state.cartData.map((el, i) => {
								return (
									<Cart
										key={i}
										img={el.img}
										nb={el.nb}
										name={el.name}
										total={!el.total ? el.price : el.total}
										initDelete={() => this.delete(el, i)}
									/>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
export default Articles;
