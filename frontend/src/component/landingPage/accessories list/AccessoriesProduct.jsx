import { useEffect } from "react";
import { Grid, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import AccessoriesCard from "./AccessoriesCard";
import { accessoriesProducts } from "../../../redux/user/accessories/action";

const AccessoriesProduct = () => {
  const dispatch = useDispatch();
  const { isLoading, accessories } = useSelector((store) => {
    return store.accessoriesReducer;
  });

  useEffect(() => {
    dispatch(accessoriesProducts);
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
      {accessories.length > 0 &&
        accessories.map((item) => {
          return <AccessoriesCard key={item._id} {...item} />;
        })}
    </Grid>
  );
};

export default AccessoriesProduct;
