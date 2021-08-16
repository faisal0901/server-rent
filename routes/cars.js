const express = require("express");
const router = express.Router();

const CarsControllers = require("../Controllers/CarsControllers");
/* GET users listing. */
router.post("/", CarsControllers.createCars);
router.delete("/:id", CarsControllers.deleteCars);
router.get("/", CarsControllers.getCars);
router.put("/:id", CarsControllers.updateCars);
module.exports = router;
