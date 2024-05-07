import React, { useState, useContext, createContext, FC, ReactNode } from 'react';
import styled from 'styled-components';
import PageLayout from './PageLayout';

// Interface definitions
interface User {
  name: string;
  email: string;
  location: string;
}

interface UserContextType {
  user: User | null;
  login: (username: string, password: string) => void;
  register: (username: string, password: string, email: string) => void;
  logout: () => void;
}

const defaultState: UserContextType = {
  user: null,
  login: () => {},
  register: () => {},
  logout: () => {},
};

const UserContext = createContext<UserContextType>(defaultState);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string) => {
    setUser({ name: username, email: `${username}@example.com`, location: "New York" });
  };

  const register = (username: string, password: string, email: string) => {
    setUser({ name: username, email: email, location: "Los Angeles" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const StyledInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: block;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 85%;
  &:hover {
    background-color: #0056b3;
  }
`;

const StyledContainer = styled.div`
  text-align: center;
  padding: 40px;
  width: 90%;
  max-width: 400px;
  margin: 50px auto;
  background: linear-gradient(145deg, #f8faff, #dfe9f3);
  border: 1px solid #d1d1d1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (min-width: 480px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    width: 400px;
  }
`;


const UserInfo = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  background-color: #f0f0f0;
`;

const UserSection: FC = () => {
  const { user, login, register, logout } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mode, setMode] = useState<'login' | 'register'>('login');

  if (user) {
    return (
      <StyledContainer>
        <h2>Welcome, {user.name}!</h2>
        <UserInfo>
          <p>Email: {user.email}</p>
          <p>Location: {user.location}</p>
        </UserInfo>
        <StyledButton onClick={logout}>Logout</StyledButton>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <h1>{mode === 'login' ? 'Login' : 'Register'}</h1>
      <StyledInput
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <StyledInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {mode === 'register' && (
        <StyledInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      )}
      {mode === 'login' ? (
        <StyledButton onClick={() => login(username, password)}>Login</StyledButton>
      ) : (
        <StyledButton onClick={() => register(username, password, email)}>Register</StyledButton>
      )}
      <p>
        {mode === 'login' ? 'Need an account?' : 'Already have an account?'}
        <StyledButton onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
          {mode === 'login' ? 'Register' : 'Login'}
        </StyledButton>
      </p>
    </StyledContainer>
  );
};

const UserPage: FC = () => {
  return (
    <UserProvider>
      <PageLayout>
        <UserSection />
      </PageLayout>
    </UserProvider>
  );
};

export default UserPage;
