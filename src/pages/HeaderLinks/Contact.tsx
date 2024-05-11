import React, { useState, ChangeEvent, FormEvent } from 'react';
import PageLayout from '../PageLayout';
import styled from 'styled-components';
import { Section } from './styles';

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-size: 16px;
  font-weight: bold;
`;

const Title = styled.h2`
  margin-top: 0;
  color: #007BFF;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 450px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007BFF;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 180px;
  padding: 12px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007BFF;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  font-size: 1.1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover, &:focus {
    background-color: #0056b3;
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Message sent! (not really, but imagine it did!)');
  };

  return (
    <PageLayout>
      <Section>
        <Title>Contact Us</Title>
        <p>This is the contact page where you can find how to reach us. Please fill out the form below to send us a message:</p>
        
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name:</Label>
          <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required />
          
          <Label htmlFor="email">Email:</Label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          
          <Label htmlFor="message">Message:</Label>
          <TextArea id="message" name="message" value={formData.message} onChange={handleChange} required />
          
          <Button type="submit">Send Message</Button>
        </Form>
      </Section>

      <Section>
        <Title>Our Location</Title>
        <MapContainer>
        <iframe 
            title="Map of San Francisco" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31477.467840608348!2d-122.4459902160846!3d37.76571009066909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20Kalifornia%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1714910989326!5m2!1spl!2spl" 
            width="600" 
            height="450"
            loading="lazy">
        </iframe>
        </MapContainer>
      </Section>
    </PageLayout>
  );
};

export default ContactPage;