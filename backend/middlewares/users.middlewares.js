const express=require("express")
const jwt = require("jsonwebtoken");


const userAuth = (req, res, next) => {
  const token = req.headers.authorization;
//   console.log(token);
  if (token) {
    try {
      const decoded = jwt.verify(token, "users");
    //   console.log(decoded);
      req.body.userID = decoded.userID;
      req.body.firstName = decoded.firstName;
      req.body.lastName = decoded.lastName;
    //   console.log(decoded);
      next();
    } catch (error) {
      res.status(400).send({ msg: "Unauthorized" });
    }
  } else {
    res.status(400).send({ msg: "Unauthorized" });
  }
};

module.exports = {
    userAuth
};
