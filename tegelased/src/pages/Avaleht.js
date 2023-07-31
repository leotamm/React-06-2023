import React, { useState } from 'react'

function Avaleht() {

    // const tegelased = [
    //     { "eesnimi": "Mickey", "perekonnanimi": "Mouse", "aadress": "Disneyland", "vanus": 94 },
    //     { "eesnimi": "Minnie", "perekonnanimi": "Mouse", "aadress": "Disneyland", "vanus": 94 },
    //     { "eesnimi": "Winnie", "perekonnanimi": "Pooh", "aadress": "Hundred Acre Wood", "vanus": 96 },
    //     { "eesnimi": "Roo", "perekonnanimi": "Kangaroo", "aadress": "Hundred Acre Wood", "vanus": 96 },
    //     { "eesnimi": "Scoobie", "perekonnanimi": "Doo", "aadress": "Crystal Cove", "vanus": 54 }
    // ];

    const [teade, muudaTeadet] = useState();
    const [characters, setCharacters] = useState(JSON.parse(localStorage.getItem('tegelasteNimekiri') || '[]'));

    const kuvaNimi = (tegelane) => {
        console.log(tegelane.eesnimi, tegelane.perekonnanimi, tegelane.aadress);
        muudaTeadet("Klikkisid tegelase " + tegelane.eesnimi + " peal");
    }

    const valiTegelane = (tegelane) => {
        const nimekiri = JSON.parse(localStorage.getItem('tegelasteNimekiri') || '[]');
        nimekiri.push(tegelane);
        localStorage.setItem('tegelasteNimekiri', JSON.stringify(nimekiri));
    }

    return (
        <div>
            {characters.map(tegelane =>
                <div>
                    <div>{tegelane.eesnimi}
                        <button onClick={() => { kuvaNimi(tegelane) }}>Kuva nimi</button>
                        <button onClick={() => { valiTegelane(tegelane) }}>Vali</button>
                    </div>
                    <div>{tegelane.perekonnanimi}</div>
                    <div>{tegelane.aadress}</div>
                    <div>{tegelane.vanus}</div>
                </div>
            )}
            {teade}
            {/* <div>
            <div>Mickey</div>
            <div>Mouse</div>
            <div>Disneyland</div>
        </div>
        <div>
            <div>Minnie</div>
            <div>Mouse</div>
            <div>Disneyland</div>
        </div>
        <div>
            <div>Winnie</div>
            <div>Pooh</div>
            <div>Hundred Acre Wood</div>
        </div>
        <div>
            <div>Roo</div>
            <div>Kangaroo</div>
            <div>Hundred Acre Wood</div>
        </div>
        <div>
            <div>Scoobie</div>
            <div>Doo</div>
            <div>Crystal Cove</div>
        </div> */}
        </div>
    )
}

export default Avaleht