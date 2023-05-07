import React from "react";
import {
  Card,
  CardBody,
  Image,
  Text,
  Avatar,
  WrapItem,
  Flex,
  Box,
} from "@chakra-ui/react";
import { FaRegHeart, FaHeart, FaWhatsapp } from "react-icons/fa";
const LandingCard = ({ image, title, price }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Text
          maxBlockSize={5}
          fontWeight={600}
          color={"blackAlpha.900"}
          mb={"3"}
        >
          {title}
        </Text>
        <Image src={image} alt="Green double couch with wooden legs" />
        <Flex mt="3">
          <Box display={"flex"}>
            {/* THIS IS PROFILE SECTION */}

            <WrapItem>
              <Avatar size="sm" name="Ryan Florence" src={image} />{" "}
            </WrapItem>
            <Box>
              {/* THIS IS NAME AND FOLLOWER SECTION */}

              <Text ml={2} fontSize={"sm"}>
                Hello Kartik
              </Text>
              <Text ml={2} fontSize={"sm"}>
                {price} Followers
              </Text>
            </Box>
          </Box>
          <Box>
            {/* THIS IS LIKE DISLIKE SECTION */}

            <Text display={"flex"} ml={10} >
              <FaRegHeart color="red" size={"35px"} alignSelf={"center"} />
              {/* <Text>12</Text> */}
              <FaHeart color="red" size={"35px"} alignSelf={"center"} />
              <FaWhatsapp color="green" size={"35px"} alignSelf={"center"} />
            </Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default LandingCard;
