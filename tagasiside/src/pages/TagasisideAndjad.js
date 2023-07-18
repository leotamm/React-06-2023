import React, { useRef, useState } from 'react'
import NimedFailist from "../nimed.json";

function TagasisideAndjad() {

    const [tootajad, uuendaTootajad] = useState(NimedFailist);
    const [s6num, uuendaS6num] = useState();
    const inputiLuger = useRef();

    const refreshList = () => {
        uuendaTootajad(NimedFailist);
    }

    const filterNamesStartingWithM = () => {
        const uusNimekri = tootajad.filter(tootaja => tootaja[0] === 'M');
        uuendaTootajad(uusNimekri);
    }

    const filterNamesWith6Digits = () => {
        const uusNimekri = tootajad.filter(tootaja => tootaja.length === 6);
        uuendaTootajad(uusNimekri);
    }

    const filterNamesEndingWithY = () => {
        const uusNimekri = tootajad.filter(tootaja => tootaja[tootaja.length - 1] === 'y');
        uuendaTootajad(uusNimekri);
    }

    const sortNamesZA = () => {
        tootajad.sort((a, b) => b[0].localeCompare(a[0]));
        uuendaTootajad(tootajad.slice());
    }

    const addPrefiX = () => {
        const uusNimekiri = tootajad.map(name => 'EST-' + name);
        uuendaTootajad(uusNimekiri);
    }

    const kustuta = (jrknr) => {
        NimedFailist.splice(jrknr, 1);
        uuendaTootajad(NimedFailist.slice());
    }

    const addEmployee = () => {
        if (inputiLuger.current.value === '') {
            uuendaS6num('Nime ei sisestatud, proovi uuesti!');
        } else {
            uuendaS6num('Nimi ' + inputiLuger.current.value + ' sisestatud!');
            tootajad.push(inputiLuger.current.value);
            uuendaTootajad(tootajad.slice());
            inputiLuger.current.value = '';
        }
    }

    return (
        <div>
            Töötajaid kokku: {tootajad.length} <br /><br />
            <button onClick={refreshList}>Taasta algandmed</button><br />
            <button onClick={filterNamesStartingWithM}>Filtreeri M-iga algavad</button>
            <button onClick={filterNamesWith6Digits}>Filtreeri 6-tähelised</button>
            <button onClick={filterNamesEndingWithY}>Filtreeri y-ga lõppevad</button>
            <button onClick={sortNamesZA}>Sorteeri Z-A</button>
            <button onClick={addPrefiX}>Pane eesliide "EST-"</button><br />
            <label>Uus töötaja</label>
            <input ref={inputiLuger} type="text" />
            <button onClick={addEmployee}>Lisa</button>
            {s6num}<br /><br></br>
            {tootajad.map((tootaja, jrknr) => <div key={jrknr}>{tootaja} <span className='tab'><button onClick={() => kustuta(jrknr)}>Kustuta</button></span></div>)}

        </div>
    )
}

export default TagasisideAndjad