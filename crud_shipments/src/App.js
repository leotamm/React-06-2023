import './App.css';
import { useState, useEffect } from 'react';
import storedData from '../src/data/shipments.json';
import { Table, Button } from 'react-bootstrap';
import Popup from './components/Popup';

function App() {

  const [error, setError] = useState(null);
  const [shipments, setShipments] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    fetch('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0')
      .then(res => res.json())
      .then(data => {
        setShipments(data || []);
        console.log(data);
      },
        (error) => {
          setError(error);
          setShipments(storedData || []);
          console.log(storedData);
        }
      );
  }, []);

  const deleteItem = (itemOrderNo) => {
    const index = storedData.findIndex(item => item.orderNo === itemOrderNo);
    storedData.splice(index, 1);
    storedData.slice();
    alert('deleted');
  }

  const itemDetails = () => {
    setButtonPopup(!buttonPopup);
  }

 

  if (error) {
    return <div>Error: {error.message}</div>
  } else {
    return (
      <div className='custom-table'>
        <table hover>
          <thead>
            <tr>
              <th data-field="orderNo">Order #</th>
              <th data-field="nadateme">Delivery</th>
              <th data-field="customer">Customer</th>
              <th data-field="trackingNo">Tracking #</th>
              <th data-field="status">Status</th>
              <th data-field="consignee">Consignee</th>
              <th data-field="actions" data-formatter="operateFormatter" data-events="operateEvents">Actions</th>
            </tr>
          </thead>
          <tbody>
            {storedData.map((item, index, orderNo, date, customer, trackingNo, status, consignee) => (
              <tr key={index}>
                <td key={orderNo}>{item.orderNo}</td>
                <td key={date}>{item.date}</td>
                <td key={customer}>{item.customer}</td>
                <td key={trackingNo}>{item.trackingNo} </td>
                <td key={status}>{item.status}</td>
                <td key={consignee}>{item.consignee}</td>
                <td>
                  <Button variant="info" onClick={() => itemDetails(index)}>?</Button>
                  <Button variant="danger" onClick={() => deleteItem(item.orderNo)}>x</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
                  <Popup trigger={buttonPopup} setTrigger={setButtonPopup} order={itemOrderNo}>
                    <h3>Delivery details</h3>
                  </Popup>

      </div>
    )
  }

}

export default App;
