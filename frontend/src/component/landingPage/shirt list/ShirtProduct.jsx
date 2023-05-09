import { useEffect } from "react";
import { Grid, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { shirtProducts } from "../../../redux/user/shirt/action";
import ShirtCard from "./ShirtCard";
const ShirtProduct = () => {
  const dispatch = useDispatch();
  const { isLoading, shirts } = useSelector((store) => {
    return store.shirtReducer;
  });

  useEffect(() => {
    dispatch(shirtProducts);
  }, []);
  if (isLoading) {
    return <Spinner size="xl" mt={"20%"} />;
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
      {shirts.length > 0 &&
        shirts.map((item) => {
          return <ShirtCard key={item._id} {...item} />;
        })}
    </Grid>
  );
};

export default ShirtProduct;
