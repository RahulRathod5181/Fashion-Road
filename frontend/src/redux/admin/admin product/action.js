import axios from "axios";
import {
  REQUEST_LOADING,
  REQUEST_PENDING,
  GET_REQUEST_SUCCESS,
  ADD_REQUEST_SUCCESS,
} from "./actionType";

export const getData = (dispatch) => {
  dispatch({ type: REQUEST_LOADING });

  axios
    .get(`https://clumsy-miniskirt-tuna.cyclic.app/admin`)
    .then((res) => {
      dispatch({ type: GET_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_PENDING });
    });
};

export const addProduct = (payload) => (dispatch) => {
  dispatch({ type: REQUEST_LOADING });

  axios
    .post(`https://project-backend-t6y7.onrender.com/products`, payload,{headers:{'Authorization':`${localStorage.getItem('adminToken')}`}})
    .then(() => {
      dispatch({ type: ADD_REQUEST_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_PENDING });
    });
};