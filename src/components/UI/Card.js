import React from 'react';
import styles from './Card.module.css';
function Card({ children }) {
    return (
        <React.Fragment>
            <div className={styles.card}>{children}</div>
        </React.Fragment>
    );
}

export default Card;
