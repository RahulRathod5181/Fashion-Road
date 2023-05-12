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
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/admin/admin product/action";
const AdminCard = ({ image, title, _id, Price }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const positions = ["top"];
  const handleClick = () => {
    dispatch(deleteProduct(_id));
    toast({
      title: `Product Edit Successfully`,
      position: positions,
      isClosable: true,
    });
  };
  return (
    <div>
      <Card maxW="sm" mt={5} border={"1px solid black "} position={"static"}>
        <CardBody>
          <Text
            size="sm"
            maxBlockSize={5}
            textAlign={"center"}
            fontWeight={600}
            mb={2}
          >
            {title}
          </Text>
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Text color="blue.600" fontSize="2xl">
              ₹ {Price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justifyContent={"space-between"} justifyItems={"center"}>
          <Button mr="20px" position={"static"}>
            {" "}
            <Link to={`/editProduct/${_id}`}>Edit</Link>
          </Button>
          <Button position={"static"} onClick={handleClick}>
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminCard;
