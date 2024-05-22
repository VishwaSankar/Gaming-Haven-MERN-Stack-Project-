import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';

import PaymentForm from './PaymentForm';
import AddressForm from './Addressform';
import { Link,  } from 'react-router-dom';
import Review from './orderReview';
import OrderAddressForm from './orderAddressform';


function Copyright() {
    
    React.useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);

       

      
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'C'}
      <Link color="inherit" path='/store'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function Checkoutorder() {
  const [isDataSaved, setIsDataSaved] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  
  const steps = ['Shipping address & Payment Details',  'Review your order'];

function getStepContent(step) {
  
  switch (step) {
    case 0:
      return < OrderAddressForm/>;
    case 1:
      return <Review/>;
    default:
      throw new Error('Unknown step');
  }
}
 
  const handleDataSaved = () => {
    setIsDataSaved(true);
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
 

  
  return (
    <React.Fragment>
      <CssBaseline />
      
       
      
        
      
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center" fontFamily="monospace">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom fontFamily="monospace">
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1" fontFamily="monospace">
                
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep,handleDataSaved)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
                }
