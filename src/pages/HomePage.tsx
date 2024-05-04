import React from 'react';
import CategoryList from '../components/Categories';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftList from '../components/LeftList';

import { AppContainer } from './styles';


const HomePage = () => {

  return (
    <AppContainer>
      <Header></Header>
      <LeftList></LeftList>
      <CategoryList></CategoryList>
      <Footer></Footer>
    </AppContainer>
  );
};

export default HomePage;
