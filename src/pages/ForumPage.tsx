import React, { useState, useEffect } from 'react';
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
  align-items: baseline;
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

const Input = styled.textarea`
  flex: 1;
  padding: 8px;
  margin-bottom: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  width: 500px;
  height: 70px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

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
                if (!replyId) {  // Root level reply
                    return { ...post, replies: addReply(post.replies, postId, replyContent) };
                } else {  // Nested reply
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
                        <p><strong>{reply.author}:</strong> {reply.content}</p>
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
                        <PostContent>
                            <Title>{post.title}</Title>
                            <Content>{post.content}</Content>
                            {post.replies && post.replies.length > 0 && renderReplies(post.replies, post.id)}
                        </PostContent>
                        <ButtonContainer>
                            <Button onClick={() => handleReply(post.id)}>Reply</Button>
                        </ButtonContainer>
                    </PostContainer>
                ))}
            </Section>
        </PageLayout>
    );
};

export default ForumPage;
