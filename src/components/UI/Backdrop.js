import React, { useContext } from 'react';
import classes from './Backdrop.module.css';

import { ModalContext } from '../../context/ModalContext';

function Backdrop() {
    const context = useContext(ModalContext);
    return (
        <div className={classes.backdrop} onClick={context.hideCartHandler} />
    );
}

export default Backdrop;
