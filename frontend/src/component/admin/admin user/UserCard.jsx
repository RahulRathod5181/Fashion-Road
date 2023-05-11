import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Divider,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const UserCard = ({ image, title, id, price, category }) => {
  return (
    <div>
      <Card maxW="sm" mt={5} border={'1px solid black '} position={'static'} >
        <CardBody>
          <Text size="sm" maxBlockSize={5} textAlign={'center'} fontWeight={600} mb={2}>
            {title}
          </Text>
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Text color="blue.600" fontSize="2xl">
              ₹ {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justifyContent={"space-between"} justifyItems={"center"}>
          <Button mr="20px" position={'static'}>
            {" "}
            <Link to={`/editProduct/${id}`}>Edit</Link>
          </Button>
          <Button position={'static'}>Delete</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserCard;
