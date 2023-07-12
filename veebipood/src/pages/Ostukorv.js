import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Ostukorv() {

const [ostukorv, uuendaOstukorv] = useState (["Coca", "Fanta", "Sprite", "Friikad", "Salat", "Veiseliha burger", "Juustuburger", "Wrap"]);

  return (
    <div>
        {ostukorv.map((toode, index) => <div key={index}>{toode}</div>)}
      Ostukorv on tühi
        <Link to="/">Mine tooteid lisama</Link>
    </div>
  )
}

export default Ostukorv