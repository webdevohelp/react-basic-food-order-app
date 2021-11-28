import React, { useState } from 'react';
import Cart from '../components/Cart/Cart';

export const ModalContext = React.createContext();

export default function ModalContextProvider(props) {
    const [cartIsShown, setCardIsShown] = useState(false);

    const showCartHandler = () => {
        console.log('Hello');
        setCardIsShown(true);
    };
    const hideCartHandler = () => {
        console.log('Hola');
        setCardIsShown(false);
    };

    return (
        <>
            <ModalContext.Provider value={{ showCartHandler, hideCartHandler }}>
                {cartIsShown && <Cart />}
                {props.children}
            </ModalContext.Provider>
        </>
    );
}
