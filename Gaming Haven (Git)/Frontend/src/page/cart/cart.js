
import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import NestedList from '../../left'
import { Right } from '../../right'
import Cartlib from './cartlib'
import StickyFooter from '../../footer'


const Cart = () => {
  return (
    <>
      
      <Container maxWidth="xl">
          <Stack direction="row" spacing={1} justifyContent={"space-between"}>
            <NestedList />
            <Cartlib/>
            <Right />
          </Stack>
          
        </Container>
        
  </>
  )
}

export default Cart