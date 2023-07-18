import React from 'react'
import joogidFailist from '../joogid.json'
import { useState } from 'react';

function Avaleht() {

    const [joogid, uuendaJoogid] = useState(joogidFailist);

    return (
        <div>Joogid:
            {joogid.map((jook) =>
                <div>{jook}</div>
            )}
        </div>
    )
}

export default Avaleht