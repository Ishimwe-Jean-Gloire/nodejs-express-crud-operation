import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    let auth = req.headers.authorization;

    let token = auth.split("")[1];

    console.log(token, "array auth");

    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }
    console.log(req.body, "token");
    var decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded, "Decoded");
    next();
  } catch (error) {
    console.log(error, "server error");

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
