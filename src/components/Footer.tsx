import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import footerData from "../data/footer.json";

const Container = styled.footer`
  background-color: #39004d;
  color: white;
  text-align: center;
  padding: 20px;
  position: static;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Elem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <Container>
      {footerData.map((item, index) => (
        <Elem key={index}>
          <StyledLink to={item.link}>
            {item.text.charAt(0).toUpperCase() + item.text.slice(1)}
          </StyledLink>
        </Elem>
      ))}
    </Container>
  );
};

export default Footer;
