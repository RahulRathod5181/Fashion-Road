import { useEffect } from "react";
import { Grid, Heading, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import KurtaCard from "./KurtaCard";
import { kurtaProducts } from "../../../redux/user/kurta/action";
const KurtaProduct = () => {
  const dispatch = useDispatch();
  const { isLoading, kurtas } = useSelector((store) => {
    return store.kurtaReducer;
  });
 
  useEffect(() => {
    dispatch(kurtaProducts);
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
      {kurtas.length > 0 &&
        kurtas.map((item) => {
          return <KurtaCard key={item._id} {...item} />;
        })}
    </Grid>
  );
};

export default KurtaProduct;
