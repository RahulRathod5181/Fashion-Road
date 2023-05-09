import axios from "axios";
import {
  REQUEST_LOADING,
  REQUEST_PENDING,
  GET_REQUEST_SUCCESS,
} from "./actionType";

export const getData = (dispatch) => {
  dispatch({ type: REQUEST_LOADING });

  axios
    .get(`https://project-backend-t6y7.onrender.com/products`)
    .then((res) => {
      dispatch({ type: GET_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_PENDING });
    });
};
