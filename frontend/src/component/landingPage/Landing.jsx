import React from "react";
import LandingCrousel from "./LandingCrousel";
import { Box, Container, Divider } from "@chakra-ui/react";
import LandingProduct from "./LandingProduct";
import Footer from "../utility/Footer";
import LandingTopBar from "./LandingTopBar";
import Navbar from '../Navbar/Navbar'
const Landing = () => {
  return (
    <>
    <Navbar/>
      <Box mt={'150px'} >
        <Container
          maxW={{
            base: "100%",
            sm: "90%",
            lg: "80%",
          }}
        >
          <Box >
            <LandingTopBar/>
          </Box>
          <Box paddingTop={"5%"}>
            <LandingCrousel />
          </Box>
          <Box m={3}>
            <LandingProduct />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Landing;
