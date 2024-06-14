import React from 'react'
import Navbar from './Navbar'
import { getAuth, signOut } from 'firebase/auth';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const logOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch ((err) => {
      alert(err.message)
    })
  }
  return (
    <DetailsContainer>
        <Navbar path="/" buttonText="Home" />
        <h2>Logged In As: {currentUser.email}</h2>
        <LogOutButton onClick={logOut}>Log Out</LogOutButton>
    </DetailsContainer>
  )
}

const DetailsContainer = styled.div `
  h2 {
    font-weight: 400;
  }
`;

const LogOutButton = styled.button `
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

export default UserDetails