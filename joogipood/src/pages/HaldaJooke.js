import React, { useState, useEffect } from 'react';
import config from '../../src/data/config.json';

function HaldaJooke() {

    const [joogid, uuendaJoogid] = useState([]);

    useEffect(() => {
        fetch(config.joogidDbUrl)
        .then(res => res.json())
        .then(data => uuendaJoogid(data || []))
        
    }, []);

    const kustuta = (index) => {
        joogid.splice(index, 1);
        uuendaJoogid(joogid.slice());
        fetch(config.joogidDbUrl, {
            "method": "PUT",
            "body": JSON.stringify(joogid)
        })
    }

    return (
        <div>
            {joogid.map((jook, index) =>
                <div key='index'>{jook.name} <button onClick={() => kustuta(index)}>X</button>
                </div>)}

        </div>
    )
}

export default HaldaJooke