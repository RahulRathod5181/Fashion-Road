const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  
    image: {type:String,required:true},
    offerType: {type:String,required:true},
    Price:{type:Number,required:true},
    ogPrice: {type:Number,required:true},
    discount: {type:Number,required:true},
    title:{type:String,required:true},
    brand: {type:String,required:true},
    gender: {type:String,required:true}
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = {
    ProductModel,
};
