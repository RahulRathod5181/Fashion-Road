import React from "react";
import LandingCrousel from "./LandingCrousel";
import { Box, Container } from "@chakra-ui/react";

const Landing = () => {
  return (
    <Container maxW={"70%"} border={"1px solid red"}>
      <Box marginTop={'15%'}>
        <LandingCrousel />
      </Box>
    </Container>
  );
};

export default Landing;
