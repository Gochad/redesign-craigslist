import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import locationsData from '../data/location.json';
import { Location } from './types'

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

const LocationSwitcher = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const locations: Location[] = locationsData as Location[];

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value);
  };

  const filterLocations = (locations: Location[], searchTerm: string): Location[] => {
    return locations.reduce((acc: Location[], location) => {
      const match = location.name.toLowerCase().includes(searchTerm.toLowerCase());
      const children = location.children ? filterLocations(location.children, searchTerm) : [];

      if (match || children.length) {
        acc.push({ ...location, children });
      }
      return acc;
    }, []);
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

  const filteredLocations = filterLocations(locations, searchTerm);

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search location..."
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