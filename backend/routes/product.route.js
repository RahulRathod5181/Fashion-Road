const express=require("express");
const {ProductModel}=require("../models/product.model");
const productRoute=express.Router()

//read  mens
productRoute.get("/mens",async(req,res)=>{
    const query=req.query
    // console.log(query);


/*
discount
offers
price
brand
*/

    try {
        if(query.brand && query.price){
            const data=await ProductModel.find({brand:query.brand}).sort({Price:query.price=="asc"?1:-1})
            res.send(data)
        }
        else if(query.brand){
            // console.log(query.brand);
            const data=await ProductModel.find({brand:query.brand})
            res.send(data)

        }
       
        else if(query.offers){
            const data=await ProductModel.find({offerType:query.offers})
            res.send(data)
        }
        else if(query.price && query.price=="asc"){
            const data=await ProductModel.find().sort({Price:1})
            res.send(data)
        }
        else if(query.price && query.price=="desc"){
            const data=await ProductModel.find().sort({Price:-1})
            res.send(data)
        }
        else if(query.discount){
            console.log(query.discount);
            if(query.discount==20){
                const data=await ProductModel.find({discount: {$lte:+query.discount}})
                res.send(data)
            }else {
                const data=await ProductModel.find({$and:[{discount:{$gt:(+query.discount)-20}},{discount:{$lte:+query.discount}}]
                   
                  })
                res.send(data)
            }
        
        }

        else{
        const mansData=await ProductModel.find({gender:"mens"})
        res.send(mansData)
        }
    } catch (error) {
        res.send(error)
    }
})
//read  womens
productRoute.get("/womens",async(req,res)=>{
    const query=req.query
    try {
        if(query.brand){
            const mansData=await ProductModel.find({brand:query.brand})
            res.send(mansData)

        }
        else if(query.offers){
            const data=await ProductModel.find({offerType:query.offers})
            res.send(data)
        }
        else if(query.price && query.price=="asc"){
            const data=await ProductModel.find().sort({Price:1})
            res.send(data)
        }
        else if(query.price && query.price=="desc"){
            const data=await ProductModel.find().sort({Price:-1})
            res.send(data)
        }
        else if(query.discount){
            console.log(query.discount);
            if(query.discount==20){
                const data=await ProductModel.find({discount: {$lte:+query.discount}})
                res.send(data)
            }else {
                const data=await ProductModel.find({$and:[{discount:{$gt:(+query.discount)-20}},{discount:{$lte:+query.discount}}]
                   
                  })
                res.send(data)
            }
        
        }
        else{
        const womensData=await ProductModel.find({gender:"womens"})
        res.send(womensData)
        }
    } catch (error) {
        res.send(error)
    }
})

//create
productRoute.post("/addProduct",async(req,res)=>{
    try {
        const data=new ProductModel(req.body);
        await data.save();
        res.send({"msg":"Data added successful"})
        
    } catch (error) {
        res.send(error)
    }

})

// update

productRoute.patch("/updateProduct/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        await ProductModel.findByIdAndUpdate({_id:id},req.body)
        res.send(`Product ${id} data updated successfull`)
    } catch (error) {
        res.send(error)
    }
})
// delete

productRoute.patch("/deleteProduct/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        await ProductModel.findByIdAndDelete({_id:id})
        res.send(`Product ${id} data deleted successfull`)
    } catch (error) {
        res.send(error)
    }
})



module.exports={
    productRoute
}