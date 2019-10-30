import React from 'react'
import './Map.css'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

class AddPin extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: [[45.5017, -73.567]]
    };
  }

  addMarker = (e) => {
    const {markers} = this.state
    markers.push(e.latlng)
    this.setState({markers})
  }

  render() {
    return (
      <Map 
        center={[45.5017, -73.567]} 
        onClick={this.addMarker}
        zoom={15} 
        >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {this.state.markers.map((position, idx) => 
          <Marker key={`marker-${idx}`} position={position}>
          <Popup>
            <span>Now we need to add<br/> image and text.</span>
          </Popup>
        </Marker>
        )}
      </Map>
    );
  }
}

export default AddPin;
