import React, { useState, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { GameHistoryContext } from '../GameHistoryContext';

function Players() {

    const [message, setMessage] = useState('Let\'s register two players!');

    const player1NameRef = useRef('');
    const player2NameRef = useRef('');
    const navigate = useNavigate();

    const { whoStarts } = useContext(GameHistoryContext);


    const getPlayerNames = () => {
        if (player1NameRef.current.value === '' ||
            player2NameRef.current.value === '') {
            setMessage('Didn\'t get the name(s)... please try again!');
            player1NameRef.current.value = '';
            player2NameRef.current.value = '';
            return;
        }
        localStorage.setItem('tttPlayer1', player1NameRef.current.value);
        localStorage.setItem('tttPlayer2', player2NameRef.current.value);
        whoStarts();
        navigate('/game');
    }

    return (
        <div>
            <h1>TIC - TAC - TOE</h1>
            <h2>{message}</h2>
            
            <br /><br />
            <label>Player one</label><br />
            <input ref={player1NameRef} type='text'></input><br />
            <label>Player two</label><br />
            <input ref={player2NameRef} type='text'></input><br /><br />
            <Button variant='secondary' onClick={getPlayerNames}>START</Button>
        </div>
    )
}

export default Players