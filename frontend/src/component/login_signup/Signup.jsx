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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const initialState = {
  fristName: "",
  lastName: "",
  email: "",
  password: "",
};

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formState, setFormState] = useState(initialState);
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
    e.preventDefault();
    // ! CHEAKING IF NAME FIELD IS NOT EMPTY
    if (formState.fristName === "" || formState.lastName === "") {
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
      console.log(formState);
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
            to enjoy shopping ✌️
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
                    name="fristName"
                    value={formState.fristName}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
            </HStack>
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
                <Link to="/login" style={{ color: "blue" }}>
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
