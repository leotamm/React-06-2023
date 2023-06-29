import React, { useRef, useState } from 'react'

function Lisatoode() {

  const [sonum,uuendaSonum] = useState();
  const inputiLuger = useRef();

  // ES6 versioon - kaasaegne versioon
const lisa = () => {
  if (inputiLuger.current.value === '') {
    uuendaSonum('Toodet ei sisestatud!');
  } else {
    uuendaSonum('Toode lisatud: ' + inputiLuger.current.value);
  }
  
}

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={inputiLuger} type="text"/>    <br />
      <button onClick={lisa}>Lisa</button> <br />
      </div>
  )
}

export default Lisatoode