import React from 'react'
import { useParams } from 'react-router-dom'
import poedFailist from '../data/poed.json'


function YksikPood() {
  // KODUTÖÖ
  const { yksPood } = useParams();

  const leitud = poedFailist.find(pood => pood.nimi.toLowerCase().replaceAll(' ', '-') === yksPood);

  return (<div>
    {leitud !== undefined &&
      <div>
        <div>Poe nimi:{leitud.nimi}</div>
        <div>Poe avamisaeg:{leitud.aeg}</div>
        <div>Poe telefon: {leitud.tel}</div>
      </div>}
    {leitud === undefined && <div>Poode ei leitud</div>}
  </div>
  )
}

export default YksikPood