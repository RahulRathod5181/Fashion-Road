import { useEffect } from "react";
import { Grid, Heading, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import LandingCard from "./LandingCard";
import { getProducts } from "../../redux/LandingPage/action";
const LandingProduct = () => {
  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((store) => {
    return store.LandingReducer;
  });
  // console.log(products);
  useEffect(() => {
    dispatch(getProducts);
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
      {products.length > 0 &&
        products.map((item) => {
          return <LandingCard key={item._id} {...item} />;
        })}
    </Grid>
  );
};

export default LandingProduct;
