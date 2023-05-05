const mongoose=require("mongoose")


const sellerCollectionArraySchema = mongoose.Schema({
    image: {type:String,},
    description: {type:String,},
    price:{type:Number,},
    ogPrice: {type:Number,},
    discount: {type:Number,},
    bySeller: {type:String,}
  }
  );



const fashionDataSchema=mongoose.Schema({
    title: {type:String,},
    poster: {type:String,},
    profile: {type:String,},
    gender: {type:String,},
    category: {type:String,},
    sellerCollection:[
    sellerCollectionArraySchema    
    ],
    seller:{type:String,},
    followers:{type:String,},
    likes:{type:Number,}
})

const FashionDataModel=mongoose.model("fashionData",fashionDataSchema)

module.exports={
    FashionDataModel
}