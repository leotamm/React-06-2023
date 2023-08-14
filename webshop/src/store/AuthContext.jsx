// MyContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const AuthContext = createContext(); // kasutatav globaalne muutuja

// Create a provider component
export function AuthContextProvider({ children }) { // globaalselt index.js sisse
    const [loggedIn, setLogin] = useState(false); // Set initial data here

    return (
        <AuthContext.Provider value={{ loggedIn, setLogin }}>
            {children}
        </AuthContext.Provider>
    );
}