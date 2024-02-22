import { Alert, Badge, Box, CardContent, CircularProgress, Divider } from "@mui/material";

import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Container,
  Grid,
  Rating,
  Stack,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import React from "react";
import SentimentVeryDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentVeryDissatisfiedTwoTone';
import newRequest from "./utils/newRequest";
import HeartBrokenTwoToneIcon from '@mui/icons-material/HeartBrokenTwoTone';
export const Favourites = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient=useQueryClient()
  
  
  const mutation = useMutation({
  mutationFn: (handlefav) => {
      return newRequest.post('/fav', handlefav)
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["fav"])
    }
  })

  const { isLoading, error, data } = useQuery({
    queryKey: ["fav"],
    queryFn: async () => {
      try {
        const response = await newRequest.get("/fav/userfav");
        return response.data; // Return the data from the response
      } catch (error) {
        throw new Error("Error fetching cart data"); // Handle errors appropriately
      }
    },
  });
  
  const deleteItem = async (_id) => {
    try {
      await newRequest.delete(`/fav/${_id}`);
      queryClient.invalidateQueries(['fav']);
    } catch (error) {
      console.error('Error deleting item', error);
      // Handle error appropriately
    }
  };
  
  const handleDelete = async (_id) => {
    try {
      await deleteItem(_id);
      // The query will be automatically invalidated, and UI will be updated
    } catch (error) {
      console.error('Error deleting item', error);
      // Handle error appropriately
    }
  };
  
  return (
    <div >
    {isLoading ? (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    ) : error ? (
      <Alert severity="error">Kindly login to access these features!</Alert>
    ) :  data.length === 0 ? (
      
      <Typography sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '90vh' }} fontFamily="monospace" fontSize="40px" align="center">
          No Favourites available..!
      </Typography>
    ) :(<>
      <Box paddingLeft="150px">
        <Typography
          sx={{
            fontFamily: 'monospace',
            fontSize: '35px',
            paddingTop: '20px',
            paddingBottom: '-20px',
          }}
        >
          Your Favourites
        <Divider color="gray" flexItem />
        </Typography>
        <Container>
          <Grid container spacing={2} margin="30px">
            {data.map((cart, index) => (
              <Card sx={{ height:"155px", display: 'flex', maxWidth: '510px', minWidth:'510px', margin: '10px',transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.02)",
                
              } }} key={index}>
                <CardMedia
                  component="img"
                  height="auto"
                  image={cart.img1}
                  sx={{ width: '310px', objectFit: 'cover' ,}}
                />
                <CardContent sx={{display:'flex', flexDirection:"column", justifyContent:"space-between"}}>
                  <Typography fontSize="17px" fontFamily="monospace" component="div">
                    {cart.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rs. {cart.price} /-
                  </Typography>
                  <Badge color="error" sx={{ cursor: "pointer", paddingTop:"9px", display:"flex", gap:"25px"  }}>
                  <Link
                to={"/content"}
                state={{ from: "favs", name: cart.title }}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  sx={{ borderRadius: "40px" }}
                  color="error"
                  size="small"
                >
                  Explore
                </Button>
                </Link>
                <HeartBrokenTwoToneIcon
                  onClick={() => handleDelete(cart._id)}
                  color="error"
                  sx={{
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.2)",
                      
                    },
                  }}
                />
                 
              </Badge>
             
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
       </Box> </>
    )}
  </div>
  );
}

