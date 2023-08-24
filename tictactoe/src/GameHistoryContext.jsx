import React, { createContext, useState } from 'react';

export const GameHistoryContext = createContext();

export function GameHistoryContextProvider({ children }) {
    const [gameHistory, setGameHistory] = useState([]);

    return (
        <GameHistoryContext.Provider value={{ gameHistory, setGameHistory }}>
            {children}
        </GameHistoryContext.Provider>
    )
}
