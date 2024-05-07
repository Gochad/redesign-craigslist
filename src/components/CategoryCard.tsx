import React from "react";
import styled from "styled-components";
import { CategoryData } from "./types";

const Card = styled.div`
  padding: 20px;
  text-align: center;
  border: 1px solid #ddd;
  height: auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SubcategoryList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;

const SubcategoryItem = styled.li`
  padding: 5px 0;
`;

const StyledLink = styled.a`
  color: #000; // Ustaw kolor linku
  text-decoration: none; // Usuń podkreślenie

  &:hover {
    text-decoration: underline; // Dodaj podkreślenie przy najechaniu
  }
`;

interface CategoryCardProps {
  category: CategoryData;
  style?: React.CSSProperties;
}

const CategoryCard = ({ category, style }: CategoryCardProps) => {
  return (
    <Card style={style}>
      <h3>
        <StyledLink href={`/categories/`}>{category.name}</StyledLink>
      </h3>
      <SubcategoryList>
        {category.subcategories.map((subcategory) => (
          <SubcategoryItem key={subcategory}>
            <StyledLink href={`/subcategories/`}>{subcategory}</StyledLink>
          </SubcategoryItem>
        ))}
      </SubcategoryList>
    </Card>
  );
};

export default CategoryCard;
