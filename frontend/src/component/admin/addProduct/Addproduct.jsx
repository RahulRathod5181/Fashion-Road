import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Heading,
  useToast,
} from "@chakra-ui/react";
const initialState = {
  image: "",
  price: "",
  discount: "",
  ogPrice: "",
  brand: "",
};
const Addproduct = () => {
  const [formState, setFormState] = useState(initialState);
  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];
  const positions = ["top"];
  //!HANDLE CHANGE FUNCTION
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  //! HANDLE SUBMIT FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();
    // ! CHEAKING IF  FIELD IS NOT EMPTY
    if (
      formState.image === "" ||
      formState.price === "" ||
      formState.ogPrice === "" ||
      formState.discount === "" ||
      formState.brand === ""
    ) {
      toast({
        title: "Please Add The Information",
        position: positions,
        status: statuses[2],
        isClosable: true,
      });
    } else {
      //! ALLCLEAR GO FURTHER
      console.log(formState);
      const price = formState.ogPrice-(formState.ogPrice * formState.discount) /100
      console.log(price) 
      toast({
        title: " Product Added Successfully",
        position: positions,
        status: statuses[0],
        isClosable: true,
      });
    }
  };
  return (
    <Container
      maxW="container.md"
      border="1px"
      borderColor="gray.400"
      backgroundColor={"white"}
      p={"20px"}
      mt={"70px"}
      mb={5}
    >
      <Heading mb={"10px"}>Add Product Form</Heading>
      <FormControl>
        <FormLabel m={"10px"}>Image URL</FormLabel>
        <Input
          border="1px solid gray"
          type="text"
          value={formState.image}
          placeholder="image"
          size="md"
          name="image"
          onChange={handleChange}
          mb={"10px"}
        />
        <FormLabel m={"10px"}>Brand</FormLabel>
        <Input
          border="1px solid gray"
          type="text"
          value={formState.brand}
          placeholder="brand"
          size="md"
          name="brand"
          onChange={handleChange}
          mb={"10px"}
        />
        <FormLabel m={"10px"}>Price</FormLabel>
        <Input
          border="1px solid gray"
          type="number"
          value={formState.price}
          placeholder="price"
          size="md"
          name="price"
          onChange={handleChange}
          mb={"10px"}
        />
        <FormLabel m={"10px"}>Price-2</FormLabel>
        <Input
          border="1px solid gray"
          type="number"
          value={formState.ogPrice}
          placeholder="price-2"
          size="md"
          name="ogPrice"
          onChange={handleChange}
          mb={"10px"}
        />
        <FormLabel m={"10px"}>Discount</FormLabel>
        <Input
          border="1px solid gray"
          type="number"
          value={formState.discount}
          placeholder="discount"
          size="md"
          name="discount"
          onChange={handleChange}
          mb={"10px"}
        />
        <Button
          onClick={handleSubmit}
          colorScheme="teal"
          variant="outline"
          size="md"
          mt={"20px"}
        >
          Add Product
        </Button>
      </FormControl>
    </Container>
  );
};

export default Addproduct;
