import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import DashLeft from './dsleft'
import { Right } from '../../right'
import { Right1 } from './dsright'

const Profile = () => {
  const currentUser=JSON.parse(localStorage.getItem("currentUser"))
  return (
    <div>
  <Container>
    <Stack direction="row" spacing={2} alignItems="center" display="flex" justifyContent="space-evenly">
      {/* <DashLeft /> */}
      <Box paddingTop="20px">
        <Paper>
          <Typography fontFamily="monospace" fontSize="30px">
            Hello Gamer!
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-evenly", width: "1000px" }}>
            <img src={currentUser?.img} alt="Profile" style={{ height:"400px", padding: '30px', width: '500px', borderRadius: '50%' }} />

            <div style={{ padding: '50px', height: "380px", fontWeight: "bold", display: "flex", flexDirection: "column" }}>
              <p>NAME: {currentUser?.username}</p>
              <p>EMAIL: {currentUser?.email}</p>
              <p>COUNTRY: {currentUser?.country}</p>
              <p>MOBILE NUMBER: {currentUser?.phone}</p>
            </div>
          </div>

        </Paper>
      </Box>
      <Right1 />
    </Stack>
  </Container>
</div>
  )
}

export default Profile