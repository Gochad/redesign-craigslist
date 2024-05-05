import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import footerData from '../data/footer.json';

const Container = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Elem = styled.div`
  margin-right: 50px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <Container>
      {footerData.map((item, index) => (
        <Elem key={index}>
          <StyledLink to={item.link}>{item.text}</StyledLink>
        </Elem>
      ))}
    </Container>
  );
};

export default Footer;
