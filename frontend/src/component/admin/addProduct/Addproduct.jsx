import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Heading,
  useToast,
  Select,
} from "@chakra-ui/react";
import AdminNavbar from "../navbar/Navbar";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/admin/admin product/action";
const initialState = {
  image: "",
  Price: "",
  discount: "",
  ogPrice: "",
  brand: "",
  gender: "",
  title: "",
};
const Addproduct = () => {
  const [formState, setFormState] = useState(initialState);
  const dispatch = useDispatch();
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
      // console.log(formState);
      dispatch(addProduct(formState));
      setFormState(initialState);

      toast({
        title: " Product Added Successfully",
        position: positions,
        status: statuses[0],
        isClosable: true,
      });
    }
  };
  return (
    <>
      <AdminNavbar />
      <Container
        maxW="container.md"
        border="1px"
        borderColor="gray.400"
        // backgroundColor={"#eeeeee"}
        p={"20px"}
        mt={"20px"}
        mb={5}
      >
        <FormControl>
          <Heading mb={"10px"} textAlign={"center"}>
            Add Product Form
          </Heading>
          <FormLabel m={"10px"}>Image URL</FormLabel>
          <Input
            border="1px solid gray"
            type="text"
            value={formState.image}
            placeholder="Image"
            size="md"
            name="image"
            onChange={handleChange}
            mb={"10px"}
          />
          <FormLabel m={"10px"}>Title</FormLabel>
          <Input
            border="1px solid gray"
            type="text"
            value={formState.title}
            placeholder="Title"
            size="md"
            name="title"
            onChange={handleChange}
            mb={"10px"}
          />
          <FormLabel m={"10px"}>Brand</FormLabel>
          <Input
            border="1px solid gray"
            type="text"
            value={formState.brand}
            placeholder="Brand"
            size="md"
            name="brand"
            onChange={handleChange}
            mb={"10px"}
          />
          <FormLabel m={"10px"}>Price</FormLabel>
          <Input
            border="1px solid gray"
            type="number"
            value={formState.ogPrice}
            placeholder="Price"
            size="md"
            name="ogPrice"
            onChange={handleChange}
            mb={"10px"}
          />
          {/* <FormLabel m={"10px"}>Price</FormLabel> */}
          <Input
            border="1px solid gray"
            type="number"
            value={
              (formState.Price =
                formState.ogPrice -
                (formState.ogPrice * formState.discount) / 100)
            }
            placeholder="Price"
            size="md"
            name="price"
            onChange={handleChange}
            mb={"10px"}
            hidden
          />
          <FormLabel m={"10px"}>Discount</FormLabel>
          <Input
            border="1px solid gray"
            type="number"
            value={formState.discount}
            placeholder="Discount"
            size="md"
            name="discount"
            onChange={handleChange}
            mb={"10px"}
          />
          <FormLabel m={"10px"}>Gender</FormLabel>
          <Select
            placeholder="Select"
            border="1px solid gray"
            name="gender"
            onChange={handleChange}
          >
            <option value="mens">Male</option>
            <option value="womens">Female</option>
            <option value="other">Other</option>
          </Select>
          <Button
            onClick={handleSubmit}
            colorScheme="teal"
            variant="outline"
            display={"block"}
            size="md"
            w={"20%"}
            m={"auto"}
            mt={"20px"}
          >
            Add Product
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default Addproduct;
