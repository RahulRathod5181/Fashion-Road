import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { getCartProducts } from "../../../redux/CartReducer/action";
 
const CartPage = () => {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0)

  const { cartData } = useSelector((store) => {
    return store.cartPageReducer;
  });
  console.log(cartData);

  useEffect(() => {
    dispatch(getCartProducts);
  }, [dispatch]);

  useEffect(() => {
    const initialValue = 0;
    const tP = cartData.reduce(
      (accumulator, currentValue) => accumulator + currentValue.Price,
      initialValue
    );
    setTotalPrice(tP)
    // console.log(TotalPrice);
  }, [cartData]);
  
  const rColor = "#d3145a";

const handleClick = () => {

  localStorage.setItem('totalPrice', totalPrice+99)
}


  return (
    <Stack
      spacing={"0"}
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
        <Stack
          w={"70%"}
          marginTop={"30px"}
          paddingRight={"10px"}
          paddingBottom={"3rem"}
          h={"92vh"}
          overflowY={"scroll"}
        >
          {cartData.map((e, i) => (
            <CartCard key={i} {...e} />
          ))}
        
        </Stack>
        <Stack
          p={"2rem 2rem"}
          w={"48%"}
          bgColor={"white"}
          h={"90vh"}
          position={"sticky"}
          top={"8%"}
          left={"50%"}
        >
          <Stack direction={"row"} justify={"space-between"}>
            <Stack direction={"row"} gap={"10px"}>
              <Image
                boxSize="30px"
                objectFit="cover"
                src="https://img0.junaroad.com/images/icons/coupon_icon_v2.png"
                alt="Dan Abramov"
              />
              <Stack>
                <Text fontWeight={"bold"}>APPLY COUPON CODE</Text>
                <Text as={"sub"}>1 Coupon Available</Text>
              </Stack>
            </Stack>
            <Button
              variant={"solid"}
              _active={{ all: "none" }}
              _hover={{ boxShadow: "rgba(0, 0, 0, 0.25) 2.4px 2.4px 3.2px" }}
              color={"white"}
              bgColor={rColor}
              fontSize={"14px"}
            >
              + ADD
            </Button>
          </Stack>
          <Text fontSize={"20px"}>SUMMARY</Text>
          <Stack direction={"row"} justify={"space-between"}>
            <Stack>
              <Text lineHeight={1}>Total Price</Text>
              <Text lineHeight={1}>Shipping Charges</Text>
              <Text lineHeight={1}>Handling Charges</Text>
              <Text fontSize={"20px"} color={rColor} fontWeight={450}>
                Amount Payable
              </Text>
            </Stack>
            <Stack textAlign={"right"}>
              <Text lineHeight={1}>₹ {totalPrice}</Text>
              <Text lineHeight={1} color={"#99cc33"}>
                FREE
              </Text>
              <Text lineHeight={1}>+ ₹ 99</Text>
              <Text
                lineHeight={1}
                fontSize={"20px"}
                color={rColor}
                fontWeight={450}
              >
                ₹ {totalPrice + 99}
              </Text>
            </Stack>
          </Stack>
          <Button
            variant={"solid"}
            _active={{ all: "none" }}
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.25) 2.4px 2.4px 3.2px" }}
            bgColor={rColor}
            color={"white"}
            fontSize={"24px"}
            style={{ padding: "26px 0", fontWeight: "bold", marginTop: "20px" }}
            onClick={handleClick}
          >
            BUY NOW
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CartPage;
