import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from '../data/tooted.json'

function YksikToode() {

  const { index } = useParams();

  const leitud = tootedFailist[index];

  return (
    <div>
      {leitud !== undefined &&
        <>
          <div>Toote jrk: {index}</div>
          <div>Toote nimi: {leitud.nimi}</div>
          <div>Toote hind: {leitud.nimi}</div>
          <div>Toote pilt: <img className='pilt' src={leitud.nimi} alt=''/>  </div>
        </>}
      {leitud === undefined && <div>Toodet ei leitud!</div>}
    </div>
  )
}

export default YksikToode