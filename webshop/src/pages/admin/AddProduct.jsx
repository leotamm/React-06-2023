import React, { useRef } from 'react';
import productsFromFile from '../../data/products.json';
import { Button } from 'react-bootstrap';
import { Slide, ToastContainer, toast } from 'react-toastify';

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
      toast.error(t('adding-failed'));
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
      toast.success(t('product-added'));
    }
  }

  return (
    <div>
      <div className='bold-heading'>{t('add-product')}</div><br />
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
      <Button variant='light' onClick={() => addProduct()} >{t('add')}</Button>
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        transition={Slide}
      />
    </div>
  )
}

export default AddProduct