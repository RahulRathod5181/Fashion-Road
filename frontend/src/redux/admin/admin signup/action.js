import {
  POST_REQUEST_SUCCESS,
  REQUEST_LOADING,
  REQUEST_PENDING,
} from "./actionType";
import axios from "axios";
export const addUser = (payload) => (dispatch) => {
  dispatch({ type: REQUEST_LOADING });
  console.log(payload)

  axios
    .post(`https://clumsy-miniskirt-tuna.cyclic.app/admin/add`, payload)
    .then((res) => {
      console.log(res.data)
      dispatch({ type: POST_REQUEST_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_PENDING });
    });
};
