import { Box, CloseButton, Image, Select, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCartProduct, getCartProducts, updateCartProductQty } from "../../../redux/CartReducer/action";
import { useToast } from '@chakra-ui/react';


const CartCard = ({ Price, brand ,discount,size, quantity  ,firstName  ,gender  ,image  ,lastName  ,offerType  ,ogPrice  ,title  ,userID  ,_id}) => {
 
const [qty, setQty] = useState(quantity)
const [flag, setFlag] = useState(false)
const dispatch = useDispatch();
const toast = useToast();
const statuses = ["success", "error", "warning", "info"];
const positions = ["top"];

useEffect(() => {
// console.log('yes ueff');

 dispatch(updateCartProductQty(_id,qty,Price ,ogPrice))
 .then(()=>{dispatch(getCartProducts)})


}, [qty, flag])

const handleDelete = () => {

  setFlag((prev)=> !prev)
 dispatch(deleteCartProduct(_id))

 toast({
    title: "Product Deleted",
    position: positions,
    status: statuses[0],
    isClosable: true,
  });

  dispatch(getCartProducts)
}

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
          <Text as={"span"} fontSize={"16px"}>
            {size}
          </Text>{" "}
        </Text>   
        <Stack  align={"center"} direction={"row"}>
          <Text minW={"max-content"} >
            quantity : 
          </Text>
          <Select variant="flushed" value={qty} onChange={e=>setQty(e.target.value)} textAlign={'center'} maxW={"max-content"}   >
            <option value= {1}>1</option>
            <option value= {2}>2</option>
            <option value= {3}>3</option>
          </Select>
        </Stack>
      </Stack>
      
      <Stack p={'10px 0'}>
        <Box align={'right'}>

      <CloseButton onClick={handleDelete} size='md'  />
        </Box>
        <Stack direction={'row'} align={'center'} >
        <Text fontSize={'20px'}>  ₹{Price * qty} </Text>
        <p  className="cutPrice" fontSize={'15px'} > ₹{ogPrice * qty} </p>
        </Stack>
        <Text as={'sub'} textAlign={'right'} fontSize={'14px'} >free shipping</Text>
      </Stack>
      </Stack>
    </Stack>
  );
};

export default CartCard;
