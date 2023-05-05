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
    res.status(404).send({ msg: error.message });
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
    res.status(404).send({ "msg": error.message });
  }
});


