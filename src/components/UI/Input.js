import React from 'react';
import styles from './Input.module.css';
export default function Input(props) {
    return (
        <div className={styles.input}>
            <label htmlFor={`input_${props.id}`}>{props.label}</label>
            <input id={`input_${props.id}`} {...props.input} />
        </div>
    );
}
