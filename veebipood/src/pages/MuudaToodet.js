import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from'../data/tooted.json'

function MuudaToodet() {

  const { jrknr } = useParams();
  const leitudTooted = tootedFailist[jrknr];

  return (
    <div>
      <label>Toote nimi</label><br />
      <input defaultValue={leitudTooted} type="text" /><br />
      <button>Muuda</button><br />
    </div>
  )
}

export default MuudaToodet