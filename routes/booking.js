const { uploadMultiple } = require("../middleware/multer");
const BookingsControllers = require("../Controllers/BookingsController");
const verifyToken = require("../middleware/verifytoken");
const express = require("express");
const router = express.Router();
router.post(
  "/",
  verifyToken,
  uploadMultiple,
  BookingsControllers.createBooking
);
module.exports = router;
