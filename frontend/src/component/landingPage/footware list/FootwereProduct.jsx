import { useEffect } from "react";
import { Grid, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { footProducts } from "../../../redux/user/footware/action";
import FootwereCard from "./FootwereCard";
const FootwereProduct = () => {
  const dispatch = useDispatch();
  const { isLoading, footwares } = useSelector((store) => {
    return store.footwareReducer;
  });

  useEffect(() => {
    dispatch(footProducts);
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
      {footwares.length > 0 &&
        footwares.map((item) => {
          return <FootwereCard key={item._id} {...item} />;
        })}
    </Grid>
  );
};

export default FootwereProduct;
