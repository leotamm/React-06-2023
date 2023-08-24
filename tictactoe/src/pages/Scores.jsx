import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { GameHistoryContext } from '../GameHistoryContext';

function Scores() {

  const nav = useNavigate();
  const { gameHistory } = useContext(GameHistoryContext);

  const changePage = (page) => {
    nav(page);
  }

  console.log(gameHistory);

  return (
    <div>
      <p>-- scores view --</p>
      <h2>Scores</h2>


      {gameHistory.map((game, index) =>
        <div key={index}>
          <div className='game_cell'>Game: {game.player1} vs {game.player2}</div>
          <div className='winner_cell'>Winner: {game.winner}</div>
        </div>
      )}

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