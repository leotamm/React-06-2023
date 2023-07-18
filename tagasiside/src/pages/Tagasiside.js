import React, { useRef } from 'react'
import { useState } from 'react';

function Tagasiside() {

    const [tagasisided, uuendaTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"]);
    const tagasisideRef = useRef();

    const sisestaTagasisideJrknr = (index) => {
        tagasisided.splice(index, 1);
        uuendaTagasisided(tagasisided.slice());
    }

    const lisaUusTagasiside = () => {
        tagasisided.push(tagasisideRef.current.value);
        uuendaTagasisided(tagasisided.slice());
    }

    return (
        <div>
            <br />

            <div>
                {tagasisided.map((element, index) => <div key={index}>{element}
                    <button onClick={() => sisestaTagasisideJrknr(index)}>X</button><br />
                </div>)} <br />
                Lisa uus tagasiside:
                <input ref={tagasisideRef} type="text" />
                <button onClick={lisaUusTagasiside}>Sisesta</button>
            </div>
        </div>
    )
}

export default Tagasiside