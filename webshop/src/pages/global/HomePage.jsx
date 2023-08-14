import React from 'react';
// import productsFromFile from '../../data/products.json'
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Slide, ToastContainer } from 'react-toastify';
import config from '../../data/config.json';
import { ClipLoader } from 'react-spinners';

import { useTranslation } from 'react-i18next';
import SortButtons from '../../components/home/SortButtons';
import Product from '../../components/home/Product';


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
        data = data.filter(product => product.active === true);
        setProducts(data || []);    // seda hakkan hiljem muutma
        setDbProducts(data || []);  // seda  hiljem ei muuda
        setLoading(false)
      })
  }, []);

  // if (isLoading) {
  //   return < Spinner variant="info" />
  // }




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
          <Product product={product} key={index}/>
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