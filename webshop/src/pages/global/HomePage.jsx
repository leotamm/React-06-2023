import React from 'react'
import productsFromFile from '../../data/products.json'
import cartFile from '../../data/cart.json'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

function HomePage() {

  const [products, setProducts] = useState(productsFromFile);

  const { t } = useTranslation();

  const sortAZ = () => {
    products.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a, b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
  }

  const sortPriceAscending = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  }

  const sortPriceDecending = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  }

  const addToCart = (product) => {
    cartFile.push(product);
    toast.success(product.name + ' ' + t('added'));
  }

  return (
    <div>
      <div className='bold-heading'>{t('products')}</div><br />
      <Button variant="light" size="sm" onClick={() => sortAZ()}>{t('sort-az')}</Button>
      <Button variant="light" size="sm" onClick={() => sortZA()}>{t('sort-za')}</Button><div>  </div>
      <Button variant="light" size="sm" onClick={() => sortPriceAscending()}>{t('sort-price-increasing')}</Button>
      <Button variant="light" size="sm" onClick={() => sortPriceDecending()}>{t('sort-price-decreasing')}</Button>
      <br /><br />

      {products.map((product, index) =>
        <div key={index}>
          <img src={product.image} alt='' />
          <div>{product.name}</div>
          <div>{product.price}</div>
          <Button variant="light" onClick={() => addToCart(product)}>{t('add-to-cart')}</Button>
          <Link to={'/product/' + index}>
            <Button variant="light">{t('product-details')}</Button>
          </Link>
          <br /><br />
        </div>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        transition={Slide}
      />
    </div>
  )
}

export default HomePage