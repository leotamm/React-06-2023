import React, { useState } from 'react'

function Nimekiri() {

    const [nimekiri, uuendaNimekiri] = useState(['shoes', 'shirts', 'socks', 'sweaters', 'pigs', 'goats', 'sheep', 'spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'March', 'Jan', 'Feb', 'Dec']);

    const taastaNimekiri = () => {
        uuendaNimekiri(['shoes', 'shirts', 'socks', 'sweaters', 'pigs', 'goats', 'sheep', 'spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'March', 'Jan', 'Feb', 'Dec']);
    }

    const kustuta = (index) => {
        nimekiri.splice(index, 1);
        uuendaNimekiri(nimekiri.slice());
    }

    const nimekiriTyhjaks = () => {
        nimekiri.splice(0, nimekiri.length);
        uuendaNimekiri(nimekiri.slice());
    }

    const sorteeriAZ = () => {
        nimekiri.sort((a, b) => a[0].localeCompare(b[0]));
        uuendaNimekiri(nimekiri.slice());
    }

    const filtreeriV2hemalt4T2helised = () => {
        const uusNimekiri = nimekiri.filter(nimi => nimi.length >= 4);
        uuendaNimekiri(uusNimekiri);
    }

    const lisa3Toodet = () => {
        const newItems = ['chickens', 'cats', 'dogs'];
        newItems.forEach(item => nimekiri.push(item));
        uuendaNimekiri(nimekiri.slice());
    }

    return (
        <div>
            <div>Tooteid kokku: {nimekiri.length}</div><br />
            <button onClick={taastaNimekiri}>Taasta nimekiri</button>
            <button onClick={nimekiriTyhjaks}>Tühjenda nimekiri</button><br />
            <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
            <button onClick={filtreeriV2hemalt4T2helised}>Jäta alles vähemalt 4-tähelised</button>
            <button onClick={lisa3Toodet}>Lisa 3 toodet</button><br /><br />
            {nimekiri.map((toode, index) =>
                <div key='index'>{toode}
                    <button onClick={() => kustuta(index)}>Kustuta</button>
                </div>)}
        </div>
    )
}

export default Nimekiri