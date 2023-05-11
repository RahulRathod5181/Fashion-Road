import { baseUrl } from "../../component/Rahul/Url"
import { GET_DATA, GET_DATA_ERROR, GET_DATA_REQUEST } from "./actionTypes"
import axios from "axios"

// const token = localStorage.getItem('token')
const token =`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJkZGQiLCJsYXN0TmFtZSI6Im1hbGUiLCJ1c2VySUQiOiI2NDViNTAxOTk0ZmZmM2ZiZmQzMmVkYmUiLCJpYXQiOjE2ODM3MDc5MzZ9.u3tjrkJIW6cvaalHnRGWd26CmThbr32CI-UVJZXJ9tE`

export const getCartProducts = (dispatch)=>{

    dispatch({type:GET_DATA_REQUEST})

    axios.get(`${baseUrl}/cart`,{headers:{Authorization: token}})
    // axios.get(`https://clumsy-miniskirt-tuna.cyclic.app/cart/dummy`)
    .then((res)=>{
        dispatch({type:GET_DATA,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:GET_DATA_ERROR})
    })
}

export const updateCartProductQty = (id,qty) => (dispatch) => {

    console.log('patch req');
    dispatch({type:GET_DATA_REQUEST})

    // axios.get(`${baseUrl}/cart`)
    console.log(id);
   return   axios.patch(`${baseUrl}/cart/update/${id}`,{quantity:qty},{headers:{Authorization: token}})
    
}

export const deleteCartProduct = (id) => (dispatch)=>{
    dispatch({type:GET_DATA_REQUEST})

    // axios.get(`${baseUrl}/cart`)
    axios.delete(`${baseUrl}/cart/delete/${id}`,{headers:{Authorization: token}})
    
}



