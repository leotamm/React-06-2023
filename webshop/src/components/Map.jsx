import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) { 

  return (
  <div>

    <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
      <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[59.4208, 24.7936]}>
        <Popup>
          Ülemiste keskus <br /> 
          <img className='open-hours' src='/24-hour-clock.png' alt='Open hours'/>
          {' '}9-20 <br />
          <a target='_blank' rel='noreferrer' href='https://www.google.com/maps/@59.4219327,24.7917693,17.54z?entry=ttu'>Suur-Sõjamäe 4</a>
        </Popup>
      </Marker>
      <Marker position={[59.4273, 24.7250]}>
        <Popup>
          Kristiine keskus <br /> 
          <img className='open-hours' src='/24-hour-clock.png' alt='Open hours'/>
          {' '}10-21 <br />
          <a target='_blank' rel='noreferrer' href='https://www.google.com/maps/place/Endla+43a,+10615+Tallinn/@59.4272663,24.723817,17.81z/data=!4m14!1m7!3m6!1s0x4692948ff56ecd75:0x4f0fde99c451563a!2sKristiine+Keskus!8m2!3d59.4272443!4d24.7230791!16s%2Fm%2F0w7mjwq!3m5!1s0x4692948ffc2473bf:0xe041563e20ecdaac!8m2!3d59.4272474!4d24.725075!16s%2Fg%2F11nnklz7wf?entry=ttu'>Endla 45</a>
        </Popup>
      </Marker>
      <Marker position={[58.3777, 26.7301]}>
        <Popup>
          Tasku keskus <br />  
          <img className='open-hours' src='/24-hour-clock.png' alt='Open hours'/>
          {' '}10-21 <br />
          <a target='_blank' rel='noreferrer' href='https://www.google.com/maps/@58.3780258,26.7310443,17z?entry=ttu'>Turu 2</a>
        </Popup>
      </Marker>
      <Marker position={[58.3874, 24.5045]}>               
        <Popup>
          Port Artur <br />  
          <img className='open-hours' src='/24-hour-clock.png' alt='Open hours'/>
          {' '}10-20 <br />
          <a target='_blank' rel='noreferrer' href='https://www.google.com/maps/place/Port+Artur+1/@58.3863809,24.5031594,21z/data=!4m7!3m6!1s0x46ecfd3d2ce8f65d:0xa101739bb8f56c1d!4b1!8m2!3d58.386412!4d24.5030496!16s%2Fg%2F125_j7xlm?entry=ttu'>Hommiku 2</a>
        </Popup>
      </Marker>
    </MapContainer>
  </div>)
}

export default Map; 