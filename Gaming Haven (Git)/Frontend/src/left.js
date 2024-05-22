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
import { Box, Divider, Paper } from "@mui/material";
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
import Globalapi from "./Globalapi";
export default function NestedList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

 
  return (
    <>
    
    <Box flex={3} paddingTop="60px">
      <Paper >
       
      </Paper>
      <List
        sx={{
          minWidth: 150,
          paddingTop: "30px",
          position: "fixed",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        
        <ListItemButton>
          <ListItemIcon>
            <ShopIcon />
          </ListItemIcon>
          <Link to={"/"}  style={{textDecoration:"none" , color: 'white'}} >
          <ListItemText primary="Your Store"  />
          </Link>
        </ListItemButton>
        <Divider color="gray"/>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <VideogameAssetIcon />
          </ListItemIcon>
         
          <ListItemText primary="Explore Genre" />
          <Divider color="gray"/>
         
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <Link to={"/genre"} state={{from:'genre', name:"Action"}}  style={{textDecoration:"none" , color: 'white'}} >
              <ListItemText primary="Action" />
              </Link>
            </ListItemButton>
{/* 
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="Story-rich" />
            </ListItemButton> */}
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <Link to={"/genre"} state={{from:'genre', name:"FPS"}}  style={{textDecoration:"none" , color: 'white'}} >
              <ListItemText primary="FPS" />
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <Link to={"/genre"} state={{from:'genre', name:"Fighting"}}  style={{textDecoration:"none" , color: 'white'}} >
              <ListItemText primary="Fighting" />
            </Link>
            </ListItemButton>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <Link to={"/genre"} state={{from:'genre', name:"Horror"}}  style={{textDecoration:"none" , color: 'white'}} >
              <ListItemText primary="Horror Games" />
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <Link to={"/genre"} state={{from:'genre', name:"Racing"}}  style={{textDecoration:"none" , color: 'white'}} >
              <ListItemText primary="Racing Games" />
              </Link>
            </ListItemButton>
          </List>
        </Collapse>
        <Divider color="gray"/>
        {/* <ListItemButton>
          <ListItemIcon>
            <NewspaperIcon />
          </ListItemIcon>
          <ListItemText primary="News" />
        </ListItemButton> */}
        <ListItemButton>
          <ListItemIcon>
            <SellIcon />
          </ListItemIcon>
          <Link to={"/cart"} state={{}}  style={{textDecoration:"none" , color: 'white'}} >

          <ListItemText primary="Your Cart" />
          </Link>
        </ListItemButton>
        <Divider color="gray"/>
        {/* <ListItemButton>
          <ListItemIcon>
            <GamepadIcon />
          </ListItemIcon>
          <ListItemText primary="Consoles" />
        </ListItemButton> */}
        {/* <ListItemButton>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <Link to={"/library"}  style={{textDecoration:"none" , color: 'white'}} >
          <ListItemText  primary="Your Library" />
          </Link>
        </ListItemButton> */}
        <Divider color="gray"/>
        <ListItemButton>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <Link to={"/fav"}  style={{textDecoration:"none" , color: 'white'}} >
          <ListItemText primary="Favourites" />
          </Link>
        </ListItemButton>
        <Divider color="gray"/>
        <ListItemButton>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <Link to={"/about"}  style={{textDecoration:"none" , color: 'white'}} >
          <ListItemText primary="Support" />
          </Link>
        </ListItemButton>
        <Divider color="gray"/>
       
      </List>
    </Box>
    </>
  );
}
