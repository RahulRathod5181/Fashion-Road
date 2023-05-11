import { GET_DATA, GET_DATA_ERROR, GET_DATA_REQUEST } from "./actionTypes"


const initialState = {
    isLoading:false,
    isError:false,
    productData :[]
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_DATA_REQUEST:
            return {...state,isLoading:true}
        case GET_DATA:
            return {...state,isLoading:false,productData:payload}
        case GET_DATA_ERROR:
            return {...state,isLoading:false, isError:true};
        default:
            return state;
    }
}
