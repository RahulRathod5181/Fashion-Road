const express=require("express");
const {FashionDataModel}=require("../models/data.model");
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt');
const dataRoute=express.Router()


//read kurta data
dataRoute.get("/kurta",async(req,res)=>{
    try {
        const kurtas= await FashionDataModel.find({category:"kurta"})
        res.send(kurtas)
        
    } catch (error) {
        res.send(error)
    }
})
//read dresses data
dataRoute.get("/dresses",async(req,res)=>{
    try {
        const dresses= await FashionDataModel.find({category:"dresses"})
        res.send(dresses)
        
    } catch (error) {
        res.send(error)
    }
})
//read sarees data
dataRoute.get("/sarees",async(req,res)=>{
    try {
        const sarees= await FashionDataModel.find({category:"sarees"})
        res.send(sarees)
        
    } catch (error) {
        res.send(error)
    }
})
//read accessories data
dataRoute.get("/accessories",async(req,res)=>{
    try {
        const sarees= await FashionDataModel.find({category:"accessories"})
        res.send(sarees)
        
    } catch (error) {
        res.send(error)
    }
})
//read footwear data
dataRoute.get("/footwear",async(req,res)=>{
    try {
        const sarees= await FashionDataModel.find({category:"footwear"})
        res.send(sarees)
        
    } catch (error) {
        res.send(error)
    }
})
//read shirts data
dataRoute.get("/shirts",async(req,res)=>{
    try {
        const sarees= await FashionDataModel.find({category:"shirts"})
        res.send(sarees)
        
    } catch (error) {
        res.send(error)
    }
})
//read ethnicMen data
dataRoute.get("/ethnicMen",async(req,res)=>{
    try {
        const sarees= await FashionDataModel.find({category:"ethnicMen"})
        res.send(sarees)
        
    } catch (error) {
        res.send(error)
    }
})
//read shivangini data
dataRoute.get("/seller/shivangini",async(req,res)=>{
    try {
        const data= await FashionDataModel.find({seller:"Shivangini"})
        res.send(data)
        
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