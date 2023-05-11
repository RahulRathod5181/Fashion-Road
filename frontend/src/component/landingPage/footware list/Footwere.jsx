import { Box, Container } from "@chakra-ui/react";
import React from "react";
import FootwereProduct from "./FootwereProduct";
import Navbar from '../../Navbar/Navbar'
const Footwere = () => {
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

      <FootwereProduct />
      </Box>
    </Container>
    </>
  );
};

export default Footwere;
