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
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #57007f;
    color: #ffccff;
  }

  &:active {
    background-color: #2c0036;
    color: #ff99ff;
  }
`;

const Footer = () => {
  return (
    <Container>
      {footerData.map((item, index) => (
        <Elem key={index}>
          <StyledLink to={item.link}>
            {item.text}
          </StyledLink>
        </Elem>
      ))}
    </Container>
  );
};

export default Footer;
