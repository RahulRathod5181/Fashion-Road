import {
  ADD_REQUEST_SUCCESS,
  GET_REQUEST_SUCCESS,
  REQUEST_LOADING,
  REQUEST_PENDING,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  adminProducts: [],
};
export const adminProductReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        adminProducts: payload,
      };
      case ADD_REQUEST_SUCCESS:
        return{
          ...state,
          isLoading:false
        }
    case REQUEST_PENDING:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
