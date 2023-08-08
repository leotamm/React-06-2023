import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function YksPostitus() {

    const { postId } = useParams();
    const [uudised, uuendaUudised] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
            .then(res => res.json())
            .then(data => uuendaUudised(data))
    }, [postId]);

    return (
        <div className='hele-tekst'>
                <div>
                    <div className='user-id-style'>{uudised.userId}</div>
                    <div className='post-id-style'>{uudised.id}</div>
                    <div className='post-title-style'>{uudised.title}</div>
                    <div>{uudised.body}</div>
                    <br /><br />
                </div>
        </div>
    )
}

export default YksPostitus