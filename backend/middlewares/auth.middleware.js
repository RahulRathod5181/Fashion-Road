const jwt = require("jsonwebtoken");

// const auth = (req, res, next) => {
//   const token = req.headers.authorization;
//   // console.log(token);
//   if (token) {
//     try {
//       const decoded = jwt.verify(token, "admin");
//       req.body.userID = decoded.userID;
//       // console.log(decoded);
//       next();
//     } catch (error) {
//       res.status(400).send(error);
//     }
//   } else {
//     res.status(400).send({ msg: "Unauthorized" });
//   }
// };


const auth = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (token) {
    try {
      const decoded = jwt.verify(token, "admin");
      console.log(decoded);
      if(decoded){
        req.body.userID = decoded.userID;
        next()
      }else{
        res.status(400).send({ msg: "Unauthorizeda" });
      }
    
    //   console.log(decoded);
     
    } catch (error) {
      res.status(400).send({ msg: "Unauthorizedc" });
    }
  } else {
    res.status(400).send({ msg: "Unauthorizedb" });
  }
};

module.exports = {
  auth
};
