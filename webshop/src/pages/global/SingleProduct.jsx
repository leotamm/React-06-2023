import React from 'react'
import { useParams } from 'react-router-dom';
import productsFromFile from '../../data/products.json'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function SingleProduct() {

  const { index } = useParams();
  const indexFound = productsFromFile[index];

  const { t } = useTranslation();

  const navigate = useNavigate();

  const backToProducts = () => {
    navigate('/');
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