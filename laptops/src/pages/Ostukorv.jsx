import React, { useState } from 'react'

function Ostukorv() {

    const [ostukorv, uuendaOstukorv] = useState(JSON.parse(localStorage.getItem('cartLaptops') || '[]'));

    const kustuta = (index) => {
        ostukorv.splice(index, 1);
        uuendaOstukorv(ostukorv.slice());
        localStorage.setItem('cartLaptops', JSON.stringify(ostukorv));
    }

    return (
        <div> Ostukorv <br /><br />
            {ostukorv.map((oneComputer, index) =>
                <div key={index}>
                    <div>Mark: {oneComputer.mark}</div>
                    <div>Mudel: {oneComputer.mudel}</div>
                    <div>Maksumus: {oneComputer.maksumus}€</div>
                    <button onClick={() => kustuta(index)}>Kustuta</button><br /><br />
                </div>
            )}
        </div>
    )
}

export default Ostukorv