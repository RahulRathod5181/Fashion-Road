import axios from "axios";
import {
  REQUEST_LOADING,
  REQUEST_PENDING,
  GET_REQUEST_SUCCESS,
  ADD_REQUEST_SUCCESS,
} from "./actionType";

export const getUsers = (dispatch) => {
  dispatch({ type: REQUEST_LOADING });

  axios
    .get(`https://clumsy-miniskirt-tuna.cyclic.app/users`, {
      headers: { Authorization: `${localStorage.getItem("adminToken")}` },
    })
    .then((res) => {
      dispatch({ type: GET_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_PENDING });
    });
};
