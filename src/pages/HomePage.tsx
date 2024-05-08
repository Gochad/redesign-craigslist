import React from 'react';
import PageLayout from './PageLayout';
import CategoryList from '../components/Categories';

const HomePage = () => {
  return (
    <PageLayout>
      <CategoryList />
    </PageLayout>
  );
};

export default HomePage;
