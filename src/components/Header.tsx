import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #f8f9fa;
  padding: 10px 5px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Craigslist Redesign</h1>
    </HeaderContainer>
  );
};

export default Header;