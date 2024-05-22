import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import NestedList from './left'
import { Right } from './right'
import Librarycontent from './Librarycontent'
import DashLeft from './page/admin dashboard/dsleft'

export const DbLibrary = () => {
  return (
    <>
 <Container maxWidth="xl">
        <Stack direction="row" spacing={1} justifyContent={"space-between"}>
         
            <DashLeft/>
          <Librarycontent/>  
          
        </Stack>
      </Container>
    </>
  )
}

