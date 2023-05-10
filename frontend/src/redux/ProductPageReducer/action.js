import { GET_DATA, GET_DATA_ERROR, GET_DATA_REQUEST } from "./actionTypes"
import axios from "axios"
import data from "../../db.json"

export const getProductWomen = (query)=>(dispatch)=>{
    // console.log(data)
    // dispatch({type:GET_DATA,payload:data});
    dispatch({type:GET_DATA_REQUEST})

    axios.get("https://clumsy-miniskirt-tuna.cyclic.app/products/womens",query)
    .then((res)=>{
        // console.log(res.data)
        dispatch({type:GET_DATA,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:GET_DATA_ERROR})
    })
}
export const getProductMen = (query)=>(dispatch)=>{
    // console.log(data)
    // dispatch({type:GET_DATA,payload:data});
    dispatch({type:GET_DATA_REQUEST})

    axios.get("https://clumsy-miniskirt-tuna.cyclic.app/products/mens",query)
    .then((res)=>{
        // console.log(res.data)
        dispatch({type:GET_DATA,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:GET_DATA_ERROR})
    })
}
export const getSingleMen = (id)=>(dispatch)=>{
    // console.log(data)
    // dispatch({type:GET_DATA,payload:data});
    dispatch({type:GET_DATA_REQUEST})

    axios.get(`https://clumsy-miniskirt-tuna.cyclic.app/products/mens/${id}`)
    .then((res)=>{
        // console.log(res.data)
        dispatch({type:GET_DATA,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:GET_DATA_ERROR})
    })
}
export const getSingleWomen = (id)=>(dispatch)=>{
    // console.log(data)
    // dispatch({type:GET_DATA,payload:data});
    dispatch({type:GET_DATA_REQUEST})

   return axios.get(`https://clumsy-miniskirt-tuna.cyclic.app/products/womens/${id}`)
    .then((res)=>{
        // console.log(res.data)
        dispatch({type:GET_DATA,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:GET_DATA_ERROR})
    })
}