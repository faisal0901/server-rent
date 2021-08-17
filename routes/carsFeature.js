const express = require("express");
const router = express.Router();
const { uploadMultiple } = require("../middleware/multer");
const CarsFeatureControllers = require("../Controllers/CarsFeatureControllers");
const verifyToken = require("../middleware/verifytoken");
/* GET users listing. */
router.post(
  "/:id",
  verifyToken,
  uploadMultiple,
  CarsFeatureControllers.createImage
);

module.exports = router;
