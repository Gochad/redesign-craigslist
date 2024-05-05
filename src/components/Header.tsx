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
  margin-right: 10px;
`;

const HeaderButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Title>Craigslist Redesign</Title>
      </Link>
      <Link to="/create" style={{ textDecoration: 'none' }}>
        <HeaderButton>create post</HeaderButton>
      </Link>
      <LocationSwitcher />
    </HeaderContainer>
  );
};

export default Header;
