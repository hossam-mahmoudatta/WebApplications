// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <button onClick={toggleTheme} className="btn btn-secondary ms-auto">
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;

{/* 
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <h1>My Shopping App</h1>
      <ul style={{ display: 'flex', gap: '1rem' }}>
        <li><Link to="/" style={{ color: '#fff' }}>Home</Link></li>
        <li><Link to="/products" style={{ color: '#fff' }}>Products</Link></li>
        <li><Link to="/cart" style={{ color: '#fff' }}>Cart</Link></li>
        <li><Link to="/about" style={{ color: '#fff' }}>About</Link></li>
        <button className="btn btn-primary">Click Me</button>
      </ul>
    </nav>
*/}
