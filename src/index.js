import ReactDOM from 'react-dom';
import ModalContextProvider from './context/ModalContext';

import './index.css';
import App from './App';

ReactDOM.render(
    <ModalContextProvider>
        <App />
    </ModalContextProvider>,
    document.getElementById('root')
);
