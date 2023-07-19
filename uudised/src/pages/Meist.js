import React, { useState } from 'react'
import nimedFailist from '../data/tootajad.json'

function Meist() {

  // const [telefoniNr, annaTelefoniNr] = useState("");

  const tootajad = nimedFailist;
  const [kontakt, n2itaKontakt] = useState();

  return (
    <div className='hele-tekst'>
      <h1>See on meist leht, nähtav localhost:3000/meist aadressil</h1>
      <h2>Töötajad:</h2>
      <br />  
      {tootajad.map(tootaja =>
          <div>
            <div>{tootaja.Nimi}</div>
            <div>{tootaja.Ala}</div>
              <button onClick={() => { n2itaKontakt(tootaja.Telefon) }}>Näita telefoni</button>
            <br /><br />
          </div>
      )}      
      {/* <div>Mari Maasikas</div>
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
      <br /><br /> */}
      {kontakt !== "" && <div className='hele-tekst'>Tema kontakt: {kontakt}</div>}
    </div>
  )
}

export default Meist