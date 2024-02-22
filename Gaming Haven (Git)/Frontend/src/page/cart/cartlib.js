import {
  Alert,
  Badge,
  Box,
  CardContent,
  Chip,
  CircularProgress,
  Divider,
} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import newRequest from "../../utils/newRequest";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Centre1 } from "../gamecontent/maingc";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import React from "react";
import SentimentVeryDissatisfiedTwoToneIcon from "@mui/icons-material/SentimentVeryDissatisfiedTwoTone";
import { ArrowForwardIos } from "@mui/icons-material";
const Cartlib = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      try {
        const response = await newRequest.get("/cart/usercart");
        return response.data;
      } catch (error) {
        throw new Error("Error fetching cart data");
      }
    },
  });
  const queryClient = useQueryClient();

  const deleteItem = async (_id) => {
    try {
      await newRequest.delete(`/cart/${_id}`);
      queryClient.invalidateQueries(["cart"]);
    } catch (error) {
      console.error("Error deleting item", error);
      // Handle error appropriately
    }
  };

  const handleDelete = async (_id) => {
    try {
      await deleteItem(_id);
      // The query will be automatically invalidated, and UI will be updated
    } catch (error) {
      console.error("Error deleting item", error);
      // Handle error appropriately
    }
  };
  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </div>
      ) : error ? (
        <Alert severity="error">Kindly login to access these features!</Alert>
      ) : data.length === 0 ? (
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "90vh",
          }}
          fontFamily="monospace"
          fontSize="40px"
          align="center"
        >
          Your Cart is Empty!!
        </Typography>
      ) : (
        <>
          <Box paddingLeft="150px">
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "35px",
                paddingTop: "20px",
                paddingBottom: "-20px",
              }}
            >
              Your Cart
              <Divider color="gray" flexItem />
            </Typography>
            <Container>
              <Grid container spacing={2} margin="30px">
                {data.map((cart, index) => (
                  <Card
                    sx={{
                      height: "155px",
                      display: "flex",
                      maxWidth: "510px",
                      minWidth: "510px",
                      margin: "10px",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.02)",
                      },
                    }}
                    key={index}
                  >
                    <CardMedia
                      component="img"
                      height="auto"
                      image={cart.img1}
                      sx={{ width: "310px", objectFit: "cover" }}
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        fontSize="17px"
                        fontFamily="monospace"
                        component="div"
                      >
                        {cart.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Rs. {cart.price} /-
                      </Typography>
                      <Badge
                        color="error"
                        sx={{
                          cursor: "pointer",
                          paddingTop: "9px",
                          display: "flex",
                          gap: "25px",
                        }}
                      >
                        <Link
                          to={`/checkout`}
                          state={{ from: "topseller", name: cart.name }}
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            variant="outlined"
                            sx={{ borderRadius: "40px" }}
                            color="error"
                            size="small"
                          >
                            Buy Now
                          </Button>
                        </Link>
                        <RemoveCircleOutlineIcon
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
              <Box sx={{paddingBottom:"100px"}}>
              <Divider variant="fullWidth" color="white"> 
                <Link to={`/checkoutorder`} style={{textDecoration:"none"}}>
                  <Chip label="Check out" size="medium" />
                </Link>
              </Divider>
              </Box>
            </Container>
          </Box>
        </>
      )}
    </div>
  );
};

export default Cartlib;
