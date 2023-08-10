import React, { useRef, useEffect, useState } from 'react';
// import productsFromFile from '../../data/products.json'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import config from '../../data/config.json';
import { ClipLoader } from 'react-spinners';

function MaintainProduct() {

  const [products, setProducts] = useState([]);     // väljakuvatav seis
  const [dbProducts, setDbProducts] = useState([]); //
  const [isLoading, setLoading] = useState(true);

  // const [products, setProducts] = useState(productsFromFile);
  const searchedRef = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    fetch(config.productsUrl)
      .then(res => res.json())
      .then(data => {
        setProducts(data || []);    // seda hakkan hiljem muutma
        setDbProducts(data || []);  // seda  hiljem ei muuda
        setLoading(false)
      })
  }, []);

  const deleteProduct = (productId) => {
    const index = dbProducts.findIndex(product => product.id === productId);
    dbProducts.splice(index, 1);
    // setProducts(dbProducts.slice());
    searchFromProducts();
    fetch(config.productsUrl, { method: "PUT", body: JSON.stringify(dbProducts) });
  }

  const searchFromProducts = () => {
    const result = dbProducts.filter(product =>
      product.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchedRef.current.value.toLowerCase()) ||
      product.id.toString().includes(searchedRef.current.value)
    );
    setProducts(result.slice());
    // HILJEM ID JÄRGI
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
      <div className='bold-heading'>{t('maintain-products')}</div>
      <div className='bold-heading'>Kokku: {products.length}</div><br />
      <input ref={searchedRef} onChange={searchFromProducts} type='text' /> <br /><br />
      {products.map((product) =>
        <div key={product.id}>
          <img src={product.image} alt='' />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.category}</div>
          <div>{product.description}</div>
          <div>{product.active}</div>
          <Button variant='light' onClick={() => deleteProduct(product.id)}>Kustuta</Button>
          <Button as={Link} to={'/admin/edit-product/' + product.id} variant='light'>Muuda</Button>
        </div>
      )}
    </div>
  )
}


export default MaintainProduct