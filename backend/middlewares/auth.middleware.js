const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (token) {
    try {
      const decoded = jwt.verify(token, "admin");
      req.body.userID = decoded.userID;
      console.log(decoded);
      next();
    } catch (error) {
      res.status(400).send({ msg: "Unauthorized" });
    }
  } else {
    res.status(400).send({ msg: "Unauthorized" });
  }
};

module.exports = {
  auth
};
