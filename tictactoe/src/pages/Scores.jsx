import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { GameHistoryContext } from '../GameHistoryContext';

function Scores() {

  const nav = useNavigate();
  const { gameHistory, whoStarts } = useContext(GameHistoryContext);

  const changePage = (page) => {
    whoStarts();
    nav(page);
  }

  return (
    <div>
      <h1>TIC - TAC - TOE</h1>
      <h2>Scores</h2>
      <table>
        <tbody>
          <tr>
            <td className='td_scoreboard_game'>Game</td>
            <td className='td_scoreboard_result'>Winner</td>
          </tr>
          {gameHistory.map((game, index) =>
            <tr key={index}>
                <td className='td_scoreboard_game'>{game.player1} vs {game.player2}</td>
                <td className='td_scoreboard_result'>{game.winner}</td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={() => changePage('/')}>New players</Button>
          <Button variant="primary" onClick={() => changePage('/game')}>Play again</Button>
          <Button variant="secondary" onClick={() => changePage('/scores')}>Score board</Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default Scores