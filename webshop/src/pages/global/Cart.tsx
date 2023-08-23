import React, { useContext } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from '../../css/Cart.module.css';
import Payment from '../../components/cart/Payment';
import ParcelMachines from '../../components/cart/ParcelMachines';
import { CartSumContext } from '../../store/CartSumContect';
import { CartProduct } from '../../models/CartProduct';

function Cart() {

  const [cart, setCart] = useState<CartProduct[]>(JSON.parse(localStorage.getItem('cart') || '[]'));
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setCartSum } = useContext(CartSumContext);

  const emptyCart = () => {
    cart.splice(0);
    setCart(cart.slice());
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartSum(cartSum);
  }

  const removeProduct = (index: number) => {
    cart.splice(index, 1);
    setCart(cart.slice());
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartSum(cartSum);
  }

  const cartSum = () => {
    let sum = 0;
    cart.forEach(cartProduct => sum += cartProduct.product.price * cartProduct.quantity);
    return sum.toFixed(2);
  }

  const decreaseQuantity = (index:number) => {
    cart[index].quantity -= 1;
    if (cart[index].quantity === 0) {
      cart.splice(index, 1);
    }
    setCart(cart.slice());
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartSum(cartSum);
  }

  const increaseQuantity = (index: number) => {
    cart[index].quantity += 1;
    setCart(cart.slice());
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartSum(cartSum);
  }

  const backToProducts = () => {
    navigate('/');
  }

  return (
    <div>
      {cart.length === 0 && <div className='bold-heading'>{t('cart-is-empty')}</div>}
      {cart.length > 0 &&
        <div>
          <div className={styles.bold_heading}>{t('products-in-cart')}: {cart.length}</div>
          <div className={styles.bold_heading}>{t('total-sum')}: {cartSum()} €</div>
          <Button variant='light' onClick={backToProducts}>{t('back-to-products')}</Button> <br />
          <Button variant='light' onClick={emptyCart}>{t('empty-cart')}</Button> <br /> <br />
          {cart.map((cartProduct, index) =>
            <div key={index} className='product'>
              <img className={styles.image} src={cartProduct.product.image} alt="" />
              <div className={styles.name}>{cartProduct.product.name}</div>
              <div className={styles.price}>{cartProduct.product.price.toFixed(2)} €</div>
              <div className={styles.quantity}>
                <img className={styles.button} src="minus.png" onClick={() => decreaseQuantity(index)} alt="Remove one button" />
                <span>{cartProduct.quantity} pcs</span>
                <img className={styles.button} src="plus.png" onClick={() => increaseQuantity(index)} alt="Add one button" />
              </div>
              <div>{(cartProduct.product.price * cartProduct.quantity).toFixed(2)} € </div>
              <img className={styles.button} src="bin.png" onClick={() => removeProduct(index)} alt="Delete button" />
            </div>
          )}
        </div>}
      <br />
      {t('choose-a-parcel-machine')}:{' '}
      <ParcelMachines />
      <Payment sum={cartSum()} />
    </div>
  )
}

export default Cart