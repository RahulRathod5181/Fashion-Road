import { Box, Container } from "@chakra-ui/react";
import React from "react";
import ShirtProduct from "./ShirtProduct";
import Navbar from "../../Navbar/Navbar";
import Footer from '../../utility/Footer'
const Shirt = () => {
  return (
    <>
      <Box bgColor={'#eeeeee'}>
        <Navbar />
        <Container
          maxW={{
            base: "100%",
            sm: "90%",
            lg: "70%",
          }}
        >
          <Box pt={"130px"}>
            <ShirtProduct />
          </Box>
        </Container>
        <Box pt={5}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Shirt;
