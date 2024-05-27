import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LeftList from "../components/LeftList";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`;

const Main = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
`;

const LeftListContainer = styled.div`
  flex-shrink: 0;
`;

const Content = styled.div`
  flex-grow: 1;
  padding-top: 80px;
  background-color: #fbf0ff;
  overflow-y: auto;
`;

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <LeftListContainer>
          <LeftList />
        </LeftListContainer>
        <Content>{children}</Content>
      </Main>
      <Footer />
    </LayoutContainer>
  );
};

export default PageLayout;
