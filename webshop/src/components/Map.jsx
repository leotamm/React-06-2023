import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
import { useState, useEffect } from 'react';
import config from '../data/config.json';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) {

  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch(config.shopsUrl)
      .then(res => res.json())
      .then(data => setShops(data || []))
  }, []);

  return (
    <div>
      <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
        <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shops.map((shop, index) =>
          <Marker key={index} position={[shop.lng, shop.lat]}>
            <Popup>
              {shop.name} <br />
              <img className='open-hours' src='/24-hour-clock.png' alt='Open hours' />{' '} {shop.openHours} <br />
              <a target='_blank' rel='noreferrer' href={shop.googleMapsRef}>{shop.address}</a>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>)
}

export default Map; 