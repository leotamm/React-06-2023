import React, { useState } from 'react'
import poedFailist from '../data/poed.json'

function Poed() {

    const [poed, uuendaPoed] = useState(poedFailist);

    const reset = () => {
        uuendaPoed(['Ülemiste', 'Viimsi', 'Rocca al Mare', 'Magistraali', 'Vesse', 'Kristiine', 'Järveotsa']);
    }

    const sorteeriAZ = () => {
        poed.sort();
        // poed.sort((a,b) => a.localeCompare(b, 'et')); tõstab ÕÖ 'o' kohale ja ä 'a' kohale
        uuendaPoed(poed.slice());
    }
    const sorteeriZA = () => {
        poed.sort((a, b) => b.localeCompare(a, 'et'));
        uuendaPoed(poed.slice());
    }
    const sorteeriTahedKasv = () => {
        poed.sort((a, b) => a.length - b.length);
        uuendaPoed(poed.slice());
    }

    const sorteeriTahedKaha = () => {
        poed.sort((a, b) => b.length - a.length);
        uuendaPoed(poed.slice());
    }

    const sorteeriKolmasTaht = () => {
        poed.sort((a, b) => a[2].localeCompare(b[2], 'et'));
        uuendaPoed(poed.slice());
    }

    const filtreeriEgaLoppevad = () => {
        // endswith()
        const sorditudPoed = poed.filter(nimi => nimi.endsWith('e'));
        uuendaPoed(sorditudPoed);
    }

    const filtreeriSisaldabIsLyhendit = () => {
        // includes()
        const sorditudPoed = poed.filter(nimi => nimi.includes('is'));
        uuendaPoed(sorditudPoed);
    }

    const filtreeriPikkus9 = () => {
        // .lenght ===
        const sorditudPoed = poed.filter(nimi => nimi.length === 9);
        uuendaPoed(sorditudPoed);
    }

    const filtreeriVahemalt7Tahte = () => {
        // .length >= 7
        const sorditudPoed = poed.filter(nimi => nimi.length >= 7);
        uuendaPoed(sorditudPoed);
    }

    const filtreeriKolmasTahtI = () => {
        // [2] === 'i'
        const sorditudPoed = poed.filter(nimi => nimi[2] === 'i');
        uuendaPoed(sorditudPoed);
    }



    return (
        <div>
            <button onClick={reset}>Reset</button>
            <div>Kokku: {poed.length} poodi</div>
            <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
            <button onClick={sorteeriZA}>Sorteeri Z-A</button>
            <button onClick={sorteeriTahedKasv}>Sorteeri tähede arv kasvavalt</button>
            <button onClick={sorteeriTahedKaha}>Sorteeri tähede arv kahanevalt</button>
            <button onClick={sorteeriKolmasTaht}>Sorteeri kolmanda tähe kärgi A-Z</button>
            <br /><br />
            <button onClick={filtreeriEgaLoppevad}>Jäta alles e-ga lõppevad</button>
            <button onClick={filtreeriSisaldabIsLyhendit}>Jäta alles kui sisaldab 'is' ühendit</button>
            <button onClick={filtreeriPikkus9}>Jäta alles ainult 9-tähelised</button>
            <button onClick={filtreeriVahemalt7Tahte}>Jäta alles vähemalt 7 tähega</button>
            <button onClick={filtreeriKolmasTahtI}>Jäta alles kolmas täht 'i'</button>

            {poed.map(yksPood => <div key={yksPood}>{yksPood}</div>)}
        </div>
    )
}

export default Poed