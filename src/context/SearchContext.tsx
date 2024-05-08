import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext({
  searchTerm: '',
  setSearchTerm: (term: string) => {}
});

export const useSearch = () => useContext(SearchContext);

interface SearchContextProps {
    children: React.ReactNode;
  }

export const SearchProvider = ({ children }: SearchContextProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};