import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import image from "../Images/avatar.png"


const Login = () => {
    const text = 'Sign up';
  return (
    <div>
        <Navbar text={text} buttonText="Home" path="/" path_second="/signUp"/>
        <br /><br />
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ padding: '20px',bgcolor: 'white', height: '80vh' , borderColor:'black' , marginTop:'4%', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);', }}>
          <Typography  variant='h3' style={{ fontWeight: '600', fontSize: '35px' }}>Login </Typography>
          <img src={image} alt="donut" style={{ width: '240px' }} /> <br />

        <TextField sx={{}} variant='filled' label='Username'></TextField><br />
        <TextField sx={{marginTop:'18px'}} variant='filled' label='Password' type='password'></TextField><br /><br />
        <Button variant='contained' style={{backgroundColor:'#ef7b53' , color:'black'}}>Sign In</Button>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h4>New User?</h4>
        <div style={{width: '5px'}}></div>
        <a href="/signUp">Sign Up!</a>
        </div>
        </Box>  
        
      </Container>
    </React.Fragment>
    </div>
  )
}

export default Login
