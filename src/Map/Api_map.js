import React, { Component } from 'react';
import './Api_map.scss';
import axios from 'axios';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';




class Map_api extends Component {
    state = {
		zoom: 12,
	};
    render() {
        return (
            <div>
             	<Map zoom={this.state.zoom}>
					<TileLayer
						attribution="&amp;copy <a href=&quot;https://osm.org/go/YzRsbhc--?m=&relation=3541540;>OpenStreetMap</a> contributors"
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker>
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