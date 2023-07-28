import React, { useRef } from 'react'
import productsFromFile from '../../data/products.json'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';


function MaintainProduct() {

  const [products, setProducts] = useState(productsFromFile);
  const searchedRef = useRef();
  const { t } = useTranslation();

  const deleteProduct = (index) => {
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice());
  }

  const searchFromProducts = () => {
    const result = productsFromFile.filter(
      product => product.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    setProducts(result.slice());
      // HILJEM ID JÄRGI
  }

  return (
    <div>
      <div className='bold-heading'>{t('maintain-products')}</div>
      <div className='bold-heading'>Kokku: {products.length}</div><br />
      <input ref={searchedRef} onChange={searchFromProducts} type='text' /> <br /><br />
      {products.map((product, index) =>
        <div key={product.id}>
          <img src={product.image} alt='' />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.category}</div>
          <div>{product.description}</div>
          <div>{product.active}</div>
          <Button variant='light' onClick={() => deleteProduct(index)}>Kustuta</Button>
          <Button as={Link} to={'/admin/edit-product/' + product.id} variant='light'>Muuda</Button>
        </div>
      )}
    </div>
  )
}


export default MaintainProduct