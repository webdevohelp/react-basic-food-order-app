import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { ModalContext } from '../../context/ModalContext';
import CartContext from '../../context/CartContext';

const HeaderCartButton = (props) => {
    const modalContext = useContext(ModalContext);
    const cartContext = useContext(CartContext);

    const cartItemNo = cartContext.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
        <button
            className={classes.button}
            onClick={modalContext.showCartHandler}
        >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartItemNo}</span>
        </button>
    );
};

export default HeaderCartButton;
