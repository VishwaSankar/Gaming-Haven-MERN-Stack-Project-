import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useLocation } from 'react-router-dom';
import { Divider } from '@mui/material';


const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review(props) {
  


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
  const queryClient=useQueryClient()
 
  

  //const filteredOrders = data.filter((order) => order.gamedetails.gamename === gamename);
  const total = data.reduce((accumulator, order) => accumulator + parseFloat(order.price), 0);
  return (
    <React.Fragment>
      <Typography fontSize="35px" fontFamily="monospace" gutterBottom>
        Order summary
      </Typography>
      {data.map((order, index) => (
        <List disablePadding key={index}>
          <ListItem key={order.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={order.name} secondary={order.platform} />
            
            <Typography variant="body2"> Rs. {order.price} /-</Typography>
          </ListItem>
          <Divider />
      
      </List> ))}
      
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total amount to be paid" secondary="including GST"/>
          Rs. {total} /-
        </ListItem>
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
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
































