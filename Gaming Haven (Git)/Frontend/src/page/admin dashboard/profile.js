import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import DashLeft from "./dsleft";
import { Right1 } from "./dsright";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { gamesdata1 } from "../gamecontent/Datagames";

const Profile = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
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
  
  return (
    <Box paddingLeft="120px" justifyContent="center" alignItems="center">
      <Container>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          display="flex"
          justifyContent="space-evenly"
        >
          <Box paddingTop="20px">
            <Paper borderRadius="50%">
              <Typography
                fontFamily="monospace"
                fontSize="40px"
                textAlign="center"
              >
                Your Profile
                <Divider variant="middle" color="gray" />
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "1000px",
                }}
              >
                <img
                  src={currentUser?.img}
                  alt="Profile"
                  style={{
                    maxHeight: "300px",
                    padding: "20px",
                    maxWidth: "40%",
                    objectFit: "cover",
                    borderRadius: "20%",
                  }}
                />

                <div
                  style={{
                    padding: "30px",
                    height: "auto",
                    fontFamily: "monospace",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ fontSize: "20px", fontFamily: "monospace" }}>
                    NAME: {currentUser?.username}
                  </p>
                  <p style={{ fontSize: "20px", fontFamily: "monospace" }}>
                    EMAIL: {currentUser?.email}
                  </p>
                  <p style={{ fontSize: "20px", fontFamily: "monospace" }}>
                    COUNTRY: {currentUser?.country}
                  </p>
                  <p style={{ fontSize: "20px", fontFamily: "monospace" }}>
                    MOBILE NUMBER: {currentUser?.phone}
                  </p>
                </div>
              </div>
            </Paper>
            <br />
              <Typography
                fontFamily="monospace"
                fontSize="30px"
                textAlign="center"
                paddingBottom="20px"
              >
                Games you have purchased
                <Divider variant="middle" color="gray" />
              </Typography>
              {data && data.length > 0 ? ( // Check if data exists and has items
              <Stack spacing={2} sx={{ p: 2 }}>
                {data.map((order) => (
                  <Card key={order._id}>
                    <CardContent>
                      <Typography variant="h6" fontFamily="monospace">
                        Game: {typeof order.gamedetails.gamename === 'object' ? Object.keys(order.gamedetails.gamename).join(', ') : order.gamedetails.gamename}
                      </Typography>
                      <Typography fontFamily="monospace">
                        Purchase Date: {new Date(order.createdAt).toDateString()}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            ) : ( // Display message when no games are purchased
              <Box textAlign="center" p={2}>
                <Typography variant="body1" fontFamily="monospace">
                  No games purchased yet.
                </Typography>
              </Box>
            )}
          </Box>
        </Stack>
      </Container>
      <Right1 />
    </Box>
  );
};

export default Profile;
