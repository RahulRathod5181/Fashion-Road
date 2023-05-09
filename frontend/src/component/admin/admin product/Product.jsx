import { Container, Box } from "@chakra-ui/react";
import React from "react";
import AdminProduct from "./AdminProduct";
import Navbar from "../navbar/Navbar";
import AdminNavbar from "../navbar/Navbar";

const Product = () => {
  return (
    <Container
      maxW={{
        base: "100%",
        sm: "90%",
        lg: "80%",
      }}
    >
      <AdminNavbar />
      <Box mb={5}>
        <AdminProduct />
      </Box>
    </Container>
  );
};

export default Product;
