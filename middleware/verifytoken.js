const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, JWT_SECRET, function (err, decoded) {
    if (err) {
      return res.json(403).json({ massage: err.massage });
    }
    req.user = decoded;
    return next();
  });
};
