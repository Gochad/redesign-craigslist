import React from "react";
import PageLayout from "../PageLayout";
import styled from "styled-components";
import postingsData from "../../data/postings.json";
import { Section } from "./styles";
import { colors } from "../../config/colors";

const Title = styled.h1`
  color: ${colors.fstDarkViolet};
`;

const Disclaimer = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 0;
  margin-bottom: 20px;
`;

const PostingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Posting = styled.div`
  background-color: #fff;
  width: 90%;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const PostingTitle = styled.h3`
  margin: 0;
  color: ${colors.sndDarkViolet};
  font-size: 18px;
`;

const PostingDetails = styled.div`
  font-size: 12px;
  color: #666;
`;

const BestOfCraigslistPage: React.FC = () => {
  return (
    <PageLayout>
      <Section>
        <Title>Best of Craigslist</Title>
        <Disclaimer>
          Before perusing best-of-craigslist postings below please note:
          postings are nominated by craigslist readers, and are not necessarily
          endorsed by craigslist staff.
        </Disclaimer>
        <PostingContainer>
          {postingsData.map((posting, index) => (
            <Posting key={index}>
              <PostingTitle>{posting.title}</PostingTitle>
              <PostingDetails>
                {posting.date} - {posting.category} - {posting.area}
              </PostingDetails>
            </Posting>
          ))}
        </PostingContainer>
      </Section>
    </PageLayout>
  );
};

export default BestOfCraigslistPage;
