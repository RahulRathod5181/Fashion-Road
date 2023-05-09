import { Box, Button,Image,  Stack, Text } from "@chakra-ui/react";
import React from "react";
import AddressForm from "./AddressForm";
import CartItems from "./CartItems";
import DebitCard from "./DebitCard";

const PaymentPage = () => {
  const rColor = "#d3145a";

  return (
    <Stack
      spacing={"0"}
      h={"100%"}
      overflow={"hidden"}
      bgColor={"red"}
      border={"1px solid red"}
    >
      <Box
        position={"fixed"}
        top={"0"}
        bgColor={"teal"}
        zIndex={"2"}
        style={{ width: "100%", height: "8vh" }}
      >
        Navbar
      </Box>

      <Stack bgColor={"#eeeeee"} w={"100%"} p={"3rem 8rem 0"} direction={"row"}>
        <Stack p={"15px"} w={"50%"} h={"90vh"} overflowY={"scroll"}>
          <Text mt={"20px"} fontSize={"19px"}>
            Please Fill Address For Shipping
          </Text>

          <AddressForm />
          <Text mt={"20px"} fontSize={"19px"}>
            Cart Items (5){" "}
          </Text>
          <Stack>
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
          </Stack>
          <Button bgColor={"white"} borderRadius={"0"} m={0} p={"10px"}>
            EDIT CART
          </Button>
        </Stack>

        <Stack
          p={"2rem 2rem"}
          w={"60%"}
          bgColor={"white"}
          h={"90vh"}
          position={"sticky"}
          top={"10%"}
          left={"50%"}
        >
          <Text mt={"20px"} fontSize={"19px"}> Payment Mode</Text>
          <DebitCard />
     
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PaymentPage;
