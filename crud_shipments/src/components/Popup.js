import React from 'react'
import { useRef } from 'react';
import '../components/Popup.css'

function Popup(props) {

const orderRef = useRef('');
const deliveryRef = useRef('');
const customerRef = useRef('');
const trackingRef = useRef('');
const statusRef = useRef('');
const consigneeRef = useRef('');

  return ( props.trigger ) ? (
    <div className='popup'>
        <div className="popup-inner">
            <button className="close-btn" onClick={()=> props.setTrigger(false)}>Close</button>
            {props.children}
            <form action="">
                <label htmlFor="">Order</label>
                <input type="text" />
                <label htmlFor="">Delivery</label>
                <input type="date" /><br />
                <label htmlFor="">Customer</label>
                <input type="text" />
                <label htmlFor="">Tracking</label>
                <input type="text" /><br />
                <label htmlFor="">Status</label>
                <input type="text" />
                <label htmlFor="">Consignee</label>
                <input type="text" />
            </form>
        </div>
    </div>
  ) : "";
  
}

export default Popup