import React from 'react'
import { useRef, useState } from 'react';

function LisaArvuteid() {

    const [message, setMessage] = useState("Lisa arvuti!");
    const markRef = useRef();
    const modelRef = useRef();
    const costRef = useRef();

    const addProduct = () => {
        const newComputer = {
            "mark": markRef.current.value,
            "mudel": modelRef.current.value,
            "maksumus": costRef.current.value,
        }
        const computers = JSON.parse(localStorage.getItem('laptops') || '[]');
        computers.push(newComputer);
        localStorage.setItem('laptops', JSON.stringify(computers));
        setMessage("Arvuti lisatud!");
    }

    return (
        <div>
            <div>Sõnum: {message}</div>
            <label>Mark</label><br />
            <input ref={markRef} type="text" /><br />
            <label>Mudel</label><br />
            <input ref={modelRef} type="text" /><br />
            <label>Maksumus</label><br />
            <input ref={costRef} type="text" /><br />
            { message === "Lisa arvuti!" && <button onClick={addProduct}>Sisesta</button>}
        </div>
    )
}

export default LisaArvuteid