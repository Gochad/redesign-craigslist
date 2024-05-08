import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import locationsData from "../data/location.json";
import { Location } from "./types";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 10px;
`;

const Input = styled.input`
  padding: 12px 20px;
  flex: 1 0 50%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
  }
`;

const Select = styled.select`
  padding: 12px 20px;
  flex: 1 0 50%;
  border-radius: 5px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
  }
`;

const LocationSwitcher = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const locations: Location[] = locationsData as unknown as Location[];

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value);
  };

  const filterLocations = (
    locations: Location[],
    searchTerm: string
  ): Location[] => {
    return locations.reduce((acc: Location[], location) => {
      const match = location.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const children = location.children
        ? filterLocations(location.children, searchTerm)
        : [];

      if (match || children.length) {
        acc.push({ ...location, children });
      }
      return acc;
    }, []);
  };

  const renderOptions = (location: Location, prefix: string = "") => {
    const options = [
      <option key={location.id} value={location.id}>
        {prefix + location.name}
      </option>,
    ];

    if (location.children) {
      location.children.forEach((child) => {
        options.push(...renderOptions(child, prefix + "--"));
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
        {filteredLocations.map((location) => renderOptions(location))}
      </Select>
    </Container>
  );
};

export default LocationSwitcher;
