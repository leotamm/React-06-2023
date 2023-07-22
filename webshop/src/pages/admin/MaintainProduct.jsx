import React from 'react'
import productsFromFile from '../../data/products.json'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


function MaintainProduct() {

  const [products, updateProducts] = useState(productsFromFile);

  const deleteProduct = (index) => {
    productsFromFile.splice(index, 1);
    updateProducts(productsFromFile.slice());
  }


  return (
    <div>
      {products.map((product, index) =>
        <div key={product.id}>
          <img src={product.image} alt='' />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.category}</div>
          <div>{product.description}</div>
          <div>{product.active}</div>
          <Button onClick={() => deleteProduct(index)}>Kustuta</Button><br /><br />
        </div>
      )}

    </div>
  )
}


export default MaintainProduct