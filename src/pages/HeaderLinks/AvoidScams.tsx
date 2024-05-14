import React from "react";
import PageLayout from "../PageLayout";
import styled from "styled-components";
import { Section } from "./styles";
import { colors } from "../../styles/colors";

const Title = styled.h1`
  color: ${colors.fstDarkViolet};
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

const AvoidScamsPage: React.FC = () => {
  return (
    <PageLayout>
      <Section>
        <Title>Avoid Scams & Fraud</Title>
        <Content>
          It's important to be aware of the many scams that exist online. Here
          are some tips on how to stay safe:
        </Content>
        <List>
          <ListItem>
            Always verify the credentials of the person you are dealing with.
          </ListItem>
          <ListItem>
            Do not send money to anyone you don’t know or trust.
          </ListItem>
          <ListItem>
            Be cautious of deals that seem too good to be true—they usually are.
          </ListItem>
          <ListItem>
            Use secure and traceable transactions and payment methods.
          </ListItem>
          <ListItem>
            If it's an online transaction, keep all documents and
            communications.
          </ListItem>
        </List>
      </Section>
    </PageLayout>
  );
};

export default AvoidScamsPage;
