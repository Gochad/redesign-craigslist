import React, { useState } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 5px;
  margin: 90px;
  height: 10px;
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