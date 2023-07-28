import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Slide, ToastContainer, toast } from 'react-toastify';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Cart() {

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || '[]');

  const { t } = useTranslation();

  const navigate = useNavigate();

  const emptyCart = () => {
    cart.splice(0);
    setCart(cart.slice());
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const removeProduct = (index) => {
    cart.splice(index, 1);
    setCart(cart.slice());
    toast.success(t('product-removed'));
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const cartSum = () => {
    let sum = 0;
    cart.forEach(product => sum += product.price);
    return sum.toFixed(2);
  }

  const backToProducts = () => {
    navigate('/');
  }


  return (
    <div>
      {cart.length === 0 && <div className='bold-heading'>{t('cart-is-empty')}</div>}
      {cart.length > 0 && <div>
        <div className='bold-heading'>{t('products-in-cart')}: {cart.length}</div>
        <div className='bold-heading' >{t('total-sum')}: {cartSum()} €</div>
        {cart.length > 0 && <Button variant='light' onClick={backToProducts}>{t('back-to-products')}</Button>} <br /> <br />
      </div>}
      {cart.map((product, index) =>
        <div key={index}>
          {product.name} (id: {product.id}) - {product.price} € { }
          <Button variant='light' size="sm" onClick={() => removeProduct(index)}>{t('remove')}</Button>
        </div>
      )}
      <br></br>
      {cart.length > 0 && <Button variant='light' onClick={emptyCart}>{t('empty-cart')}</Button>}
      {cart.length > 0 && <Button disabled variant='light'>Check-out</Button>}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        transition={Slide}
      />
    </div>
  )
}

export default Cart