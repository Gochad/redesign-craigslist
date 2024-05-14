import React from "react";
import PageLayout from "../PageLayout";
import styled from "styled-components";
import { Section } from "./styles";
import { colors } from "../../styles/colors";

const Title = styled.h1`
  color: ${colors.fstDarkViolet};
`;

const Subtitle = styled.h2`
  color: ${colors.sndDarkViolet};
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.6;
  max-width: 700px;
`;

const List = styled.ul`
  list-style: inside;
  text-align: left;
  width: 100%;
  max-width: 600px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const AboutCraigslistPage: React.FC = () => {
  return (
    <PageLayout>
      <Section>
        <Title>About Craigslist</Title>
        <Content>
          Craigslist is a dedicated classifieds service that helps users find
          housing, jobs, items for sale, and much more.
        </Content>

        <Subtitle>Using Craigslist</Subtitle>
        <List>
          <ListItem>CL Help Pages - need assistance?</ListItem>
          <ListItem>CL Jobs - we're hiring in SF</ListItem>
          <ListItem>FAQ - frequently asked questions</ListItem>
        </List>

        <Subtitle>Our Team</Subtitle>
        <List>
          <ListItem>Jim - CEO</ListItem>
          <ListItem>Craig - Founder</ListItem>
        </List>

        <Subtitle>More Resources</Subtitle>
        <List>
          <ListItem>Terms Of Use - please read carefully</ListItem>
          <ListItem>craigslist Blog - updates and etc</ListItem>
          <ListItem>Privacy Policy - user privacy info</ListItem>
          <ListItem>Best of craigslist - voted by 'readers like you'</ListItem>
          <ListItem>Contact Form - send us a note</ListItem>
          <ListItem>
            24 Hours on craigslist - award-winning documentary
          </ListItem>
          <ListItem>CL Feedback Forum - suggestion box</ListItem>
          <ListItem>Charitable Fund - grants for 501(c)3 orgs</ListItem>
          <ListItem>CL Help Desk Forum - tips from experienced users</ListItem>
          <ListItem>Open Source - it gets better</ListItem>
          <ListItem>
            Avoiding Scams & Fraud - rule #1 is "deal locally"
          </ListItem>
          <ListItem>Security Kudos - responsible disclosures</ListItem>
        </List>
      </Section>
    </PageLayout>
  );
};

export default AboutCraigslistPage;
