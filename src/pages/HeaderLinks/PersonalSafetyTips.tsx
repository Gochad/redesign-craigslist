import React from 'react';
import PageLayout from '../PageLayout';
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
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  color: #007BFF;
`;

const Content = styled.p`
  font-size: 18px;
  line-height: 1.6;
  max-width: 700px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const PersonalSafetyTipsPage: React.FC = () => {
  return (
    <PageLayout>
      <Section>
        <Title>Personal Safety Tips</Title>
        <Content>
          Ensuring your personal safety is crucial. Here are some practical tips to help you stay safe:
        </Content>
        <List>
          <ListItem>Be aware of your surroundings at all times.</ListItem>
          <ListItem>Do not share personal information with strangers.</ListItem>
          <ListItem>Keep your mobile phone charged and with you.</ListItem>
          <ListItem>Avoid walking alone at night in unfamiliar areas.</ListItem>
          <ListItem>Trust your instincts—if something feels wrong, it probably is.</ListItem>
        </List>
      </Section>
    </PageLayout>
  );
};

export default PersonalSafetyTipsPage;
