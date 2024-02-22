import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import NestedList from './left'
import { Right } from './right'
import Librarycontent from './Librarycontent'

export const Library = () => {
  return (
    <>
 <Container maxWidth="xl">
        <Stack direction="row" spacing={1} justifyContent={"space-between"}>
          <NestedList />

          <Librarycontent/>  
          <Right />
        </Stack>
      </Container>
    </>
  )
}

