import React from 'react'
import productsFromFile from '../../data/products.json'
import cartFile from '../../data/cart.json'
import { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

function HomePage() {

  const [products, updateProducts] = useState(productsFromFile);

  const { t, i18n } = useTranslation();

  const sortAZ = () => {
    const result = products.sort((a, b) => a.name.localeCompare(b.name));
    updateProducts(result.slice());
  }

  const sortZA = () => {
    const result = products.sort((a, b) => b.name.localeCompare(a.name));
    updateProducts(result.slice());
  }

  const sortPriceAscending = () => {
    products.sort((a, b) => a.price - b.price);
    updateProducts(products.slice());
  }

  const sortPriceDecending = () => {
    products.sort((a, b) => b.price - a.price);
    updateProducts(products.slice());
  }

  const addToChart = (product) => {
    cartFile.push(product);
    // call the toast - iltem added
  }

  return (
    <div>
      <Button onClick={() => sortAZ()}>{t('sort-az')}</Button>
      <Button onClick={() => sortZA()}>{t('sort-za')}</Button><div>  </div>
      <Button onClick={() => sortPriceAscending()}>{t('sort-price-increasing')}</Button>
      <Button onClick={() => sortPriceDecending()}>{t('sort-price-decreasing')}</Button>
      <br /><br />

      {products.map((product, index) =>
        <div key={index}>
          <img src={product.image} alt='' />
          <div>{product.name}</div>
          <div>{product.price}</div>
          <Button onClick={() => addToChart(product)}>{t('add-to-cart')}</Button><br /><br />
        </div>
      )}

      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{t('cart')}</strong>
          <small>{t('just-now')}</small>
        </Toast.Header>
        <Toast.Body>{t('product-added')}</Toast.Body>
      </Toast>

    </div>
  )
}

export default HomePage