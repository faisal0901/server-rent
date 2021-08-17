const express = require("express");
const router = express.Router();
const { uploadMultiple } = require("../middleware/multer");
const CarsImageControllers = require("../Controllers/CarsImageControllers");
const verifyToken = require("../middleware/verifytoken");
/* GET users listing. */
router.post(
  "/:id",
  verifyToken,
  uploadMultiple,
  CarsImageControllers.createImage
);
router.delete(
  "/:id",
  verifyToken,
  uploadMultiple,
  CarsImageControllers.createImage
);
module.exports = router;
