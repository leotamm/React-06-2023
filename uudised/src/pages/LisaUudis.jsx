import React, { useRef } from "react";

function LisaUudis() {

    const uudiseRef = useRef();

    const lisaUusUudis = () => {
        const uudised =  JSON.parse(localStorage.getItem('uudised') || '[]');
        uudised.push(uudiseRef.current.value);
        localStorage.setItem('uudised', JSON.stringify(uudised));
    }

    return (
        <div className='hele-tekst'>

            <label>Uudise nimi</label><br />
            <input ref={uudiseRef} type="text" /><br />
            <button onClick={lisaUusUudis}>Lisa uudis</button>

        </div>
    );
}

export default LisaUudis;