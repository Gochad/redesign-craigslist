import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeftList from "../components/LeftList";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  padding-top: 80px;
  background-color: #fbf0ff;
`;

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <LeftList />
      <Content>{children}</Content>
      <Footer />
    </LayoutContainer>
  );
};

export default PageLayout;
