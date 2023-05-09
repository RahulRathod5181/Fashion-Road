import React from "react";
import SareeProduct from "./SareeProduct";
import { Container } from "@chakra-ui/react";

const Sarees = () => {
  return (
    <Container
      maxW={{
        base: "100%",
        sm: "90%",
        lg: "80%",
      }}
    >
      <SareeProduct />
    </Container>
  );
};

export default Sarees;
