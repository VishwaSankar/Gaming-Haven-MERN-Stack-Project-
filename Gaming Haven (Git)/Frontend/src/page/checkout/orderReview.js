import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { Link, useLocation } from 'react-router-dom';
import { Divider } from '@mui/material';




export default function Review(props) {
  
  const { isLoading: cartLoading, error: cartError, data: cartData } = useQuery({
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

  // Fetch order details
  const { isLoading: orderLoading, error: orderError, data: orderData } = useQuery({
    queryKey: ["order"],
    queryFn: async () => {
      try {
        const response = await newRequest.get("/order/userorder");
        return response.data;
      } catch (error) {
        throw new Error("Error fetching order data");
      }
    },
  });
  const lastOrderId = orderData?.length > 0 ? orderData[orderData.length - 1]._id : null;
  console.log("orderid" +lastOrderId);
 
    
  




  const total =  cartData.reduce((accumulator, order) => accumulator + parseFloat(order.price), 0);
  return (
    <React.Fragment>
      <Typography fontSize="35px" fontFamily="monospace" gutterBottom>
        Order summary
      </Typography>
      { cartData.map((order, index) => (
        
        <List disablePadding key={index}>
          <ListItem key={order.name} sx={{ py: 1, px: 0 }}>
            <ListItemText   primary={order.name} secondary={order.platform} />
            
            <Typography fontFamily="monospace" variant="body2" fontSize="17px"> Rs. {order.price} /-</Typography>
          </ListItem>
          <Divider />
      
      </List> ))}
      
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total amount to be paid" secondary="including GST"/>
         <Typography fontFamily="monospace" fontSize="20px">Rs. {total} /-</Typography> 
        </ListItem>
        <Link to={'/pay'} state={{from:'checkout-review', amount:total, orderId:lastOrderId}}>
              <button>Make Payment</button>
              </Link>
      
      
      
      
      
      <Grid container spacing={2}>
      {/* {data.map((order, index) => (

        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{order?.shippingAddress.Firstname} {order?.shippingAddress.Lastname}</Typography>
          <Typography gutterBottom>{order?.shippingAddress.Address }</Typography>
          <Typography gutterBottom>{order?.shippingAddress.state }</Typography>
          <Typography gutterBottom>{order?.shippingAddress.city }</Typography>

        </Grid>
          ))} */}
        
        <Grid item container direction="column" xs={12} sm={6}>
          {/* <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography> */}
          <Grid container>
      {/* <Grid item xs={12} sm={6}>
       
        <Typography gutterBottom>Card Name: {order?.paymentDetails?.cardName} </Typography>
        <Typography gutterBottom>Card Number:{order?.paymentDetails?.cardNumber}</Typography>
        <Typography gutterBottom>Expire Date: {order?.paymentDetails?.expirationDate}</Typography>
        <Typography gutterBottom>CVV: {order?.paymentDetails?.cvv}</Typography>
      </Grid> */}
    </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
































