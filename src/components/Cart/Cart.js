import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import { ModalContext } from '../../context/ModalContext';

export default function Cart() {
    const context = useContext(ModalContext);
    
    const cartItems = (
        <ul className={styles['cart-items']}>
            {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(
                (item) => {
                    return <li key={item.id}>{item.name}</li>;
                }
            )}
        </ul>
    );
    return (
        <Modal>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount:</span>
                <span>35.62</span>
            </div>
            <div className={styles.actions}>
                <button
                    className={styles['button--alt']}
                    onClick={context.hideCartHandler}
                >
                    Close
                </button>
                <button
                    className={styles.button}
                    onClick={context.hideCartHandler}
                >
                    Order
                </button>
            </div>
        </Modal>
    );
}
