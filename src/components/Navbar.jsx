import { Button, IconButton, Toolbar, Typography ,AppBar} from '@mui/material'
import React from 'react'
import ApiIcon from '@mui/icons-material/Api';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Search } from '@mui/icons-material';
import styled from 'styled-components';


const Navbar = ({text, buttonText, path, path_second }) => {
  return (
    <div>
      
      <AppBar position="static" style={{backgroundColor:'#ef7b53'}}>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color='default'
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ApiIcon/>
          </IconButton>


          <Typography variant="h5" component="div" >
            E-Shopping
          </Typography><br />  &nbsp;&nbsp;&nbsp;&nbsp;
          <SearchContainer>
          <Search style={{ color: 'black' }} />

          <CustomInput variant='outlined' placeholder='Search for products brands and more..' style={{display:'flex',background:'#fff',marginLeft: '10px',width: '35%', borderRadius:'2px',}}>
          </CustomInput>
          </SearchContainer>
          <div style={{ display: 'flex', marginLeft: 'auto' }}>
            <Button style={{color:'white'}}>
              <ShoppingCartIcon/>
            </Button>     &nbsp;      
            <Button 
            style={{backgroundColor:'black'}}
            variant='contained'
            href={path_second}
            color='secondary'>{text}
            </Button>

            <Button
              variant='contained'
              style={{marginLeft:'10px',backgroundColor:"black"}}
              href={path}
              >{buttonText}
            </Button>

          </div>
        </Toolbar>
      </AppBar>
   
    </div>
  )
}

const SearchContainer = styled.div `
  display: flex;
  /* width: fit-content; */
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
`;

const CustomInput = styled.input `
  display: flex;
  /* height: 40px; */
  min-width: 240px;
  outline:none;
  border: none;
  background-color: white;
`;

export default Navbar
