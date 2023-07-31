import React from 'react';
import { useState } from 'react';

function ValitudTegelased() {

  let [valitudTegelased, uuendaValitudtegelased] = useState(JSON.parse(localStorage.getItem('tegelasteNimekiri')) || '[]');

  const eemaldaNimekirjast = (index) => {
    valitudTegelased.splice(index, 1);
    uuendaValitudtegelased(valitudTegelased.slice());
    localStorage.setItem('tegelasteNimekiri', JSON.stringify(valitudTegelased));
  }

  const tyhjendaNimekiri = () => {
    valitudTegelased = [];
    uuendaValitudtegelased(valitudTegelased.slice());
    localStorage.setItem('tegelasteNimekiri', '[]');
  }

  return (
    <div>
      {valitudTegelased.length > 0 && <div>Valitud tegelasi: {valitudTegelased.length}<br /><br /></div>}
      {valitudTegelased.length === 0 && <div>Ühtki tegelast pole valitud<br /><br /></div>}
      <div>
        {valitudTegelased.map((tegelane, index) =>
          <div key={index}>
            <div>Eesnimi: {tegelane.eesnimi}</div>
            <div>Perekonnanimi: {tegelane.perekonnanimi}</div>
            <div>Aadress: {tegelane.aadress}</div>
            <div>Vanus: {tegelane.vanus}</div>
            <button onClick={() => eemaldaNimekirjast(index)}>Eemalda</button><br /><br />
          </div>
        )}
      </div>
      <button onClick={tyhjendaNimekiri}>Tühjenda nimekiri</button>
    </div>
  )
}

export default ValitudTegelased