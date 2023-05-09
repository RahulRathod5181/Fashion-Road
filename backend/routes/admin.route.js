const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { adminModel } = require("../models/admin.model");

const adminRouter = express.Router();

//get all the admins
adminRouter.get("/", async (req, res) => {
  try {
    let admins = await adminModel.find();
    res.status(200).send(admins);
  } catch (error) {
    res.status(400).send({ "msg": error.message });
  }
});

//add a new admin
adminRouter.post("/add", async (req, res) => {
  const { name, email, password, age, gender, position, img } = req.body;
  try {
    const hash = await bcrypt.hash(password, 5);

    let admin = new adminModel({
      name,
      email,
      password: hash,
      age,
      gender,
      position,
      img,
    });
    await admin.save();
    res.status(200).send({ "msg": "New admin has been added" });
  } catch (error) {
    res.status(400).send({ "msg": error.message });
  }
});

//admin-login
adminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let admin = await adminModel.find({ email });
    if (admin.length > 0) {
      const passMatch = await bcrypt.compare(password, admin[0].password);

      if (passMatch) {
        const token = jwt.sign(
          {
            adminID: admin[0]._id,
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
          },
          "admin"
        );
        res.status(200).send({
          "msg": "Login Successfull",
          token: token,
        });
      } else {
        res.status(400).send({ "msg": "Wrong Credential" });
      }
    } else {
      res.status(400).send({ "msg": "Wrong Credential" });
    }
  } catch (error) {
    res.status(400).send({ "msg": error.message });
  }
});

//update an admin details
adminRouter.patch("/update/:adminID", async (req,res)=>{
  let { adminID } = req.params;

  try {
    await adminModel.findByIdAndUpdate({_id: adminID}, req.body);
    res.status(200).send({"msg":`admin with id ${adminID} has been updated`})
  } catch (error) {
    res.status(400).send({ "msg": error.message });
  }
});

//delete an admin
adminRouter.delete("/delete/:adminID", async (req,res)=>{
  let { adminID } = req.params;

  try {
    await adminModel.findByIdAndDelete({_id: adminID}, req.body);
    res.status(200).send({"msg":`admin with id ${adminID} has been updated`})
  } catch (error) {
    res.status(400).send({ "msg": error.message });
  }
});

module.exports = {
  adminRouter
};
