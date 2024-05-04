import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryList from '../components/Categories';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftList from '../components/LeftList';
import SearchBar from '../components/SearchBar';

import { AppContainer } from './styles';

const Content = styled.div`
  margin-top: 80px;
`;

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const updateSearchTerm = (newValue: string) => {
    setSearchTerm(newValue);
  };

  return (
    <AppContainer>
      <Header></Header>
      <LeftList></LeftList>
      <Content>
        <SearchBar placeholder="Search..." onSearch={updateSearchTerm} />
        <CategoryList searchTerm={searchTerm} setSearchTerm={updateSearchTerm}></CategoryList>
      </Content>
      <Footer></Footer>
    </AppContainer>
  );
};

export default HomePage;
