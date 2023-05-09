import React, { useEffect } from "react";
import AdminCard from "./AdminCard";
import { Box, Container, Grid, GridItem, Heading, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/admin/admin product/action";
const AdminProduct = () => {
  const dispatch = useDispatch();
  console.log("hello world");
  const { isLoading, adminProducts } = useSelector((store) => {
    return store.adminProductReducer;
  });

  useEffect(() => {
    dispatch(getData);
  }, []);

  console.log(adminProducts);

  if (isLoading) {
    return (
      <Heading  size={'2xl'} mt={'10%'} textAlign={'center'} >Loading....</Heading>
    )
  }
  return (
    <>
      <Container maxW="container.1xl">
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap={6}
          mb="20px"
          mt={"60px"}
        >
          {adminProducts.length > 0 &&
            adminProducts.map((el) => {
              return <AdminCard key={el.id} {...el} />;
            })}
        </Grid>
      </Container>
    </>
  );
};

export default AdminProduct;
