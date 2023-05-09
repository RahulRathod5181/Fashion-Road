import {
  POST_REQUEST_SUCCESS,
  REQUEST_LOADING,
  REQUEST_PENDING,
} from "./actionType";
import axios from "axios";
export const addUser = (payload) => (dispatch) => {
  dispatch({ type: REQUEST_LOADING });

  axios
    .post(`https://clumsy-miniskirt-tuna.cyclic.app/admin/add`, payload)
    .then(() => {
      dispatch({ type: POST_REQUEST_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_PENDING });
    });
};
