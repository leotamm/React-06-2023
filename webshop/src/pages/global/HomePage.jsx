import React from 'react'
// import productsFromFile from '../../data/products.json'
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import config from '../../data/config.json'

import { useTranslation } from 'react-i18next';

function HomePage() {

  const [products, setProducts] = useState([]);     // väljakuvatav seis
  const [dbProducts, setDbProducts] = useState([]); // andmebaasi seis
  const [categories, setCategories] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res => res.json())
      .then(data => setCategories(data || []))
  }, []);

  useEffect(() => {
    fetch(config.productsUrl)
      .then(res => res.json())
      .then(data => {
        setProducts(data || []);    // seda hakkan hiljem muutma
        setDbProducts(data || []);  // seda  hiljem ei muuda
      })
  }, []);

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

  const addToCart = (productClicked) => {
    // cartFile.push(product);
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const index = cart.findIndex(cartProduct => cartProduct.product.id === productClicked.id);
    if (index >= 0) {
      cart[index].quantity++;
    } else {
      cart.push({ "quantity": 1, "product": productClicked });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success(productClicked.name + ' ' + t('added'));
  }

  const fiterByCategory = (categoryClicked) => {
    const result = dbProducts.filter(product => product.category === categoryClicked)
    setProducts(result);
  }

  return (
    <div>
      <div className='bold-heading'>{t('products')}</div>
      <div className='bold-heading'>Kokku: {products.length}</div><br />
      <Button variant="light" size="sm" onClick={() => sortAZ()}>{t('sort-az')}</Button>
      <Button variant="light" size="sm" onClick={() => sortZA()}>{t('sort-za')}</Button><div>  </div>
      <Button variant="light" size="sm" onClick={() => sortPriceAscending()}>{t('sort-price-increasing')}</Button>
      <Button variant="light" size="sm" onClick={() => sortPriceDecending()}>{t('sort-price-decreasing')}</Button><br />
      {t('product-category')}:
      {/* <Button variant="light" size="sm" onClick={() => fiterByCategory('robot vacuum')}>{t('robot-vacuum')}</Button>
      <Button variant="light" size="sm" onClick={() => fiterByCategory('stick vacuum')}>{t('stick-vacuum')}</Button>
      <Button variant="light" size="sm" onClick={() => fiterByCategory('memory bank')}>{t('memory-bank')}</Button>
      <Button variant="light" size="sm" onClick={() => fiterByCategory('usb drive')}>{t('usb-drive')}</Button>
      <Button variant="light" size="sm" onClick={() => fiterByCategory('camping')}>{t('camping')}</Button> */}
      {categories.map(category =>
        <Button variant="light" size="sm" onClick={() => fiterByCategory(category.name)}>
          {category.name}
        </Button>)}

      <br /><br />
      <div className='grid-container'>
        {products.map((product, index) =>
          <div key={index}>
            <img src={product.image} alt='' />
            <div>{product.name}</div>
            <div>{product.price.toFixed(2)}</div>
            <Button variant="light" onClick={() => addToCart(product)}>{t('add-to-cart')}</Button>
            <Link to={'/product/' + index}>
              <Button variant="light">{t('product-details')}</Button>
            </Link>
          </div>
        )}
      </div>


      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        transition={Slide}
      />
    </div>
  )
}

export default HomePage