const express = require("express");
const { cartModel } = require("../models/cart.model");

const cartRouter = express.Router();

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
  const payload = req.body;
  try {
    const post = new cartModel(payload);
    await post.save();
    res.status(200).send({ "msg": "A new post has been posted" });
  } catch (error) {
    res.status(400).send({ "msg": error.message });
  }
});

//update a data in the cart page
cartRouter.patch("/update/:userID", async (req, res) => {
  let { userID } = req.params;
  try {
    await cartModel.findByIdAndUpdate({ _id: userID });
    res.status(200).send({ "msg": `user ${userID} has been updated` });
  } catch (error) {
    res.status(404).send({ "msg": error.message });
  }
});

//delete a data from the cart
cartRouter.delete("/delete/:userID", async (req, res) => {
  let { userID } = req.params;
  try {
    await cartModel.findByIdAndDelete({ _id: userID });
    res.status(200).send({ msg: `user ${userID} has been delete` });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

module.exports = {
  cartRouter
};
