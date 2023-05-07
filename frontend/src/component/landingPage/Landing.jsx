import React from "react";
import LandingCrousel from "./LandingCrousel";
import { Box, Container, Divider } from "@chakra-ui/react";
import LandingProduct from "./LandingProduct";
import Footer from "../utility/Footer";

const Landing = () => {
  return (
    <>
      <Box bgColor={"#eeeeee"}>
        <Container
          maxW={{
            base: "100%",
            sm: "90%",
            lg: "80%",
          }}
        >
          <Box paddingTop={"15%"}>
            <LandingCrousel />
          </Box>
          <Box mt={3}>
            <LandingProduct />
          </Box>
        </Container>
        <Box mt={5}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Landing;
