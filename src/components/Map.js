import React from 'react'
import './Map.css'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import heart from './../img/8-bit-heart-64.png'
import AddPin from './AddPin.js'

//function AddPin() {
//  function handleClick(e) {
//    e.preventDefault();
//    console.log('The link was clicked.');
//  }
//
//  return (
//    <Marker position={[45.5003, -73.5671]}>
//    </Marker>
//    //<h1>
//    //  <a href="#" onClick={handleClick}>Click me</a>
//    //</h1>
//  );
//}


function AddImage() {
  return (
    <div>
      <h1>Test Here</h1>
      <img src={heart} />
    </div>
  )
}

function BaseMap(props) {
  return (
    <Map center={props.position} zoom={15}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={props.position}>
        <Popup>Here are words I added<br />And now another line!
          <AddImage />
        </Popup>
      </Marker>

      <AddPin />

    </Map>
  )
}

function MontrealMap() {
  return (
    <div className="MontrealMap"> 
      <h1>Montreal Urban Art</h1>
      <BaseMap position={[45.5017, -73.5673]} />
    </div>
  )
}

export default MontrealMap;

