import React, { useState, useEffect } from "react";
import { useSearch } from "../context/SearchContext";
import styled from "styled-components";
import PageLayout from "./PageLayout";
import itemsData from "../data/postings.json";
import { Item } from "../components/types";

const SubcategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  padding: 20px;
  padding-top: 70px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ItemsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 0 1 48%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const Content = styled.div`
  flex-grow: 1;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 20px;
  color: #34495e;
  margin: 0;
`;

const Detail = styled.p`
  color: #7f8c8d;
  font-size: 16px;
  margin: 5px 0;
`;

interface FavoriteButtonProps {
  favorited: boolean;
}

const FavoriteButton = styled.button<FavoriteButtonProps>`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.favorited ? "#ff4500" : "#ccc")};
  font-size: 24px;
`;

const Subcategory = () => {
  const { searchTerm } = useSearch();
  const [filtered, setFiltered] = useState<Item[]>([]);
  const [items, setItems] = useState(() => {
    const localData = localStorage.getItem("posts");
    const localItems = localData ? JSON.parse(localData) : [];
    return [...itemsData, ...localItems];
  });
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const localData = localStorage.getItem("posts");
    const localItems = localData ? JSON.parse(localData) : itemsData;
    setItems(localItems);

    const localFavorites = localStorage.getItem("favorites");
    setFavorites(localFavorites ? JSON.parse(localFavorites) : []);
  }, []);

  useEffect(() => {
    const filtered = items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.area.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(filtered);
  }, [searchTerm, items]);

  const toggleFavorite = (id: string) => {
    setFavorites((favs: string[]) => {
      const newFavorites = favs.includes(id)
        ? favs.filter((fav) => fav !== id)
        : [...favs, id];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return (
    <PageLayout>
      <SubcategoryContainer>
        <ItemsGrid>
          {filtered.map((item) => (
            <ListItem key={item.title}>
              <FavoriteButton
                onClick={() => toggleFavorite(item.title)}
                favorited={favorites.includes(item.title)}
              >
                {favorites.includes(item.title) ? "★" : "☆"}
              </FavoriteButton>
              <Content>
                <Title>
                  {item.title} - {item.price}
                </Title>
                <Detail>Location: {item.area}</Detail>
                <Detail>Description: {item.description}</Detail>
              </Content>
            </ListItem>
          ))}
        </ItemsGrid>
      </SubcategoryContainer>
    </PageLayout>
  );
};

export default Subcategory;
