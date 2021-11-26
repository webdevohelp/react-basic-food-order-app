import React from 'react';
import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

function Header() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Tasty Hotel
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="/navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="Table full of food." />
            </div>
        </React.Fragment>
    );
}
export default Header;
