import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useLocation } from 'react-router-dom';
import { Box, Button, Divider } from '@mui/material';

export default function AddressForm() {
  const location = useLocation();
  //location state
  const [locationState, setLocationState] = React.useState({
    from: "",
    name: "",
  });
  React.useEffect(() => {
    console.log("location from top seller", location);
  }, [location]);
  
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
  
  
  const mutation = useMutation({
  mutationFn: (handleship) => {
      return newRequest.post('/order/neworder', handleship)
    },
    onSuccess:()=>{
     
     
      queryClient.invalidateQueries(["order"])
       
    }

  })

  if (location.state) {
    const { name,price } = location.state;

    
    console.log(name);
    console.log(price);
    let gamename = name;
    let gameprice=price;
    
  const handleship = (e) => {
    e.preventDefault();
    
    // Gather form data
    const formData = {
      gamedetails:{
        gamename:gamename,
        gameprice:gameprice,
      },
     
      shippingAddress: {
        Firstname: e.target.Firstname.value,
        Lastname: e.target.Lastname.value,
        Address: e.target.Address.value,
        city: e.target.city.value,
        state: e.target.state.value,
        zipCode: parseInt(e.target.zipCode.value), // Assuming zipCode is a number
        country: e.target.country.value,
      },
      paymentDetails: {
        cardName:e.target.cardName.value,
        cardNumber: e.target.cardNumber.value,
        expirationDate:e.target.expDate.value,
        cvv:e.target.cvv.value,
      }}
      

    // Call the mutation function to send data to the server
    mutation.mutate(formData);
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

      </Grid>
      <Grid paddingTop="30px" item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant='outlined' color='error' type="submit">Click me to save </Button>
          </Grid>
          
  </form>

    </React.Fragment>
    </Box>
    </>
  );
}}