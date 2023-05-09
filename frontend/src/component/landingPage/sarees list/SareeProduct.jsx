import { useEffect } from "react";
import { Grid, Heading, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { sareeProducts } from "../../../redux/user/sarees/action";
import SareeCard from "./SareeCard";
const SareeProduct = () => {
  const dispatch = useDispatch();
  const { isLoading, sarees } = useSelector((store) => {
    return store.sarreReducer;
  });

  useEffect(() => {
    dispatch(sareeProducts);
  }, []);
  if (isLoading) {
    return (
      <Heading  size={'2xl'} mt={'10%'} textAlign={'center'} >Loading....</Heading>
    )
  }
  return (
    <Grid
      templateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
      }}
      overflow={"-moz-hidden-unscrollable"}
      gap={5}
    >
      {sarees.length > 0 &&
        sarees.map((item) => {
          return <SareeCard key={item._id} {...item} />;
        })}
    </Grid>
  );
};

export default SareeProduct;
