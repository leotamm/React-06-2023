import React, { useRef, useState } from "react";

function LisaUudis() {

    const uudiseRef = useRef();
    const [message, setMessage] = useState('');

    const lisaUusUudis = () => {
        const uudised = JSON.parse(localStorage.getItem('uudised') || '[]');
        uudised.push(uudiseRef.current.value);
        localStorage.setItem('uudised', JSON.stringify(uudised));
    }

    const kontrolli = () => {
        if (uudiseRef.current.value.charAt(0) === uudiseRef.current.value.toLowerCase().charAt(0)) {
            setMessage('Sisestasid uudise väikse tähega, palun paranda!');
        }

        if (uudiseRef.current.value.includes('  ')) {
            setMessage('Sisestasid kaks tühikut, palun paranda!');
        }
    }

    return (
        <div className='hele-tekst'>
            {message} <br />
            <label>Uudise nimi</label><br />
            <input onChange={kontrolli} ref={uudiseRef} type="text" /><br />
            <button onClick={lisaUusUudis}>Lisa uudis</button>

        </div>
    );
}

export default LisaUudis;