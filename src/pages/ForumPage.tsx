import React from 'react';
import PageLayout from './PageLayout';
import styled from 'styled-components';
import forumPosts from '../data/forum-posts.json';
import { Reply } from '../components/types';
import { Section } from './HeaderLinks/styles';

const PostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

const PostContent = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin: 0;
  color: #007bff;
`;

const Content = styled.p`
  color: #666;
`;

const ReplyElem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 20px;
  padding: 10px;
  border-left: 3px solid #ccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const handleReply = (id: number) => {
    console.log('Reply to', id);
}
  const handleEdit = (id: number) => {
    console.log('Edit', id);
  };

const renderReplies = (replies: Reply[]) => {
  return replies.map(reply => (
    <ReplyElem key={reply.id}>
      <PostContent>
        <p><strong>{reply.author}:</strong> {reply.content}</p>
        {reply.replies && reply.replies.length > 0 && renderReplies(reply.replies)}
      </PostContent>
      <ButtonContainer>
        <Button onClick={() => handleEdit(reply.id)}>Edit</Button>
        <Button onClick={() => handleReply(reply.id)}>Reply</Button>
      </ButtonContainer>
    </ReplyElem>
  ));
};

const ForumPage = () => {
  return (
    <PageLayout>
      <Section>
        {forumPosts.map(post => (
          <PostContainer key={post.id}>
            <PostContent>
              <Title>{post.title}</Title>
              <Content>{post.content}</Content>
              {post.replies && post.replies.length > 0 && renderReplies(post.replies)}
            </PostContent>
            <ButtonContainer>
              <Button onClick={() => handleEdit(post.id)}>Edit</Button>
              <Button onClick={() => handleReply(post.id)}>Reply</Button>
            </ButtonContainer>
          </PostContainer>
        ))}
      </Section>
    </PageLayout>
  );
};

export default ForumPage;
