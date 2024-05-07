import React from 'react';
import styled from 'styled-components';
import CategoryCard from './CategoryCard';
import categoriesData from '../data/categories.json';
import { CategoryData } from '../components/types';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

interface CategoriesProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const CategoriesList = ({ searchTerm, setSearchTerm }: CategoriesProps) => {
  const searchCategories = (categories: CategoryData[], term: string) => {
    return categories.filter(category => {
      const categoryMatches = category.name.toLowerCase().includes(term.toLowerCase());
      const subcategoryMatches = category.subcategories.some((subcategory: string)=>
        subcategory.toLowerCase().includes(term.toLowerCase())
      );
      return categoryMatches || subcategoryMatches;
    });
  };

  const filteredCategories = searchCategories(categoriesData as CategoryData[], searchTerm);

  return (
    <div>
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
    </div>
  );
};

export default CategoriesList;
