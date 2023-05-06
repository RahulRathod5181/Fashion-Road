const express=require("express");
const {connection}=require("./config/db");
const {userRoute}=require("./routes/users.route");
const {dataRoute}=require("./routes/data.route");
const {adminRouter} = require("./routes/admin.route");
const { cartRouter } = require("./routes/cart.route");
const { auth } = require("./middlewares/auth.middleware");
require('dotenv').config();
const cors = require("cors");



const app=express();
app.use(express.json());
app.use(cors());

app.use("/users",userRoute);
app.use("/admin", adminRouter);
app.use("/occasion",dataRoute);

app.use(auth);
app.use("/cart", cartRouter);

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to mongo DB");
    } catch (error) {
        console.log(error);
    }
    console.log(`Running at ${process.env.port}`);
})





