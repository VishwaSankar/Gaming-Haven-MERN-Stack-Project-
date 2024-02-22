  import * as React from 'react';
  import Typography from '@mui/material/Typography';
  import List from '@mui/material/List';
  import ListItem from '@mui/material/ListItem';
  import ListItemText from '@mui/material/ListItemText';
  import Grid from '@mui/material/Grid';
  import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
  import newRequest from '../../utils/newRequest';
import { useLocation } from 'react-router-dom';
import { gamesdata1 } from '../gamecontent/Datagames';
import { Divider } from '@mui/material';


  const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Mr John Smith' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
  ];

  export default function Review(props) {
    const { isLoading, error, data } = useQuery({
      queryKey: ["order"],
      queryFn: async () => {
        try {
          const response = await newRequest.get("/order/userorder");
          return response.data; // Return the data from the response
        } catch (error) {
          throw new Error("Error fetching order data"); // Handle errors appropriately
        }
      },
    });
    const queryClient=useQueryClient()
    const location = useLocation();
  //location state
  const [locationState, setLocationState] = React.useState({
    from: "",
    name: "",
  });
  React.useEffect(() => {
    console.log("location from top seller", location);
  }, [location]);
  
  const gamename=location.state.name;
  const gameprice=location.state.price;
  

  console.log("testtttt" +gamename)
  console.log("test"+gameprice);
  if (location.state) {
    const { name } = location.state;
    const { price } = location.state;
    let gamenamesingle=name
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
    // const mutation = useMutation({
    //   mutationFn: (handlefav) => {
    //       return newRequest.post('/order', handlefav)
    //     },
    //     onSuccess:()=>{
    //       queryClient.invalidateQueries(["fav"])
    //     }
    //   })

    const filteredOrders = data.filter((order) => order.gamedetails.gamename === gamename);
    

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>
        {filteredOrders.map((order, index) => (
          <List disablePadding key={index}>
            <ListItem key={order.gamedetails.gamename === gamename} sx={{ py: 1, px: 0 }}>
              <ListItemText primary={order.gamedetails.gamename} secondary={order.gamename} />
              <Typography variant="body2">Rs. {gameprice}/-</Typography>
            </ListItem>
            <Divider color="white"/>
        
        </List> ))}
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Total" />
            Rs. {gameprice} /-
          </ListItem>
        <Grid container spacing={2}>
        {filteredOrders.map((order, index) => (

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Shipping
            </Typography>
            <Typography gutterBottom>{order?.shippingAddress.Firstname} {order?.shippingAddress.Lastname}</Typography>
            <Typography gutterBottom>{order?.shippingAddress.Address }</Typography>
            <Typography gutterBottom>{order?.shippingAddress.state }</Typography>
            <Typography gutterBottom>{order?.shippingAddress.city }</Typography>

          </Grid>
            ))}
          
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
  }}
































 