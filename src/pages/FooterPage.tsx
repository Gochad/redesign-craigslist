import React from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import PageLayout from './PageLayout';
import footerData from '../data/footer.json';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ContentContainer = styled.div`
  padding: 40px;
  text-align: center;
  max-width: 800px;
  margin: auto;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  color: #333;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Title = styled.h1`
  color: #007bff;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const ContentText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 30px;
  text-align: justify;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Page = () => {
  const { pageName } = useParams();

  const getPageData = (pageName: string | undefined) => {
    return footerData.find(p => p.link === '/' + pageName) || {
      content: 'Welcome to Craigslist Redesigned!',
      image: 'https://source.unsplash.com/random/800x600/?generic'
    };
  };

  const { content, image } = getPageData(pageName);

  return (
    <PageLayout>
      <ContentContainer>
        <Title>{pageName ? pageName.charAt(0).toUpperCase() + pageName.slice(1) : 'Home'}</Title>
        <ContentText>{content}</ContentText>
        <StyledImage src={image} />
      </ContentContainer>
    </PageLayout>
  );
};

export default Page;
