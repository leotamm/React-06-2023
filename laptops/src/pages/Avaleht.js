import React from 'react'

function Avaleht() {

    const computers = JSON.parse(localStorage.getItem('laptops') || '[]')

    const addToCart = (computer) => {
        const cartList = JSON.parse(localStorage.getItem('cartLaptops') || '[]');
        cartList.push(computer);
        localStorage.setItem('cartLaptops', JSON.stringify(cartList));
    }

    return (
        <div className='avaleht-tekst'>
            <div>Tere!</div>
            <div>Siin saad sülearvuteid vaadata ja lisada</div><br />
            {computers.map( oneComputer =>
                <div>
                    <div>{oneComputer.mark}</div>
                    <div>{oneComputer.mudel}</div>
                    <div>{oneComputer.maksumus}</div>
                    <button on onClick={() => addToCart(oneComputer)}>Lisa ostukorvi</button>
                </div>
            )}


        </div>
    )
}

export default Avaleht