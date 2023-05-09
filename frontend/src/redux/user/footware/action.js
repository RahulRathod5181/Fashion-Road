import axios from "axios";
import {
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
} from "./actionType";

export const footProducts = (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });

  axios
    .get(`https://clumsy-miniskirt-tuna.cyclic.app/?occasion=footwear`)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_PRODUCT_FAILURE });
    });
};
