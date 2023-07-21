import React from 'react'
import productsFromFile from '../../data/products.json'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


function MaintainProduct() {

  const [products, updateProducts] = useState(productsFromFile);

  return (
    <div>
      {products.map(product =>
        <div>
          <img src={product.image} alt='' />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.category}</div>
          <div>{product.description}</div>
          <div>{product.active}</div>
          <Button>Kustuta</Button>
        </div>
      )}

    </div>
  )
}


export default MaintainProduct