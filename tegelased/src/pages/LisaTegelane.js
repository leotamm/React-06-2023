import React, { useRef, useState } from 'react'

function LisaTegelane() {

    const [teade, muudaTeadet] = useState('Vali tegelane:');
    const inputiLuger = useRef();

    const lisaTegelane = () => {
        if (inputiLuger.current.value === '') {
            muudaTeadet('Tühja nimega ei saa sisestada!');
        } else {
            muudaTeadet('Tegelane lisatud!');
        }
    }

    return (
        <div>
            <div>{teade}</div>
            <label>Tegelase nimi</label>
            <input ref={inputiLuger} type="text" />
            <button onClick={lisaTegelane}>Lisa uus</button>
        </div>
    )
}

export default LisaTegelane