import React, { useRef, useState } from 'react'
import tootedFailist from '../data/tooted.json'
import { ToastContainer, toast } from 'react-toastify';

function Lisatoode() {

  const [sonum, uuendaSonum] = useState();
  const inputiLuger = useRef();

  // ES6 versioon - kaasaegne
  const lisa = () => {
    if (inputiLuger.current.value === '') {
      uuendaSonum('Toodet ei sisestatud!');
      toast.error('Toodet ei sisestatud!');
    } else {
      uuendaSonum('Toode lisatud: ' + inputiLuger.current.value);
      tootedFailist.push(inputiLuger.current.value);
      toast.success("Edukalt " + inputiLuger.current.value + " lisatud!")
      inputiLuger.current.value = '';
    }


  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={inputiLuger} type="text" />    <br />
      <button onClick={lisa}>Lisa</button> <br />
      <ToastContainer 
      position="bottom-right"
      autoClose={4000}
      theme={localStorage.getItem('teema') === 'tume' ? 'light' : 'dark'}
      />
    </div>
    
  )
}

export default Lisatoode