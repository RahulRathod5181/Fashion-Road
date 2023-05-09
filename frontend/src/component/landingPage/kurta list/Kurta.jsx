import { Container } from "@chakra-ui/react";
import React from "react";
import KurtaProduct from "./KurtaProduct";

const Kurta = () => {
  return (
    <Container
      maxW={{
        base: "100%",
        sm: "90%",
        lg: "80%",
      }}
    >
      <KurtaProduct />
    </Container>
  );
};

export default Kurta;
