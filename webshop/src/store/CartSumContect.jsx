// MyContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const CartSumContext = createContext(); // kasutatav globaalne muutuja

// Create a provider component
export function CartSumContextProvider({ children }) { // globaalselt index.js sisse
    const [cartSum, setCartSum] = useState(calculateCaetSum()); // Set initial data here

    function calculateCaetSum() {
        let sum = 0;
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.forEach(cartProduct => sum += cartProduct.product.price * cartProduct.quantity);
        return sum.toFixed(2);
    }

    return (
        <CartSumContext.Provider value={{ cartSum, setCartSum }}>
            {children}
        </CartSumContext.Provider>
    );
}