import { GET_DATA, GET_DATA_ERROR, GET_DATA_REQUEST } from "./actionTypes"
import axios from "axios"
import data from "../../db.json"

export const getProduct = (dispatch)=>{
    // console.log(data)
    dispatch({type:GET_DATA,payload:data});
    // dispatch({type:GET_DATA_REQUEST})

    // axios.get("")
    // .then((res)=>{
    //     // console.log(res)
    //     dispatch({type:GET_DATA,payload:data})
    // })
    // .catch((err)=>{
    //     dispatch({type:GET_DATA_ERROR})
    // })
}