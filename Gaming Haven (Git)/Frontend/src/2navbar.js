import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  Autocomplete,
  Button,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import { gamesdata1 } from "./page/gamecontent/Datagames";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();

  const handleAutocompleteChange = (event, value) => {
    // Only navigate if a valid option is selected
    if (value) {
      navigate(`/content`, { state: { name: value } });
    }
  };


  // const scrollToSection = () => {
  //   // Scroll to the target section with smooth behavior
  //   scroll.scrollTo('targetSection', {
  //     duration: 800,
  //     smooth: 'easeInOutQuart',
  //   });

  return (
    <Box paddingTop="20px">
      <Container>
        <AppBar position="" sx={{ top: 0, zIndex: 10 }} >
          <Toolbar  sx={{ backgroundColor: "#121212" ,}}>
            <SearchIcon size="large"/>
            <Box paddingLeft="10px">
            <Autocomplete
              
              sx={{ width: "200px" }} 
              freeSolo
              disableClearable
              size="small"
              options={gamesdata1.map((option) => option.title)}
              onChange={handleAutocompleteChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
           
            </Box>
            <Box paddingLeft="30px" gap="20px" display="flex" >
              <Typography sx={{fontFamily:"monospace", color:'rgba(255, 255, 255, 0.5)', paddingTop:'2px'}}>
                Quick Nav:
              </Typography>
            <Button color="error" size="small" >
              <a href="#topseller" style={{textDecoration:"none", color:"#f44336"}}>Topseller</a>
              
            </Button>
            <Button color="error" size="small">
            <a href="#trailer" style={{textDecoration:"none", color:"#f44336"}}>
              Trailers</a>
            </Button>
            <Button color="error" size="small" >
            <a href="#trending" style={{textDecoration:"none", color:"#f44336"}}>
              Hot & Trending
              </a>
            </Button>
           
            <Button color="error" size="small" >
            <a href="#sale" style={{textDecoration:"none", color:"#f44336"}}>
              On Sale
              </a>
            </Button>
            
            <Button color="error"  size="small" >
            <a href="#genre" style={{textDecoration:"none", color:"#f44336"}}>
              Discover
              </a>
            </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
 }
