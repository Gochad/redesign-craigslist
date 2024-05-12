import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

const AccordionSection = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

const Question = styled.div`
  cursor: pointer;
  padding: 10px;
  font-weight: bold;
  color: ${colors.sndDarkViolet};
`;

const Answer = styled.div`
  padding: 10px;
  color: #333;
  display: none;
`;

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionSection>
      <Question onClick={toggle}>{question}</Question>
      {isOpen && (
        <Answer style={{ display: isOpen ? "block" : "none" }}>{answer}</Answer>
      )}
    </AccordionSection>
  );
};

export default Accordion;
