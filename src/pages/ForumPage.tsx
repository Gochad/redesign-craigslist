import React from 'react';
import PageLayout from './PageLayout';
import styled from 'styled-components';
import forumPosts from '../data/forum-posts.json';
import { Reply } from '../components/types';
import { Section } from './HeaderLinks/styles';


const Post = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

const Title = styled.h3`
  margin: 0;
  color: #007bff;
`;

const Content = styled.p`
  color: #666;
`;

const ReplyElem = styled.div`
  margin-left: 20px;
  padding: 10px;
  border-left: 3px solid #ccc;
`;

const renderReplies = (replies: Reply[]) => {
  return replies.map(reply => (
    <ReplyElem key={reply.id}>
      <p><strong>{reply.author}:</strong> {reply.content}</p>
      {reply.replies && reply.replies.length > 0 && renderReplies(reply.replies)}
    </ReplyElem>
  ));
};

const ForumPage = () => {
  return (
    <PageLayout>
      <Section>
        {forumPosts.map(post => (
          <Post key={post.id}>
            <Title>{post.title}</Title>
            <Content>{post.content}</Content>
            {post.replies && post.replies.length > 0 && renderReplies(post.replies)}
          </Post>
        ))}
      </Section>
    </PageLayout>
  );
};

export default ForumPage;
