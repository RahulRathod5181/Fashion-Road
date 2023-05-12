import { baseUrl } from "../../component/Rahul/Url";
import { GET_DATA, GET_DATA_ERROR, GET_DATA_REQUEST } from "./actionTypes";
import axios from "axios";

const token = JSON.parse(localStorage.getItem('userToken'))
// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJvbyIsImxhc3ROYW1lIjoicHAiLCJ1c2VySUQiOiI2NDVlMmNkY2YxMGM3NTUxZDdhNDdiYjIiLCJpYXQiOjE2ODM4OTM0ODJ9.lYmPR9dz-OjPUPhD4CVW_SPZSoDItoE9yEyBTs7lA1c`;

export const getCartProducts = (dispatch) => {
  console.log(token);
  dispatch({ type: GET_DATA_REQUEST });

  return axios
    .get(`${baseUrl}/cart`, { headers: { Authorization: token } })
     
    .then((res) => {
      dispatch({ type: GET_DATA, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_DATA_ERROR });
    });
};

export const updateCartProductQty = (id, qty) => (dispatch) => {
  console.log("patch req");
  dispatch({ type: GET_DATA_REQUEST });

  // axios.get(`${baseUrl}/cart`)
  console.log(id);
  return axios.patch(
    `${baseUrl}/cart/update/${id}`,
    { quantity: qty },
    { headers: { Authorization: token } }
  );
};

export const deleteCartProduct = (id) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });

  // axios.get(`${baseUrl}/cart`)
  axios.delete(`${baseUrl}/cart/delete/${id}`, {
    headers: { Authorization: token },
  });
};


// export const deletejAll = () => (dispatch) => {
//   dispatch({ type: GET_DATA_REQUEST });

//   return axios.delete(
//     `${baseUrl}/cart/delete`,{ headers: { Authorization: token } }
//   );
// };



export const deleteAll = (dispatch) => {
    dispatch({ type: GET_DATA_REQUEST });
    console.log(token)

    axios
      .delete(`${baseUrl}/cart/delete`, { headers: { Authorization: token } })
      // axios.get(`https://clumsy-miniskirt-tuna.cyclic.app/cart/dummy`)
      .then((res) => {
        dispatch({ type: GET_DATA,payload:[]});
      })
      .catch((err) => {
        dispatch({ type: GET_DATA_ERROR });
      });
  };
  