import React, { useState } from 'react'
import { isEmpty } from 'validator';

function Game() {

    const [message, setMessage] = useState('Let\'s play!');
    // const winCondition = useState(false);
    const [turn, setTurn] = useState(localStorage.getItem('tttPlayer1'));
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
    const [isGameOver, setGameOver] = useState(false);

    let x = localStorage.getItem('tttPlayer1');
    let o = localStorage.getItem('tttPlayer2');

    const handleClick = (cellNo) => {

        if (!isEmpty(board[cellNo]) || isGameOver) {
            return;
        }

        let squares = board;

        if (turn === localStorage.getItem('tttPlayer1')) {
            squares[cellNo] = 'x';


            setTurn(localStorage.getItem('tttPlayer2'))
        } else {
            squares[cellNo] = 'o';

            setTurn(localStorage.getItem('tttPlayer1'))
        }
        if (checkWinCondition(squares)) {
            setMessage('Someone wins!');
            setGameOver(true);
            return;
        };
        setBoard(squares);
        console.log(board);

    }

    const checkWinCondition = (squares) => {
        if (!isEmpty(squares[0]) && !isEmpty(squares[1]) && !isEmpty(squares[1]) &&
            squares[0] === squares[1] && squares[0] === squares[2]) {
            return true;
        } else if (!isEmpty(squares[3]) && !isEmpty(squares[4]) && !isEmpty(squares[5]) &&
            squares[3] === squares[4] && squares[3] === squares[5]) {
            return true;
        } else if (!isEmpty(squares[6]) && !isEmpty(squares[7]) && !isEmpty(squares[8]) &&
            squares[6] === squares[7] && squares[6] === squares[8]) {
            return true;
        } else if (!isEmpty(squares[0]) && !isEmpty(squares[4]) && !isEmpty(squares[8]) &&
            squares[0] === squares[4] && squares[0] === squares[8]) {
            return true;
        } else if (!isEmpty(squares[2]) && !isEmpty(squares[4]) && !isEmpty(squares[6]) &&
            squares[2] === squares[4] && squares[2] === squares[6]) {
            return true;
        } else if (!isEmpty(squares[0]) && !isEmpty(squares[3]) && !isEmpty(squares[6]) &&
            squares[0] === squares[3] && squares[0] === squares[6]) {
            return true;
        } else if (!isEmpty(squares[1]) && !isEmpty(squares[4]) && !isEmpty(squares[7]) &&
            squares[1] === squares[4] && squares[1] === squares[7]) {
            return true;
        } else if (!isEmpty(squares[2]) && !isEmpty(squares[5]) && !isEmpty(squares[8]) &&
            squares[2] === squares[5] && squares[2] === squares[8]) {
            return true;
        } else {
            return false
        }
    }


    return (
        <div>
            <h1>Game view</h1>
            <h2>{message}</h2>
            <table>
                <tbody>
                    <tr>
                        <td onClick={() => handleClick(0)}>{board[0]}</td>
                        <td onClick={() => handleClick(1)}>{board[1]}</td>
                        <td onClick={() => handleClick(2)}>{board[2]}</td>
                    </tr>
                    <tr>
                        <td onClick={() => handleClick(3)}>{board[3]}</td>
                        <td onClick={() => handleClick(4)}>{board[4]}</td>
                        <td onClick={() => handleClick(5)}>{board[5]}</td>
                    </tr>
                    <tr>
                        <td onClick={() => handleClick(6)}>{board[6]}</td>
                        <td onClick={() => handleClick(7)}>{board[7]}</td>
                        <td onClick={() => handleClick(8)}>{board[8]}</td>
                    </tr>
                </tbody>
            </table>
            <h2>{turn}'s turn</h2>
        </div>
    )
}

export default Game