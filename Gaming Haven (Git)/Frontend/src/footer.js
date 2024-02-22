import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Tooltip } from '@mui/material';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © of this page is owned by me. All rights reserved. Other brands or product names are the trademarks of their respective owners. All contents used here were used only for educational purposes'}
      <Link color="inherit" href="www.linkedin.com/in/vishwa-s-8921a0250">
        Your Website
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const handleScrollTop = () => 
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
export default function StickyFooter() {



  
  return (
    <ThemeProvider theme={defaultTheme}>
      
       
      <Box
        component="footer"
        paddingTop="50px"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          display: 'flex',
          justifyContent: 'space-between', // Align items to the right
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="body1">
            This page is built by <a>Vishwa S</a>
          </Typography>
          <Copyright />
        </Container>
        <Tooltip title="move to page top">   
          <ArrowCircleUpIcon       onClick={handleScrollTop}
          sx={{ cursor: 'pointer', fontSize: 60, color: 'gray',  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          cursor: 'pointer',
          ':hover': { transform: 'scale(1.05)' }, }}
        /></Tooltip>
     
      </Box>
    </ThemeProvider>
  );
}