import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import Calendar from "./Calendar";
import linksData from "../data/header-links.json";
import { LinkData } from "./types";

const menuStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
    zIndex: "1000",
  },
  bmCrossButton: {
    display: "none",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: "350px",
  },
  bmMenu: {
    background: "#39004d",
    padding: "2em",
    fontSize: "1.15em",
    overflow: "hidden",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "block",
    textDecoration: "none",
    marginBottom: "10px",
    color: "#d1d1d1",
    transition: "color 0.3s ease, transform 0.3s ease",
  },
  bmItemHover: {
    color: "white",
    transform: "translateX(10px)",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
  bmBurgerBars: {
    background: "#39004d",
  },
};

const LeftList = () => {
  return (
    <Menu styles={menuStyles}>
      {(linksData as LinkData[]).map((link) => (
        <Link to={link.to} className="menu-item" key={link.to}>
          {link.label}
        </Link>
      ))}
      <Calendar />
    </Menu>
  );
};

export default LeftList;
