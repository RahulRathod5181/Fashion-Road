import { ReactNode } from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function AdminNavbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg={useColorModeValue("#e8e8e8")}
        color={"black"}
        fontWeight={500}
        px={4}
        position={"sticky"}
        top={0}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/adminDashboard">
            <Box>Dashboard</Box>{" "}
          </Link>
          <Link to="/adminAddproduct">
            <Box>Add Product</Box>{" "}
          </Link>
          <Link to="/adminProduct">
            <Box>Product List</Box>{" "}
          </Link>
          <Link to="/">
            <Box>Home</Box>{" "}
          </Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
