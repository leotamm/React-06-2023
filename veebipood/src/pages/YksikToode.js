import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from '../data/tooted.json'

function YksikToode() {

  const { index } = useParams();

  const leitudTooted = tootedFailist[index];

  return (
    <div>
      <div>Toote jrk: {index}</div>
      <div>Toote nimi: {leitudTooted}</div>
      <div>Toote ... :</div>


    </div>
  )
}

export default YksikToode