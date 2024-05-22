import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { Link, useLocation } from "react-router-dom";
import { Divider } from "@mui/material";

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

  const location = useLocation();
  const gamename = location.state?.name;
  const gameprice = location.state?.price;

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error fetching order data</Typography>;
  }

  if (location.state && data) {
    const filteredOrders = data.filter(
      (order) => order.gamedetails.gamename === gamename
    );

    const lastOrder = filteredOrders.slice(-1)[0];

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>
        {lastOrder && (
          <List disablePadding>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={lastOrder.gamedetails.gamename}
                secondary={lastOrder.gamename}
              />
              <Typography variant="body2">Rs. {gameprice}/-</Typography>
            </ListItem>
            <Divider color="white" />
          </List>
        )}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          Rs. {gameprice} /-
        </ListItem>
        <Grid container spacing={2}>
          {lastOrder && (
            <React.Fragment>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Shipping
                </Typography>
                <Typography gutterBottom>
                  {lastOrder?.shippingAddress.Firstname}{" "}
                  {lastOrder?.shippingAddress.Lastname}
                </Typography>
                <Typography gutterBottom>
                  {lastOrder?.shippingAddress.Address}
                </Typography>
                <Typography gutterBottom>
                  {lastOrder?.shippingAddress.state}
                </Typography>
                <Typography gutterBottom>
                  {lastOrder?.shippingAddress.city}
                </Typography>
              </Grid>
              <Divider color="white" />
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Payment details
                </Typography>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <Typography gutterBottom>
                      Card Name: {lastOrder?.paymentDetails?.cardName}{" "}
                    </Typography>
                    <Typography gutterBottom>
                      Card Number:{lastOrder?.paymentDetails?.cardNumber}
                    </Typography>
                    <Typography gutterBottom>
                      Expire Date: {lastOrder?.paymentDetails?.expirationDate}
                    </Typography>
                    <Typography gutterBottom>
                      CVV: {lastOrder?.paymentDetails?.cvv}
                    </Typography>
                  </Grid>
                </Grid>
                <Link to={'/pay'} state={{from:'checkout-review', amount:gameprice , orderId:lastOrder._id }}>
                  <button>Make Payment</button>
                </Link>
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </React.Fragment>
    );
  } else {
    return <Typography>No order data available</Typography>;
  }
}
