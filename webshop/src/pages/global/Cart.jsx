import React from 'react'
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Slide, ToastContainer, toast } from 'react-toastify';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import '../../css/Cart.css';

function Cart() {

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || '[]');
  const [parcelMacines, setParcelMacines] = useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://www.omniva.ee/locations.json')
      .then(res => res.json())
      .then(json => setParcelMacines(json))
  }, []);

  const removeProduct = (index) => {
    cart.splice(index, 1);
    setCart(cart.slice());
    toast.success(t('product-removed'));
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const cartSum = () => {
    let sum = 0;
    cart.forEach(cartProduct => sum += cartProduct.product.price * cartProduct.quantity);
    return sum.toFixed(2);
  }

  const backToProducts = () => {
    navigate('/');
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity -= 1;
    if (cart[index].quantity === 0) {
      cart.splice(index, 1);
    }
    setCart(cart.slice());
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const increaseQuantity = (index) => {
    cart[index].quantity += 1;
    setCart(cart.slice());
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  const emptyCart = () => {
    cart.splice(0);
    setCart(cart.slice());
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  return (
    <div>
      {cart.length === 0 && <div className='bold-heading'>{t('cart-is-empty')}</div>}
      {cart.length > 0 && <div>
        <div className='bold-heading'>{t('products-in-cart')}: {cart.length}</div>
        <div className='bold-heading' >{t('total-sum')}: {cartSum()} €</div>
        {cart.length > 0 && <Button variant='light' onClick={backToProducts}>{t('back-to-products')}</Button>} <br /> <br />
      </div>}
      {cart.map((cartProduct, index) =>
        <div key={index} className='product'>
          <img className='image' src={cartProduct.product.image} alt="" />name
          <div className='name'>{cartProduct.product.name}</div>
          <div className='price'>{cartProduct.product.price.toFixed(2)}</div>

          <div className='quantity'>
            <img className='button' src="minus.png" onClick={() => decreaseQuantity(index)}alt="Remove one button" />
            <span>{cartProduct.quantity} pcs</span>
            <img className='button' src="plus.png" onClick={() => increaseQuantity(index)} alt="Add one button" />
          </div>

          <div>{(cartProduct.product.price * cartProduct.quantity).toFixed(2)}</div>
          <img className='button' src="delete.png" onClick={() => removeProduct(index)} alt="Delete button" />
          {/* <button>Remove</button>
          <Button variant='light' size="sm" onClick={() => removeProduct(index)}>{t('remove')}</Button> */}
        </div>
      )}
      <select>{parcelMacines.filter(pm => pm.A0_NAME === 'EE').map(pm => <option>{pm.NAME}</option>)}</select>

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