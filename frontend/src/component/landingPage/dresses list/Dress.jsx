import React from 'react'
import DressProduct from './DressProduct'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../../Navbar/Navbar'
const Dress = () => {
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
      <Box mt={'130px'}>

      <DressProduct />
      </Box>
    </Container>
    </>
  )
}

export default Dress
