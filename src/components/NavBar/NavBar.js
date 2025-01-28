// import React from 'react';
// import { NavLink } from "react-router-dom";
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import './NavBar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Payfly</h1>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width="200" height="100">

                    <rect width="200" height="100" rx="15" ry="15" fill="#00BFAE" />

                    <rect width="200" height="20" fill="#006F55" />

                    <text x="20" y="60" fontFamily="Arial, sans-serif" fontSize="30" fill="white" fontWeight="bold">Payfly</text>
                </svg>
            </div>
            <ul className="nav-links">
                <li><a href="/" className="nav-link">Inicio</a></li>
                <li><a href="#" className="nav-link">Transferencias</a></li>
                <li><a href="#" className="nav-link">Planificar Viajes</a></li>
                <li><a href="#" className="nav-link">Compras</a></li>
            </ul>
            <div className="menu-toggle" id="menu-toggle">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>

    );
}

export default Navbar;
