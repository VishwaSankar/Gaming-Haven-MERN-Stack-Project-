import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { styled, Button } from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import AccountMenu from "./avatardown";
import Tooltip from "@mui/material/Tooltip";
import SportsEsportsSharpIcon from "@mui/icons-material/SportsEsportsSharp";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import newRequest from "./utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import { FavoriteBorder, HearingTwoTone } from "@mui/icons-material";

export const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
  });
  const handlelogout=async()=>{
    try{
      await newRequest.post("/auth/logout")
      localStorage.setItem("currentUser",null)

    }
    catch(err){
      console.log(err);
    }
    window.location.reload();
  }
  const { isLoading, error, data } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      try {
        const response = await newRequest.get("/cart/usercart");
        return response.data; // Return the data from the response
      } catch (error) {
        throw new Error("Error fetching cart data"); // Handle errors appropriately
      }
    },
  });
  const { data: favData } = useQuery({
    queryKey: ["fav"],
    queryFn: async () => {
      try {
        const response = await newRequest.get("/fav/userfav");
        return response.data; // Return the data from the response
      } catch (error) {
        throw new Error("Error fetching favorites data"); // Handle errors appropriately
      }
    },
  });

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box display="flex">
          <Avatar sx={{ color: "white", backgroundColor: "gray" }}>
            <SportsEsportsSharpIcon />
          </Avatar>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <Typography
              variant="h4"
              fontFamily="monospace"
              sx={{ paddingLeft: "17px" }}
            >
              Gaming Haven
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "25px" }}>
         
        {currentUser ? (
        // If the user is authenticated, show Logout button
        <Button
          variant="contained"
          disableElevation
          color="error"
          sx={{ borderRadius: "30px" }}
          onClick={handlelogout}
        >
          Logout
        </Button>
      ) : (
        // If the user is not authenticated, show Signup button
        <Link to="/signup" sx={{ textDecoration: "none", color: 'inherit' }}>
        <Button
          variant="contained"
          disableElevation
          color="error"
          sx={{ borderRadius: "30px" }}
        >
            Signup
        </Button>
          </Link>
      )}
          

          <Link to="/about">
            <Button
              variant="contained"
              disableElevation
              color="error"
              sx={{ borderRadius: "30px" }}
            >
              About
            </Button>
          </Link>

          <Tooltip title="Cart">
            <Link to="/cart">
              <Badge badgeContent={data?.length} color="error" sx={{ cursor: "pointer" }}>
                <ShoppingCartCheckoutIcon
                  color="white"
                  sx={{
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.2)",
                      color: "gray",
                    },
                  }}
                />
              </Badge>
            </Link>
          </Tooltip>
          {/* <Tooltip title="Your library">
            <Badge badgeContent={4} color="error" sx={{ cursor: "pointer" }}>
              <Link to="/library">
                <SportsEsportsRoundedIcon
                  color="white"
                  sx={{
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                />
              </Link>
            </Badge>
          </Tooltip> */}
          <Tooltip title="Favourites">
            <Link to="/fav">
              <Badge badgeContent={favData?.length} color="error" sx={{ cursor: "pointer" }}>
                <FavoriteBorder
                  color="white"
                  sx={{
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.2)",
                    
                    },
                  }}
                />
              </Badge>
            </Link>
          </Tooltip>

          <AccountMenu />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};


