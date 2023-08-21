// MyContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const AuthContext = createContext(); // kasutatav globaalne muutuja

// Create a provider component
export function AuthContextProvider({ children }) { // globaalselt index.js sisse
    const [loggedIn, setLoggedIn] = useState(checkIfLoggedIn); // Set initial data here

    function checkIfLoggedIn() {
        if (sessionStorage.getItem("id_token") !== null &&
            sessionStorage.getItem("refresh_token") !== null) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}