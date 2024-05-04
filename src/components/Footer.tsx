import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Elem = styled.div`
    margin-right: 50px;
`;

const Footer = () => {
  return (
    <Container>
      <Elem>© 2024 craigslist redesigned</Elem>
      <Elem>
        help
      </Elem>
      <Elem>
        safety
      </Elem>
      <Elem>
        privacy
      </Elem>
      <Elem>
        terms
      </Elem>
      <Elem>
        about
      </Elem>
      <Elem>
        app
      </Elem>
      <Elem>
        sitemap
      </Elem>
    </Container>
  );
};

export default Footer;