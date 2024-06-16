import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { getAuth, signOut } from "firebase/auth";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const currentUser = auth.currentUser;

  useEffect(() => {
    // fetch user details for current user.
    axios.get("http://localhost:9000/accounts/viewUsers", {
      params: { userEmail: currentUser.email },
    });
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <DetailsContainer>
      <Navbar path="/" buttonText="Home" />
      <h1>User Details: </h1>
      <h2>Username: </h2>
      <h2>Phone Number: </h2>
      <h2>Email: {currentUser.email}</h2>
      <LogOutButton onClick={logOut}>Log Out</LogOutButton>
    </DetailsContainer>
  );
};

const DetailsContainer = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 500;
  }
  h2 {
    font-size: 20px;
    font-weight: 400;
  }
`;

const LogOutButton = styled.button`
  outline: none;
  border: none;
  padding: 10px;
  background-color: black;
  color: white;
  font-size: 18px;
  border-radius: 20px;
  font-weight: 600;
  width: 120px;
  cursor: pointer;
`;

export default UserDetails;
