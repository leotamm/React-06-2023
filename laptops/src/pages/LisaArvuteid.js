import React from 'react'
import { useRef, useState } from 'react';

function LisaArvuteid() {

    const [teade, uusTeade] = useState("Lisa arvuti!");
    const [n2itanuppu, uuendaN2itanuppu] = useState(true);

    const margiLuger = useRef();
    const mudeliLuger = useRef();
    const maksumuseLuger = useRef();

    const lisaArvuti = () => {
        if (margiLuger.current.value === "" ||
            mudeliLuger.current.value === "" ||
            maksumuseLuger.current.value === "") {
            uusTeade("Puudulik info! Arvutit ei sisestatud.");
        } else {
            uusTeade("Arvuti lisatud: " + margiLuger.current.value + ", " +
                mudeliLuger.current.value + ", " + maksumuseLuger.current.value);
            uuendaN2itanuppu(false);
        }
    }

    return (
        <div>
            <div>Sõnum: {teade}</div>
            <label>Mark</label><br />
            <input ref={margiLuger} type="text" /><br />
            <label>Mudel</label><br />
            <input ref={mudeliLuger} type="text" /><br />
            <label>Maksumus</label><br />
            <input ref={maksumuseLuger} type="text" /><br />
            {n2itanuppu === true && <button onClick={lisaArvuti}>Sisesta</button>}
        </div>
    )

}

export default LisaArvuteid