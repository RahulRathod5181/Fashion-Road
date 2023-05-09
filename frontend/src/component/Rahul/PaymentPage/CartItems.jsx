import { Box, CloseButton, Image, Select, Stack, Text } from "@chakra-ui/react";
import React from "react";

const CartItems = ({ Price, brand ,discount  ,firstName  ,gender  ,image  ,lastName  ,offerType  ,ogPrice  ,title  ,userID  ,_id}) => {






  return (
    <Stack
      spacing={"0"}
      display={"flex"}
      flexDirection={"rows"}
      justifyContent={"center"}
      gap={"2px"}
      alignContent={"center"}
      overflow={"hidden"}
    //   minH={"250px"}

    >
      <Image
        w={"120px"}
        h={'150px'}
        objectFit={'fill'}
        src={image}
        alt=""
      />
      <Stack 
        w={"100%"}
        direction={"row"}
        bgColor={"white"}
        justify={"space-between"}
        p={"0 15px"}
        h={'150px'}
      >
        <Stack  p={"10px 0"}>
          <Text  fontSize={"15px"}>{title}</Text>
           <Text  lineHeight={'5px'} fontSize={"15px"}>quantity : 1</Text>
            <Text >
            size :{" "}
            <Text as={"span"}  fontSize={"15px"}>
              fdsfd
            </Text>{" "}
          </Text>
        </Stack>

       
      </Stack>
    </Stack>
  );
};

export default CartItems;
