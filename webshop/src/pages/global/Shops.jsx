import { useState, useEffect } from 'react';
import Map from '../../components/map/Map';
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
    <Map mapCoordinaates={coordinaates} />
  </div>)
}

export default Shops;