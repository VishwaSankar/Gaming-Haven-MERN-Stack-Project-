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
import { LinkOff, Visibility, VisibilityOff, WindowSharp } from "@mui/icons-material";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useNavigate} from "react-router-dom";
import newRequest from "../../../utils/newRequest";
import { IconButton, InputAdornment } from "@mui/material";

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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();





export default function SignIn() {
 const [username,setUsername]=useState("")
 const [password,setPassword]=useState("")
 const [error,setError]=useState(null)
 const [showPassword, setShowPassword] = useState(false);

 const handleTogglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};

 const Navigate=useNavigate()
 const handlesubmit=async(e)=>{
  e.preventDefault();
  try{
  const res=await newRequest.post("/auth/login", {username,password})
  localStorage.setItem("currentUser", JSON.stringify(res.data))
  Navigate("/")
}
catch(err){
  setError(err.response.data)
}}
//window.location.reload();


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
          Log in
        </Typography>
        <Box component="form" onClick={handlesubmit }  noValidate sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            placeholder="username"
            onChange={e=>setUsername(e.target.value)}
            autoFocus
          />
          
          {/* <TextField
            margin="normal"
            required
            fullWidth
            placeholder="email"
            onChange={e=>setUsername(e.target.value)}
            autoFocus
          /> */}
           <TextField
            margin="normal"
            required
            fullWidth
            placeholder="password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          
          >
            Log In
          </Button>
          {error && error}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
 
  );
}

