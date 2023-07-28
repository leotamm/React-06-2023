import React from 'react'
import { Link } from 'react-router-dom'

function Uudised() {

  const uudised = JSON.parse(localStorage.getItem('uudised') || '[]')

  return (
    <div className='hele-tekst'>
      <h3>See on uudiste leht, nähtav localhost:3000/uudised aadressil</h3>
      {uudised.length === 0 && <h4>Ühtki uudist hetkel pole, lisame õige pea</h4>}
      {uudised.map((uudis, index) =>
        <div key={index}>
          <Link to={'/uudis/' + index} ><div>{uudis}</div></Link>
        </div>
      )}
    </div>
  )
}

export default Uudised