import React from 'react';
import styled from 'styled-components';
import PageLayout from './PageLayout';
import itemsData from '../data/subcategories.json';

const SubcategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;


const CategoryTitle = styled.h2`
  font-size: 24px;
  color: #333;
`;

const ListItem = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  margin: 5px;
  border-radius: 5px;
`;

interface Item {
    id: number;
    name: string;
    price: string;
    location: string;
    description: string;
  }

const Subcategory = () => {
    const items: Item[] = itemsData;

  return (
    <PageLayout>
        <SubcategoryContainer>
        <CategoryTitle>by subcategory</CategoryTitle>
        {items.map(item => (
            <ListItem key={item.id}>
            <h3>{item.name} - {item.price}</h3>
            <p>Location: {item.location}</p>
            <p>Description: {item.description}</p>
            </ListItem>
        ))}
        </SubcategoryContainer>
    </PageLayout>
  );
};

export default Subcategory;
