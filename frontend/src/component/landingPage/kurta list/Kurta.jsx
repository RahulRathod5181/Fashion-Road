import { Box, Container } from "@chakra-ui/react";
import React from "react";
import KurtaProduct from "./KurtaProduct";
import Navbar from '../../Navbar/Navbar'
const Kurta = () => {
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

      <KurtaProduct />
      </Box>
    </Container>
    </>
  );
};

export default Kurta;
