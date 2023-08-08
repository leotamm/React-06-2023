import React, { useState, useEffect } from 'react'

function Tooted() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products || []))
    }, []);

    return (
        <div> Products <br /><br />
            <div className='product'>
                <div className='name'>Toode</div>
                <div className='image'>Pilt</div>
                <div className='price'>Hind</div>
                <div className='price'>Allahindlus</div>
                <div className='stock'>Laos</div>
            </div>
            {products.map((product, index) =>
                <div className='product' key={index}>
                    <div className='name'>{product.title}</div>{' '}
                    <img className='image' src={product.images[0]} alt='' />{' '}
                    <div className='price'>${product.price}</div>
                    <div className='price'>{product.discountPercentage.toFixed(2)}%</div>
                    <div className='stock'>{product.stock}</div>
                </div>
            )}
        </div>
    )
}

export default Tooted