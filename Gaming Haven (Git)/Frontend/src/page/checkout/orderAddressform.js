import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useLocation } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export default function AddressForm() {
  const location = useLocation();
  const [locationState, setLocationState] = React.useState({
    from: "",
    name: "",
  });
  React.useEffect(() => {
    console.log("location from top seller", location);
  }, [location]);

  const { isLoading, error, data: cartData } = useQuery({
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

  const mutation = useMutation({
    mutationFn: (orderDetails) => {
      return newRequest.post('/order/neworder', orderDetails);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["order"]);
    },  
  });

  const handleship = (e) => {
    e.preventDefault();
  
    // // Check if cartData is available and not empty
    if (cartData && cartData.length > 0) {
      // Extract gamenames and gameprices from all items in cartData
      const gameDetails = cartData.reduce((accumulator, item) => {
        accumulator.gamename[item.name] = true; // Using true as a placeholder value
        accumulator.gameprice[item.name] = item.price;
        return accumulator;
      }, { gamename: {}, gameprice: {} });
    
      // Gather form data
      const formData = {
        gamedetails: {
          gamename: gameDetails.gamename,
          gameprice: gameDetails.gameprice,
        },
        shippingAddress: {
          Firstname: e.target.Firstname.value,
          Lastname: e.target.Lastname.value,
          Address: e.target.Address.value,
          city: e.target.city.value,
          state: e.target.state.value,
          zipCode: parseInt(e.target.zipCode.value),
          country: e.target.country.value,
        },  paymentDetails: {
          cardName:e.target.cardName.value,
          cardNumber: e.target.cardNumber.value,
          expirationDate:e.target.expDate.value,
          cvv:e.target.cvv.value,
        }
      };
  
      // Call the mutation function to send data to the server
      mutation.mutate(formData);
    } else {
      console.error("Cart is empty. Cannot proceed with the order.");
      // Handle the case when cartData is empty
    }
  };
  
  

  return (
    <>
    <Box>
    <React.Fragment>

    <Typography variant="h5" fontFamily="monospace" gutterBottom textAlign="center" paddingTop="30px" paddingBottom="20px">
        Shipping address
        {/* <Divider color="gray"  variant="middle"/> */}
      </Typography>
      
      <form onSubmit={handleship}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Firstname"
            name="Firstname"
            label="Firstname"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Lastname"
            name="Lastname"
            label="Lastname"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Address"
            name="Address"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
      
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zipCode"
            name="zipCode"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
  </Grid>
       
        <Typography variant="h5" fontFamily="monospace" gutterBottom textAlign="center" paddingTop="50px">
        Payment method
      </Typography>
      {/* <Divider color="gray"  variant="middle"/> */}
     
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            name="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            name="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="cvv"
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid><br></br>
        <br></br>

        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
      </Grid>
      <Grid paddingTop="30px" item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant='outlined' color='error' type="submit">Click me to save </Button>
          </Grid>
          
    
      </form>

    </React.Fragment>
    </Box>
    </>
  );
}
