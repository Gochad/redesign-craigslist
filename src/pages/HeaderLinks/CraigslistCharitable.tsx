import React from "react";
import PageLayout from "../PageLayout";
import styled from "styled-components";
import { Section } from "./styles";
import { colors } from "../../styles/colors";

const Title = styled.h1`
  color: ${colors.fstDarkViolet};
`;

const CharitableSection = styled.div`
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

const CraigslistCharitablePage: React.FC = () => {
  return (
    <PageLayout>
      <Section>
        <Title>Craigslist Charitable Initiatives</Title>
        <CharitableSection>
          <Subtitle>Our Mission</Subtitle>
          <Paragraph>
            At Craigslist, we believe in giving back to the community. Our
            charitable initiatives focus on supporting various causes that
            improve the quality of life for individuals and communities.
          </Paragraph>
        </CharitableSection>

        <CharitableSection>
          <Subtitle>Education</Subtitle>
          <Paragraph>
            We support educational programs that provide opportunities for
            underprivileged children and adults to access quality education and
            develop essential skills for the future.
          </Paragraph>
        </CharitableSection>

        <CharitableSection>
          <Subtitle>Environmental Conservation</Subtitle>
          <Paragraph>
            Protecting the environment is a key focus of our charitable efforts.
            We partner with organizations that work on conservation projects,
            promote sustainability, and raise awareness about environmental
            issues.
          </Paragraph>
        </CharitableSection>

        <CharitableSection>
          <Subtitle>Healthcare</Subtitle>
          <Paragraph>
            Access to healthcare is a fundamental right. We contribute to
            initiatives that provide medical care, support health research, and
            promote public health campaigns.
          </Paragraph>
        </CharitableSection>

        <CharitableSection>
          <Subtitle>Community Development</Subtitle>
          <Paragraph>
            Strengthening communities is at the heart of our mission. We support
            projects that enhance community infrastructure, promote social
            cohesion, and provide resources for community-driven initiatives.
          </Paragraph>
        </CharitableSection>
      </Section>
    </PageLayout>
  );
};

export default CraigslistCharitablePage;
