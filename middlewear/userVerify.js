import jwt from "jsonwebtoken";

const userVerifyMiddle = (req, res, next) => {
  var token = req.headers.authorization.split(" ")[1];

  console.log(token);

  var decoded = jwt.verify(token, process.env.SECRET_KEY);

  if (!decoded) {
    res.json({
      message: "Invalid token",
    });
  } else {
    next();
  }
};

export default userVerifyMiddle;
