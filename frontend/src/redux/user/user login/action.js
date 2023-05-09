import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

export const loginData = (payload) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.post(`https://clumsy-miniskirt-tuna.cyclic.app/users/login`, payload);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
  } catch {
    dispatch({ type: LOGIN_FAILURE });
  }
};
