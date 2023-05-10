import React from "react";
import { Avatar, Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
const LandingTopBar = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={2} overflow={"auto"}>
      <GridItem>
        <Link to="/kurtaProduct">
          <Box justifyContent={"center"} justifyItems={"center"}>
            <Avatar
              border={"2px solid green"}
              size={{ base: "md", md: "md", lg: "lg" }}
              name="kurta"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG9COMLWMRD5caxJxCOrF74La8rmTb6JFw7w&usqp=CAU"
            />{" "}
          </Box>
          <Box pt={2} pl={{ base: "0", lg: "10px" }}>
            <Text>Kurta</Text>
          </Box>
        </Link>
      </GridItem>
      <GridItem>
        <Link to="/dressProduct">
          <Box
            justifyContent={"center"}
            justifyItems={"center"}
            alignItems={"center"}
          >
            <Avatar
              border={"2px solid green"}
              size={{ base: "md", md: "md", lg: "lg" }}
              name="dresses"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuv-HtmtHUePsJaodEcEs0Nl__ElNFqe8Gew&usqp=CAU"
            />{" "}
          </Box>
          <Box pt={2}>
            <Text>Dresses</Text>
          </Box>
        </Link>
      </GridItem>
      <GridItem>
        <Link to="/sareeProduct">
          <Box
            justifyContent={"center"}
            justifyItems={"center"}
            alignItems={"center"}
          >
            <Avatar
              border={"2px solid green"}
              size={{ base: "md", md: "md", lg: "lg" }}
              name="sarees"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_qxQYsBuacivZ8ndTxE3CfKiOBAnfK9YFA&usqp=CAU"
            />{" "}
          </Box>
          <Box pt={2} pl={{ base: "0", lg: "10px" }}>
            <Text>Sarees</Text>
          </Box>
        </Link>
      </GridItem>
      <GridItem>
        <Link to="/footwereProduct">
          <Box
            justifyContent={"center"}
            justifyItems={"center"}
            alignItems={"center"}
          >
            <Avatar
              border={"2px solid green"}
              size={{ base: "md", md: "md", lg: "lg" }}
              name="footware"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFOk1lKY0Yk-I6m_iZkLOQtkqTymP51dImCQ&usqp=CAU"
            />{" "}
          </Box>
          <Box pt={2}>
            <Text>Footware</Text>
          </Box>
        </Link>
      </GridItem>
      <GridItem>
        <Link to="/shirtProduct">
          <Box
            justifyContent={"center"}
            justifyItems={"center"}
            alignItems={"center"}
          >
            <Avatar
              border={"2px solid green"}
              size={{ base: "md", md: "md", lg: "lg" }}
              name="shirts"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9yNgm12Le67wCf4EY_tGiPD7EVlso1M5aw&usqp=CAU"
            />{" "}
          </Box>
          <Box pt={2} pl={{ base: "0", lg: "10px" }}>
            <Text>Shirts</Text>
          </Box>
        </Link>
      </GridItem>
      <GridItem>
        <Link to="/accessoriesProduct">
          <Box
            justifyContent={"center"}
            justifyItems={"center"}
            alignItems={"center"}
          >
            <Avatar
              border={"2px solid green"}
              size={{ base: "md", md: "md", lg: "lg" }}
              name="accessories"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYvZVNOotlx-8VE-8IEfBj6tzq6NDSikSGww&usqp=CAU"
            />{" "}
          </Box>
          <Box pt={2}>
            <Text>Accessories</Text>
          </Box>
        </Link>
      </GridItem>
    </Grid>
  );
};

export default LandingTopBar;
