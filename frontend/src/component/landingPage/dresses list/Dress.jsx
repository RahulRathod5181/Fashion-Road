import React from "react";
import DressProduct from "./DressProduct";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from '../../utility/Footer'
const Dress = () => {
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
            <DressProduct />
          </Box>
        </Container>
        <Box pt={5}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Dress;
