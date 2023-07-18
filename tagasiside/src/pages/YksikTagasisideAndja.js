import React from 'react'
import { useParams } from 'react-router-dom'
import nimedFailist from '../nimed.json'

function YksikTagasisideAndja() {

    const {index} = useParams();
    const leitudNimi = nimedFailist[index];

  return (
    <div>
        <div>Nimi: {leitudNimi}</div>
        <div>Järjekorranumber: {index}</div>
    </div>
  )
}

export default YksikTagasisideAndja