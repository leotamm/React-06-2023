import React, { useRef, useState } from 'react'
import tootedFailist from '../data/tooted.json'
import { ToastContainer, toast } from 'react-toastify';

function Lisatoode() {

  const [sonum, uuendaSonum] = useState();
  const inputiLuger = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  // ES6 versioon - kaasaegne
  const lisa = () => {
    if (inputiLuger.current.value === '') {
      uuendaSonum('Toodet ei sisestatud!');
      toast.error('Toodet ei sisestatud!');
    } else {
      uuendaSonum('Toode lisatud: ' + inputiLuger.current.value);
      // tootedFailist.push(inputiLuger.current.value);
      tootedFailist.push(
        {
          "nimi": inputiLuger.current.value,
          "hind": Number(hindRef.current.value),
          "aktiivne": aktiivneRef.current.checked,
          "pilt": piltRef.current.value
        }
      );

      toast.success("Edukalt " + inputiLuger.current.value + " lisatud!")
      inputiLuger.current.value = '';
      hindRef.current.value = '';
      piltRef.current.value = '';
      aktiivneRef.current.value = false;
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={inputiLuger} type="text" />    <br />
      <label>Toote hind</label> <br />
      <input ref={hindRef} type="number" />    <br />
      <label>Toote pilt</label> <br />
      <input ref={piltRef} type="text" />    <br />
      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivneRef} type="checkbox" />    <br />
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