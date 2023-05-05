import { GET_DATA, GET_DATA_ERROR, GET_DATA_REQUEST } from "./actionTypes"


const initialState = {
    isLaoding:false,
    isError:false,
    productData :[]
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_DATA_REQUEST:
            return {...state,isLaoding:true}
        case GET_DATA:
            return {...state,isLaoding:false,productData:payload}
        case GET_DATA_ERROR:
            return {...state,isLaoding:false, isError:true};
        default:
            return state
    }
}
