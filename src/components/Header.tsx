import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LocationSwitcher from './LocationSwitcher';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 10px 20px;
  text-align: left;
  position: fixed;
  width: 100%;
  top: 0;
`;

const Title = styled.h1`
  margin: 0;
  color: black;
  text-decoration: none; 
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Title>Craigslist Redesign</Title>
      </Link>
      <LocationSwitcher />
    </HeaderContainer>
  );
};

export default Header;
