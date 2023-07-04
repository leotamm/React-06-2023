import React from 'react'
import { useState } from 'react';

// Kodus: Keel localStorage-sse
function Seaded() {

    const [keel, uuendaKeel] = useState(localStorage.getItem('keel') || 'est');

    const uuendaKeelEst = () => {
        uuendaKeel('est');
        localStorage.setItem('keel', 'est');
    }
    
    const uuendaKeelEng = () => {
        uuendaKeel('eng');
        localStorage.setItem('keel', 'eng');
    }
    
    const uuendaKeelRus = () => {
        uuendaKeel('rus');
        localStorage.setItem('keel', 'rus');
    }


    return (
        <div>
            <button onClick={uuendaKeelEst}>Eesti keel</button>
            <button onClick={uuendaKeelEng}>English</button>
            <button onClick={uuendaKeelRus}>Rysskij</button>
            {keel === 'est' && <div>Leht on eesti keeles</div> }
            {keel === 'eng' && <div>Page in English</div> }
            {keel === 'rus' && <div>Russkaja stronitsa</div> }
        </div>
    )
}

export default Seaded