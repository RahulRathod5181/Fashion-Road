const express=require("express");
const {UserModel}=require("../models/users.model");
const bcrypt = require('bcrypt');
const userRoute=express.Router()

//user register

userRoute.post("/register",async(req,res)=>{
    const {name,password,email}=req.body
    try {
        bcrypt.hash(password, 5, (err, hash) =>{
            const user= new UserModel({name,email,password:hash})
            user.save();
            res.send("Registration successfull")
        });
        
    } catch (error) {
        res.send(error)
    }
})


module.exports={
    userRoute
}