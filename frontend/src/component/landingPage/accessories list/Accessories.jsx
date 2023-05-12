import { Box, Container } from "@chakra-ui/react";
import React from "react";
import AccessoriesProduct from "./AccessoriesProduct";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../utility/Footer";
const Accessories = () => {
  return (
    <>
      <Box bgColor={"#eeeeee"}>
        <Navbar />
        <Container
          maxW={{
            base: "100%",
            sm: "90%",
            lg: "70%",
          }}
        >
          <Box pt={"130px"}>
            <AccessoriesProduct />
          </Box>
        </Container>
        <Box pt={5}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Accessories;
