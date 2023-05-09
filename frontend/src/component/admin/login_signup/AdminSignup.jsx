import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  Select,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { addUser } from "../../../redux/admin/admin signup/action";
const initialState = {
  name: "",
  age: "",
  position: "",
  email: "",
  gender: "",
  password: "",
};

export default function AdminSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formState, setFormState] = useState(initialState);
  const dispatch = useDispatch();
  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];
  const positions = ["top"];

  //!THIS IS HANDLE CHANGE FUNCTION ONLY
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  //!THIS IS HANDLE SUBMIT FUNCTION ONLY
  const handleSubmit = (e) => {
    // ! CHEAKING IF NAME FIELD IS NOT EMPTY
    if (formState.name === "" || formState.age === "") {
      toast({
        title: "Please Fill The Form",
        position: positions,
        status: statuses[1],
        isClosable: true,
      });

      //!CHEAKING IF EMAIL AND PASSWORD FIELD IS NOT EMPTY
    } else if (formState.email === "" || formState.password === "") {
      toast({
        title: "Please Fill The Empty Box",
        position: positions,
        status: statuses[2],
        isClosable: true,
      });

      //! CHEAKING IF PASSWORD LENGTH IS NOT LESS THAN 8
    } else if (formState.password.length < 8) {
      toast({
        title: "Password Must Have More Than 8 Characters",
        position: positions,
        status: statuses[3],
        isClosable: true,
      });
    } else {
      //! ALLCLEAR GO FURTHER
      // console.log(formState);
      dispatch(addUser(formState));
      setFormState(initialState);
      toast({
        title: "Signup Successfully",
        position: positions,
        status: statuses[0],
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            To Admin Dashboard ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Age</FormLabel>
                  <Input
                    type="number"
                    name="age"
                    value={formState.age}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="firstName" isRequired>
              <FormLabel>Position</FormLabel>
              <Input
                type="text"
                name="position"
                value={formState.position}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="firstName" isRequired>
              <FormLabel>Gender</FormLabel>
              <Select
                placeholder="Select"
                name="gender"
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Select>
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to="/adminlogin" style={{ color: "blue" }}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
