import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './LeftList.css';

const LeftList = () => {
  return (
    <Menu>
      <Link to="/" className="menu-item">Homepage</Link>
      <Link to="/about" className="menu-item">About us</Link>
      <Link to="/services" className="menu-item">Services</Link>
      <Link to="/contact" className="menu-item">Contact</Link>
    </Menu>
  );
};

export default LeftList;