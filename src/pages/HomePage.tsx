import React from 'react';
import styled from 'styled-components';
import CategoryList from '../components/Categories';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftList from '../components/LeftList';

import { AppContainer } from './styles';

const Content = styled.div`
  margin-top: 80px;
`;

const HomePage = () => {

  return (
    <AppContainer>
      <Header></Header>
      <LeftList></LeftList>
      <Content>
        <CategoryList></CategoryList>
      </Content>
      <Footer></Footer>
    </AppContainer>
  );
};

export default HomePage;
