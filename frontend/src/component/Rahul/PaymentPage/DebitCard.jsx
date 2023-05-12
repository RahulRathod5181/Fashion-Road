import {
  Button,
  Flex,
  Stack,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CreditCard from "./CreditCard";
import { useNavigate } from "react-router-dom";
import { textTospeechFun } from "../VoiceFun";
import { useDispatch } from "react-redux";
import { deleteAll } from "../../../redux/CartReducer/action";

let voices = window.speechSynthesis.getVoices()[3];
console.log(voices);

const DebitCard = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [tabView] = useMediaQuery("(max-width: 1105px)");

  // const rColor = "#e7568b";
  const rColor = "#d3145a";

  const totalPrice = localStorage.getItem("totalPrice");

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];
  const positions = ["top"];

  // console.log(mobileNo.length, mobileNo);
  const handleFinalSubmit = () => {
    // setFlag((prev)=> !prev);

    const formData = JSON.parse(localStorage.getItem("formData"));
    // console.log('formData',formData);
    const { pincode, name } = formData;
    const cvv = localStorage.getItem("cvv");

    if (pincode.length !== 6 || name === "") {
      // alert("Fill address");

      toast({
        title: "Please Fill the address",
        position: positions,
        status: statuses[2],
        isClosable: true,
      });

      textTospeechFun(`Please Fill the address`);
      // console.log({ pin: pincode.length , name} );
    } else if (pincode.length === 6 && name !== "") {
      if (cvv && cvv.length === 3) {
        localStorage.removeItem("cvv");
        // alert("working");

        dispatch(deleteAll)


        navigate("/orderSuccess");
      } else {
        // alert("Fill payment details");
        toast({
          title: "Please Fill payment details",
          position: positions,
          status: statuses[2],
          isClosable: true,
        });

        textTospeechFun(`Please Fill payment details`);
      }
    }
    // console.log('checking');
  };

  return (
    <>
      <Stack
        direction={"row"}
        // w={"100%"}
        w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
      >
        <Flex
          direction={"column"}
          w={{ base: "20%", sm: "40%", md: "30%", lg: "30%" }}
        >
          <Button
            outline={"1px solid #eeeeee"}
            // p={"35px"}
            p={{ base: "20px", sm: "20px", md: "30px", lg: "35px" }}
            _hover={{ outline: "none" }}
            onClick={() => setTabIndex(0)}
            borderLeft={tabIndex === 0 ? "4px solid green" : "none"}
            bgColor={tabIndex === 0 ? "white" : "#eeeeee"}
            borderRadius={"none"}
            
            fontSize={'14px'}
          >
            Order
            <br />
             Summary
          </Button>
          <Button
            outline={"1px solid #eeeeee"}
            // p={"35px"}
            p={{ base: "30px", sm: "30px", md: "30px", lg: "35px" }}
            _hover={{ outline: "none" }}
            onClick={() => setTabIndex(1)}
            borderLeft={tabIndex === 1 ? "4px solid green" : "none"}
            bgColor={tabIndex === 1 ? "white" : "#eeeeee"}
            borderRadius={"none"}
            fontSize={'14px'}
          >
            Credit /
            <br />
            Debit Card
          </Button>
          <Button
            outline={"1px solid #eeeeee"}
            // p={"35px"}
            p={{ base: "20px", sm: "20px", md: "30px", lg: "35px" }}
            _hover={{ outline: "none" }}
            onClick={() => setTabIndex(2)}
            borderLeft={tabIndex === 2 ? "4px solid green" : "none"}
            bgColor={tabIndex === 2 ? "white" : "#eeeeee"}
            borderRadius={"none"}
            fontSize={'14px'}
          >
            UPI
          </Button>
          <Button
            outline={"1px solid #eeeeee"}
            // p={"35px"}
            p={{ base: "20px", sm: "20px", md: "30px", lg: "35px" }}
            _hover={{ outline: "none" }}
            onClick={() => setTabIndex(3)}
            borderLeft={tabIndex === 3 ? "4px solid green" : "none"}
            bgColor={tabIndex === 3 ? "white" : "#eeeeee"}
            borderRadius={"none"}
            fontSize={'14px'}
          >
            Net
            <br /> 
             Banking
          </Button>
          <Button
            outline={"1px solid #eeeeee"}
            // p={"35px"}
            p={{ base: "30px", sm: "20px", md: "30px", lg: "35px" }}
            _hover={{ outline: "none" }}
            onClick={() => setTabIndex(4)}
            borderLeft={tabIndex === 4 ? "4px solid green" : "none"}
            bgColor={tabIndex === 4 ? "white" : "#eeeeee"}
            borderRadius={"none"}
            fontSize={'14px'}
          >
            Cash
            <br />
             On
             <br />
              Delivery
          </Button>
        </Flex>
        <Stack
          // w={"70%"}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "70%" }}
        >
          {tabIndex !== 1 && (
            <Stack spacing={0} mb={"10px"} bgColor={"#eeeeee"} p={"20px"}>
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
                  <Text lineHeight={1}>₹ {totalPrice - 99}</Text>
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
            </Stack>
          )}

          {tabIndex === 1 && (
            <CreditCard handleFinalSubmit={handleFinalSubmit} />
          )}

          {!tabView && (
            <Button
              variant={"solid"}
              _active={{ all: "none" }}
              _hover={{ boxShadow: "rgba(0, 0, 0, 0.25) 2.4px 2.4px 3.2px" }}
              bgColor={rColor}
              color={"white"}
              fontSize={"20px"}
              alignSelf={"center"}
              style={{
                padding: "20px 5px",
                fontWeight: "bold",
                marginTop: "0px",
                minWidth: "80%",
              }}
              onClick={handleFinalSubmit}
            >
              BUY NOW {`(₹ ${totalPrice})`}
            </Button>
          )}

          {tabView && (
            <Button
              direction={"row"}
              position={"fixed"}
              bottom={0}
              left={0}
              w={"100vw"}
              variant={"solid"}
              _active={{ all: "none" }}
              _hover={{ boxShadow: "rgba(0, 0, 0, 0.25) 2.4px 2.4px 3.2px" }}
              bgColor={rColor}
              color={"white"}
              fontSize={"20px"}
              alignSelf={"center"}
              style={{
                padding: "20px 5px",
                fontWeight: "bold",
                marginTop: "0px",
                minWidth: "80%",
              }}
              onClick={handleFinalSubmit}
            >
              BUY NOW {`(₹ ${totalPrice})`}
            </Button>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default DebitCard;
