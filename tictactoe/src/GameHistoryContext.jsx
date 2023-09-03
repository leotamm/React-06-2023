import React, { createContext, useState } from 'react';

export const GameHistoryContext = createContext();

export function GameHistoryContextProvider({ children }) {
    const [gameHistory, setGameHistory] = useState([]);
    const [turn, setTurn] = useState(localStorage.getItem('tttPlayer1'));

    function whoStarts() {
        if (gameHistory.length === 0) {
            setTurn(localStorage.getItem('tttPlayer1'));
            return;
        } else {
            let gameStarter = null;
            for (let i = gameHistory.length; i > 0; i--) {
                const lastGame = gameHistory[i - 1];
                const lastWinner = lastGame.winner;
                if (lastWinner === localStorage.getItem('tttPlayer1')) {
                    gameStarter = lastWinner;
                    setTurn(lastWinner);
                    return;
                } else if (lastWinner === localStorage.getItem('tttPlayer2')) {
                    gameStarter = lastWinner;
                    setTurn(lastWinner);
                    return;
                }
            }
            if (gameStarter === null) {
                setTurn(localStorage.getItem('tttPlayer1'));
            }
        };
    }

    return (
        <GameHistoryContext.Provider value={{ gameHistory, setGameHistory, turn, setTurn, whoStarts }}>
            {children}
        </GameHistoryContext.Provider>
    )
}
