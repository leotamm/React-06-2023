import React, { useState } from 'react'
import poedFailist from '../data/poed.json'
import { Link } from 'react-router-dom';

function Poed() {

    const [poed, uuendaPoed] = useState(poedFailist);

    const reset = () => {
        uuendaPoed(poedFailist);
    }

    const sorteeriAZ = () => {
        poed.sort();
        // poed.sort((a,b) => a.localeCompare(b, 'et')); tõstab ÕÖ 'o' kohale ja ä 'a' kohale
        uuendaPoed(poed.slice());
    }
    const sorteeriZA = () => {
        poed.sort((a, b) => b.nimi.localeCompare(a.nimi, 'et'));
        uuendaPoed(poed.slice());
    }
    const sorteeriTahedKasv = () => {
        poed.sort((a, b) => a.nimi.length - b.nimi.length);
        uuendaPoed(poed.slice());
    }

    const sorteeriTahedKaha = () => {
        poed.sort((a, b) => b.nimi.length - a.nimi.length);
        uuendaPoed(poed.slice());
    }

    const sorteeriKolmasTaht = () => {
        poed.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2], 'et'));
        uuendaPoed(poed.slice());
    }

    const filtreeriEgaLoppevad = () => {
        // endswith()
        const sorditudPoed = poed.filter(yksPood => yksPood.nimi.endsWith('e'));
        uuendaPoed(sorditudPoed);
    }

    const filtreeriSisaldabIsLyhendit = () => {
        // includes()
        const sorditudPoed = poed.filter(yksPood => yksPood.nimi.includes('is'));
        uuendaPoed(sorditudPoed);
    }

    const filtreeriPikkus9 = () => {
        // .lenght ===
        const sorditudPoed = poed.filter(yksPood => yksPood.nimi.length === 9);
        uuendaPoed(sorditudPoed);
    }

    const filtreeriVahemalt7Tahte = () => {
        // .length >= 7
        const sorditudPoed = poed.filter(yksPood => yksPood.nimi.length >= 7);
        uuendaPoed(sorditudPoed);
    }

    const filtreeriKolmasTahtI = () => {
        // [2] === 'i'
        const sorditudPoed = poed.filter(yksPood => yksPood.nimi[2] === 'i');
        uuendaPoed(sorditudPoed);
    }

    const liidaTahed = () => {
        let summa = 0;
        poed.forEach(yksPood => summa += yksPood.nimi.length)
        return summa;
    }

    return (
        <div>
            <div>{liidaTahed()}</div>
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

            {poed.map((yksPood) =>
                <div key={yksPood.nimi}>
                    {yksPood.nimi}
                    <Link to={"/pood/" + yksPood.nimi.toLowerCase().replaceAll(' ', '-')}>
                        <button>Vaata detailsemalt</button>
                    </Link>
                </div>)}
        </div>
    )
}

export default Poed