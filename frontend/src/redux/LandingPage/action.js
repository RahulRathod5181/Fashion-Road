import axios from "axios";
import {
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
} from "./actionType";

export const getProducts = (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });

  axios
    .get(`https://project-backend-t6y7.onrender.com/products`)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_PRODUCT_FAILURE });
    });
};
