import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainNavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">DeliverEat</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/pedidos">Pedidos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pratos">Pratos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/restaurantes">Restaurantes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Register/Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MainNavBar;
