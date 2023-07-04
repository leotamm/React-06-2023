import React, { useState } from 'react'

function Meist() {

  const [telefoniNr, annaTelefoniNr] = useState("");

  return (
    <div className='hele-tekst'>
      <h1>See on meist leht, nähtav localhost:3000/meist aadressil</h1>
      <h2>Töötajad:</h2>
      <br />
      <div>Mari Maasikas</div>
      <div>Tegevjuht</div>
      <button onClick={() => annaTelefoniNr("+372 555 5555")}>Võta ühendust</button>
      <br /><br />
      <div>Tarmo Tikker</div>
      <div>Müük</div>
      <button onClick={() => annaTelefoniNr("+372 555 6666")}>Võta ühendust</button>
      <br /><br />
      <div>Vambola Vaarikas</div>
      <div>Tootmine</div>
      <button onClick={() => annaTelefoniNr("+372 555 7777")}>Võta ühendust</button>
      <br /><br />
      <div>Villu Virsik</div>
      <div>Ladu</div>
      <button onClick={() => annaTelefoniNr("+372 555 8888")}>Võta ühendust</button>
      <br /><br />
      {telefoniNr !== "" && <div className='kontakt-tekst'>Tema kontakt: {telefoniNr}</div>}
    </div>
  )
}

export default Meist