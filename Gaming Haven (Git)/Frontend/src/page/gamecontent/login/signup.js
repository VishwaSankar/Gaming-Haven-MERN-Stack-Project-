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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, Navigate, useNavigate } from "react-router-dom";
import upload from "../../../utils/upload";
import newRequest from "../../../utils/newRequest";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop'; // Import Backdrop

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
    const [file, setFile] = React.useState(null);
    const [user, setUser] = React.useState({
      username:"",
      email:"",
      password:"",
      country:"",
      isSeller:false,
      img:"",
      desc:""
    });
    const [loading, setLoading] = React.useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
      setUser((prev) => {
        return {...prev, [e.target.name]: e.target.value};
      });
    };

    const handleSeller = (e) => {
      setUser((prev) => {
        return {...prev, isSeller: e.target.checked};
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const url = await upload(file);
      try {
        await newRequest.post("/auth/register", {
          ...user,
          img: url
        });
        alert("Account Created Successfully. Now Login to Proceed!");
        navigate("/login");
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

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
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                name="username"
                margin="normal"
                fullWidth
                placeholder="Username"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                name="email"
                margin="normal"
                fullWidth
                placeholder="Email"
                autoComplete="email"
                onChange={handleChange}
              />
              <TextField
                name="password"
                margin="normal"
                fullWidth
                placeholder="Password"
                type="password"
                autoComplete="new-password"
                onChange={handleChange}
              />
              <TextField
                name="country"
                margin="normal"
                fullWidth
                placeholder="Country"
                onChange={handleChange}
              />
              <TextField
                name="img"
                margin="normal"
                type="file"
                fullWidth
                onChange={e => setFile(e.target.files[0])}
                placeholder="Profile Picture"
              />
              <FormControlLabel
                control={<Checkbox value="isSeller" color="primary" />}
                label="Are you a Seller?"
                onChange={handleSeller}
              />
              <TextField
                name="phone"
                margin="normal"
                fullWidth
                placeholder="Phone Number"
                onChange={handleChange}
              />
              <TextField
                name="desc"
                margin="normal"
                fullWidth
                placeholder="About Yourself..."
                multiline
                rows={4}
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading} // Disable button when loading
              >
                Sign Up
              </Button>
              <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}> {/* Show backdrop when loading */}
                <CircularProgress color="inherit" />
              </Backdrop>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/login">
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

export default Signup;
