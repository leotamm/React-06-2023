import React, { useRef, useState, useEffect } from 'react';
// import productsFromFile from '../../data/products.json';
import { Button } from 'react-bootstrap';
import { Slide, ToastContainer, toast } from 'react-toastify';
import config from '../../data/config.json'

import { useTranslation } from 'react-i18next';

function AddProduct() {

  const inputId = useRef();
  const inputImage = useRef();
  const inputName = useRef();
  const inputPrice = useRef();
  const inputDescription = useRef();
  const inputCategory = useRef();
  const inputActive = useRef();

  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res => res.json())
      .then(data => setCategories(data || []))
    fetch(config.productsUrl)
      .then(res => res.json())
      .then(data => {
        setProducts(data || []);
      })

  }, []);

  const addProduct = () => {
    if (inputId.current.value < 0) {
      toast.error(t('adding-failed') + 'id viga');
      return;
    }

    if (inputImage.current.value.includes(' ')) {
      toast.error(t('adding-failed') + 'pildi viga');
      return;
    }

    if (inputName.current.value === '' || inputPrice.current.value < 0 ||
      inputDescription.current.value === '' || inputCategory.current.value === '') {
      toast.error(t('adding-failed') + 'nime viga');
      return;
    }

    if (inputPrice.current.value < 0 ||
      inputDescription.current.value === '' || inputCategory.current.value === '') {
      toast.error(t('adding-failed') + 'hinna viga');
      return;
    }

    if (inputDescription.current.value === '' || inputCategory.current.value === '') {
      toast.error(t('adding-failed') + 'kirjelduse viga');
      return;
    }

    if (inputCategory.current.value === '') {
      toast.error(t('adding-failed') + 'kategooria viga');
      return;
    }

    products.push(
      {
        "id": Number(inputId.current.value),
        "image": inputImage.current.value,
        "name": inputName.current.value,
        "price": Number(inputPrice.current.value),
        "description": inputDescription.current.value,
        "category": inputCategory.current.value,
        "active": inputActive.current.checked
      }
    );
    fetch(config.productsUrl, { method: "PUT", body: JSON.stringify(products) })
      .then(toast.success(t('product-added'))
      );

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
      {/* <input ref={inputCategory} type="text" /><br /> */}
      <select ref={inputCategory} name="" id="">
        {categories.map(category => <option key={category.name} value={category.name}>{category.name}</option>)}
      </select><br />
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