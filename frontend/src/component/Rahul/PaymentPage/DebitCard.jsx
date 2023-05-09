import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CreditCard from "./CreditCard";

const DebitCard = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const rColor = "#d3145a";

  const totalPrice = localStorage.getItem('totalPrice')
  const formData = JSON.parse(localStorage.getItem('formData'));
const {pincode, mobileNo, name} = formData

console.log(mobileNo.length, mobileNo);
  const handleFinalSubmit = () => {

    if(+pincode.length == 6 && +mobileNo.length == 10 && name != '' ) {
        alert('ok')
        console.log(pincode.length , +mobileNo.length , name );
      } else  {
        console.log(pincode.length , +mobileNo.length , name );
        alert('error ok')
    }
    // console.log('checking');
  }



  return (
    <>
      <Stack direction={"row"} w={"100%"}>
        <Flex direction={'column'}>
          
          <Button outline={'1px solid #eeeeee'}n p={'35px'} _hover={{outline:'none'}} onClick={()=> setTabIndex(0)} borderLeft={tabIndex === 0 ? '4px solid green' : "none"}  bgColor={tabIndex === 0 ? 'white' : "#eeeeee"} borderRadius= {'none'}   >Order Summary</Button>
          <Button outline={'1px solid #eeeeee'}n p={'35px'} _hover={{outline:'none'}} onClick={()=> setTabIndex(1)} borderLeft={tabIndex === 1 ? '4px solid green' : "none"}  bgColor={tabIndex === 1 ? 'white' : "#eeeeee"} borderRadius= {'none'} >Credit / Debit Card</Button>
          <Button outline={'1px solid #eeeeee'}n p={'35px'} _hover={{outline:'none'}} onClick={()=> setTabIndex(2)} borderLeft={tabIndex === 2 ? '4px solid green' : "none"}  bgColor={tabIndex === 2 ? 'white' : "#eeeeee"} borderRadius= {'none'}    >UPI</Button>
          <Button outline={'1px solid #eeeeee'}n p={'35px'} _hover={{outline:'none'}} onClick={()=> setTabIndex(3)} borderLeft={tabIndex === 3 ? '4px solid green' : "none"}  bgColor={tabIndex === 3 ? 'white' : "#eeeeee"} borderRadius= {'none'} >Net Banking</Button>
          <Button outline={'1px solid #eeeeee'}n p={'35px'} _hover={{outline:'none'}} onClick={()=> setTabIndex(4)} borderLeft={tabIndex === 4 ? '4px solid green' : "none"}  bgColor={tabIndex === 4 ? 'white' : "#eeeeee"} borderRadius= {'none'} >Cash On Delivery</Button> 
        </Flex>
        <Stack  w={"70%"}>
        
        { tabIndex !== 1 && 
          <Stack spacing={0} mb={'10px'} bgColor={"#eeeeee"} p={"20px"}>
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
                <Text lineHeight={1}>₹ {totalPrice-99}</Text>
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
                  ₹ {totalPrice}
                </Text>
              </Stack>
            </Stack>
          </Stack> }

         { tabIndex === 1 && <CreditCard handleFinalSubmit={handleFinalSubmit} />}
        

          <Button
            
            variant={"solid"}
            _active={{ all: "none" }}
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.25) 2.4px 2.4px 3.2px" }}
            bgColor={rColor}
            color={"white"}
            fontSize={"20px"}
            alignSelf={'center'}
            style={{ padding: "20px 5px", fontWeight: "bold", marginTop: "0px", minWidth:'80%' }}
            onClick={handleFinalSubmit}
          >
            BUY NOW  {`(₹ ${totalPrice})`}
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default DebitCard;
