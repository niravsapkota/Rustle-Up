import jwt from "jsonwebtoken";
import User from "../models/user.js";

const authenticate = async (req, res, next) => {
  let token;

  if (req.cookies.jwtoken) {
    try {
      token = req.cookies.jwtoken;
      const verifyToken = jwt.verify(token, process.env.SECRET);
      const user = await User.findOne({ email: verifyToken.email });
      req.user = user;
      //res.status(200).send("authenticated");
      next();
    } catch (error) {
      res.status(401).send("Unauthorized User");
    }
  }

  if (!token) {
    res.status(401).send("No Token");
  }

  // if (
  //   req.headers.authorization &&
  //   req.headers.authorization.startsWith("Bearer")
  // ) {
  //   try {
  //     //Get Token
  //     token = req.headers.authorization.split(" ")[1];

  //     //Verify the token
  //     const verifyToken = jwt.verify(token, process.env.SECRET);

  //     //get user from token
  //     const user = await User.findOne({ email: verifyToken.email });

  //     req.user = user;
  //     // res.status(200).send("authenticated");
  //     next();
  //   } catch (error) {
  //     res.status(401).send("Unauthorized User");
  //   }
  // }
  // if (!token) {
  //   res.status(401).send("No token");
  //}
};

export default authenticate;
