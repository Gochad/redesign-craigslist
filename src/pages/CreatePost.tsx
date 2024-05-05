import React, { useState } from 'react';
import styled from 'styled-components';
import PageLayout from './PageLayout';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.10);
  max-width: 600px;
  margin: 40px auto;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
`;

const TextArea = styled.textarea`
  height: 140px;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: auto;
  align-self: center;

  &:hover {
    background-color: #0056b3;
  }
`;

const Form = styled.form`
  padding-right: 40px;
`;

const CreatePost = () => {
  const [posts, setPosts] = useState(() => {
    const localData = localStorage.getItem('posts');
    return localData ? JSON.parse(localData) : [];
  });

  const updatePosts = (newPost: Item) => {
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const [formData, setFormData] = useState({
    date: '',
    title: '',
    category: '',
    area: '',
    price: '',
    description: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updatePosts(formData);
    alert('Post Created!');
    setFormData({ date: '', title: '', category: '', area: '', price: '', description: '' });
  };

  return (
    <PageLayout>
      <FormContainer>
        <h2>Create a New Post</h2>
        <Form onSubmit={handleSubmit}>
          <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
          <Input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
          <Input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
          <Input type="text" name="area" placeholder="Area" value={formData.area} onChange={handleChange} required />
          <Input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
          <TextArea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
          <Button type="submit">create post</Button>
        </Form>
      </FormContainer>
    </PageLayout>
  );
};

export default CreatePost;
