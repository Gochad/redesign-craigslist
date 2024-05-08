import React from 'react';
import styled from 'styled-components';
import CategoryCard from './CategoryCard';
import categoriesData from '../data/categories.json';
import { useSearch } from '../context/SearchContext';

import { CategoryData } from '../components/types';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const FullPageCenterWrapper = styled.div`
  min-width: 100vw;
`;

const CategoriesList = () => {

  const { searchTerm } = useSearch();

  const searchCategories = (categories: CategoryData[], term: string) => {
    return categories.filter(category => {
      const categoryMatches = category.name.toLowerCase().includes(term.toLowerCase());
      const subcategoryMatches = category.subcategories.some(subcategory =>
        subcategory.toLowerCase().includes(term.toLowerCase())
      );
      return categoryMatches || subcategoryMatches;
    });
  };

  const filteredCategories = searchCategories(categoriesData as CategoryData[], searchTerm);

  return (
    <FullPageCenterWrapper>
      <Container>
        {filteredCategories.map((category, index) => (
          <CategoryCard
            key={category.name}
            style={{
              gridColumn: index === 2 || index === 3 ? 3 + index - 2 : undefined,
              gridRow: index === 2 || index === 3 ? '1 / 3' : undefined
            }}
            category={category}
          />
        ))}
      </Container>
    </FullPageCenterWrapper>
  );
};

export default CategoriesList;
