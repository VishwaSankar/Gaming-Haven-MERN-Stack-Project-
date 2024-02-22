
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SportsEsportsSharpIcon from "@mui/icons-material/SportsEsportsSharp";
import { useState } from "react";
import axios from "axios";
import { LinkOff } from "@mui/icons-material";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useRef} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import upload from "../../../utils/upload";
import newRequest from "../../../utils/newRequest";
function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Gaming Haven
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

const Signup = () => {
    const[file,setfile]=useState(null)
    const[user,setuser]=useState({
      username:"",
      email:"",
      password:"",
      country:"",
      isSeller:false,
      img:"",
      desc:""
    })

    const navigate=useNavigate()
    const handlechange=(e)=>{
      setuser((prev)=>{
        return{...prev,[e.target.name]:e.target.value}
      })
    }
    const handleSeller=(e)=>{
      setuser((prev)=>{
        return{...prev,isSeller:e.target.checked}
      })
    }
    const handleSubmit=async(e)=>{
      e.preventDefault()
      const url=await upload(file)
     try{
      await newRequest.post("/auth/register",{
        ...user,
       img:url
      })
      alert("Account Created Successfully. Now Login to Proceed!")
      navigate("/login")
     }catch(err){
      console.log(err);
     }
    }
    
    return (
    
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create a new Account
            </Typography>
            <Box component="form"  onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                name="username"
                margin="normal"
                
                fullWidth
                placeholder="username"
                autoFocus
                onChange={handlechange}
              />
              <TextField
                name="email"
                margin="normal"
                
                placeholder="email"
                fullWidth
                autoComplete="current-password"
                onChange={handlechange}


              />
                 <TextField
                 name="password"
                margin="normal"
                
                placeholder="password"
                fullWidth
                autoComplete="current-password"
                onChange={handlechange}

              />
              <TextField

                name="country"
                margin="normal"
                
                placeholder="country"
                onChange={handlechange}
                fullWidth
              />
              <TextField
                name="img"
                margin="normal"
                type="file"
                onChange={e=>setfile(e.target.files[0])}
                placeholder="Profile picture"
                fullWidth
              />
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Are you a Seller?"
                onChange={handleSeller}
              />
                
                <TextField
                name="phone"
                margin="normal"
                placeholder="Phone number"
                fullWidth
                onChange={handlechange}

              />
              <TextField
                name="desc"
                margin="normal"
                placeholder="about your self..."
                cols="30"
                rows="10"
                fullWidth
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/login" >
                    {"Already have an account"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
     
      );
}

export default Signup