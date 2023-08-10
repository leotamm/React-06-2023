import React from 'react'
import { useRef, useEffect, useState } from 'react';
import config from '../../src/data/config.json';

function LisaJook() {

    const jookRef = useRef();
    const [joogid, setJoogid] = useState([]);

    useEffect(() => {
        fetch(config.joogidDbUrl)
            .then(res => res.json())
            .then(data => setJoogid(data || []))
    }, []);

    const lisaUusJook = () => {
        joogid.push({ "name": jookRef.current.value });
        setJoogid(joogid.slice());
        fetch(config.joogidDbUrl, {
            "method": "PUT",
            "body": JSON.stringify(joogid)
        })
        jookRef.current.value = "";
    }

    return (
        <div>
            <label>Uus jook</label>
            <input ref={jookRef} type="text" />
            <button onClick={lisaUusJook}>Lisa</button>
        </div>
    )
}

export default LisaJook