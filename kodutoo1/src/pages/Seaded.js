import React from 'react'
import { useState } from 'react'

function Seaded() {

  const [kujundus, muudaKujundus] = useState(localStorage.getItem('veebilehe_kujundus'));

  const paneTumeTeema = () => {
    localStorage.setItem('veebilehe_kujundus', 'dark_mode');
    muudaKujundus('dark_mode');
  }

  const paneHeleTeema = () => {
    localStorage.setItem('veebilehe_kujundus', 'light_mode');
     muudaKujundus('light_mode');
  }
  const paneNeutraalneTeema = () => {
    localStorage.setItem('veebilehe_kujundus', 'neutral_mode');
    muudaKujundus('neutral_mode');
  }

  return (
    <div>
      <div>See on seadete leht</div>
      <button onClick={paneTumeTeema}>Tume leht</button>
      <button onClick={paneHeleTeema}>Hele leht</button>
      <button onClick={paneNeutraalneTeema}>Neutraalne leht</button>

      { kujundus==='dark_mode' && <div>TUME LEHT</div>}
      { kujundus==='light_mode' && <div>HELE LEHT</div>}
      { kujundus==='neutral_mode' && <div>NEUTRAALNE LEHT</div>}
    </div>
  )
}

export default Seaded