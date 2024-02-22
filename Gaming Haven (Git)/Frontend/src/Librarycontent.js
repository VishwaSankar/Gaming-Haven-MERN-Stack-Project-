import { Alert, Box, Card, CircularProgress, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import newRequest from './utils/newRequest';

const Librarycontent = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ["library"],
    queryFn: async () => {
      try {
        // Check if the user is authenticated
        if (!currentUser || !currentUser.token) {
          throw new Error("User not authenticated");
        }

        // Your library data fetching logic
        const response = await newRequest.get("/library");
        return response.data;
      } catch (error) {
        throw new Error("Error fetching library data");
      }
    },
  });
  return (
    <>
      <Box flex={6}>
        <Typography sx={{ fontFamily: "monospace", fontSize: "40px" }}>
          Your Library
        </Typography>
        <Box paddingTop="30px">
          {error && <Alert severity="error">Kindly login to access these features!</Alert>}
          {isLoading && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <CircularProgress />
            </div>
          )}
          {data && (
            <>
              <Typography sx={{ fontSize: "20px" }} textAlign="left">
                Games you have bought
              </Typography>
              <Card>{/* Your library content rendering here using data */}</Card>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};


export default Librarycontent