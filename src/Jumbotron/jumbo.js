import React, { Component } from 'react';
import './jumbo.scss';
import fond from '../Images/resto.jpeg';

const divStyle = {
	backgroundImage: `url(${fond})`,
	height: '500px',
	backgroundSize: 'cover',
	backgroundPosition: '2% 75%',
	//backgroundColor: 'rgb(128, 118, 118)',
	//backgroundBlendMode: 'multiply',
	width: 'auto',
};
class Jumbotron extends Component {
	render() {
		return (
			<div className="JumbotronResto">
				<div style={divStyle} />
			</div>
		);
	}
}

export default Jumbotron;
