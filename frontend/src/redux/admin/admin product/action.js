import axios from "axios";
import {
  REQUEST_LOADING,
  REQUEST_PENDING,
  GET_REQUEST_SUCCESS,
  ADD_REQUEST_SUCCESS,
  PATCH_REQUEST_SUCCESS,
  DELETE_REQUEST_SUCCESS,
} from "./actionType";

const token = localStorage.getItem("adminToken");
export const getData = (dispatch) => {
  dispatch({ type: REQUEST_LOADING });

  axios
    .get(`https://clumsy-miniskirt-tuna.cyclic.app/products/mens`)
    .then((res) => {
      dispatch({ type: GET_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_PENDING });
    });
};

export const addProduct = (payload) => (dispatch) => {
  dispatch({ type: REQUEST_LOADING });
  console.log(payload);
  axios
    .post(
      `https://clumsy-miniskirt-tuna.cyclic.app/products/addProduct`,
      payload,
      { headers: { Authorization: `${token}` } }
    )
    .then((res) => {
      console.log(res.data);
      dispatch({ type: ADD_REQUEST_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_PENDING });
    });
};

export const editProduct = (payload, id) => (dispatch) => {
  dispatch({ type: REQUEST_LOADING });
  console.log(payload, id);

  axios
    .patch(
      `https://clumsy-miniskirt-tuna.cyclic.app/products/updateProduct/${id}`,
      payload,
      { headers: { Authorization: `${token}` } }
    )
    .then((res) => {
      console.log(res.data);
      dispatch({ type: PATCH_REQUEST_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_PENDING });
    });
};

export const deleteProduct = (id) => (dispatch) => {
  dispatch({ type: REQUEST_LOADING });
  console.log(id);
  console.log(token)
  axios
    .delete(
      `https://clumsy-miniskirt-tuna.cyclic.app/products/deleteProduct/${id}`,

      { headers: { Authorization: token } }
    )
    .then((res) => {
      console.log(res.data);
      dispatch({ type: DELETE_REQUEST_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_PENDING });
    });
};
