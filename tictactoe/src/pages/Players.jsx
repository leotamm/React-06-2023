import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

function Players() {

    const [message, setMessage] = useState('Welcome! Let\'s register two players!');

    const player1NameRef = useRef('');
    const player2NameRef = useRef('');
    const navigate = useNavigate();

    const getPlayer1Name = () => {
        if (player1NameRef.current.value === '' ||
            player2NameRef.current.value === '') {
            setMessage('Didn\'t get the name(s)... please try again!');
            player1NameRef.current.value = '';
            player2NameRef.current.value = '';
            return;
        }
        localStorage.setItem('tttPlayer1', player1NameRef.current.value);
        localStorage.setItem('tttPlayer2', player2NameRef.current.value);
        navigate('/game');
    }

    return (
        <div>
            <h1>Players view</h1>
            <h2>{message}</h2>
            
            <br /><br />
            <label>Player one name</label><br />
            <input ref={player1NameRef} type='text'></input><br />
            <label>Player two name</label><br />
            <input ref={player2NameRef} type='text'></input><br /><br />
            <button onClick={getPlayer1Name}>START</button>
        </div>
    )
}

export default Players