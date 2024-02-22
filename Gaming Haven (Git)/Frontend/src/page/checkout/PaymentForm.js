import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

export default function PaymentForm() {
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


  const handleship = (e) => {
    e.preventDefault();
    
    // Gather form data
    const formData = {
      paymentDetails: {
        cardName: document.getElementById('cardName').value, // Get this value from the TextField
        cardNumber: document.getElementById('cardNumber').value, // Get this value from the TextField
        expirationDate: document.getElementById('expDate').value, // Get this value from the TextField
        cvv: document.getElementById('cvv').value, // Get this value from the TextField
      },
    };

    // Call the mutation function to send data to the server
    mutation.mutate(formData);
  };

     
  
 
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
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
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" onClick={handleship}>
        Save
      </Button>
    </React.Fragment>
  );
}
