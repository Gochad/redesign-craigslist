import React from "react";
import styled from "styled-components";
import { CategoryData } from "./types";
import { Link } from "react-router-dom";
import { colors } from "../styles/colors";

const Card = styled.div`
  padding: 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  height: auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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
  color: ${colors.fstDarkViolet};
  text-decoration: none;
  padding: 5px;

  &:hover {
    color: ${colors.fstDarkViolet};
    background-color: ${colors.pastelLilac};
    border: 1px solid ${colors.fstDarkViolet};
  }
`;

const CategoryTitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
  color: ${colors.intenseLilac};
`;

interface CategoryCardProps {
  category: CategoryData;
  style?: React.CSSProperties;
}

const CategoryCard = ({ category, style }: CategoryCardProps) => {
  return (
    <Card style={style}>
      <CategoryTitle>
        <StyledLink to="/categories">{category.name}</StyledLink>
      </CategoryTitle>
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
