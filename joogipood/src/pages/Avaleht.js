import React from 'react'
import joogidFailist from '../joogid.json'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Avaleht() {

    const [joogid, uuendaJoogid] = useState(joogidFailist);

    return (
        <div>Joogid:
            {joogid.map((jook, index) =>
                <div>
                    <Link to={'/jook' + index}>
                        <span>{jook}</span>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Avaleht