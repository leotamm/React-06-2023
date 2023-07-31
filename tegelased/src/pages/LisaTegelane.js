import React, { useRef, useState } from 'react'

function LisaTegelane() {

    const [teade, muudaTeadet] = useState('Lisa tegelane');
    const eesnimeLuger = useRef();
    const perekonnanimeLuger = useRef();
    const aadressiLuger = useRef();
    const vanuseLuger = useRef();

    const lisaTegelane = () => {
        if (eesnimeLuger.current.value === '' || perekonnanimeLuger.current.value === '' ||
            aadressiLuger.current.value === '' || Number(vanuseLuger.current.value) <= 0) {
            muudaTeadet('Tühja nimega ei saa sisestada!');
        } else {
            console.log('Lisatud: ' + eesnimeLuger.current.value + ' ' + perekonnanimeLuger.current.value +
                ' ' + aadressiLuger.current.value + ' ' + Number(vanuseLuger.current.value));
            const nimekiri = JSON.parse(localStorage.getItem('tegelasteNimekiri') || '[]');
            nimekiri.push({
                "eesnimi": eesnimeLuger.current.value,
                "perekonnanimi": perekonnanimeLuger.current.value,
                "aadress": aadressiLuger.current.value,
                "vanus": Number(vanuseLuger.current.value)
            });
            localStorage.setItem('tegelasteNimekiri', JSON.stringify(nimekiri));
            muudaTeadet('Tegelane lisatud!');
            eesnimeLuger.current.value = '';
            perekonnanimeLuger.current.value = '';
            aadressiLuger.current.value = '';
            vanuseLuger.current.value = '';
        }
    }

    return (
        <div>
            <div>{teade}</div><br />
            <label>Eesnimi</label>
            <input ref={eesnimeLuger} type="text" /><br />
            <label>Perekonnanimi</label>
            <input ref={perekonnanimeLuger} type="text" /><br />
            <label>Aadress</label>
            <input ref={aadressiLuger} type="text" /><br />
            <label>Vanus</label>
            <input ref={vanuseLuger} type="number" /><br />
            <button onClick={lisaTegelane}>Lisa uus</button>
        </div>
    )
}

export default LisaTegelane