import React, { Component } from 'react';
import './Api_map.scss';
import axios from 'axios';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';




class Map_api extends Component {
    state = {
		zoom: '3',
		lat:'16',
		lng:'62',
	};
    render() {
    	const position = [this.state.lat , this.state.lng]
        return (
            <div>
             	<Map center={position} zoom={this.state.zoom}>
					<TileLayer attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
					<Marker position={position}>
						<Popup>
							<span>
								ICI<br />
							</span>
						</Popup>
					</Marker>
				</Map>   
            </div>
        );
    }
}

 
export default Map_api;