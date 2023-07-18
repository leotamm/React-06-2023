import React from 'react'
import { useParams } from 'react-router-dom'
import joogidFailist from '../joogid.json'

function Jook() {

    const {number} = useParams();
    const leitudJoogid = joogidFailist[number];

  return (
    <div>
        {leitudJoogid}
        {leitudJoogid === undefined && <div>Jooki ei leitud</div>}
    </div>
  )
}

export default Jook