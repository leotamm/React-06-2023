import React, { createContext, useState } from 'react';

export const GameHistoryContext = createContext();

export function GameHistoryContextProvider({ children }) {
    const [gameHistory] = useState([]);
    const [turn, setTurn] = useState(localStorage.getItem('tttPlayer1'));

    function whoStarts() {
        if (!gameHistory.length) {
            setTurn(localStorage.getItem('tttPlayer1'));
        } else {
            for (let i = gameHistory.length; i >= 0; i--) {
                const lastGame = gameHistory[i - 1];
                const lastWinner = lastGame.winner;
                if (lastWinner === localStorage.getItem('tttPlayer1')) {
                    setTurn(lastWinner);
                    break;
                } else if (lastWinner === localStorage.getItem('tttPlayer2')) {
                    setTurn(lastWinner);
                    break;
                }
            }
        }
    }

    return (
        <GameHistoryContext.Provider value={{ gameHistory, turn, setTurn, whoStarts }}>
            {children}
        </GameHistoryContext.Provider>
    )
}
