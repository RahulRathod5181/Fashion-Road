import React, { useEffect } from "react";
import { Box, Container, Grid, GridItem, Heading, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/admin/people/action";
import UserCard from './UserCard'
const AdminUser = () => {
  const dispatch = useDispatch();
  const { isLoading, users } = useSelector((store) => {
    return store.adminUserReducer;
  });

  useEffect(() => {
    dispatch(getUsers);
  }, []);

  console.log(users);

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
          {users.length > 0 &&
            users.map((el) => {
              return <UserCard key={el.id} {...el} />;
            })}
        </Grid>
      </Container>
    </>
  );
};

export default AdminUser;
