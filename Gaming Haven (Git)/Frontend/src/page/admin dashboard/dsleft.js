import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import React from "react";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { Box, Container, Divider, Paper } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SellIcon from "@mui/icons-material/Sell";
import GamepadIcon from "@mui/icons-material/Gamepad";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShopIcon from "@mui/icons-material/Shop";
import { Link } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookIcon from '@mui/icons-material/Book';
import Person2Icon from '@mui/icons-material/Person2';
export default function DashLeft() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

 
  return (
    <Box flex={3} >
       <Container>
        
      <List
        sx={{
          width: "100%",
          maxWidth: 250,
          minWidth: 150,
          paddingTop: "30px",
          position: "fixed",
          gap:"20px"
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
       
          
        <ListItemButton >
          <ListItemIcon>
            <Person2Icon />
          </ListItemIcon>
          <Link to={"/profile"}  style={{textDecoration:"none" , color: 'white'}} >
          <ListItemText   primary="Your Profile" />
          </Link>
        </ListItemButton>
        <Divider color="gray" />
      
         
          
       
        <ListItemButton >
          <ListItemIcon>
            <SellIcon />
          </ListItemIcon>
          <ListItemText primary="Your Purchases" />
        </ListItemButton>
        <Divider color="gray" />
      
        <ListItemButton>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <Link to={"/dblibrary"}  style={{textDecoration:"none" , color: 'white'}} >
          <ListItemText  primary="Your Library" />
          </Link>
        </ListItemButton>
        <Divider color="gray" />
        <ListItemButton>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <Link to={"/fav"}  style={{textDecoration:"none" , color: 'white'}} >
          <ListItemText primary="Your Favourites" />
          </Link>
        </ListItemButton>
        <Divider color="gray" />
        <ListItemButton>
            {/* <ListItemIcon>
              <InfoIcon />
            </ListItemIcon> */}
          {/* <Link to={"/library"}  style={{textDecoration:"none" , color: 'white'}} >
          <ListItemText primary="Passwords & security" />
          </Link> */}
        </ListItemButton>
        
      
      </List>
    </Container>
    </Box>
    
  );
}
