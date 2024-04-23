import React from 'react';
import CategoryCard from '../components/CategoryCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeftList from '../components/LeftList';

const HomePage = () => {
  const categories = ['Autos', 'Real Estate', 'Jobs', 'Electronics'];

  return (
    <div>
      <Header></Header>
      <LeftList></LeftList>
      {categories.map(category => (
        <CategoryCard key={category} title={category} />
      ))}
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
