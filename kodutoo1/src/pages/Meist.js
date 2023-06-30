import React, { useState } from 'react'

function Meist() {

//  uncaught runtime error lehe avamisel - infinite loop

const [teade, muudaTeadet] = useState('Vali mõni tegevus!');

  return (
    <div>
        <div>{ teade }</div>
        <button onClick={() => muudaTeadet('Selleks saada email: careers@company.ee')}>Kandideeri tööle</button>
        <button onClick={() => muudaTeadet('Meil on 10 töötajat, kelle info ilmub veebilehele lähiajal')}>Vaata meie töötajaid</button>
        <button onClick={() => muudaTeadet('Ühenduse võtmiseks mine lehele Kontakt')}>Võta ühendust</button>
    </div>
  )
}

export default Meist