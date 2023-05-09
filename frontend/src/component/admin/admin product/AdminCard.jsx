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
const AdminCard = ({ image, title, id, price, category }) => {
  return (
    <div>
      <Card maxW="sm" mt={5} >
        <CardBody>
          <Text size="sm" maxBlockSize={5} fontWeight={600} mb={2}>
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
          <Button mr="20px">
            {" "}
            <Link to={`/editProduct/${id}`}>Edit</Link>
          </Button>
          <Button>Delete</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminCard;
