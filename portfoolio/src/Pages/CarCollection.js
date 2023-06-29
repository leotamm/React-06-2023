import React from 'react'
import { Link } from 'react-router-dom'

function CarCollection() {
  return (
    <div>
        <Link to='/'>
            <button>Tagasi</button>
        </Link>
        <div>CarCollections sisu</div>
    </div>
  )
}

export default CarCollection