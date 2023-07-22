import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import cartFromFile from '../../data/cart.json'
import { Slide, ToastContainer, toast } from 'react-toastify';

import { useTranslation } from 'react-i18next';

function Cart() {

  const [cart, updateCart] = useState(cartFromFile);

  const { t, i18n } = useTranslation();

  const emptyCart = () => {
    cart.splice(0);
    updateCart(cart.slice());
  }

  const removeProduct = (index) => {
    cart.splice(index, 1);
    updateCart(cart.slice());
    toast.success(t('product-removed'));
  }

  return (
    <div>
      {cart.length === 0 && <div className='bold-heading'>{t('cart-is-empty')}</div>}
      {cart.length > 0 && <div className='bold-heading'>{t('products-in-cart')}: {cart.length}</div>}
      {cart.length > 0 && <Button variant='danger' onClick={emptyCart}>{t('empty-cart')}</Button>}<br /><br />
      {cart.map((product, index) =>
        <div key={index}>
          {product.name} (id: {product.id}) - {product.price}
          <Button variant='danger' onClick={() => removeProduct(index)}>Remove</Button>
        </div>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        transition={Slide}
      />
    </div>
  )
}

export default Cart