import { useState, useEffect } from 'react';
import Map from '../../components/Map';
import { Button } from 'react-bootstrap';
import config from '../../data/config.json'

function Shops() {
  const [coordinaates, setCoordinates] = useState({ lngLat: [59.4378, 24.7574], zoom: 11 });
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch(config.shopsUrl)
      .then(res => res.json())
      .then(data => setShops(data || []))
  }, []);

  return (<div>
    <Button variant="light" size="sm" onClick={() => setCoordinates({ lngLat: [58.8856, 25.5591], zoom: 7 })}>Kõik poed</Button>
    <Button variant="light" size="sm" onClick={() => setCoordinates({ lngLat: [59.4378, 24.7574], zoom: 11 })}>Kõik Tallinna poed</Button>

    {shops.map((shop, index) =>
      <Button key={index} variant="light" size="sm" onClick={() => setCoordinates({ lnglat: [shop.lng, shop.lat], zoom: 13 })}>
        {shop.name}
      </Button>
    )}

    {/* <Button variant="light" size="sm" onClick={() => setCoordinates({ lngLat: [59.4231, 24.7991], zoom: 13 })}>Ülemiste</Button>
    <Button variant="light" size="sm" onClick={() => setCoordinates({ lngLat: [59.4277, 24.7193], zoom: 13 })}>Kristiine</Button>
    <Button variant="light" size="sm" onClick={() => setCoordinates({ lngLat: [58.3777, 26.7301], zoom: 13 })}>Tasku</Button>
    <Button variant="light" size="sm" onClick={() => setCoordinates({ lngLat: [58.3874, 24.5045], zoom: 13 })}>Port Artur</Button> */}
    <Map mapCoordinaates={coordinaates} />
  </div>)
}

export default Shops;