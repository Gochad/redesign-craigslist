import React, { useState, useCallback, useRef, ChangeEvent } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSearch } from '../context/SearchContext';

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 250px;
  margin: 20px;
`;

const SearchInput = styled.input<{ isOpen?: boolean; }>`
  position: absolute;
  left: ${props => props.isOpen ? '35px' : '0'};
  width: ${props => props.isOpen ? 'calc(100% - 80px)' : '0'};
  transition: width 0.3s ease, padding 0.3s ease, opacity 0.3s ease;
  height: 15px;
  padding: ${props => props.isOpen ? '12px 20px' : '12px 0px'};
  border: 1px solid #ccc;
  border-radius: 5px;
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  overflow: hidden;

  &:focus {
    outline: none;
    border-color: #007BFF;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
  }
`;

const SearchIcon = styled.div`
  color: #007BFF;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
`;

const SearchBar = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { searchTerm, setSearchTerm } = useSearch(); // use search contex
  const [isOpen, setIsOpen] = useState(false);

  const debouncedSearch = useCallback(
    debounce((nextValue) => setSearchTerm(nextValue), 300),
    [setSearchTerm]
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    debouncedSearch(event.target.value);
  };

  const toggleSearch = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    }
  };
  

  return (
    <Container>
      <SearchInput
        ref={searchInputRef}
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        isOpen={isOpen}
      />
      <SearchIcon onClick={toggleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIcon>
    </Container>
  );
};

export default SearchBar;