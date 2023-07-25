import React from 'react'
import { useParams } from 'react-router-dom';
import productsFromFile from '../../data/products.json'
import { useTranslation } from 'react-i18next';

function SingleProduct() {

  const { index } = useParams();
  const indexFound = productsFromFile[index];

  const { t } = useTranslation();

  return (
    <div>
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