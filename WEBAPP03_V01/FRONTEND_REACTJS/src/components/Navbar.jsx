// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <h1>My Shopping App</h1>
      <ul style={{ display: 'flex', gap: '1rem' }}>
        <li><Link to="/" style={{ color: '#fff' }}>Home</Link></li>
        <li><Link to="/products" style={{ color: '#fff' }}>Products</Link></li>
        <li><Link to="/cart" style={{ color: '#fff' }}>Cart</Link></li>
        <li><Link to="/about" style={{ color: '#fff' }}>About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
