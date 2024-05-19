import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const Container = styled.div`
  margin-top: 50px;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #ccc;
    text-align: center;
    min-width: 32px;
    padding: 10px;
  }

  .emptyDay {
    background-color: #f8f8f8;
  }

  .header-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .header-controls h2 {
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
  }
`;

const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #0c66a1;
  }

  &:active {
    color: #034678;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  margin: 0 5px;
  background-color: ${colors.intenseLilac};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

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
