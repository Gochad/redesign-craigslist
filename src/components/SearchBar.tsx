import React, { useState } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 12px 20px;
  margin: 20px 40px;
  display: block;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: #bbb;
  }

  &:focus {
    outline: none;
    border-color: #007BFF;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
  }
`;

interface SearchBarProps {
  placeholder: string;
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <SearchInput
      type="text"
      placeholder={placeholder}
      value={searchTerm}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  );
};

export default SearchBar;
