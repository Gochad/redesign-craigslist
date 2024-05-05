import React from 'react';
import PageLayout from '../PageLayout';
import Accordion from '../../components/Accordion';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 2em 0;
  padding: 2em;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  width: 80%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  color: #007BFF;
`;

const HelpFaqAbuseLegalPage: React.FC = () => {
  return (
    <PageLayout>
      <Section>
        <Title>Help, FAQ, Abuse, Legal</Title>
        <Accordion question="How do I reset my password?" answer="To reset your password, go to the settings page and follow the instructions for password recovery." />
        <Accordion question="What should I do if I see abusive behavior?" answer="If you encounter abusive behavior, please report it immediately using our 'Report' feature located on every post and user profile." />
        <Accordion question="How do I report a legal issue?" answer="For legal inquiries, please contact our legal department directly at legal@example.com." />
        <Accordion question="How can I make sure my account is secure?" answer="Ensure your account is secure by using a strong password and enabling two-factor authentication." />
        <Accordion question="Where can I find your Terms of Service?" answer="Our Terms of Service can be accessed directly from the footer of our website or by visiting the Terms of Service section." />
      </Section>
    </PageLayout>
  );
};

export default HelpFaqAbuseLegalPage;
