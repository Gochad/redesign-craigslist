import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import locationsData from '../data/location.json';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 10px;
`;

const Input = styled.input`
  padding: 8px;
  flex: 1 0 50%;
  box-sizing: border-box;
`;

const Select = styled.select`
  flex: 1 0 50%;
  padding: 8px;
  border-radius: 4px;
`;

interface Location {
  id: string;
  name: string;
  children?: Location[];
}

const LocationSwitcher = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const locations: Location[] = locationsData;

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value);
  };

  const renderOptions = (location: Location, prefix: string = '') => {
    const options = [
      <option key={location.id} value={location.id}>
        {prefix + location.name}
      </option>
    ];

    if (location.children) {
      location.children.forEach(child => {
        options.push(...renderOptions(child, prefix + '--'));
      });
    }

    return options;
  };

  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Input
        type="text"
        placeholder="search location..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Select value={selectedLocation} onChange={handleChange}>
        <option value="">Choose location</option>
        {filteredLocations.map(location => renderOptions(location))}
      </Select>
    </Container>
  );
};

export default LocationSwitcher;
