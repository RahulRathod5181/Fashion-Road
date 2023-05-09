import { baseUrl } from "../../component/Rahul/Url"
import { GET_DATA, GET_DATA_ERROR, GET_DATA_REQUEST } from "./actionTypes"
import axios from "axios"


export const getCartProducts = (dispatch)=>{
    dispatch({type:GET_DATA_REQUEST})

    // axios.get(`${baseUrl}/cart`)
    axios.get(`https://clumsy-miniskirt-tuna.cyclic.app/cart/dummy`)
    .then((res)=>{
        dispatch({type:GET_DATA,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:GET_DATA_ERROR})
    })
}