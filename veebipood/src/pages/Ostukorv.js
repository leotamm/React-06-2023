import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import ostukorvFailist from '../data/ostukorv.json';

function Ostukorv() {

  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);

  const tyhjenda = () => {
    ostukorv.splice(0); // alates 0-st ja kui ei täpsusta ssis lõpuni
    uuendaOstukorv(ostukorv.slice());
  }

  const eemalda = (index) => {
    ostukorv.splice(index,1); // mitmenda kustutan, mitu tk kustutan
    uuendaOstukorv(ostukorv.slice());
  }
  
  const lisa = (toode) => {
    ostukorv.push(toode);
    uuendaOstukorv(ostukorv.slice());
  }

  return (
    <div>
      <button onClick={tyhjenda}>Tühjeda</button>
      <div>Kokku: {ostukorv.length} tk</div>
      {ostukorv.map((toode, index) =>
        <div key={index}>
          {toode}
            <button onClick={() =>lisa(toode)}>+</button>
            <button onClick={() => eemalda(index)}>x</button>
        </div>)}
      Ostukorv on tühi
      <Link to="/">Mine tooteid lisama</Link>
    </div>
  )
}

export default Ostukorv