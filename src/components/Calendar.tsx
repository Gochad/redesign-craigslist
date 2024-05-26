import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const Container = styled.div`
  margin: 20px auto;
  width: 110%;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #ccc;
    text-align: center;
    min-width: 32px;
    padding: 2px;
  }

  .emptyDay {
    background-color: ${colors.pastelLilac};
  }

  .header-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .header-controls h2 {
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
    color: ${colors.intenseLilac};
  }
`;

const StyledLink = styled.a`
  color: ${colors.intenseLilac};
  text-decoration: none;
  display: block;
  padding: 5px;
  border-radius: 3px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${colors.intenseLilac};
    color: #fff;
  }

  &:active {
    background-color: ${colors.pastelLilac};
    color: #fff;
  }
`;

const Button = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  background-color: ${colors.intenseLilac};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.lightLilac};
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: ${colors.pastelLilac};
  }
`;

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const getMonthYearString = (date: Date) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const daysInMonth = () => {
    const firstDay = firstDayOfMonth.getDay();
    const lastDate = lastDayOfMonth.getDate();

    const days = Array.from({ length: firstDay }, (_, index) => (
      <td key={`empty-start-${index}`} className="emptyDay">&nbsp;</td>
    )).concat(
      Array.from({ length: lastDate }, (_, index) => {
        const day = index + 1;
        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        return (
          <td key={day}>
            <StyledLink href={`/date/${dateStr}`}>{day}</StyledLink>
          </td>
        );
      })
    );

    const extraDays = (7 - (days.length % 7)) % 7;
    const completeDays = days.concat(
      Array.from({ length: extraDays }, (_, index) => (
        <td key={`empty-end-${index}`} className="emptyDay">&nbsp;</td>
      ))
    );

    return Array.from({ length: completeDays.length / 7 }, (_, index) => (
      <tr key={`week-${index}`}>
        {completeDays.slice(index * 7, (index + 1) * 7)}
      </tr>
    ));
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  return (
    <Container>
      <div className="header-controls">
        <Button onClick={handlePrevMonth}>Prev</Button>
        <h2>{getMonthYearString(currentDate)}</h2>
        <Button onClick={handleNextMonth}>Next</Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{daysInMonth()}</tbody>
      </table>
    </Container>
  );
};

export default Calendar;
