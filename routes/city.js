const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifytoken");
const CityControllers = require("../Controllers/CityControllers");
/* GET users listing. */
router.post("/", verifyToken, CityControllers.createCity);
// router.delete("/:id", verifyToken, CityControllers.createCity);
router.get("/:id", CityControllers.getCityByCountryId);
module.exports = router;
