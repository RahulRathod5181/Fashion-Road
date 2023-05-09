import {
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    GET_PRODUCT_REQUEST,
  } from "./actionType";
  
  const initialState = {
    isLoading: false,
    isError: false,
    dresses: [],
  };
  
  export const dressReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_PRODUCT_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case GET_PRODUCT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          dresses: payload,
        };
      case GET_PRODUCT_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
  
      default:
        return state;
    }
  };
  