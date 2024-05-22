import { Stack } from '@mui/material'
import React from 'react'
import DashLeft from './dsleft'
import Profile from './profile'
import { Right1 } from './dsright'

const Dashboard = () => {
  return (
    <div>
        <Stack direction="row">
            <DashLeft/>
            <Profile/>
            <Right1/>
        </Stack>
    </div>
  )
}

export default Dashboard