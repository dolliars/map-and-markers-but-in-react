import React from 'react'
import './Map.css'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import Comments from './Comments'

class BaseMap extends React.Component {
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

  handleClick = (e) => {
    alert('clicked')
  }

  handleFileSelected = e => {
    console.log(e.target.files[0])
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
            <span>Now we need to add<br/> image and text. <br /></span>
            <button onClick={this.handleClick}>Add an image</button>
            <input type="file" accept="image/*" onChange={this.handleFileSelected} />
          </Popup>
        </Marker>
        )}
      </Map>
    );
  }
}

function MontrealMap() {
  return (
    <div className="MontrealMap"> 
      <h1>Montreal Urban Art</h1>
      <BaseMap />
    </div>
  )
}

export default MontrealMap;

