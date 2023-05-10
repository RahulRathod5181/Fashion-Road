import React from "react";
import SareeProduct from "./SareeProduct";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
const Sarees = () => {
  return (
    <>
      <Navbar />
      <Container
        maxW={{
          base: "100%",
          sm: "90%",
          lg: "80%",
        }}
      >
        <Box mt={"130px"}>
          <SareeProduct />
        </Box>
      </Container>
    </>
  );
};

export default Sarees;
