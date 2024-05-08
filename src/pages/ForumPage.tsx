import React, { useState, useEffect } from 'react';
import PageLayout from './PageLayout';
import styled from 'styled-components';
import forumPosts from '../data/forum-posts.json';
import { Reply } from '../components/types';
import { Section } from './HeaderLinks/styles';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  border-radius: 10px;
  margin: 20px 0;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 2px solid #007bff;
  border-bottom: 4px solid #007bff;
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }
`;

const ReplyElem = styled.div`
  display: flex;
  background: #f9f9f9;
  margin-top: 15px;
  padding: 15px;
  border-left: 4px solid #007bff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Content = styled.p`
  color: #333;
  line-height: 1.6;
  font-size: 16px;
  border-bottom: 1px solid #eaeaea;
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-left: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  height: 35px;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
`;

const ReplyButton = styled(Button)`
  padding: 8px 12px;
  margin: 0;
`;

const Input = styled.textarea`
  width: 90%;
  padding: 10px;
  margin-top: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Title = styled.h3`
  margin: 0 0 10px 0;
  color: #007bff;
  font-size: 24px;
  font-weight: bold;
`;


const PostContent = styled.div`
  flex: 1;
`;

const ContentArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextPost = styled.div`
  display: block;
  margin-right: 20px;
`;

const PostP = styled.p`
  margin-bottom: 30px;
`

const ForumPage: React.FC = () => {
    const [posts, setPosts] = useState<Reply[]>(() => {
        const localData = localStorage.getItem('forumPosts');
        return localData ? JSON.parse(localData) : forumPosts;
    });
    const [editId, setEditId] = useState<number | null>(null);
    const [editText, setEditText] = useState('');

    useEffect(() => {
        localStorage.setItem('forumPosts', JSON.stringify(posts));
    }, [posts]);

    const handleReply = (postId: number, replyId: number | null = null, replyContent: string = '') => {
        const updateReplies = (replies: Reply[]): Reply[] => {
            return replies.map(reply => {
                if (reply.id === replyId) {
                    return { ...reply, replies: addReply(reply.replies, replyId, replyContent) };
                } else {
                    return { ...reply, replies: updateReplies(reply.replies) };
                }
            });
        };

        const newPosts = posts.map(post => {
            if (post.id === postId) {
                if (!replyId) {
                    return { ...post, replies: addReply(post.replies, postId, replyContent) };
                } else { 
                    return { ...post, replies: updateReplies(post.replies) };
                }
            }
            return post;
        });
        setPosts(newPosts);
    };

    const addReply = (replies: Reply[], replyId: number, replyContent: string): Reply[] => {
        const newReplyId = Math.max(0, ...replies.map(r => r.id)) + 1;
        const newReply = {
            id: newReplyId,
            title: "New Reply",
            author: "Current User",
            content: replyContent,
            replies: []
        };
        setEditId(newReplyId);
        setEditText('');
        return [...replies, newReply];
    };

    const startEdit = (replyId: number, currentText: string) => {
        setEditId(replyId);
        setEditText(currentText);
    };

    const handleEdit = (replyId: number) => {
        const updateReplies = (replies: Reply[]): Reply[] => {
            return replies.map(reply => {
                if (reply.id === replyId) {
                    return { ...reply, content: editText };
                } else {
                    return { ...reply, replies: updateReplies(reply.replies) };
                }
            });
        };

        const newPosts = posts.map(post => {
            return { ...post, replies: updateReplies(post.replies) };
        });
        setPosts(newPosts);
        setEditId(null);
        setEditText('');
    };

    const renderReplies = (replies: Reply[], postId: number): JSX.Element[] => {
        return replies.map(reply => (
            <ReplyElem key={reply.id}>
                <PostContent>
                    {editId === reply.id ? (
                        <Input
                            value={editText}
                            onChange={e => setEditText(e.target.value)}
                            autoFocus
                        />
                    ) : (
                        <PostP><strong>{reply.author}:</strong> {reply.content}</PostP>
                    )}
                    {reply.replies && reply.replies.length > 0 && renderReplies(reply.replies, reply.id)}
                </PostContent>
                <ButtonContainer>
                    {editId === reply.id ? (
                        <Button onClick={() => handleEdit(reply.id)}>Save</Button>
                    ) : (
                        <>
                            <Button onClick={() => startEdit(reply.id, reply.content)}>Edit</Button>
                            <Button onClick={() => handleReply(postId, reply.id)}>Reply</Button>
                        </>
                    )}
                </ButtonContainer>
            </ReplyElem>
        ));
    };

    return (
        <PageLayout>
            <Section>
                {posts.map(post => (
                    <PostContainer key={post.id}>
                        <ContentArea>
                            <TextPost>
                                <Title>{post.title}</Title>
                                <Content>{post.content}</Content>
                            </TextPost>
                            <ReplyButton onClick={() => handleReply(post.id)}>Reply</ReplyButton>
                        </ContentArea>
                        {post.replies && post.replies.length > 0 && renderReplies(post.replies, post.id)}
                    </PostContainer>
                ))}
            </Section>
        </PageLayout>
    );
};

export default ForumPage;
