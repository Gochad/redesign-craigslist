import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LocationSwitcher from './LocationSwitcher';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
  margin-right: 30px;
  margin-left: 80px;
  display: flex;
  align-items: center;
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

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const ClickableElems = styled.div`
  margin-left: auto;
  margin-right: 40%;
  display: flex;
  align-items: center;

`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Title>
          <Logo src="/logo.png" alt="Craigslist Logo" />
          Craigslist Redesign
          </Title>
      </Link>
      <ClickableElems>
        <Link to="/create" style={{ textDecoration: 'none' }}>
          <HeaderButton>create post</HeaderButton>
        </Link>
        <LocationSwitcher />
      </ClickableElems>
    </HeaderContainer>
  );
};

export default Header;
