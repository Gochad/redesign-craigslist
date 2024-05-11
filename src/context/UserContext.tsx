import React, { createContext, useState, FC, ReactNode } from 'react';
import { User } from '../components/types';

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

export const UserContext = createContext<UserContextType>(defaultState);

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
