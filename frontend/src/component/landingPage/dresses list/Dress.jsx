import React from 'react'
import DressProduct from './DressProduct'
import { Container } from '@chakra-ui/react'

const Dress = () => {
  return (
    <Container
      maxW={{
        base: "100%",
        sm: "90%",
        lg: "80%",
      }}
    >
      <DressProduct />
    </Container>
  )
}

export default Dress
