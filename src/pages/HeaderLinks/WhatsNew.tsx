import React from "react";
import PageLayout from "../PageLayout";
import styled from "styled-components";
import newsData from "../../data/news.json";
import { Section } from "./styles";
import { colors } from "../../styles/colors";

const Title = styled.h1`
  color: ${colors.fstDarkViolet};
`;

const NewsItem = styled.div`
  background-color: white;
  margin-top: 10px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const NewsTitle = styled.h3`
  color: ${colors.sndDarkViolet};
`;

const NewsDate = styled.p`
  font-size: 14px;
  color: #666;
`;

const NewsContent = styled.p`
  font-size: 16px;
  color: #666;
`;

const WhatsNewPage: React.FC = () => {
  return (
    <PageLayout>
      <Section>
        <Title>What's New</Title>
        {newsData.map((item, index) => (
          <NewsItem key={index}>
            <NewsTitle>{item.title}</NewsTitle>
            <NewsDate>{item.date}</NewsDate>
            <NewsContent>{item.content}</NewsContent>
          </NewsItem>
        ))}
      </Section>
    </PageLayout>
  );
};

export default WhatsNewPage;
