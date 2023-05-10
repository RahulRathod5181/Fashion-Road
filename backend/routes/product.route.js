const express = require("express");
const { ProductModel } = require("../models/product.model");
const { auth } = require("../middlewares/auth.middleware");
const productRoute = express.Router();

//read  mens

productRoute.get("/mens/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await ProductModel.find({ _id: id });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

productRoute.get("/mens", async (req, res) => {
  const query = req.query;
  const params = req.params;
  console.log("params", params);

  /*
discount
offers
price
brand
*/

  try {
    //    else if(query.brand && query.discount){
    //         const data=await ProductModel.find({brand:query.brand})
    //         res.send(data)
    //     }
    if (query.brand && query.price) {
      // console.log(query);
      const data = await ProductModel.find({ brand: query.brand,gender:"mens"}).sort({
        Price: query.price == "asc" ? 1 : -1,
      });
      res.send(data);
    }
     else if (query.brand && query.discount) {
      const data = await ProductModel.find({
        brand: query.brand,
        discount: query.discount,
      });
      res.send(data);
    } else if (query.brand) {
      // console.log(query.brand);
      const data = await ProductModel.find({
        brand: query.brand,
        gender: "mens",
      });
      res.send(data);
    } else if (query.offers) {
      const data = await ProductModel.find({
        offerType: query.offers,
        gender: "mens",
      });
      res.send(data);
    } else if (query.price && query.price == "asc") {
      const data = await ProductModel.find({ gender: "mens" }).sort({
        Price: 1,
      });
      res.send(data);
    } else if (query.price && query.price == "desc") {
      const data = await ProductModel.find({ gender: "mens" }).sort({
        Price: -1,
      });
      res.send(data);
    } else if (query.discount) {
      console.log(query.discount);
      if (query.discount == 20) {
        const data = await ProductModel.find({
          $and: [{ discount: { $lte: +query.discount } }, { gender: "mens" }],
        });
        res.send(data);
      } else {
        const data = await ProductModel.find({
          $and: [
            { discount: { $gt: +query.discount - 20 } },
            { discount: { $lte: +query.discount } },
            { gender: "mens" },
          ],
        });
        res.send(data);
      }
    } else {
      const mansData = await ProductModel.find({ gender: "mens" });
      res.send(mansData);
    }
  } catch (error) {
    res.send(error);
  }
});
//read  womens

productRoute.get("/womens/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await ProductModel.find({ _id: id });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

productRoute.get("/womens", async (req, res) => {
  const query = req.query;
  try {

    if (query.brand && query.price) {
        // console.log(query);
        const data = await ProductModel.find({ brand: query.brand,gender:"womens"}).sort({
          Price: query.price == "asc" ? 1 : -1,
        });
        res.send(data);
      }

   else if (query.brand) {
      const mansData = await ProductModel.find({
        brand: query.brand,
        gender: "womens",
      });
      res.send(mansData);
    } else if (query.offers) {
      const data = await ProductModel.find({
        offerType: query.offers,
        gender: "womens",
      });
      res.send(data);
    } else if (query.price && query.price == "asc") {
      const data = await ProductModel.find({ gender: "womens" }).sort({
        Price: 1,
      });
      res.send(data);
    } else if (query.price && query.price == "desc") {
      const data = await ProductModel.find({ gender: "womens" }).sort({
        Price: -1,
      });
      res.send(data);
    }

    //discount
    
    else if (query.discount) {
      console.log(query.discount);
      if (query.discount == 20) {
        const data = await ProductModel.find({
          $and: [{ discount: { $lte: +query.discount } }, { gender: "womens" }],
        });
        res.send(data);
      } else {
        const data = await ProductModel.find({
          $and: [
            { discount: { $gt: +query.discount - 20 } },
            { discount: { $lte: +query.discount } },
            { gender: "womens" },
          ],
        });
        res.send(data);
      }
    } else {
      const womensData = await ProductModel.find({ gender: "womens" });
      res.send(womensData);
    }
  } catch (error) {
    res.send(error);
  }
});

productRoute.use(auth);
//create
productRoute.post("/addProduct", async (req, res) => {
  try {
    const data = new ProductModel(req.body);
    await data.save();
    res.send({ msg: "Data added successful" });
  } catch (error) {
    res.send(error);
  }
});

// update

productRoute.patch("/updateProduct/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send(`Product ${id} data updated successfull`);
  } catch (error) {
    res.send(error);
  }
});
// delete

productRoute.delete("/deleteProduct/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndDelete({ _id: id });
    res.send(`Product ${id} data deleted successfull`);
  } catch (error) {
    res.send(error);
  }
});

module.exports = {
  productRoute,
};
