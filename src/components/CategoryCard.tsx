import React from "react";
import styled from "styled-components";
import { CategoryData } from "./types";
import { Link } from "react-router-dom";

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

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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
        <StyledLink to='/categories'>{category.name}</StyledLink>
      </h3>
      <SubcategoryList>
        {category.subcategories.map((subcategory) => (
          <SubcategoryItem key={subcategory}>
            <StyledLink to='/subcategories'>{subcategory}</StyledLink>
          </SubcategoryItem>
        ))}
      </SubcategoryList>
    </Card>
  );
};

export default CategoryCard;
