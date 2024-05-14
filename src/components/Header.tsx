import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCoffee } from "@fortawesome/free-solid-svg-icons";
import LocationSwitcher from "./LocationSwitcher";
import SearchBar from "../components/SearchBar";
import { colors } from "../styles/colors";
import { UserContext } from "../context/UserContext"; 
import logo from './logo.avif';

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
  z-index: 1000;
`;

const Title = styled.h1`
  margin: 0;
  color: black;
  text-decoration: none;
  padding-right: 50px;
  margin-right: 30px;
  margin-left: 80px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const ClickableElems = styled.div`
  display: flex;
  align-items: center;
  margin-left: -40px;
`;

const StyledLinkButton = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.fstDarkViolet}; //#39004d; //#007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  margin-left: 20px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    background-color: ${colors.sndDarkViolet}; #5c3b69; //#0056b3;
  }
`;

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Title>
          <Logo src={logo}/>
          Craigslist Redesign
        </Title>
      </Link>
      <ClickableElems>
        <Link to="/create" style={{ textDecoration: "none" }}>
          <StyledLinkButton>create post</StyledLinkButton>
        </Link>
        <Link to="/user" style={{ textDecoration: "none" }}>
          <StyledLinkButton>
            <FontAwesomeIcon
              icon={faUser}
              size="lg"
              style={{ marginRight: "5px" }}
            />
            {user ? `${user.name}` : "user"}
          </StyledLinkButton>
        </Link>
        <LocationSwitcher />
        <Link to="/forum" style={{ textDecoration: "none" }}>
          <StyledLinkButton>
            <FontAwesomeIcon
              icon={faCoffee}
              size="lg"
              style={{ marginRight: "5px" }}
            />
            forum
          </StyledLinkButton>
        </Link>
        <SearchBar />
      </ClickableElems>
    </HeaderContainer>
  );
};

export default Header;
