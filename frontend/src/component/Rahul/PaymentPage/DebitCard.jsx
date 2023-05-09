import { Button, Flex, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import CreditCard from "./CreditCard";

const DebitCard = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const rColor = "#d3145a";

  return (
    <>
      <Stack direction={"row"} w={"100%"}>
        <Flex direction={'column'}>
          
          <Button outline={'1px solid #eeeeee'}n p={'35px'} _hover={{outline:'none'}} onClick={()=> setTabIndex(0)} borderLeft={tabIndex === 0 ? '4px solid green' : "none"}  bgColor={tabIndex === 0 ? 'white' : "#eeeeee"} borderRadius= {'none'}   >Credit / Debit Card</Button>
          <Button outline={'1px solid #eeeeee'}n p={'35px'} _hover={{outline:'none'}} onClick={()=> setTabIndex(1)} borderLeft={tabIndex === 1 ? '4px solid green' : "none"}  bgColor={tabIndex === 1 ? 'white' : "#eeeeee"} borderRadius= {'none'} >Paytm</Button>
          <Button outline={'1px solid #eeeeee'}n p={'35px'} _hover={{outline:'none'}} onClick={()=> setTabIndex(2)} borderLeft={tabIndex === 2 ? '4px solid green' : "none"}  bgColor={tabIndex === 2 ? 'white' : "#eeeeee"} borderRadius= {'none'}    >UPI</Button>
          <Button outline={'1px solid #eeeeee'}n p={'35px'} _hover={{outline:'none'}} onClick={()=> setTabIndex(3)} borderLeft={tabIndex === 3 ? '4px solid green' : "none"}  bgColor={tabIndex === 3 ? 'white' : "#eeeeee"} borderRadius= {'none'} >Net Banking</Button>
          <Button outline={'1px solid #eeeeee'}n p={'35px'} _hover={{outline:'none'}} onClick={()=> setTabIndex(4)} borderLeft={tabIndex === 4 ? '4px solid green' : "none"}  bgColor={tabIndex === 4 ? 'white' : "#eeeeee"} borderRadius= {'none'} >Cash On Delivery</Button> 
        </Flex>
        <Stack  w={"70%"}>
        
        { tabIndex !== 0 && 
          <Stack spacing={0} bgColor={"#eeeeee"} p={"20px"}>
            <Text fontSize={"15px"}>Order Details</Text>
            <Stack direction={"row"} justify={"space-between"}>
              <Stack>
                <Text lineHeight={1}>Total Price</Text>
                <Text lineHeight={1}>Shipping Charges</Text>
                <Text lineHeight={1}>Handling Charges</Text>
                <Text lineHeight={1}>LR credits applied</Text>
                <Text
                  fontSize={"20px"}
                  color={rColor}
                  fontWeight={450}
                  borderTop={"1px solid #eeeeee"}
                >
                  Amount Payable
                </Text>
              </Stack>
              <Stack textAlign={"right"}>
                <Text lineHeight={1}>₹ 3237</Text>
                <Text lineHeight={1} color={"#99cc33"}>
                  FREE
                </Text>
                <Text lineHeight={1}>+ ₹ 99</Text>
                <Text lineHeight={1}>- ₹ 0</Text>
                <Text
                  lineHeight={1}
                  fontSize={"20px"}
                  color={rColor}
                  fontWeight={450}
                >
                  ₹ 3336
                </Text>
              </Stack>
            </Stack>
          </Stack> }

         { tabIndex === 0 && <CreditCard />}
        

          <Button
            
            variant={"solid"}
            _active={{ all: "none" }}
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.25) 2.4px 2.4px 3.2px" }}
            bgColor={rColor}
            color={"white"}
            fontSize={"24px"}
            style={{ padding: "26px 0", fontWeight: "bold", marginTop: "20px" }}
          >
            BUY NOW
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default DebitCard;
