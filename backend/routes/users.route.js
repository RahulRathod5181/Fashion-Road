const express=require("express");
const {UserModel}=require("../models/users.model");
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt');
const userRoute=express.Router()

//user register create

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

//user login read

userRoute.post("/login",async(req,res)=>{
    const {password,email}=req.body
        const user=await UserModel.findOne({email})
        if(user){
            try {
                bcrypt.compare(password, user.password, (err, result)=> {
                   if(result){
                    const token=jwt.sign({ user: user.name,userID:user._id }, "finicky")
                        res.send({"msg":"login successful","token":token})
                      
                   }else{
                    res.status(400).send({"msg":"Incorrect password!"})
                   }
                });
                
            } catch (error) {
                res.send(error)
            }

        }else{
            res.status(400).send({"msg":"User not found!"})
        }
    
})


module.exports={
    userRoute
}