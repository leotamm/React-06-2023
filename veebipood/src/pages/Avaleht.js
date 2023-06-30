import React, { useState } from 'react'

function Avaleht() {

  const [kogus, uuendaKogus] = useState(10); // vasak muutuja html-i, parem funktsioon muudab vasakut
  const [laigitud, uuendaLaigitud] = useState(false);
  const [sonum, uuendaSonum] = useState("Uuenda kogust"); //String-sõne

  // ES5 versioon - aegunud
  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Panid koguse nulli!");
  }

  function vahenda() {
    uuendaKogus(kogus - 1);
    uuendaSonum("Vähendasid kogust!");
  }

  function suurenda() {
    uuendaKogus(kogus + 1);
    uuendaSonum("Suurendasid kogust!");
  }

  return (
    <div>
      {laigitud === false && <img src="/laigitud.svg" alt="" />}
      {laigitud === true && <img src="/mittelaigitud.svg" alt="" />}

      {laigitud}
      <button onClick={() => uuendaLaigitud(!laigitud)}>Muuda like-i</button>
      <button onClick={() => uuendaLaigitud(true)}>Muuda laigituks</button>
      <button onClick={() => uuendaLaigitud(false)}>Muuda mittelaigituks</button>
      <br></br><br></br>

      <div>{sonum}</div>

      {/* {kogus > 0 && <button onClick={nulli}>Tagasi nulli</button>} */}
      {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      {kogus}
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht  