import React, { useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import axios from 'axios';

export default class Iss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [39.6127287, 33.4453632],
      grayscale: L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          id: 'MapID',
          tileSize: 512,
          zoomOffset: -1,
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }
      ),
      streets: L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          id: 'MapID',
          tileSize: 512,
          zoomOffset: -1,
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }
      ),
    };
  }

  componentDidMount(){
    setInterval(() => {
      axios.get('http://api.open-notify.org/iss-now.json')
      .then(response => {
        //console.log(response.data.iss_position);
        const {latitude, longitude} = response.data.iss_position;
        this.setState({position:[latitude, longitude]});
      })
    }, 3000);
  }

  render() {
    const { position, grayscale, streets } = this.state;
    const layers = [grayscale];
    return (
      <Map center={position} zoom={3} layers={layers}>
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}
