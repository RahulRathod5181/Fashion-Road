const express = require("express");
const { cartModel } = require("../models/cart.model");
const {userAuth}=require("../middlewares/users.middlewares")
const {ProductModel}=require("../models/product.model");
const cartRouter = express.Router();




cartRouter.get("/dummy",async(req,res)=>{
  try {
    const data=await cartModel.find();
    res.send(data)
  } catch (error) {
    res.send(error)
  }
})

cartRouter.use(userAuth)
//getting all the products
cartRouter.get("/", async (req, res) => {
  const { userID } = req.body;
  try {
    const posts = await cartModel.find({ userID });
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send({ "msg": error.message });
  }
});

//add new product to cart
cartRouter.post("/add", async (req, res) => {
   req.body.quantity=1
  const payload = req.body;
  try {
    const post = new cartModel(payload);
    await post.save();
    res.status(200).send({ "msg": "A new product has been added to cart" });
  } catch (error) {
    res.status(400).send(error);
  }
});

//update a data in the cart page
cartRouter.patch("/update/:id", async (req, res) => {
  let { id } = req.params;
  const cartItem=await cartModel.findOne({_id:id})
  try {

      if(req.body.userID==cartItem.userID){

        await cartModel.findByIdAndUpdate({ _id: id },req.body);
        res.status(200).send({ "msg": `product ${id} has been updated` });
      }else{
        res.status(400). send({"msg":"You are not authenticate!"})
      }


  } catch (error) {
    res.status(404).send(error);
  }
});

//delete a data from the cart
cartRouter.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;
  const cartItem=await cartModel.findOne({_id:id})
  try {

      if(req.body.userID==cartItem.userID){

        await cartModel.findByIdAndDelete({ _id: id });
        res.status(200).send({ "msg": `product ${id} has been deleted` });
      }else{
        res.status(400). send({"msg":"You are not authenticate!"})
      }


  } catch (error) {
    res.status(404).send(error);
  }
});
//delete all cart product current user
cartRouter.delete("/delete", async (req, res) => {
  
 
  try {


        await cartModel.deleteMany({ userID: req.body.userID });
        res.status(200).send({ "msg": `product ${id} has been deleted` });
    


  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = {
  cartRouter
};
