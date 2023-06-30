import React, { useState } from 'react'

function Kontakt() {

  const [n2itaAlfaTel, muudaN2itaAlfaTel] = useState(false);
  const [n2itaBeetaTel, muudaN2itaBeetaTel] = useState(false);
  const [n2itaDeltaTel, muudaN2itaDeltaTel] = useState(false);

  return (
    <div>
      <h1>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</h1>
      <h2>Võta meiega ühendust:</h2>
      <br />
      <div onClick={()=>muudaN2itaAlfaTel(!n2itaAlfaTel)}>Keskus Alfa</div>
      {n2itaAlfaTel && <div>Telefon: +372 555 6666</div>}
      <div>Paide</div>
      <br />
      <div onClick={()=>muudaN2itaBeetaTel(!n2itaBeetaTel)}>Keskus Beeta</div>
      {n2itaBeetaTel && <div>Telefon: +372 555 7777</div>}
      <div>Haapsalu</div>
      <br />
      <div onClick={()=>muudaN2itaDeltaTel(!n2itaDeltaTel)}>Keskus Delta</div>
      {n2itaDeltaTel && <div>Telefon: +372 555 8888</div>}
      <div>Kuressaare</div>
    </div>
  )
}

export default Kontakt