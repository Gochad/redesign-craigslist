import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './LeftList.css';
import Calendar from './Calendar';
import linksData from '../data/header-links.json';

interface Link {
  to: string;
  label: string;
}

const LeftList = () => {
  return (
    <Menu>
      {(linksData as Link[]).map(link => (
        <Link to={link.to} className="menu-item" key={link.to}>
          {link.label}
        </Link>
      ))}
      <Calendar />
    </Menu>
  );
};

export default LeftList;