import { Box, Container } from "@chakra-ui/react";
import React from "react";
import ShirtProduct from "./ShirtProduct";
import Navbar from '../../Navbar/Navbar'
const Shirt = () => {
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
        <Box mt={'150px'} >
        <ShirtProduct />
        </Box>
      </Container>
    </>
  );
};

export default Shirt;
