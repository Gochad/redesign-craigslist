import React from 'react';
import styled from 'styled-components';
import CategoryCard from './CategoryCard'; 
import categoriesData from '../data/categories.json';


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const CategoriesList = () => {
    const categories = (categoriesData as CategoryData[]);

    return (
        <Container>
            {categories.map((category, index) => (
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
    );
};

export default CategoriesList;
