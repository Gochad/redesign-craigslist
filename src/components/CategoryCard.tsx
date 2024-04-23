import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  text-align: center;
  cursor: pointer;
`;

interface CategoryCardProps {
  title: string;
}

const CategoryCard = ({ title }: CategoryCardProps) => {
  return (
    <Card>
      <h3>{title}</h3>
    </Card>
  );
};

export default CategoryCard;