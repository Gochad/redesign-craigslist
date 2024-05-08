import React, { useState } from 'react';
import PageLayout from './PageLayout';
import CategoryList from '../components/Categories';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const updateSearchTerm = (newValue: string) => {
    setSearchTerm(newValue);
  };

  return (
    <PageLayout>
      <CategoryList searchTerm={searchTerm} setSearchTerm={updateSearchTerm} />
    </PageLayout>
  );
};

export default HomePage;
