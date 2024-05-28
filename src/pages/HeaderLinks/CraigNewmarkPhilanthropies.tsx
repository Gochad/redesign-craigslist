import React from "react";
import PageLayout from "../PageLayout";
import styled from "styled-components";
import { Section } from "./styles";
import { colors } from "../../styles/colors";

const Title = styled.h1`
  color: ${colors.fstDarkViolet};
`;

const PhilanthropySection = styled.div`
  background-color: white;
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.h2`
  color: ${colors.sndDarkViolet};
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;

const CraigNewmarkPhilanthropiesPage: React.FC = () => {
  return (
    <PageLayout>
      <Section>
        <Title>Craig Newmark Philanthropies</Title>
        <PhilanthropySection>
          <Subtitle>Our Mission</Subtitle>
          <Paragraph>
            Craig Newmark Philanthropies works to support and connect people and
            drive broad civic engagement. Our initiatives focus on trustworthy
            journalism, voter protection, women in technology, and supporting
            veterans and military families.
          </Paragraph>
        </PhilanthropySection>

        <PhilanthropySection>
          <Subtitle>Trustworthy Journalism</Subtitle>
          <Paragraph>
            We believe in the importance of a free press and support
            organizations that work to enhance the integrity of journalism. Our
            efforts aim to promote accurate, independent, and ethical reporting
            to ensure an informed public.
          </Paragraph>
        </PhilanthropySection>

        <PhilanthropySection>
          <Subtitle>Voter Protection</Subtitle>
          <Paragraph>
            Ensuring the right to vote and the security of the voting process is
            a cornerstone of democracy. We support initiatives that protect
            voting rights, prevent voter suppression, and ensure every vote is
            counted.
          </Paragraph>
        </PhilanthropySection>

        <PhilanthropySection>
          <Subtitle>Women in Technology</Subtitle>
          <Paragraph>
            We are committed to promoting gender diversity in the tech industry.
            By supporting programs that provide education, mentorship, and
            career opportunities for women in technology, we aim to bridge the
            gender gap and empower women to succeed in tech fields.
          </Paragraph>
        </PhilanthropySection>

        <PhilanthropySection>
          <Subtitle>Veterans and Military Families</Subtitle>
          <Paragraph>
            We honor and support those who serve and have served in the military
            by contributing to programs that assist veterans and their families.
            Our efforts focus on providing resources, healthcare, and career
            opportunities to help veterans transition to civilian life.
          </Paragraph>
        </PhilanthropySection>
      </Section>
    </PageLayout>
  );
};

export default CraigNewmarkPhilanthropiesPage;
