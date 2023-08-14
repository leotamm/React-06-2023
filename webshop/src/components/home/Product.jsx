import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { CartSumContext } from '../../store/CartSumContect';

function Product({ product }) {

    const { t } = useTranslation();
    const { setCartSum } = useContext(CartSumContext);

    const addToCart = (productClicked) => {
        // cartFile.push(product);
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const index = cart.findIndex(cartProduct => cartProduct.product.id === productClicked.id);
        if (index >= 0) {
            cart[index].quantity++;
        } else {
            cart.push({ "quantity": 1, "product": productClicked });
        }
        let sum = 0;
        cart.forEach(cartProduct => sum += cartProduct.product.price * cartProduct.quantity);
        setCartSum(sum.toFixed(2));
        localStorage.setItem('cart', JSON.stringify(cart));
        toast.success(productClicked.name + ' ' + t('added'));
    }

    return (
        <div>
            <img src={product.image} alt='' />
            <div>{product.name}</div>
            <div>{product.price.toFixed(2)}</div>
            <Button variant="light" onClick={() => addToCart(product)}>{t('add-to-cart')}</Button>
            <Link to={'/product/' + product.id}>
                <Button variant="light">{t('product-details')}</Button>
            </Link>
        </div>
    )
}
export default Product