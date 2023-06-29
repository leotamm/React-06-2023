import React from 'react'
import { Link } from 'react-router-dom'

function RetroCars() {
    return (
        <div>
            <Link to='/'>
                <button>Tagasi</button>
            </Link>
            <div>RetroCars sisu</div>
        </div>
    )
}

export default RetroCars