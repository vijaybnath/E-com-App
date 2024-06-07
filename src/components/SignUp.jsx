import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import image from "../Images/avatar.png"

const SignUp = () => {
  return (
    <div>
      <Navbar text={"Sign In"} buttonText={"Home"} path={"/"} path_second={"/login"} />
        <br /><br />
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ padding: '20px',bgcolor: 'white', height: '80vh' , borderColor:'black' , marginTop:'4%', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);', }}>
          <Typography  variant='h3' style={{ fontWeight: '600', fontSize: '35px' }}>Sign Up </Typography><br />

        <TextField sx={{}} variant='filled' label='Email'></TextField><br /><br />
        <TextField sx={{}} variant='filled' label='Username'></TextField><br />
        <TextField sx={{marginTop:'30px'}} variant='filled' label='Password' type='password'></TextField><br /><br />
        <Button>Sign Up</Button>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h4>Existing User?</h4>
        <div style={{width: '5px'}}></div>
        <a href="/login">Sign In!</a>
        </div>
        </Box>  
        
      </Container>
    </React.Fragment>
    </div>
  )
}

export default SignUp
