const express=require("express");
const {UserModel}=require("../models/users.model");
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt');
const userRoute=express.Router()

//user register create

userRoute.post("/register",async(req,res)=>{
    const {firstName,lastName,password,email}=req.body


    try {
            const exist=await UserModel.findOne({email})
            if(exist){
                res.status(400).send({"msg":"Email already exist!"})
            }else{

                bcrypt.hash(password, 5, (err, hash) =>{
                    const user= new UserModel({firstName,lastName,email,password:hash})
                    user.save();
                    res.send("Registration successfull")
                });
            }

        
    } catch (error) {
        res.send(error)
    }
})

//user login read

userRoute.post("/login",async(req,res)=>{
    const {password,email}=req.body
        const user=await UserModel.findOne({email})
        // console.log(user);
        if(user){
            try {
                bcrypt.compare(password, user.password, (err, result)=> {
                   if(result){
                    const token=jwt.sign({firstName: user.firstName,lastName:user.lastName,userID:user._id }, "users")
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