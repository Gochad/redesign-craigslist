import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftList from '../components/LeftList';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 50px;
`;

const Content = styled.div`
  margin-top: 80px;
  display: flex;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

interface PageLayoutProps {
    children: React.ReactNode;
  }

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <LeftList />
      <Content>
        <MainContent>{children}</MainContent>
      </Content>
      <Footer />
    </LayoutContainer>
  );
};

export default PageLayout;