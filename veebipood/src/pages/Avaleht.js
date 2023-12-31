import React, { useState } from 'react'

function Avaleht() {

  const [kogus, uuendaKogus] = useState(localStorage.getItem('kogus') || 0); // vasak muutuja html-i, parem funktsioon muudab vasakut
  const [laigitud, uuendaLaigitud] = useState(JSON.parse(localStorage.getItem('laik')) || false);
  const [sonum, uuendaSonum] = useState("Uuenda kogust"); //String-sõne

  // ES5 versioon - aegunud
  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Panid koguse nulli!");
    localStorage.setItem('kogus', 0);
  }

  function vahenda() {
    uuendaKogus(kogus - 1);
    uuendaSonum("Vähendasid kogust!");
    localStorage.setItem('kogus', kogus - 1);
  }

  function suurenda() {
    uuendaKogus(kogus + 1);
    uuendaSonum("Suurendasid kogust!");
    localStorage.setItem('kogus', kogus + 1);
  }
  const uuendaLaikFalse = () => {
    uuendaLaigitud(false);
    localStorage.setItem('laik', false);
  }

  const uuendaLaikTrue = () => {
    uuendaLaigitud(true);
    localStorage.setItem('laik', true);
  }

  return (
    <div>
      {laigitud === false && <img src="/laigitud.svg" alt="" />}
      {laigitud === true && <img src="/mittelaigitud.svg" alt="" />}

      {laigitud}
      <button onClick={uuendaLaigitud}>Muuda like-i</button>
      <button onClick={uuendaLaikTrue}>Muuda laigituks</button>
      <button onClick={uuendaLaikFalse}>Muuda mittelaigituks</button>
      <br></br><br></br>

      <div>{sonum}</div>

      {/* {kogus > 0 && <button onClick={nulli}>Tagasi nulli</button>} */}
      {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span className={kogus >= 10 ? 'kuldne' : undefined}>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht