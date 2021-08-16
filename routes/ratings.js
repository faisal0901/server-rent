const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifytoken");
const RatingControllers = require("../Controllers/RatingControllers");
/* GET users listing. */
router.post("/", verifyToken, RatingControllers.ratingCreate);
module.exports = router;
