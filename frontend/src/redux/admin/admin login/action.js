import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

export const loginData = (payload) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  console.log(payload);
  try {
    const res = await axios.post(
      `https://clumsy-miniskirt-tuna.cyclic.app/admin/login`,
      payload
    );
    console.log(res.data.token);
    localStorage.setItem("adminToken", JSON.stringify(res.data.token));
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
  } catch {
    dispatch({ type: LOGIN_FAILURE });
  }
};
