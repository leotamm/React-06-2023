import React, { useRef } from 'react';
import productsFromFile from '../../data/products.json';
import { Button } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

function AddProduct() {

  const inputId = useRef();
  const inputImage = useRef();
  const inputName = useRef();
  const inputPrice = useRef();
  const inputDescription = useRef();
  const inputCategory = useRef();
  const inputActive = useRef();

  const { t, i18n } = useTranslation();

  const addProduct = () => {
    if (inputId.current.value < 0 || inputImage.current.value === '' ||
      inputName.current.value === '' || inputPrice.current.value < 0 ||
      inputDescription.current.value === '' || inputCategory.current.value === '') {
      console.log('Ei saa sisestada');
    } else {
      productsFromFile.push(
        {
          "id": Number(inputId.current.value),
          "image": inputImage.current.value,
          "name": inputName.current.value,
          "price": Number(inputPrice.current.value),
          "description": inputDescription.current.value,
          "category": inputCategory.current.value,
          "active": inputActive.current.checked
        }
      )
      console.log('Toode sisestatud');
    }
  }

  return (
    <div>
      {t('add-product')}<br />
      <label >Id</label>
      <input ref={inputId} type="number" /><br />
      <label >{t('image')}</label>
      <input ref={inputImage} type="text" /><br />
      <label >{t('name')}</label>
      <input ref={inputName} type="text" /><br />
      <label >{t('price')}</label>
      <input ref={inputPrice} type="number" /><br />
      <label >{t('description')}</label>
      <input ref={inputDescription} type="text" /><br />
      <label >{t('category')}</label>
      <input ref={inputCategory} type="text" /><br />
      <label >{t('active')}</label>
      <input ref={inputActive} type="checkbox" /><br />
      <Button onClick={() => addProduct()} variant='success'>{t('add')}</Button>
    </div>
  )
}

export default AddProduct