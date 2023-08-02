import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../../src/css/Avaleht.css'


function KasutajaPostitus() {

    const { userId } = useParams();
    const [uudised, uuendaUudised] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json => uuendaUudised(json))
    }, []);

    return (
        <div className='hele-tekst'>
            {uudised.filter(uudis => uudis.userId === Number(userId)).map((uudis, index) =>
                <div key={index}>
                    <div className='user-id-style'>{uudis.userId}</div>
                    <div className='post-id-style'>{uudis.id}</div>
                    <div className='post-title-style'>{uudis.title}</div>
                    <div>{uudis.body}</div>
                    <br /><br />
                </div>
            )}
        </div>
    )
}

export default KasutajaPostitus