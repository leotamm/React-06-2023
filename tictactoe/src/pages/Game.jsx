import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'validator';
import fanfares from '../assets/tada-fanfare.mp3';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { GameHistoryContext } from '../GameHistoryContext';

function Game() {

    const [message, setMessage] = useState('');
    const [turn, setTurn] = useState(localStorage.getItem('tttPlayer1'));
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
    const [isGameStarted, setGameStated] = useState(false);
    const [isGameOver, setGameOver] = useState(false);
    const nav = useNavigate();
    const { gameHistory } = useContext(GameHistoryContext);

    const whoStarts = () => {
        if (!gameHistory.length) {
            setTurn(localStorage.getItem('tttPlayer1'));
        } else {
            const lastGame = gameHistory[gameHistory.length - 1];
            const lastWinner = lastGame.winner;
            setTurn(lastWinner);
        }
    }

    const handleClick = (cellNo) => {

        setGameStated(true);
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
            let winner = '';
            if (turn === localStorage.getItem('tttPlayer1')) {
                winner = localStorage.getItem('tttPlayer1');
            } else {
                winner = localStorage.getItem('tttPlayer2');
            }

            setMessage(winner + ' wins!');
            setGameOver(true);
            playSound();

            gameHistory.push({
                'player1': localStorage.getItem('tttPlayer1'),
                'player2': localStorage.getItem('tttPlayer2'),
                'winner': winner
            });
            console.log(gameHistory);
            return;
        };
        setBoard(squares);

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

    const playSound = () => {
        new Audio(fanfares).play();
    }

    const restartGame = () => {
        setBoard(['', '', '', '', '', '', '', '', '']);
        setGameOver(false);
        whoStarts();
    }

    const changePage = (page) => {
        nav(page);
    }


    return (
        <div>
            <p>-- game view --</p>
            {!isGameOver && <div>
                {!isGameStarted && <h2>{turn} starts!</h2>}
                {isGameStarted && <h2>{turn} plays!</h2>}
            </div>}
            {isGameOver && <h2>{message}</h2>}
            <table>
                <tbody>
                    <tr>
                        <td className={board[0] === 'x' ? 'redX' : 'blueO'} onClick={() => handleClick(0)}>{board[0]}</td>
                        <td className={board[1] === 'x' ? 'redX' : 'blueO'} onClick={() => handleClick(1)}>{board[1]}</td>
                        <td className={board[2] === 'x' ? 'redX' : 'blueO'} onClick={() => handleClick(2)}>{board[2]}</td>
                    </tr>
                    <tr>
                        <td className={board[3] === 'x' ? 'redX' : 'blueO'} onClick={() => handleClick(3)}>{board[3]}</td>
                        <td className={board[4] === 'x' ? 'redX' : 'blueO'} onClick={() => handleClick(4)}>{board[4]}</td>
                        <td className={board[5] === 'x' ? 'redX' : 'blueO'} onClick={() => handleClick(5)}>{board[5]}</td>
                    </tr>
                    <tr>
                        <td className={board[6] === 'x' ? 'redX' : 'blueO'} onClick={() => handleClick(6)}>{board[6]}</td>
                        <td className={board[7] === 'x' ? 'redX' : 'blueO'} onClick={() => handleClick(7)}>{board[7]}</td>
                        <td className={board[8] === 'x' ? 'redX' : 'blueO'} onClick={() => handleClick(8)}>{board[8]}</td>
                    </tr>
                </tbody>
            </table>
            {isGameOver &&
                <div>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary" onClick={() => changePage('/')}>New players</Button>
                        <Button variant="primary" onClick={restartGame}>Play again</Button>
                        <Button variant="secondary" onClick={() => changePage('/scores')}>Score board</Button>
                    </ButtonGroup>
                </div>
            }
        </div>
    )
}

export default Game