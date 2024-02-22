import { Stack } from '@mui/material'
import React from 'react'
import DashLeft from './dsleft'

const Dashboard = () => {
  return (
    <div>
        <Stack direction="row">
            <DashLeft/>
        </Stack>
    </div>
  )
}

export default Dashboard