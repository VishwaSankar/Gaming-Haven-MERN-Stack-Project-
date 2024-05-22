import { Copyright } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
const Success = () => {
  const navigate = useNavigate();
  const {search}= useLocation();
  const params= new URLSearchParams(search);
  const orderId=params.get("orderId");
  const payment_intent=params.get("payment_intent")
  console.log(payment_intent);
  useEffect(()=>{
    const makeRequest=async()=>{
      try{
        await newRequest.put(`/order/confirm/${orderId}`, {
          payment_intent
        });
          setTimeout(()=>{
            navigate("/store")
          },10000)
      }
      catch(err){
        console.log(err);
      }
    }
    makeRequest();
  },[])
  
  return (
    <React.Fragment>
      <CssBaseline />

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <React.Fragment>
            <Typography variant="h4" gutterBottom fontFamily="monospace">
              Thank you for your order.
            </Typography>
            <Divider color="white" />
            <Typography variant="subtitle1" fontFamily="monospace">
              <br></br>
             Payment is successful. Your order number is {orderId}. Thank you for choosing Gaming Haven! You will be redirected to the store page
            </Typography>
          </React.Fragment>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default Success;
