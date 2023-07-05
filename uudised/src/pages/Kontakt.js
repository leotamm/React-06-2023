import React, { useState } from 'react'

function Kontakt() {

  const [n2itaAlfaTel, muudaN2itaAlfaTel] = useState(false);
  const [n2itaBeetaTel, muudaN2itaBeetaTel] = useState(false);
  const [n2itaDeltaTel, muudaN2itaDeltaTel] = useState(false);

  return (
    <div className='hele-tekst'>
      <h1>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</h1>
      <h2>Võta meiega ühendust:</h2>
      <br />
      <div className={n2itaAlfaTel === true ? 'valitud' : undefined} onClick={() => muudaN2itaAlfaTel(!n2itaAlfaTel)}>Keskus Alfa</div>
      {n2itaAlfaTel === true && <div className='valitud'>Telefon: +372 555 6666</div>}
      <div className={n2itaAlfaTel ? 'valitud' : undefined}>Paide</div>
      <br />
      <div className={n2itaBeetaTel === true ? 'valitud' : undefined} onClick={() => muudaN2itaBeetaTel(!n2itaBeetaTel)}>Keskus Beeta</div>
      {n2itaBeetaTel === true && <div className='valitud'>Telefon: +372 555 7777</div>}
      <div className={n2itaBeetaTel ? 'valitud' : undefined}>Haapsalu</div>
      <br />
      <div className={n2itaDeltaTel === true ? 'valitud' : undefined} onClick={() => muudaN2itaDeltaTel(!n2itaDeltaTel)}>Keskus Delta</div>
      {n2itaDeltaTel === true && <div className='valitud'>Telefon: +372 555 8888</div>}
      <div className={n2itaDeltaTel ? 'valitud' : undefined}>Kuressaare</div>
    </div>
  )
}

export default Kontakt