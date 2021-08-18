const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifytoken");
const CityControllers = require("../Controllers/CityControllers");
/* GET users listing. */
router.post("/", verifyToken, CityControllers.createCity);
router.delete("/:id", verifyToken, CityControllers.createCity);
module.exports = router;
