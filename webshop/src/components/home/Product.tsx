import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { CartSumContext } from '../../store/CartSumContect';
import styles from '../../css/HomePage.module.css';
import { Product as ProductModel} from '../../models/Product'
import { CartProduct } from '../../models/CartProduct';

function Product(props: { product : ProductModel }) {

    const { t } = useTranslation();
    const { setCartSum } = useContext(CartSumContext);

    const addToCart = (productClicked : ProductModel) => {
        // cartFile.push(product);
        const cart : CartProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
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
        <div className={styles.grid_container}>
            <img src={props.product.image} alt='' />
            <div>{props.product.name}</div>
            <div>{props.product.price.toFixed(2)}</div>
            <Button variant="light" onClick={() => addToCart(props.product)}>{t('add-to-cart')}</Button>
            <Link to={'/product/' + props.product.id}>
                <Button variant="light">{t('product-details')}</Button>
            </Link>
        </div>
    )
}
export default Product