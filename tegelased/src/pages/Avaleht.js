import React, { useState } from 'react'

function Avaleht() {

    const tegelased = [
        { "eesnimi": "Mickey", "perekonnanimi": "Mouse", "aadress": "Disneyland" },
        { "eesnimi": "Minnie", "perekonnanimi": "Mouse", "aadress": "Disneyland" },
        { "eesnimi": "Winnie", "perekonnanimi": "Pooh", "aadress": "Hundred Acre Wood" },
        { "eesnimi": "Roo", "perekonnanimi": "Kangaroo", "aadress": "Hundred Acre Wood" },
        { "eesnimi": "Scoobie", "perekonnanimi": "Doo", "aadress": "Crystal Cove" }
    ];

    const [teade, muudaTeadet] = useState();

    const kuvaNimi = (tegelane) => {
        console.log(tegelane.eesnimi, tegelane.perekonnanimi, tegelane.aadress);
        muudaTeadet("Klikkisid tegelase " + tegelane.eesnimi + " peal");
    }

    return (
        <div>
            {tegelased.map(tegelane =>
                <div>
                    <div>{tegelane.eesnimi}
                        <button onClick={() => { kuvaNimi(tegelane) }}>Kuva nimi</button>
                    </div>
                    <div>{tegelane.perekonnanimi}</div>
                    <div>{tegelane.aadress}</div>
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