import React, { useRef, useState } from 'react'
import joogidFailist from '../joogid.json'

function HaldaJooke() {

    const [joogid, uuendaJoogid] = useState(joogidFailist);


    const kustuta = (index) => {
        joogidFailist.splice(index, 1);
        uuendaJoogid(joogidFailist.slice());
    }



    return (
        <div>
            {joogid.map((jook, index) =>
                <div key='index'>{jook} <button onClick={() => kustuta(index)}>X</button>
                </div>)}

        </div>
    )
}

export default HaldaJooke