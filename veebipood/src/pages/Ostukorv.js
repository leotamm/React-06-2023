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
    ostukorv.splice(index, 1); // mitmenda kustutan, mitu tk kustutan
    uuendaOstukorv(ostukorv.slice());
  }

  const lisa = (toode) => {
    ostukorv.push(toode);
    uuendaOstukorv(ostukorv.slice());
  }

  const arvutaKogusumma = () => {
    let summa = 0;
    ostukorv.forEach(toode => summa += toode.hind)
    return summa;
  }

  return (
    <div>
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjeda</button>}
      {ostukorv.length > 0 && <div>Kokku: {ostukorv.length} tk</div>}
      {ostukorv.map((toode, index) =>
        <div key={index}>
          {toode.nimi} - {toode.hind} €
          <button onClick={() => lisa(toode)}>+</button>
          <button onClick={() => eemalda(index)}>x</button>
        </div>)}

      {ostukorv.length === 0 &&
        <div>
          Ostukorv on tühi
          <Link to="/tooted">Mine tooteid lisama</Link>
        </div>}
      {ostukorv.length > 0 && <div>Kokku: {arvutaKogusumma()} €</div>}
    </div>
  )
}

export default Ostukorv