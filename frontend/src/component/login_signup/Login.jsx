import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { loginData } from "../../redux/user/user login/action" ;

const initialState = {
  email: "",
  password: "",
};
export default function Login() {
  const [formState, setFormState] = useState(initialState);
  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];
  const positions = ["top"];
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const { isAuth, token,isError } = useSelector((store) => {
    return store.userLoginReducer;
  });

  console.log(token, isAuth);

  //! HANDLECHANGE FUNCTION

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // ! HANDLESUBMIT FUNCTION

  const handleSubmit = (e) => {
    e.preventDefault();

    //!CHEAKING IF EMAIL AND PASSWORD FIELD IS NOT EMPTY

    if (formState.email === "" || formState.password === "") {
      toast({
        title: "Please Fill The Form",
        position: positions,
        status: statuses[1],
        isClosable: true,
      });

      // ! CHEAKING PASSSWORD LENGTH IS NOT LESS THAN 8
    } else if (formState.password.length < 8) {
      toast({
        title: "Password Must Be 8 Digit",
        position: positions,
        status: statuses[2],
        isClosable: true,
      });

      //! ALLCLEAR GO FURTHER
    } else {
      dispatch(loginData(formState)).then(()=>{
        console.log(isError)
        
          toast({
            title: "Successfully Login",
            position: positions,
            status: statuses[0],
            isClosable: true,
          })
        setFormState(initialState);
        navigate("/")
        window.location.reload()
      })

      // console.log(formState);
      
      
      
    }
  };
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Log-in to your account</Heading>
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
              {/* //* EMAIL INPUT FILED */}
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </FormControl>
              {/* //* PASSWORD INPUT FIELD */}
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                {/* //* LOGIN BUTTON */}
                <Button
                  onClick={handleSubmit}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Log-in
                </Button>
              </Stack>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Not a user?{" "}
                <Link to="/signup" style={{ color: "blue" }}>
                  signUp
                </Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
