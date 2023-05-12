import React, { useState } from "react";
import {
  Card,
  CardBody,
  Image,
  Text,
  Avatar,
  WrapItem,
  Flex,
  Box,
  useToast,
} from "@chakra-ui/react";
import { FaHeart, FaRegHeart, FaWhatsapp } from "react-icons/fa";
const SareeCard = ({ poster, profile, seller, followers, title }) => {
  const toast = useToast();
  const statuses = ["info"];
  const positions = ["top"];
  const [like, setLike] = useState(true);

  const handleOne = () => {
    setLike(false);
    toast({
      title: "You like the product",
      position: positions,
      status: statuses[0],
      isClosable: true,
    });
  };
  const handleTwo = () => {
    setLike(true);
  };
  return (
    <Card maxW="sm" >
      <CardBody>
        <Text
          maxBlockSize={5}
          fontWeight={600}
          color={"blackAlpha.900"}
          mb={"3"}
          textAlign={'center'}
        >
          {title}
        </Text>
        <Image src={poster} alt={title} />
        <Flex mt="3" justifyContent={"space-between"} justifyItems={"center"}>
          <Box display={"flex"}>
            {/* THIS IS PROFILE SECTION */}

            <WrapItem>
              <Avatar size="sm" name="Ryan Florence" src={profile} />{" "}
            </WrapItem>
            <Box>
              {/* THIS IS NAME AND FOLLOWER SECTION */}

              <Text ml={2} fontSize={"sm"}>
                {seller}
              </Text>
              <Text ml={2} fontSize={"sm"}>
                {followers} Followers
              </Text>
            </Box>
          </Box>
          <Box>
            {/* THIS IS LIKE DISLIKE SECTION */}

            <Text display={"flex"}>
              {like ? (
                <FaRegHeart
                  onClick={handleOne}
                  color="red"
                  size={"35px"}
                  alignSelf={"center"}
                />
              ) : (
                <FaHeart
                  onClick={handleTwo}
                  color="red"
                  size={"35px"}
                  alignSelf={"center"}
                />
              )}
              <Box ml={5}>
                <FaWhatsapp color="green" size={"35px"} alignSelf={"center"} />
              </Box>
            </Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default SareeCard;
