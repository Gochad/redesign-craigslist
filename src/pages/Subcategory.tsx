import React, { useState } from 'react';
import styled from 'styled-components';
import PageLayout from './PageLayout';
import itemsData from '../data/postings.json';

const SubcategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.10);
`;

const ItemsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: flex-start; // Wyrównanie elementów w pionie na początku kontenera
  flex: 0 1 48%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const Content = styled.div`
  flex-grow: 1; // Pozwala zawartości rozciągać się, aby wypełnić dostępne miejsce
  margin-left: 10px; // Dodaje odstęp między przyciskiem a treścią
`;

const Title = styled.h3`
  font-size: 20px;
  color: #34495e;
  margin: 0; // Usuwa marginesy, jeśli są niepotrzebne
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
    color: ${props => props.favorited ? '#ff4500' : '#ccc'};
    font-size: 24px;
`;

interface Item {
    date: string;
    title: string;
    category: string;
    area: string;
    price: string;
    description: string;
}

const Subcategory = () => {
    const items: Item[] = itemsData;
    const [favorites, setFavorites] = useState<string[]>([]);

    const toggleFavorite = (id: string) => {
        setFavorites(favs => 
            favs.includes(id) ? favs.filter(fav => fav !== id) : [...favs, id]
        );
    };

    return (
        <PageLayout>
            <SubcategoryContainer>
                <ItemsGrid>
                    {items.map(item => (
                        <ListItem key={item.title}>
                            <FavoriteButton
                                onClick={() => toggleFavorite(item.title)}
                                favorited={favorites.includes(item.title)}
                            >
                                {favorites.includes(item.title) ? '★' : '☆'}
                            </FavoriteButton>
                            <Content>
                                <Title>{item.title} - {item.price}</Title>
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
