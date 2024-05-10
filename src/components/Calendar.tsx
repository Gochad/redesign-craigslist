import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid #ccc;
    text-align: center;
    min-width: 32px;
  }

  .emptyDay {
    background-color: #f8f8f8;
  }

  .header-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .header-controls h2 {
    margin: 0;
    font-size: 1.25rem;
    width: 150px;
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
  padding: 5px 5px;
  margin: 0 5px;
  background-color: #af43c6; //#4285f4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #cc95d8; //#357ae8;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #ba9dc0; //#285a8e;
  }
`;

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const firstDayOfMonth = () =>
    new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = () =>
    new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const getMonthYearString = (date: Date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const daysInMonth = () => {
    const firstDay = firstDayOfMonth().getDay();
    const lastDate = lastDayOfMonth().getDate();

    const days = Array.from({ length: firstDay }, (_, index) => (
      <td key={`empty-start-${index}`}>&nbsp;</td>
    )).concat(
      Array.from({ length: lastDate }, (_, index) => {
        const day = index + 1;
        const dateStr = `${currentDate.getFullYear()}-${String(
          currentDate.getMonth() + 1
        ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        return (
          <td key={day}>
            <StyledLink href={`/date/${dateStr}`}>{day}</StyledLink>
          </td>
        );
      })
    );

    const totalDays = days.length;
    const extraDays = totalDays % 7 ? 7 - (totalDays % 7) : 0;

    const completeDays = days.concat(
      Array.from({ length: extraDays }, (_, index) => (
        <td key={`empty-end-${index}`}>&nbsp;</td>
      ))
    );

    const weeks = Array.from(
      { length: Math.ceil(completeDays.length / 7) },
      (_, index) => (
        <tr key={`week-${index}`}>
          {completeDays.slice(index * 7, (index + 1) * 7)}
        </tr>
      )
    );

    return weeks;
  };

  return (
    <Container>
      <div className="header-controls">
        <Button
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
            )
          }
        >
          Prev
        </Button>
        <h2>{getMonthYearString(currentDate)}</h2>
        <Button
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
            )
          }
        >
          Next
        </Button>
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
