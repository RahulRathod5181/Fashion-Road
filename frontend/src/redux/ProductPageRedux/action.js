import { GET_DATA, GET_DATA_ERROR, GET_DATA_REQUEST } from "./actionTypes"
import axios from "axios"


export const getProduct = (dispatch)=>{
    dispatch({type:GET_DATA_REQUEST})
    axios.get(allProductsData.json)
    .then((res)=>{
        dispatch({type:GET_DATA,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:GET_DATA_ERROR})
    })
}