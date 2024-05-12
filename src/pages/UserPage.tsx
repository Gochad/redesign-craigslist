import React, { useState, useContext, FC } from "react";
import styled from "styled-components";
import PageLayout from "./PageLayout";
import { UserContext } from "../context/UserContext";
import { colors } from "../config/colors";

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
  background-color: ${colors.fstDarkViolet};
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 85%;
  &:hover {
    background-color: ${colors.sndDarkViolet};
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");

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
      <h1>{mode === "login" ? "Login" : "Register"}</h1>
      <StyledInput
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <StyledInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {mode === "register" && (
        <StyledInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}
      {mode === "login" ? (
        <StyledButton onClick={() => login(username, password)}>
          Login
        </StyledButton>
      ) : (
        <StyledButton onClick={() => register(username, password, email)}>
          Register
        </StyledButton>
      )}
      <p>
        {mode === "login" ? "Need an account?" : "Already have an account?"}
        <StyledButton
          onClick={() => setMode(mode === "login" ? "register" : "login")}
        >
          {mode === "login" ? "Register" : "Login"}
        </StyledButton>
      </p>
    </StyledContainer>
  );
};

const UserPage: FC = () => {
  return (
    <PageLayout>
      <UserSection />
    </PageLayout>
  );
};

export default UserPage;
