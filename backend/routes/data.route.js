const express=require("express");
const {FashionDataModel}=require("../models/data.model");
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt');
const dataRoute=express.Router()


//read kurta data
dataRoute.get("/",async(req,res)=>{
    const query=req.query;
    let count = 0;
    for(let key in query){
        count++
    }
    console.log(count);
    try {
        if(count){

            const data= await FashionDataModel.find({category:query.occasion})
            res.send(data)
        }
        else{
            const data= await FashionDataModel.find()
            res.send(data)
        }
        
    } catch (error) {
        res.send(error)
    }
})

//read nikky data
dataRoute.get("/seller/nikky",async(req,res)=>{
    try {
        const data= await FashionDataModel.find({seller:"Nikky"})
        res.send(data)
        
    } catch (error) {
        res.send(error)
    }
})
//read ankita data
dataRoute.get("/seller/ankita",async(req,res)=>{
    try {
        const data= await FashionDataModel.find({seller:"ankita"})
        res.send(data)
        
    } catch (error) {
        res.send(error)
    }
})






// create data 

dataRoute.post("/add",async(req,res)=>{
    
    const {sellerCollection}=req.body
    const {title,poster,profile,gender,category,seller,followers,likes}=req.body
    
    try {
        if(sellerCollection.length==0){

            const data=new FashionDataModel({title,poster,profile,gender,category,sellerCollection:[],seller,followers,likes});
           await data.save()
           res.send("Data added successful")
           
        }else{
            const {image,description,price,ogPrice,discount,bySeller}=sellerCollection
            const data=new FashionDataModel({title,poster,profile,gender,category,sellerCollection:[{image,description,price,ogPrice,discount,bySeller}],seller,followers,likes});
            await data.save()
            res.send("Data added successful")
        }
    } catch (error) {
        res.send(error)
    }
})



module.exports={
    dataRoute
}