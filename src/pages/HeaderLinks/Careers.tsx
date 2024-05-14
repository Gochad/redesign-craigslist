import React from "react";
import PageLayout from "../PageLayout";
import styled from "styled-components";
import jobsData from "../../data/jobs.json";
import { Section } from "./styles";
import { colors } from "../../styles/colors";

const Title = styled.h1`
  color: ${colors.fstDarkViolet};
`;

const JobList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const JobItem = styled.li`
  background-color: white;
  margin-top: 10px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const JobTitle = styled.h3`
  color: ${colors.sndDarkViolet};
`;

const JobDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const CareersPage: React.FC = () => {
  return (
    <PageLayout>
      <Section>
        <Title>Craigslist is Hiring</Title>
        <JobList>
          {jobsData.map((job, index) => (
            <JobItem key={index}>
              <JobTitle>{job.title}</JobTitle>
              <JobDescription>{job.description}</JobDescription>
            </JobItem>
          ))}
        </JobList>
      </Section>
    </PageLayout>
  );
};

export default CareersPage;
