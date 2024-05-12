import React from "react";
import PageLayout from "../PageLayout";
import styled from "styled-components";
import systemStatusData from "../../data/statuses.json";
import { Section } from "./styles";
import { colors } from "../../config/colors";

const Title = styled.h1`
  color: ${colors.fstDarkViolet};
`;

const StatusItem = styled.div`
  background-color: white;
  margin-top: 10px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const StatusTitle = styled.h3`
  color: ${colors.sndDarkViolet};
`;

const StatusDetails = styled.div`
  font-size: 16px;
  color: #666;
`;

const SystemStatusPage: React.FC = () => {
  return (
    <PageLayout>
      <Section>
        <Title>System Status</Title>
        {systemStatusData.map((update, index) => (
          <StatusItem key={index}>
            <StatusTitle>
              {update.status} - {update.date} {update.time}
            </StatusTitle>
            <StatusDetails>{update.description}</StatusDetails>
          </StatusItem>
        ))}
      </Section>
    </PageLayout>
  );
};

export default SystemStatusPage;
