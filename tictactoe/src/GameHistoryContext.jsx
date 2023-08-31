import React, { createContext, useState } from 'react';

export const GameHistoryContext = createContext();

export function GameHistoryContextProvider({ children }) {
    const [gameHistory] = useState([]);
    const [turn, setTurn] = useState(localStorage.getItem('tttPlayer1'));

    function whoStarts() {
        if (!gameHistory.length) {
            setTurn(localStorage.getItem('tttPlayer1'));
            return;
        } else {
            for (let i = gameHistory.length; i >= 0; i--) {
                const lastGame = gameHistory[i - 1];
                const lastWinner = lastGame.winner;
                if (lastWinner === localStorage.getItem('tttPlayer1')) {
                    setTurn(lastWinner);
                    return;
                } else if (lastWinner === localStorage.getItem('tttPlayer2')) {
                    setTurn(lastWinner);
                    return;
                } else {
                    setTurn(localStorage.getItem('tttPlayer1'));
                    return;
                }
            }
        };
    }

    return (
        <GameHistoryContext.Provider value={{ gameHistory, turn, setTurn, whoStarts }}>
            {children}
        </GameHistoryContext.Provider>
    )
}
