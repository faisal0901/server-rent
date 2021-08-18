const express = require("express");
const router = express.Router();
const AddressControllers = require("../Controllers/AddressControllers");
const verifytoken = require("../middleware/verifytoken");
router.post("/:id", verifytoken, AddressControllers.createAddress);
module.exports = router;
