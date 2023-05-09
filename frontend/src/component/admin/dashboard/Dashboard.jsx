import React from "react";
import {
  Container,
  Grid,
  GridItem,
  StatLabel,
  StatNumber,
  Stack,
  Stat,
  Box,
  Heading,
  Image,
} from "@chakra-ui/react";
import AdminNavbar from "../navbar/Navbar";

const Dashboard = () => {
  return (
    <>
    <AdminNavbar/>
      <Container maxW="container.xl" >
        <Heading mb={"10px"} textAlign={'center'} pt={5} >Dashboard</Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={10}
          mt={5}
          p={10}
        >
          <GridItem w="100%" h="250" bg="white" color="#000000" border={'1px solid black '} >
            <Stat textAlign={"center"} p={5} lineHeight={10}>
              <StatLabel fontSize={15} fontWeight={"bold"}>
                Active Users
              </StatLabel>
              <StatNumber fontSize={15} fontWeight={"bold"}>
                2,500
              </StatNumber>
              <StatLabel fontSize={15} fontWeight={"bold"}>
                Total Users
              </StatLabel>
              <StatNumber fontSize={15} fontWeight={"bold"}>
                22,355,500
              </StatNumber>
            </Stat>
          </GridItem>
          <GridItem w="100%" h="250" bg="white" color="#000000" border={'1px solid black '}>
            <Stat textAlign={"center"} p={5} lineHeight={10}>
              <StatLabel fontSize={15} fontWeight={"bold"}>
                Last Months Sales
              </StatLabel>
              <StatNumber fontSize={15} fontWeight={"bold"}>
                12,24,560
              </StatNumber>
              <StatLabel fontSize={15} fontWeight={"bold"}>
                Last Week Sales
              </StatLabel>
              <StatNumber fontSize={15} fontWeight={"bold"}>
                35,895
              </StatNumber>
            </Stat>
          </GridItem>
          <GridItem w="100%" h="250" bg="white" color="#000000" border={'1px solid black '}>
            <Stat textAlign={"center"} p={5} lineHeight={10}>
              <StatLabel fontSize={15} fontWeight={"bold"}>
                Orders Completed This Months
              </StatLabel>
              <StatNumber fontSize={15} fontWeight={"bold"}>
                25,213
              </StatNumber>
              <StatLabel fontSize={15} fontWeight={"bold"}>
                Orders Recieved This Week
              </StatLabel>
              <StatNumber fontSize={15} fontWeight={"bold"}>
                8,235
              </StatNumber>
            </Stat>
          </GridItem>
        </Grid>

        {/* GRAPHS AND PIA CHART */}

        <Stack direction={{ base: "column", md: "row" }} spacing="24px" p={8}>
          <Box w={{ base: "100%", md: "50%" }} h={{ base: "100%", md: "50%" }} border={'1px solid black '}>
            <img
              src="https://www.slideteam.net/media/catalog/product/cache/1280x720/g/r/graph_showing_sales_performance_comparison_across_2_years_slide01.jpg"
              alt="graph sales"
            />
          </Box>
          <Box w={{ base: "100%", md: "50%" }} h={{ base: "100%", md: "50%" }} border={'1px solid black '}>
            <img
              src="https://www.slideteam.net/media/catalog/product/cache/1280x720/p/i/piece_pie_chart_showing_the_companys_revenue_split_slide01.jpg"
              alt="pia chart"
            />
          </Box>
        </Stack>
        <Box w={{ base: "95%", md: "95%" }} ml={"3%"} mb={5} border={'1px solid black '}>
          <Image
            src="https://learn.microsoft.com/en-us/power-bi/visuals/media/power-bi-line-charts/power-bi-line.png"
            alt="sale chart"
          />
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
