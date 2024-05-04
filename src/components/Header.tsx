import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #f8f9fa;
  padding: 10px 5px;
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Craigslist Redesign</h1>
    </HeaderContainer>
  );
};

export default Header;