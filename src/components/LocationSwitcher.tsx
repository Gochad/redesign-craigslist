import React, { useState } from "react";
import styled from "styled-components";
import Select, { components } from "react-select";
import locationsData from "../data/location.json";
import { Location } from "./types";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  padding-right: 0;
  gap: 10px;
`;

const StyledSelect = styled(Select)`
  width: 200px;
`;

const Dot = styled.span`
  height: 6px;
  width: 6px;
  margin-right: 5px;
  background-color: #000;
  border-radius: 50%;
  display: inline-block;
`;

const Option = ({ children, ...props }: any) => {
  const { data } = props;
  return (
    <components.Option {...props}>
      {data.level > 0 && <Dot />}
      {children}
    </components.Option>
  );
};

const LocationSwitcher = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option: any) => {
    setSelectedOption(option);
  };

  const options = locationsData.reduce((acc: any[], location) => {
    return [...acc, ...generateOptions(location)];
  }, []);

  function generateOptions(location: Location, level: number = 0): any[] {
    let res = [
      {
        value: location.id,
        label: location.name,
        level: level,
      },
    ];
    if (location.children) {
      location.children.forEach((child) => {
        res = [...res, ...generateOptions(child, level + 1)];
      });
    }
    return res;
  }

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      minWidth: "200px",
    }),
    menu: (provided: any) => ({
      ...provided,
      width: "200px",
    }),
    option: (styles: any, { data }: any) => {
      return {
        ...styles,
        paddingLeft: `${20 + data.level * 10}px`,
        display: "flex",
        alignItems: "center",
        fontWeight: data.level === 0 ? "bold" : "normal",
      };
    },
  };

  return (
    <Container>
      <StyledSelect
        value={selectedOption}
        onChange={handleChange}
        options={options}
        components={{ Option }}
        placeholder="Choose location"
        styles={customStyles}
      />
    </Container>
  );
};

export default LocationSwitcher;
