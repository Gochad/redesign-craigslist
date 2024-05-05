import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftList from '../components/LeftList';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 50px;  // Zapewnia, że Footer nie zasłoni zawartości
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;  // Pozwala na zajęcie dostępnej przestrzeni przez zawartość
  padding-top: 80px;  // Zastępuje margin-top, zapewniając lepszą kontrolę nad przestrzenią
`;

const LeftListContainer = styled.div`
  width: 200px;  // Można dostosować szerokość paska bocznego
  padding: 20px;  // Odstępy wewnątrz LeftList
`;

const MainContent = styled.div`
  flex-grow: 1;  // Zapewnia, że treść główna rośnie, aby wypełnić dostępną przestrzeń
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
        {children}
      </Content>
      <Footer />
    </LayoutContainer>
  );
};

export default PageLayout;
