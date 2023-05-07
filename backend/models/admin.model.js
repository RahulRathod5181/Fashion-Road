const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  gender: String,
  password: String,
  position: String
},{
    versionKey: false
});

const adminModel = mongoose.model("admin",adminSchema);

module.exports = {
    adminModel
};
