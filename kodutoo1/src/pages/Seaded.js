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
      { kujundus!=='dark_mode' && <div><button onClick={paneTumeTeema}>Pane tume teema</button></div>}
      { kujundus!=='light_mode' && <div><button onClick={paneHeleTeema}>Pane hele teema</button></div>}
      { kujundus!=='neutral_mode' && <div><button onClick={paneNeutraalneTeema}>Pane neutraalne teema</button></div>}
    </div>
  )
}

export default Seaded