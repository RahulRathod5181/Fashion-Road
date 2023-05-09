import { Container } from "@chakra-ui/react";
import React from "react";
import FootwereProduct from "./FootwereProduct";

const Footwere = () => {
  return (
    <Container
      maxW={{
        base: "100%",
        sm: "90%",
        lg: "80%",
      }}
    >
      <FootwereProduct />
    </Container>
  );
};

export default Footwere;
