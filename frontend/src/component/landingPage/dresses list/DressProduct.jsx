import { useEffect } from "react";
import { Grid, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import DressCard from './DressCard'
import { dressProducts } from "../../../redux/user/dresses/action";

const DressProduct = () => {
  const dispatch = useDispatch();
  const { isLoading, dresses } = useSelector((store) => {
    return store.dressReducer;
  });
 
  useEffect(() => {
    dispatch(dressProducts);
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
      {dresses.length > 0 &&
        dresses.map((item) => {
          return <DressCard key={item._id} {...item} />;
        })}
    </Grid>
  );
};

export default DressProduct;
