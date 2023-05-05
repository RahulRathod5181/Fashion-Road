const express=require("express");
const cors = require("cors");
const {connection}=require("./config/db");
const {userRoute}=require("./routes/users.route");
const {adminRouter} = require("./routes/admin.route");
require('dotenv').config()

const app=express();
app.use(express.json());
app.use(cors());

app.use("/users",userRoute);
app.use("/admin", adminRouter);

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to mongo DB");
    } catch (error) {
        console.log(error);
    }
    console.log(`Running at ${process.env.port}`);
})



