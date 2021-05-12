import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light container-fluid px-5 header-section">
                <div className="container-fluid px-5">
                    <Link className="navbar-brand ms-4" to="">HomeJam</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav menu">
                            <Link className="nav-link active" aria-current="page" to="">  <h6>Search</h6> </Link>
                            <Link className="nav-link" to="/"> <h6>Help</h6> </Link>
                            <Link className="nav-link" to="/"> <h6>Account</h6> </Link>
                            <Link className="nav-link" to="/"> <h6>Icon</h6> </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;