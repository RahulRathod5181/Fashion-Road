import { Container } from '@chakra-ui/react'
import React from 'react'
import AccessoriesProduct from './AccessoriesProduct'

const Accessories = () => {
  return (
    <Container
      maxW={{
        base: "100%",
        sm: "90%",
        lg: "80%",
      }}
    >
      <AccessoriesProduct />
    </Container>
  )
}

export default Accessories
