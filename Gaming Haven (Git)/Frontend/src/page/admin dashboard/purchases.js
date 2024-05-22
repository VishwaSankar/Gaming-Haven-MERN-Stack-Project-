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
const Purchases = () => {
  return (
    <>
     <Typography
                fontFamily="monospace"
                fontSize="30px"
                textAlign="center"
                paddingBottom="20px"
              >
                Games you have purchased
                <Divider variant="middle" color="gray" />
              </Typography>
              {data && (
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
              )}
    
    </>
  )
}

export default Purchases