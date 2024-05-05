import React from 'react';
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

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Craigslist Redesign</h1>
      <LocationSwitcher />
    </HeaderContainer>
  );
};

export default Header;