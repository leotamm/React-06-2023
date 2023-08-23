import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import productsFromFile from '../../data/products.json'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';
import config from '../../data/config.json';
import { Product } from '../../models/Product';

function SingleProduct() {

  const { index } = useParams();
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const indexFound = products.find(product => product.id === Number(index));

  const backToProducts = () => {
    navigate('/');
  }

  useEffect(() => {
    fetch(config.productsUrl)
      .then(res => res.json())
      .then(data => {
        setProducts(data || []);
        setLoading(false)
      })
  }, []);

  if (isLoading) {
    return < Spinner variant="success" />
  }

  return (
    <div>
      <Button variant='light' onClick={backToProducts}>{t('back-to-products')}</Button>
      {indexFound !== undefined &&
        <div>
          <div>{t('index')}: {index}</div>
          <div>{t('name')}: {indexFound.name}</div>
          <div>{t('image')}: <img src={indexFound.image} alt=''></img></div>
          <div>{t('price')}: {indexFound.price}</div>
          <div>{t('description')}: {indexFound.description}</div>
          <div>{t('category')}: {indexFound.category}</div>
          <div>{t('active')}: {indexFound.active.toString()}</div>
        </div>
      }
      {indexFound === undefined && <div>{t('product-not-found')}</div>}
    </div>
  )
}

export default SingleProduct