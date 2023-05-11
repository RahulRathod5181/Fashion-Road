const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  image: {type:String,required:true},
  offerType: {type:String},
  Price:{type:Number,required:true},
  ogPrice: {type:Number,required:true},
  discount: {type:Number,required:true},
  title:{type:String,required:true},
  brand: {type:String,required:true},
  gender: {type:String,required:true},
  quantity:{type:Number,required:true},
  size:{type:String,required:true},
  userID: {type:String,required:true},
  firstName:{type:String,required:true},
  lastName:{type:String,required:true},
});

const cartModel = mongoose.model("cart", cartSchema);

module.exports = {
    cartModel
};


