import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import AccessoriesProduct from './AccessoriesProduct'
import Navbar from '../../Navbar/Navbar'
const Accessories = () => {
  return (
    <>
    <Navbar/>
    <Container
      maxW={{
        base: "100%",
        sm: "90%",
        lg: "80%",
      }}
    >
      <Box mt={'130px'} >

      <AccessoriesProduct />
      </Box>
    </Container>
    </>
  )
}

export default Accessories
