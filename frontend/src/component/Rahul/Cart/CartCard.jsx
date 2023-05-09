import { Box, CloseButton, Image, Select, Stack, Text } from "@chakra-ui/react";
import React from "react";

const CartCard = ({ Price, brand ,discount  ,firstName  ,gender  ,image  ,lastName  ,offerType  ,ogPrice  ,title  ,userID  ,_id}) => {
 




  return (
    <Stack spacing={'0'} display={'flex'} flexDirection={'rows'} justifyContent={'center'} gap={'2px'} alignContent={'center'} overflow={'hidden'}  minH={'200px'} >
      <Image 
     
        w={"150px"}
       
        // h={'50px'}
        src={image}
        alt=""
      />
      <Stack  w={'100%'} direction={'row'}  bgColor={'white'} justify={'space-between'}  p={'0 15px'}>

      <Stack p={'10px 0'} >
        <Text fontSize={'18px'} >{title}</Text>
        <Text as={'sub'}  fontSize={'14px'}>by {brand}</Text>
        <br />
        <Text>
          size :{" "}
          <Text as={"span"} fontSize={"20px"}>
            fdsfd
          </Text>{" "}
        </Text>   
        <Stack  align={"center"} direction={"row"}>
          <Text minW={"max-content"} >
            quantity : 
          </Text>
          <Select variant="flushed" textAlign={'center'} maxW={"max-content"}   >
            <option value="option1" >1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
          </Select>
        </Stack>
      </Stack>
      
      <Stack p={'10px 0'}>
        <Box align={'right'}>

      <CloseButton size='md'  />
        </Box>
        <Stack direction={'row'} align={'center'} >
        <Text fontSize={'20px'}>  ₹{Price} </Text>
        <p  className="cutPrice" fontSize={'15px'} > ₹{ogPrice} </p>
        </Stack>
        <Text as={'sub'}  fontSize={'14px'} >free shipping</Text>
      </Stack>
      </Stack>
    </Stack>
  );
};

export default CartCard;
