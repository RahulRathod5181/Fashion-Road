const express=require("express");

const {connection}=require("./config/db")
const {userRoute}=require("./routes/users.route")
const {dataRoute}=require("./routes/data.route")
const app=express();
app.use(express.json())
require('dotenv').config()
app.use("/users",userRoute)
app.use("/occasion",dataRoute)

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



