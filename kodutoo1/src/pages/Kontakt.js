import React, { useState } from 'react'

function Kontakt() {

const [aadress, paneAadress] = useState('Tallinn');
const [telefon, paneTelefon] = useState('+372 5121111');
const [email, paneEmail] = useState('kontakt@company.ee');
const [avaldis, muudaAvaldis] = useState('ei');

const muuda = () => {
  paneAadress('London');
  paneTelefon('+44 2332 43542');
  paneEmail('contact@company.co.uk');
  muudaAvaldis('jah');
}
  return (
    <div>
        <div>{ aadress }</div>
        <div>{ telefon }</div>
        <div>{ email }</div>
        <div><button onClick={muuda}>Muuda inglise keelseks</button></div>
        { avaldis==='jah' && <div>Leht on inglisekeelne</div>}
    </div>
  )
}

export default Kontakt