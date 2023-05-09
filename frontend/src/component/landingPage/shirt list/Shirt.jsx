import { Container } from '@chakra-ui/react'
import React from 'react'
import ShirtProduct from './ShirtProduct'

const Shirt = () => {
  return (
    <Container maxW={{
        base: "100%",
        sm: "90%",
        lg: "80%",
      }}>
      <ShirtProduct/>
    </Container>
  )
}

export default Shirt
