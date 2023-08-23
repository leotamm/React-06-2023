import React, { useRef, useEffect, useState } from 'react';
// import productsFromFile from '../../data/products.json'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import config from '../../data/config.json';
import { ClipLoader } from 'react-spinners';
import '../../css/MaintainProducts.css'
import styles from '../../css/HomePage.module.css';
import { Product } from '../../models/Product';

function MaintainProduct() {

  const [products, setProducts] = useState<Product[]>([]);     // väljakuvatav seis
  const [dbProducts, setDbProducts] = useState<Product[]>([]); //
  const [isLoading, setLoading] = useState(true);

  // const [products, setProducts] = useState(productsFromFile);
  const searchedRef = useRef<HTMLInputElement>(null);
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

  const deleteProduct = (productId: number) => {
    const index = dbProducts.findIndex(product => product.id === productId);
    dbProducts.splice(index, 1);
    // setProducts(dbProducts.slice());
    searchFromProducts();
    fetch(config.productsUrl, { method: "PUT", body: JSON.stringify(dbProducts) });
  }

  const searchFromProducts = () => {
    const searchedInput = searchedRef.current;
    if (!searchedInput) {
      return;
    }
    const result = dbProducts.filter(product =>
      product.name.toLowerCase().includes(searchedInput.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchedInput.value.toLowerCase()) ||
      product.id.toString().includes(searchedInput.value)
    );
    setProducts(result.slice());
    // HILJEM ID JÄRGI
  }

  return (
    <div>
      {isLoading && <ClipLoader
        color={'979797'}
        loading={isLoading}
        size={35}
        speedMultiplier={1}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
      <div className='bold-heading'>{t('maintain-products')}</div>
      <div className='bold-heading'>Kokku: {products.length}</div><br />
      <input ref={searchedRef} onChange={searchFromProducts} type='text' /> <br /><br />
      <table>
        <thead>
          <th>Pilt</th>
          <th>Id</th>
          <th>Nimi</th>
          <th>Hindilt</th>
          <th>Kirjeldus</th>
          <th>Kategooria</th>
          <th>Pilt</th>
        </thead>

        <tbody>
          {products.map((product) =>
            <tr className={product.active === true ? styles.active : 'inactive'} key={product.id}>
              <td><img src={product.image} alt='' /></td>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>
                <Button variant='light' onClick={() => deleteProduct(product.id)}>Kustuta</Button>
                <Button as={Link as any} to={'/admin/edit-product/' + product.id} variant='light'>Muuda</Button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}


export default MaintainProduct