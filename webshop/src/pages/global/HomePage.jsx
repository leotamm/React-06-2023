import React from 'react';
// import productsFromFile from '../../data/products.json'
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import config from '../../data/config.json';
import { ClipLoader } from 'react-spinners';

import { useTranslation } from 'react-i18next';
import SortButtons from '../../components/SortButtons';

function HomePage() {

  const [products, setProducts] = useState([]);     // väljakuvatav seis
  const [dbProducts, setDbProducts] = useState([]); // andmebaasi seis
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { t } = useTranslation();

  // const overrideCSS = () => {
  //    CSSProperties = {
  //     display: "block",
  //     margin: "0 auto",
  //     borderColor: "red",
  //   }
  // };

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res => res.json())
      .then(data => setCategories(data || []))

    fetch(config.productsUrl)
      .then(res => res.json())
      .then(data => {
        setProducts(data || []);    // seda hakkan hiljem muutma
        setDbProducts(data || []);  // seda  hiljem ei muuda
        setLoading(false)
      })
  }, []);

  // if (isLoading) {
  //   return < Spinner variant="info" />
  // }


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
      {isLoading && <ClipLoader
        color={979797}
        loading={isLoading}
        cssOverride={null}
        size={35}
        speedMultiplier={1}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
      <div className='bold-heading'>{t('products')}</div>
      <div className='bold-heading'>{t('total')}: {products.length}</div><br />
      <SortButtons
        products={products}
        setProducts={setProducts}
      />
      {t('product-category')}:
      {/* <Button variant="light" size="sm" onClick={() => fiterByCategory('robot vacuum')}>{t('robot-vacuum')}</Button>
      <Button variant="light" size="sm" onClick={() => fiterByCategory('stick vacuum')}>{t('stick-vacuum')}</Button>
      <Button variant="light" size="sm" onClick={() => fiterByCategory('memory bank')}>{t('memory-bank')}</Button>
      <Button variant="light" size="sm" onClick={() => fiterByCategory('usb drive')}>{t('usb-drive')}</Button>
      <Button variant="light" size="sm" onClick={() => fiterByCategory('camping')}>{t('camping')}</Button> */}
      {categories.map((category, index) =>
        <Button key={index} variant="light" size="sm" onClick={() => fiterByCategory(category.name)}>
          {category.name}
        </Button>
      )}

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